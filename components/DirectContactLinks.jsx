"use client";

import { track } from "@vercel/analytics";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const DirectContactLinks = ({ emailAddress, phoneNumber }) => {
	return (
		<aside className="rounded-2xl border border-border bg-surface-raised px-5 py-4">
			<p className="mb-3 text-sm font-medium text-content-primary">
				Prefer to talk directly?
			</p>
			<div className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-x-5">
				<a
					href={`tel:${phoneNumber}`}
					onClick={() => track("phone_clicked", { location: "home" })}
					className="flex items-center gap-2 text-content-muted transition-colors hover:text-brand-light"
				>
					<FaPhone className="shrink-0 text-brand-light" />
					{phoneNumber}
				</a>
				<a
					href={`mailto:${emailAddress}`}
					onClick={() => track("email_clicked", { location: "home" })}
					className="flex min-w-0 items-center gap-2 text-content-muted transition-colors hover:text-brand-light"
				>
					<FaEnvelope className="shrink-0 text-brand-light" />
					<span className="break-all sm:break-normal">{emailAddress}</span>
				</a>
			</div>
		</aside>
	);
};

export default DirectContactLinks;
