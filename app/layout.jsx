import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "@/assets/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
	title: "Evergreen Grounds, Inc. - Landscape Company",
	description:
		"Family owned landscape design and service company for over 4 decades.",
	keywords: [
		"landscaping",
		"landscaping company",
		"landscapers",
		"landscape design",
		"landscape architect",
		"lawn care",
		"lawn service",
		"acworth",
		"cartersville",
		"dallas",
		"kennesaw",
		"alpharetta",
		"roswell",
		"woodstock",
	],
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
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
