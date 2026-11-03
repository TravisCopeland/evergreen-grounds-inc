import PhotoGallery from "@/components/PhotoGallery";

export const metadata = {
	title: "Landscaping Project Gallery",
	description:
		"View landscaping, lawn care, garden installation, and drainage projects completed by Evergreen Grounds across North Atlanta.",
	alternates: {
		canonical: "/gallery",
	},
	openGraph: {
		title: "Landscaping Project Gallery | Evergreen Grounds",
		description:
			"See examples of lawn care, garden installation, and drainage work across North Atlanta.",
		url: "/gallery",
	},
};

const GalleryPage = () => {
	return <PhotoGallery />;
};

export default GalleryPage;
