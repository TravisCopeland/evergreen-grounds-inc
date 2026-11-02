import { Resend } from "resend";
import { emailAddress } from "@/constants";
import {
	confirmationEmail,
	quoteRequestEmail,
} from "@/lib/quote-request-emails";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const jsonResponse = (body, status = 200) =>
	Response.json(body, {
		status,
		headers: {
			"Cache-Control": "no-store",
		},
	});

export async function POST(request) {
	let body;

	try {
		body = await request.json();
	} catch {
		return jsonResponse({ error: "Please check the form and try again." }, 400);
	}

	if (!body || typeof body !== "object" || Array.isArray(body)) {
		return jsonResponse({ error: "Please check the form and try again." }, 400);
	}

	const { name, phone, address, email, description, companyWebsite } = body;

	if (
		companyWebsite !== undefined &&
		(typeof companyWebsite !== "string" || companyWebsite.trim().length > 0)
	) {
		return jsonResponse({ error: "Unable to submit this request." }, 400);
	}

	const fields = { name, phone, address, email };
	if (
		Object.values(fields).some((value) => typeof value !== "string") ||
		(description !== undefined && typeof description !== "string")
	) {
		return jsonResponse({ error: "Please check the form and try again." }, 400);
	}

	const requestDetails = {
		name: name.trim(),
		phone: phone.trim(),
		address: address.trim(),
		email: email.trim().toLowerCase(),
		description:
			typeof description === "string" ? description.trim() : "",
	};

	if (
		!requestDetails.name ||
		requestDetails.name.length > 120 ||
		!requestDetails.phone ||
		requestDetails.phone.length > 40 ||
		!requestDetails.address ||
		requestDetails.address.length > 200 ||
		!emailPattern.test(requestDetails.email) ||
		requestDetails.email.length > 254 ||
		requestDetails.description.length > 2000
	) {
		return jsonResponse(
			{ error: "Please check your details and try again." },
			400
		);
	}

	if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
		console.error("Quote request email is not configured.");
		return jsonResponse(
			{ error: "Quote requests are temporarily unavailable. Please call us." },
			503
		);
	}

	const resend = new Resend(process.env.RESEND_API_KEY);
	let ownerError;

	try {
		const result = await resend.emails.send({
			from: process.env.RESEND_FROM_EMAIL,
			to: emailAddress,
			replyTo: requestDetails.email,
			subject: `New quote request from ${requestDetails.name}`,
			html: quoteRequestEmail(requestDetails),
			text: [
				"New quote request",
				"",
				`Name: ${requestDetails.name}`,
				`Phone: ${requestDetails.phone}`,
				`Address: ${requestDetails.address}`,
				`Email: ${requestDetails.email}`,
				`Details: ${requestDetails.description || "No additional details provided."}`,
			].join("\n"),
		});
		ownerError = result.error;
	} catch (error) {
		ownerError = error;
	}

	if (ownerError) {
		console.error("Unable to send quote request notification:", ownerError);
		return jsonResponse(
			{ error: "We couldn't send your request. Please try again or call us." },
			502
		);
	}

	let confirmationError;
	try {
		const result = await resend.emails.send({
			from: process.env.RESEND_FROM_EMAIL,
			to: requestDetails.email,
			replyTo: emailAddress,
			subject: "We received your quote request",
			html: confirmationEmail(requestDetails.name),
			text: [
				`Hi ${requestDetails.name},`,
				"",
				"Thanks for contacting Evergreen Grounds. We received your quote request and will be in touch as soon as possible.",
				"",
				"If you need to reach us in the meantime, call 770-262-2190.",
				"",
				"Evergreen Grounds, Inc.",
			].join("\n"),
		});
		confirmationError = result.error;
	} catch (error) {
		confirmationError = error;
	}

	if (confirmationError) {
		console.error("Unable to send quote request confirmation:", confirmationError);
	}

	return jsonResponse({ received: true, confirmationSent: !confirmationError });
}
