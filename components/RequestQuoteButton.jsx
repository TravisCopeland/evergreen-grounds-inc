"use client";
import { useRouter } from "next/navigation";

const RequestQuoteButton = () => {
	const router = useRouter();

	return (
		<button
			type="button"
			onClick={() => router.push("/contact-us")}
			className="w-full rounded-xl bg-brand px-6 py-3.5 text-base font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light sm:w-auto sm:text-lg"
		>
			Request Free Quote
		</button>
	);
};

export default RequestQuoteButton;
