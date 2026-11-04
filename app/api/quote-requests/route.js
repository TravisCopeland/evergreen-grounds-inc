import { Resend } from "resend";
import { emailAddress } from "@/constants";
import {
	confirmationEmail,
	quoteRequestEmail,
} from "@/lib/quote-request-emails";
import { isRateLimited } from "@/lib/rate-limit";
import { quoteRequestMessages } from "@/constants/content";
import { quoteFormLimits } from "@/constants/form";
import { getResendConfig } from "@/lib/env";
import { validateQuoteRequest } from "@/lib/quote-request-validation";

export const runtime = "nodejs";

const logoAttachment = {
	path: "https://evergreengrounds.com/email-logo.png",
	filename: "evergreen-grounds-logo.png",
	contentId: "evergreen-grounds-logo",
};

const jsonResponse = (body, status = 200, headers = {}) =>
	Response.json(body, {
		status,
		headers: {
			"Cache-Control": "no-store",
			...headers,
		},
	});

export async function POST(request) {
	if (isRateLimited(request)) {
		return jsonResponse(
			{
				error: quoteRequestMessages.rateLimited,
			},
			429,
			{ "Retry-After": "900" }
		);
	}

	const contentLength = Number(request.headers.get("content-length") || 0);
	if (contentLength > quoteFormLimits.requestBody) {
		return jsonResponse({ error: quoteRequestMessages.invalidRequest }, 413);
	}

	let body;

	try {
		body = await request.json();
	} catch {
		return jsonResponse({ error: quoteRequestMessages.invalidRequest }, 400);
	}

	const validation = validateQuoteRequest(body);
	if (validation.error) {
		return jsonResponse(
			{ error: quoteRequestMessages[validation.error] },
			400
		);
	}
	const { requestDetails } = validation;

	const resendConfig = getResendConfig();
	if (!resendConfig) {
		console.error("Quote request email is not configured.");
		return jsonResponse(
			{ error: quoteRequestMessages.emailUnavailable },
			503
		);
	}

	const resend = new Resend(resendConfig.apiKey);
	let ownerError;

	try {
		const result = await resend.emails.send({
			from: resendConfig.fromEmail,
			to: emailAddress,
			replyTo: requestDetails.email,
			subject: `New quote request from ${requestDetails.name}`,
			html: quoteRequestEmail(requestDetails),
			attachments: [logoAttachment],
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
		return jsonResponse({ error: quoteRequestMessages.sendFailed }, 502);
	}

	let confirmationError;
	try {
		const result = await resend.emails.send({
			from: resendConfig.fromEmail,
			to: requestDetails.email,
			replyTo: emailAddress,
			subject: "We received your quote request",
			html: confirmationEmail(requestDetails.name),
			attachments: [logoAttachment],
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
