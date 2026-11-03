import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/next";
import "@/assets/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

export const metadata = {
	title: "Evergreen Grounds",
	description:
		"Family owned landscape design and service company, proudly serving the North Atlanta area for over 4 decades.",
	keywords: [
		"landscaping",
		"landscaping company",
		"landscapers",
		"landscape design",
		"landscape architect",
		"lawn care",
		"lawn service",
	],
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
				<meta name="og:title" property="og:title" content={metadata.title} />
				<meta name="description" content={metadata.description} />
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
