import { FaDotCircle } from "react-icons/fa";
import Image from "next/image";
import { cities } from "@/constants/content";
import backyard from "@/assets/images/backyard2l.webp";

const BasicInfo = () => {
	return (
		<section className="flex flex-col md:w-1/2">
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
			<div className="relative mt-6 hidden h-56 overflow-hidden rounded-2xl border border-border shadow-card md:block lg:h-64">
				<Image
					src={backyard}
					alt="A carefully maintained backyard lawn with stone landscaping"
					fill
					sizes="(min-width: 1280px) 576px, (min-width: 768px) 50vw"
					className="object-cover"
				/>
			</div>
		</section>
	);
};

export default BasicInfo;
