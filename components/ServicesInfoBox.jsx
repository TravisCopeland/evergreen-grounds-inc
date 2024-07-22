import { FaDotCircle } from "react-icons/fa";

const ServicesInfoBox = ({ label, infoArray }) => {
	return (
		<div className="text-white flex md:mx-4 justify-center p-8 bg-zinc-lighter border-transparent rounded-lg my-2 md:my-14 md:w-1/2">
			<div className="flex flex-col gap-4">
				<h3 className="flex justify-center text-lg md:text-3xl font-bold text-lime md:mb-2">
					{label}
				</h3>
				<ul className="text-sm md:text-xl">
					{infoArray &&
						infoArray.map((info, index) => (
							<li key={index} className="flex py-1">
								<FaDotCircle className="p-1 m-1" />
								{info}
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default ServicesInfoBox;
