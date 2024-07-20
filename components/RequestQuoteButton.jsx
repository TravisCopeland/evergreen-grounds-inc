"use client";
import { useRouter } from "next/navigation";

const RequestQuoteButton = () => {
	const router = useRouter();

	return (
		<button
			type="button"
			onClick={() => router.push("/contact-us")}
			className="bg-lime hover:bg-lime-dark text-lg md:text-2xl font-bold text-white p-2 rounded-lg w-full my-4 md:my-0 shadow-md shadow-lime-shadow hover:shadow-lime-shadow-dark"
		>
			Request Free Quote
		</button>
	);
};

export default RequestQuoteButton;
