import assert from "node:assert/strict";
import test from "node:test";
import { quoteFormLimits } from "../constants/form.js";
import { validateQuoteRequest } from "../lib/quote-request-validation.js";

const validRequest = {
	name: "Jane Doe",
	phone: "(770) 262-2190",
	address: "123 Main Street, Atlanta, GA",
	email: "JANE@example.com",
	description: "Please help with lawn maintenance.",
};

test("normalizes a valid quote request", () => {
	const result = validateQuoteRequest(validRequest);

	assert.deepEqual(result, {
		requestDetails: {
			name: "Jane Doe",
			phone: "(770) 262-2190",
			address: "123 Main Street, Atlanta, GA",
			email: "jane@example.com",
			description: "Please help with lawn maintenance.",
		},
	});
});

test("rejects malformed or incomplete requests", () => {
	assert.equal(validateQuoteRequest(null).error, "invalidRequest");
	assert.equal(
		validateQuoteRequest({ ...validRequest, email: "not-an-email" }).error,
		"invalidDetails"
	);
	assert.equal(
		validateQuoteRequest({ ...validRequest, address: " " }).error,
		"invalidDetails"
	);
});

test("rejects populated honeypot fields", () => {
	assert.equal(
		validateQuoteRequest({ ...validRequest, companyWebsite: "https://spam.test" })
			.error,
		"invalidHoneypot"
	);
});

test("enforces configured field limits", () => {
	assert.equal(
		validateQuoteRequest({
			...validRequest,
			description: "x".repeat(quoteFormLimits.description + 1),
		}).error,
		"invalidDetails"
	);
	assert.equal(
		validateQuoteRequest({
			...validRequest,
			name: "x".repeat(quoteFormLimits.name + 1),
		}).error,
		"invalidDetails"
	);
});
