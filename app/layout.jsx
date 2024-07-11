import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "@/assets/styles/globals.css";

export const metadata = {
	title: "Evergreen Grounds Inc.",
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
			</body>
		</html>
	);
};

export default RootLayout;
