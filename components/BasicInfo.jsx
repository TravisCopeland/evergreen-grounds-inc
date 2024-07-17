import { FaDotCircle, FaPhone, FaEnvelope } from "react-icons/fa";

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
		<section className="flex flex-col justify-center text-white md:w-1/2 px-2 md:px-16">
			<h1 className="text-center text-lg md:text-4xl font-bold py-3 md:pb-6">
				Your Commercial & Residential Specialists
			</h1>
			<hr className="border-solid rounded" />
			<h2 className="text-center text-md md:text-3xl py-3 md:py-6">
				Family Owned Business Servicing North Atlanta Since 1983
			</h2>
			<div className="bg-white bg-opacity-5 border-transparent rounded-lg py-3 px-4 mt-2">
				<h3 className="text-md md:text-2xl font-bold pb-2">Areas Served</h3>
				<ul className="grid grid-cols-2 grid-rows-4 gap-0 gap-y-0 text-sm md:text-lg pl-2">
					{cities.map((city, index) => (
						<div key={index}>
							<li className="flex">
								<FaDotCircle className="p-1 m-1" />
								{city}
							</li>
						</div>
					))}
				</ul>
			</div>
			<div className="py-4 md:py-6">
				<div className="flex flex-row">
					<FaEnvelope className="m-1" />
					<a
						href="mailto:evergreengrounds73@yahoo.com"
						className="pl-2"
					>{`evergreengrounds73@yahoo.com`}</a>
				</div>
				<div className="flex flex-row py-3">
					<FaPhone className="m-1" />
					<a href="tel:770-262-2190" className="pl-2">{`(770) 262-2190`}</a>
				</div>
			</div>
		</section>
	);
};

export default BasicInfo;
