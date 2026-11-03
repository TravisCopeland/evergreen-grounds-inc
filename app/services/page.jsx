import ServicesInfoBox from "@/components/ServicesInfoBox";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import { maintenanceInfo, servicesInfo } from "@/constants";

export const metadata = {
	title: "Landscaping Services",
	description:
		"Explore lawn maintenance, mowing, pruning, sod installation, planting, grading, drainage, and other residential and commercial landscaping services in North Atlanta.",
	alternates: {
		canonical: "/services",
	},
	openGraph: {
		title: "Landscaping Services | Evergreen Grounds",
		description:
			"Lawn maintenance, landscape installation, planting, grading, and drainage services in North Atlanta.",
		url: "/services",
	},
};

const ServicesPage = () => {
	return (
		<section className="min-h-screen bg-page px-4 py-10 sm:px-6 md:py-16 lg:px-8">
			<header className="mx-auto max-w-3xl text-center">
				<p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-light">
					Thoughtful outdoor care
				</p>
				<h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-content-primary sm:text-4xl md:text-5xl">
					Landscaping services built around your goals
				</h1>
				<p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-content-muted sm:text-lg">
					We partner with homeowners and businesses to create and maintain
					outdoor spaces they love.
				</p>
			</header>
			<div className="mx-auto mt-10 max-w-7xl md:mt-16">
				<h2 className="text-center text-2xl font-bold tracking-tight text-content-primary sm:text-3xl">
					Services offered
				</h2>
			</div>
			<div className="mx-auto mt-4 flex max-w-7xl flex-col gap-4 md:flex-row md:gap-6">
				<ServicesInfoBox
					label="Landscape maintenance"
					infoArray={maintenanceInfo}
				/>
				<ServicesInfoBox
					label="Landscape services"
					infoArray={servicesInfo}
				/>
			</div>
			<div className="mx-auto mt-8 flex max-w-7xl justify-center md:mt-10">
				<RequestQuoteButton />
			</div>
		</section>
	);
};

export default ServicesPage;
