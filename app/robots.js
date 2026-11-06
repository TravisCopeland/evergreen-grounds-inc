import { siteUrl } from "@/constants/content";

const robots = () => ({
	rules: {
		userAgent: "*",
		allow: "/",
	},
	sitemap: `${siteUrl}/sitemap.xml`,
});

export default robots;
