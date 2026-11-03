import ContactBox from "@/components/ContactBox";
import RequestQuoteForm from "@/components/RequestQuoteForm";
import { emailAddress, phoneNumber } from "@/constants";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUsPage = () => {
	return (
		<section className="mx-auto flex min-h-[calc(100vh-9.5rem)] max-w-7xl flex-col gap-6 bg-page px-4 py-8 sm:px-6 md:flex-row md:items-center md:gap-10 md:py-12 lg:px-8">
			<div className="order-2 grid gap-3 sm:grid-cols-2 md:order-1 md:w-1/2 md:grid-cols-1">
				<ContactBox
					name="Email Address"
					content={emailAddress}
					wrapper={`mailto:${emailAddress}`}
				>
					<FaEnvelope size={36} />
				</ContactBox>
				<ContactBox
					name="Call or Text"
					content={phoneNumber}
					wrapper={`tel:${phoneNumber}`}
				>
					<FaPhone size={36} />
				</ContactBox>
			</div>
			<div className="order-1 md:order-2 md:w-1/2">
				<div className="mb-5">
					<p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-light">
						We&apos;re here to help
					</p>
					<h1 className="mt-2 text-3xl font-bold tracking-tight text-content-primary sm:text-4xl">
						Contact us
					</h1>
				</div>
				<RequestQuoteForm />
			</div>
		</section>
	);
};

export default ContactUsPage;
