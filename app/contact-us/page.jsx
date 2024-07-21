import ContactBox from "@/components/ContactBox";
import RequestQuoteForm from "@/components/RequestQuoteForm";
import { emailAddress, phoneNumber } from "@/constants";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUsPage = () => {
	return (
		<section className="bg-zinc flex flex-col md:flex-row py-6">
			<div className="hidden md:flex md:flex-col md:mt-8">
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
			<div className="text-white p-2 md:hidden">
				<div className="flex flex-row">
					<FaEnvelope className="m-1" />
					<a href={`mailto:${emailAddress}`} className="pl-2">
						{emailAddress}
					</a>
				</div>
				<div className="flex flex-row py-3">
					<FaPhone className="m-1" />
					<a href={`tel:${phoneNumber}`} className="pl-2">
						{phoneNumber}
					</a>
				</div>
			</div>
			<RequestQuoteForm />
		</section>
	);
};

export default ContactUsPage;
