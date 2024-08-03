"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo-standard-white.png";

const NavBar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const pathname = usePathname();

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
							aria-expanded="false"
							onClick={() => setIsMobileMenuOpen((prev) => !prev)}
						>
							<span className="absolute -inset-0.5"></span>
							<span className="sr-only">Open main menu</span>
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
								<Link
									href="/"
									className={`${
										pathname === "/" ? "bg-lime" : ""
									} text-white text-2xl hover:bg-lime-dark hover:text-white rounded-md px-3 py-2`}
								>
									Home
								</Link>
								<Link
									href="/services"
									className={`${
										pathname === "/services" ? "bg-lime" : ""
									} text-white text-2xl hover:bg-lime-dark hover:text-white rounded-md px-3 py-2`}
								>
									Services
								</Link>
								<Link
									href="/gallery"
									className={`${
										pathname === "/gallery" ? "bg-lime" : ""
									} text-white text-2xl hover:bg-lime-dark hover:text-white rounded-md px-3 py-2`}
								>
									Gallery
								</Link>
								<Link
									href="/contact-us"
									className={`${
										pathname === "/contact-us" ? "bg-lime" : ""
									} text-white text-2xl hover:bg-lime-dark hover:text-white rounded-md px-3 py-2`}
								>
									Contact Us
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Mobile menu, show/hide based on menu state. --> */}
			{isMobileMenuOpen && (
				<div id="mobile-menu">
					<div className="space-y-1 px-2 pb-3 pt-2">
						<Link
							href="/"
							className={`${
								pathname === "/" ? "bg-lime" : ""
							} text-white block rounded-md px-3 py-2 text-base font-medium`}
						>
							Home
						</Link>
						<Link
							href="/services"
							className={`${
								pathname === "/services" ? "bg-lime" : ""
							} text-white block rounded-md px-3 py-2 text-base font-medium`}
						>
							Services
						</Link>
						<Link
							href="/gallery"
							className={`${
								pathname === "/gallery" ? "bg-lime" : ""
							} text-white block rounded-md px-3 py-2 text-base font-medium`}
						>
							Gallery
						</Link>
						<Link
							href="/contact-us"
							className={`${
								pathname === "/contact-us" ? "bg-lime" : ""
							} text-white block rounded-md px-3 py-2 text-base font-medium`}
						>
							Contact Us
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default NavBar;
