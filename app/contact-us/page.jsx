import ContactBox from "@/components/ContactBox";
import RequestQuoteForm from "@/components/RequestQuoteForm";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUsPage = () => {
	return (
		<section className="bg-zinc flex flex-col md:flex-row py-6">
			<div className="flex flex-col">
				<ContactBox name="Email Address" content="evergreengrounds73@yahoo.com">
					<FaEnvelope size={36} />
				</ContactBox>
				<ContactBox name="Phone Number" content="(770) 262-2190">
					<FaPhone size={36} />
				</ContactBox>
			</div>
			<RequestQuoteForm />
		</section>
	);
};

export default ContactUsPage;
