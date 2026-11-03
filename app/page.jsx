import BasicInfo from "@/components/BasicInfo";
import RequestQuoteForm from "@/components/RequestQuoteForm";

const HomePage = () => {
	return (
		<div className="mx-auto flex min-h-[calc(100vh-9.5rem)] max-w-7xl flex-col gap-5 bg-page px-4 py-8 sm:px-6 md:flex-row md:items-center md:gap-10 md:py-12 lg:px-8">
			<BasicInfo />
			<RequestQuoteForm />
		</div>
	);
};

export default HomePage;
