import { FaDotCircle, FaPhone, FaEnvelope } from "react-icons/fa";
import { cities, emailAddress, phoneNumber } from "@/constants";

const BasicInfo = () => {
	return (
		<section className="flex flex-col justify-center md:w-1/2">
			<p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-light md:text-left">
				Family owned · Serving North Atlanta since 1983
			</p>
			<h1 className="text-center text-3xl font-bold leading-tight tracking-tight text-content-primary sm:text-4xl md:text-left md:text-5xl">
				Your commercial & residential specialists
			</h1>
			<p className="mt-4 text-center text-base leading-relaxed text-content-muted sm:text-lg md:text-left">
				Family-owned care, backed by more than four decades of horticulture
				experience.
			</p>
			<div className="mt-7 rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-6">
				<h2 className="text-base font-semibold text-content-primary sm:text-lg">
					Serving These Cities & Surrounding Areas
				</h2>
				<ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 text-sm text-content-muted sm:text-base">
					{cities.map((city, index) => (
						<li key={index} className="flex items-center gap-2">
							<FaDotCircle className="shrink-0 text-[0.55rem] text-brand-light" />
							{city}
						</li>
					))}
				</ul>
			</div>
			<div className="mt-5 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-5">
				<div className="flex items-center gap-2 text-content-muted">
					<FaEnvelope className="shrink-0 text-brand-light" />
					<a href={`mailto:${emailAddress}`} className="break-all transition-colors hover:text-brand-light sm:break-normal">
						{emailAddress}
					</a>
				</div>
				<div className="flex items-center gap-2 text-content-muted">
					<FaPhone className="shrink-0 text-brand-light" />
					<a href={`tel:${phoneNumber}`} className="transition-colors hover:text-brand-light">
						{phoneNumber}
					</a>
				</div>
			</div>
		</section>
	);
};

export default BasicInfo;
