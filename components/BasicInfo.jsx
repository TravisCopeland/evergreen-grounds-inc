import { FaDotCircle } from "react-icons/fa";

const BasicInfo = () => {
	const cities = [
		"Cartersville",
		"Dallas",
		"Acworth",
		"Kennesaw",
		"Marietta",
		"Canton",
		"Woodstock",
	];

	return (
		<section className="flex flex-col justify-center text-white md:w-1/2 px-16">
			<h1 className="text-center text-4xl font-bold pb-4">
				Your Commercial & Residential Specialists
			</h1>
			<h2 className="text-center text-3xl font-bold pb-4">
				Family Owned Business Servicing North Atlanta Since 1983
			</h2>
			<h3 className="text-2xl font-bold pb-2">Areas Served</h3>
			<ul className="text-xl pl-2">
				{cities.map((city, index) => (
					<div key={index} className="flex flex-row p-1">
						<FaDotCircle className="p-1 m-1" />
						<li>{city}</li>
					</div>
				))}
			</ul>
		</section>
	);
};

export default BasicInfo;
