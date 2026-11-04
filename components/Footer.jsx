import Image from "next/image";
import logo from "@/assets/images/logo-standard-white.png";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-white/10 bg-brand-deep py-8 text-white">
			<div className="container mx-auto flex flex-col items-center justify-between gap-5 px-4 sm:flex-row">
				<div>
					<Image
						src={logo}
						alt="Evergreen Grounds, Inc."
						className="h-10 w-auto"
					/>
				</div>
				<div className="text-center sm:text-right">
					<p className="text-sm text-white/70">
						&copy; {currentYear} Evergreen Grounds, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
