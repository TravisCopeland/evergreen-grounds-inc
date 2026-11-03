import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
	return (
		<section className="flex min-h-[70vh] items-center bg-page px-4 py-12">
			<div className="container m-auto max-w-2xl">
				<div className="m-4 rounded-2xl border border-border bg-surface px-6 py-16 text-content-primary shadow-card sm:px-12 md:m-0">
					<div className="flex justify-center">
						<FaExclamationTriangle className="text-6xl text-brand-light" />
					</div>
					<div className="text-center">
						<h1 className="mb-2 mt-4 text-3xl font-bold">Page not found</h1>
						<p className="mb-8 text-base text-content-muted sm:text-lg">
							The page you are looking for does not exist.
						</p>
						<Link
							href="/"
							className="inline-flex min-h-12 items-center rounded-xl bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light"
						>
							Go Home
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFoundPage;
