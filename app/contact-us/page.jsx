import ContactBox from "@/components/ContactBox";
import RequestQuoteForm from "@/components/RequestQuoteForm";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUsPage = () => {
	return (
		<section className="bg-zinc flex flex-col md:flex-row py-6">
			<div className="hidden md:flex md:flex-col">
				<ContactBox
					name="Email Address"
					content="evergreengrounds73@yahoo.com"
					wrapper="mailto:evergreengrounds73@yahoo.com"
				>
					<FaEnvelope size={36} />
				</ContactBox>
				<ContactBox
					name="Call or Text"
					content="(770) 262-2190"
					wrapper="tel:770-262-2190"
				>
					<FaPhone size={36} />
				</ContactBox>
			</div>
			<div className="text-white p-2 md:hidden">
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
			<RequestQuoteForm />
		</section>
	);
};

export default ContactUsPage;
