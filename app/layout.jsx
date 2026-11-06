import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/next";
import "@/assets/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import { siteUrl } from "@/constants/content";

export const metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Landscaping in North Atlanta | Evergreen Grounds",
		template: "%s | Evergreen Grounds",
	},
	description:
		"Family-owned landscaping company serving North Atlanta since 1983. Explore lawn maintenance, landscape design, installation, drainage, and more.",
	openGraph: {
		type: "website",
		locale: "en_US",
		siteName: "Evergreen Grounds, Inc.",
		images: [
			{
				url: "/email-logo.png",
				width: 600,
				height: 180,
				alt: "Evergreen Grounds, Inc.",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		images: ["/email-logo.png"],
	},
	icons: { icon: "/favicon.ico" },
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<Script id="theme-init" strategy="beforeInteractive">
					{`try {
	const savedTheme = localStorage.getItem("evergreen-theme");
	const systemTheme = matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
	document.documentElement.dataset.theme =
		savedTheme === "light" || savedTheme === "dark" ? savedTheme : systemTheme;
} catch {
	document.documentElement.dataset.theme =
		matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}`}
				</Script>
			</head>
			<body>
				<NavBar />
				<main>{children}</main>
				<Footer />
				<ToastContainer />
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
