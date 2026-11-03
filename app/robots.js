import { siteUrl } from "@/constants";

const robots = () => ({
	rules: {
		userAgent: "*",
		allow: "/",
	},
	sitemap: `${siteUrl}/sitemap.xml`,
});

export default robots;
