const sitemap = () => {
	return [
		{
			url: "https://evergreengrounds.com",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://evergreengrounds.com/services",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://evergreengrounds.com/gallery",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: "https://evergreengrounds.com/contact-us",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.2,
		},
	];
};

export default sitemap;
