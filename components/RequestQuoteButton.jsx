"use client";
import { useRouter } from "next/navigation";

const RequestQuoteButton = () => {
	const router = useRouter();

	return (
		<button
			type="button"
			onClick={() => router.push("/contact-us")}
			className="bg-lime hover:bg-lime-dark text-white p-2 rounded-lg w-full my-4 md:my-0"
		>
			Request Free Quote
		</button>
	);
};

export default RequestQuoteButton;
