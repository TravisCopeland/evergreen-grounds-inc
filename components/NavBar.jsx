"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo-standard-white.png";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/services", label: "Services" },
	{ href: "/gallery", label: "Gallery" },
	{ href: "/contact-us", label: "Contact Us" },
];

const NavBar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const pathname = usePathname();

	const getLinkClassName = (href, mobile = false) => {
		const activeClass = pathname === href ? "bg-lime" : "";
		const layoutClass = mobile
			? "block rounded-md px-3 py-2 text-base font-medium"
			: "rounded-md px-3 py-2 text-2xl";

		return `${activeClass} ${layoutClass} text-white hover:bg-lime-dark hover:text-white`;
	};

	return (
		<nav className="bg-zinc border-zinc w-full">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-20 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center md:hidden">
						{/* <!-- Mobile menu button--> */}
						<button
							type="button"
							id="mobile-dropdown-button"
							className="relative inline-flex items-center justify-center rounded-md p-2 text-lime hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded={isMobileMenuOpen}
							aria-label={
								isMobileMenuOpen ? "Close main menu" : "Open main menu"
							}
							onClick={() => setIsMobileMenuOpen((prev) => !prev)}
						>
							<span className="absolute -inset-0.5"></span>
							<svg
								className="block h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
					</div>

					<div className="flex flex-1 items-center justify-center md:items-end md:pt-16">
						<Link
							className="flex flex-1 items-center justify-center md:justify-start"
							href="/"
						>
							<Image
								className="h-14 md:h-28 w-auto"
								src={logo}
								alt="Evergreen Grounds, Inc."
								priority={true}
							/>
						</Link>
						{/* <!-- Desktop Menu - Hidden below md screens --> */}
						<div className="hidden flex-1 md:block md:justify-center">
							<div className="flex space-x-2">
								{links.map(({ href, label }) => (
									<Link
										key={href}
										href={href}
										className={getLinkClassName(href)}
										aria-current={pathname === href ? "page" : undefined}
									>
										{label}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Mobile menu, show/hide based on menu state. --> */}
			<div
				id="mobile-menu"
				className="md:hidden"
				hidden={!isMobileMenuOpen}
			>
				<div className="space-y-1 px-2 pb-3 pt-2">
					{links.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className={getLinkClassName(href, true)}
							aria-current={pathname === href ? "page" : undefined}
							onClick={() => setIsMobileMenuOpen(false)}
						>
							{label}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
