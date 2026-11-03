"use client";
import { useRouter } from "next/navigation";

const RequestQuoteButton = () => {
	const router = useRouter();

	return (
		<button
			type="button"
			onClick={() => router.push("/contact-us")}
			className="button-primary w-full sm:w-auto"
		>
			Request Free Quote
		</button>
	);
};

export default RequestQuoteButton;
