"use client";
import { useRouter } from "next/navigation";
import ServicesInfoBox from "@/components/ServicesInfoBox";

const ServicesPage = () => {
	const maintenanceInfo = [
		"Mowing",
		"Edging & Blowing",
		"Leaf & Stick Clean Up",
		"Seasonal Pruning",
		"Flower Bed Weed Control",
		"Shrub Pruning",
	];
	const installationInfo = [
		"Sod",
		"Plant Design & Install",
		"Grading",
		"Mulch",
		"Pinestraw",
		"Drainage",
	];

	const router = useRouter();

	return (
		<section className="bg-zinc p-2 md:p-20">
			<h1 className="text-white text-xl md:text-3xl font-bold text-center m-4 md:m-8">
				We are dedicated to working with our clients to achieve their goals
			</h1>
			<hr className="border-solid rounded" />
			<h2 className="text-white text-lg md:text-2xl text-center m-4 md:m-8">
				<i>
					<b>Over 4 Decades</b>
				</i>{" "}
				of Horticulture Experience
			</h2>
			<button
				type="button"
				onClick={() => router.push("/contact-us")}
				className="bg-lime hover:bg-lime-dark text-white p-2 rounded-lg w-full my-4 md:my-0"
			>
				Request Free Quote
			</button>
			<h3 className="text-white text-xl md:text-3xl font-bold text-center mt-4 md:mt-8">
				Services Offered
			</h3>
			<div className="flex flex-col md:flex-row md:justify-between">
				<ServicesInfoBox
					label={"Landscape Maintenance"}
					infoArray={maintenanceInfo}
				/>
				<ServicesInfoBox
					label={"Landscape Services"}
					infoArray={installationInfo}
				/>
			</div>
			<button
				type="button"
				onClick={() => router.push("/contact-us")}
				className="bg-lime hover:bg-lime-dark text-white p-2 rounded-lg w-full my-4 md:my-0"
			>
				Request Free Quote
			</button>
		</section>
	);
};

export default ServicesPage;
