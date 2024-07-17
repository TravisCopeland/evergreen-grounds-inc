import BasicInfo from "@/components/BasicInfo";
import RequestQuoteForm from "@/components/RequestQuoteForm";

const HomePage = () => {
	return (
		<div className="bg-zinc flex flex-col md:flex-row">
			<BasicInfo />
			<RequestQuoteForm width="1/2" />
		</div>
	);
};

export default HomePage;
