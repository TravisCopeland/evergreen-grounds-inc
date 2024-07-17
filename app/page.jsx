import BasicInfo from "@/components/BasicInfo";
import RequestQuoteForm from "@/components/RequestQuoteForm";

const HomePage = () => {
	return (
		<div className="bg-zinc flex flex-col md:flex-row">
			<BasicInfo />
			<RequestQuoteForm />
		</div>
	);
};

export default HomePage;
