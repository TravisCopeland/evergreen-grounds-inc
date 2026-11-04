import { quoteFormLimits } from "../constants/form.js";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateQuoteRequest = (body) => {
	if (!body || typeof body !== "object" || Array.isArray(body)) {
		return { error: "invalidRequest" };
	}

	const { name, phone, address, email, description, companyWebsite } = body;

	if (
		companyWebsite !== undefined &&
		(typeof companyWebsite !== "string" ||
			companyWebsite.length > quoteFormLimits.honeypot ||
			companyWebsite.trim().length > 0)
	) {
		return { error: "invalidHoneypot" };
	}

	const fields = { name, phone, address, email };
	if (
		Object.values(fields).some((value) => typeof value !== "string") ||
		(description !== undefined && typeof description !== "string")
	) {
		return { error: "invalidRequest" };
	}

	const requestDetails = {
		name: name.trim(),
		phone: phone.trim(),
		address: address.trim(),
		email: email.trim().toLowerCase(),
		description: typeof description === "string" ? description.trim() : "",
	};

	if (
		!requestDetails.name ||
		requestDetails.name.length > quoteFormLimits.name ||
		!requestDetails.phone ||
		requestDetails.phone.length > quoteFormLimits.phone ||
		!requestDetails.address ||
		requestDetails.address.length > quoteFormLimits.address ||
		!emailPattern.test(requestDetails.email) ||
		requestDetails.email.length > quoteFormLimits.email ||
		requestDetails.description.length > quoteFormLimits.description
	) {
		return { error: "invalidDetails" };
	}

	return { requestDetails };
};
