import BasicInfo from "@/components/BasicInfo";
import DirectContactLinks from "@/components/DirectContactLinks";
import RequestQuoteForm from "@/components/RequestQuoteForm";
import { emailAddress, phoneNumber } from "@/constants";

export const metadata = {
	title: {
		absolute: "Landscaping in North Atlanta | Evergreen Grounds",
	},
	description:
		"Family-owned residential and commercial landscaping serving North Atlanta since 1983. Request a free quote for lawn care, landscape installation, and more.",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Landscaping in North Atlanta | Evergreen Grounds",
		description:
			"Family-owned residential and commercial landscaping serving North Atlanta since 1983.",
		url: "/",
	},
};

const HomePage = () => {
	return (
		<div className="mx-auto flex min-h-[calc(100vh-9.5rem)] max-w-7xl flex-col gap-5 bg-page px-4 py-8 sm:px-6 md:flex-row md:items-start md:gap-10 md:py-12 lg:px-8">
			<BasicInfo />
			<div className="flex flex-col gap-4 md:w-1/2">
				<RequestQuoteForm />
				<DirectContactLinks
					emailAddress={emailAddress}
					phoneNumber={phoneNumber}
				/>
			</div>
		</div>
	);
};

export default HomePage;
