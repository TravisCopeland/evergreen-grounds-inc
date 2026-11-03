import { siteUrl } from "@/constants";

const sitemap = () => {
	return [
		{
			url: siteUrl,
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: `${siteUrl}/services`,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${siteUrl}/gallery`,
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: `${siteUrl}/contact-us`,
			changeFrequency: "yearly",
			priority: 0.2,
		},
	];
};

export default sitemap;
