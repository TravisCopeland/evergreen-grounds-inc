import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "@/assets/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

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
		<html lang="en">
			<Head>
				<meta name="og:title" property="og:title" content={metadata.title} />
				<meta name="description" content={metadata.description} />
			</Head>
			<body>
				<NavBar />
				<main>{children}</main>
				<Footer />
				<ToastContainer />
			</body>
		</html>
	);
};

export default RootLayout;
