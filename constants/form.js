export const quoteFormContent = {
	eyebrow: "Let's get started",
	title: "Request Free Quote",
	description: "Tell us a little about your project and we'll be in touch.",
	labels: {
		name: "Name",
		phone: "Phone",
		address: "Address",
		email: "Email",
		project: "How can we help?",
	},
	placeholders: {
		project:
			"Tell us about your project, such as lawn care, planting, drainage, or landscape installation...",
	},
	messages: {
		nameRequired: "Name is required",
		phoneRequired: "Phone Number is required",
		addressRequired: "Address is required",
		emailRequired: "Email is required so we can confirm your request",
		invalidEmail: "Enter a valid email address",
	},
	submitLabel: "Request Quote",
	confirmationSent:
		"Request received. A confirmation email is on its way.",
	confirmationPending:
		"Request received. We couldn't send a confirmation email, but we'll be in touch.",
	submitFallback: "We couldn't send your request. Please try again.",
};

export const quoteRequestMessages = {
	invalidRequest: "Please check the form and try again.",
	invalidHoneypot: "Unable to submit this request.",
	invalidDetails: "Please check your details and try again.",
	rateLimited:
		"Too many requests. Please wait a few minutes or call us to request a quote.",
	emailUnavailable: "Quote requests are temporarily unavailable. Please call us.",
	sendFailed: "We couldn't send your request. Please try again or call us.",
};

export const quoteFormLimits = {
	name: 120,
	phone: 40,
	address: 200,
	email: 254,
	description: 2000,
	honeypot: 200,
	requestBody: 10_000,
};
