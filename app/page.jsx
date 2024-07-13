import BasicInfo from "@/components/BasicInfo";
import RequestQuoteForm from "@/components/RequestQuoteForm";

const HomePage = () => {
	return (
		<div className="bg-zinc flex flex-col md:flex-row gap-4 py-4">
			<BasicInfo />
			<RequestQuoteForm />
		</div>
	);
};

export default HomePage;
