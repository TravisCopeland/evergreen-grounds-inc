import { FaDotCircle } from "react-icons/fa";

const ServicesInfoBox = ({ label, infoArray }) => {
	return (
		<div className="my-3 rounded-2xl border border-border bg-surface p-5 shadow-card transition-shadow sm:p-7 md:w-1/2 md:p-8">
			<div className="flex flex-col gap-4">
				<h3 className="text-lg font-semibold text-content-primary sm:text-xl">
					{label}
				</h3>
				<ul className="grid gap-3 text-sm text-content-muted sm:grid-cols-2 sm:text-base">
					{infoArray &&
						infoArray.map((info, index) => (
							<li key={index} className="flex items-center gap-2">
								<FaDotCircle className="shrink-0 text-[0.55rem] text-brand-light" />
								{info}
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default ServicesInfoBox;
