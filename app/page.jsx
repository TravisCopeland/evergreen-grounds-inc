import BasicInfo from "@/components/BasicInfo";
import RequestQuoteForm from "@/components/RequestQuoteForm";
import { emailAddress, phoneNumber } from "@/constants";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const HomePage = () => {
	return (
		<div className="mx-auto flex min-h-[calc(100vh-9.5rem)] max-w-7xl flex-col gap-5 bg-page px-4 py-8 sm:px-6 md:flex-row md:items-center md:gap-10 md:py-12 lg:px-8">
			<BasicInfo />
			<div className="flex flex-col gap-4 md:w-1/2">
				<RequestQuoteForm />
				<aside className="rounded-2xl border border-border bg-surface-raised px-5 py-4">
					<p className="mb-3 text-sm font-medium text-content-primary">
						Prefer to talk directly?
					</p>
					<div className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-x-5">
						<a
							href={`tel:${phoneNumber}`}
							className="flex items-center gap-2 text-content-muted transition-colors hover:text-brand-light"
						>
							<FaPhone className="shrink-0 text-brand-light" />
							{phoneNumber}
						</a>
						<a
							href={`mailto:${emailAddress}`}
							className="flex min-w-0 items-center gap-2 text-content-muted transition-colors hover:text-brand-light"
						>
							<FaEnvelope className="shrink-0 text-brand-light" />
							<span className="break-all sm:break-normal">{emailAddress}</span>
						</a>
					</div>
				</aside>
			</div>
		</div>
	);
};

export default HomePage;
