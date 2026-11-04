"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo-standard-white.png";
import ThemeToggle from "./ThemeToggle";

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
		const activeClass =
			pathname === href
				? "bg-white/10 text-white"
				: "text-white/75";
		const layoutClass = mobile
			? "block rounded-xl px-4 py-3 text-base font-medium"
			: "rounded-full px-4 py-2 text-sm font-medium";

		return `${activeClass} ${layoutClass} transition-colors hover:bg-white/10 hover:text-white`;
	};

	return (
		<nav className="w-full border-b border-white/10 bg-brand-deep text-white">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="relative flex h-[4.5rem] items-center justify-between md:h-24">
					<div className="absolute inset-y-0 left-0 flex items-center md:hidden">
						<button
							type="button"
							id="mobile-dropdown-button"
							className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white/85 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light"
							aria-controls="mobile-menu"
							aria-expanded={isMobileMenuOpen}
							aria-label={
								isMobileMenuOpen ? "Close main menu" : "Open main menu"
							}
							onClick={() => setIsMobileMenuOpen((prev) => !prev)}
						>
							<span
								className="relative block h-6 w-6"
								aria-hidden="true"
							>
								<span
									className={`absolute left-0 top-1/2 h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
										isMobileMenuOpen
											? "translate-y-0 rotate-45"
											: "-translate-y-2"
									}`}
								/>
								<span
									className={`absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ease-in-out motion-reduce:transition-none ${
										isMobileMenuOpen ? "opacity-0" : "opacity-100"
									}`}
								/>
								<span
									className={`absolute left-0 top-1/2 h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
										isMobileMenuOpen
											? "translate-y-0 -rotate-45"
											: "translate-y-1.5"
									}`}
								/>
							</span>
						</button>
					</div>

					<div className="flex flex-1 items-center justify-center px-12 md:justify-between md:px-0">
						<Link
							className="flex items-center justify-center"
							href="/"
						>
							<Image
								className="h-12 w-auto md:h-16"
								src={logo}
								alt="Evergreen Grounds, Inc."
								priority
							/>
						</Link>
						<div className="hidden md:block">
							<div className="flex items-center gap-1">
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
					<div className="absolute inset-y-0 right-0 flex items-center md:static md:ml-6">
						<ThemeToggle />
					</div>
				</div>
			</div>

			<div
				id="mobile-menu"
				className="border-t border-white/10 bg-brand-deep px-4 pb-4 pt-3 md:hidden"
				hidden={!isMobileMenuOpen}
			>
				<div className="mx-auto max-w-7xl space-y-1">
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
