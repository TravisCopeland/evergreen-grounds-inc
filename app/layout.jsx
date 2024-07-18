import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "@/assets/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
	title: "Evergreen Grounds, Inc.",
	description: "Providing all your landscaping needs",
	keywords: "landscaping, landscaping company, landscapers, licensed, insured",
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
