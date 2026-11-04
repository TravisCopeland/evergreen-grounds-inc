export const getResendConfig = () => {
	const apiKey = process.env.RESEND_API_KEY?.trim();
	const fromEmail = process.env.RESEND_FROM_EMAIL?.trim();

	if (!apiKey || !fromEmail) {
		return null;
	}

	return { apiKey, fromEmail };
};
