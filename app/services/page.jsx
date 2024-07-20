import RequestQuoteButton from "@/components/RequestQuoteButton";
import ServicesInfoBox from "@/components/ServicesInfoBox";
import { maintenanceInfo, servicesInfo } from "@/constants";

const ServicesPage = () => {
	return (
		<section className="bg-zinc p-2 md:p-20">
			<h1 className="text-white text-xl md:text-3xl font-bold text-center m-4 md:m-8">
				We are dedicated to working with our clients to achieve their goals
			</h1>
			<hr className="border-solid rounded" />
			<h2 className="text-white text-lg md:text-2xl text-center m-4 md:m-8">
				<i>Over 4 Decades </i>of Horticulture Experience
			</h2>
			<RequestQuoteButton />
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
					infoArray={servicesInfo}
				/>
			</div>
			<RequestQuoteButton />
		</section>
	);
};

export default ServicesPage;
