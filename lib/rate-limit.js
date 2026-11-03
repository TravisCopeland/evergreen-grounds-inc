const requestLog = new Map();

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_TRACKED_CLIENTS = 10_000;

const getClientKey = (request) => {
	const vercelForwardedFor = request.headers.get("x-vercel-forwarded-for");
	const forwardedFor = request.headers.get("x-forwarded-for");
	const realIp = request.headers.get("x-real-ip");
	const ip =
		realIp ||
		vercelForwardedFor?.split(",")[0]?.trim() ||
		forwardedFor?.split(",")[0]?.trim();

	return ip || "unknown-client";
};

export const isRateLimited = (request) => {
	const now = Date.now();
	const clientKey = getClientKey(request);
	const entry = requestLog.get(clientKey);

	if (!entry || now - entry.startedAt >= WINDOW_MS) {
		if (requestLog.size >= MAX_TRACKED_CLIENTS) {
			for (const [key, value] of requestLog) {
				if (now - value.startedAt >= WINDOW_MS) {
					requestLog.delete(key);
				}
			}

			if (requestLog.size >= MAX_TRACKED_CLIENTS) {
				requestLog.delete(requestLog.keys().next().value);
			}
		}

		requestLog.set(clientKey, { startedAt: now, count: 1 });
		return false;
	}

	entry.count += 1;
	return entry.count > MAX_REQUESTS;
};
