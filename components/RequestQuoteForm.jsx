"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner";

const RequestQuoteForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const [loading, setLoading] = useState(false);

	const handleFormSubmit = async (values) => {
		setLoading(true);
		try {
			const response = await fetch("/api/quote-requests", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});
			const result = await response.json().catch(() => ({}));

			if (!response.ok) {
				throw new Error(
					result.error || "We couldn't send your request. Please try again."
				);
			}

			reset();
			toast.success(
				result.confirmationSent
					? "Request received. A confirmation email is on its way."
					: "Request received. We couldn't send a confirmation email, but we'll be in touch."
			);
		} catch (error) {
			toast.error(
				error instanceof Error
					? error.message
					: "We couldn't send your request. Please try again."
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="w-full md:flex-1">
			<div className="flex flex-col justify-center rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-7 md:p-8 lg:p-10">
				<div className="mb-6">
					<p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-light">
						Let&apos;s get started
					</p>
					<h2 className="mt-2 text-2xl font-bold tracking-tight text-content-primary sm:text-3xl">
						Request Free Quote
					</h2>
					<p className="mt-2 text-sm leading-relaxed text-content-muted">
						Tell us a little about your project and we&apos;ll be in touch.
					</p>
				</div>
				<form
					className="flex flex-col justify-center text-content-primary"
					onSubmit={handleSubmit(handleFormSubmit)}
					aria-busy={loading}
					noValidate
				>
					<div
						className="absolute -left-[10000px]"
						aria-hidden="true"
					>
						<label htmlFor="companyWebsite">Leave this field empty</label>
						<input
							id="companyWebsite"
							tabIndex={-1}
							autoComplete="off"
							{...register("companyWebsite")}
						/>
					</div>
					<label className="mb-1.5 text-sm font-medium" htmlFor="name">
						Name<span className="text-danger"> *</span>
					</label>
					<input
						className="mb-4 rounded-xl border border-border bg-field px-3.5 py-3 text-field-content outline-none transition placeholder:text-content-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15"
						type="text"
						id="name"
						name="name"
						autoComplete="name"
						required
						aria-invalid={Boolean(errors.name)}
						aria-describedby={errors.name ? "name-error" : undefined}
						{...register("name", { required: "Name is required" })}
					/>
					{errors.name && (
						<p
							id="name-error"
							className="pb-2 text-sm font-semibold text-danger"
							role="alert"
						>
							{errors.name.message}
						</p>
					)}
					<label className="mb-1.5 text-sm font-medium" htmlFor="phone">
						Phone<span className="text-danger"> *</span>
					</label>
					<input
						className="mb-4 rounded-xl border border-border bg-field px-3.5 py-3 text-field-content outline-none transition placeholder:text-content-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15"
						type="tel"
						id="phone"
						name="phone"
						autoComplete="tel"
						required
						aria-invalid={Boolean(errors.phone)}
						aria-describedby={errors.phone ? "phone-error" : undefined}
						{...register("phone", { required: "Phone Number is required" })}
					/>
					{errors.phone && (
						<p
							id="phone-error"
							className="pb-2 text-sm font-semibold text-danger"
							role="alert"
						>
							{errors.phone.message}
						</p>
					)}
					<label className="mb-1.5 text-sm font-medium" htmlFor="address">
						Address<span className="text-danger"> *</span>
					</label>
					<input
						className="mb-4 rounded-xl border border-border bg-field px-3.5 py-3 text-field-content outline-none transition placeholder:text-content-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15"
						type="text"
						id="address"
						name="address"
						autoComplete="street-address"
						required
						aria-invalid={Boolean(errors.address)}
						aria-describedby={errors.address ? "address-error" : undefined}
						{...register("address", { required: "Address is required" })}
					/>
					{errors.address && (
						<p
							id="address-error"
							className="pb-2 text-sm font-semibold text-danger"
							role="alert"
						>
							{errors.address.message}
						</p>
					)}
					<label className="mb-1.5 text-sm font-medium" htmlFor="email">
						Email<span className="text-danger"> *</span>
					</label>
					<input
						className="mb-4 rounded-xl border border-border bg-field px-3.5 py-3 text-field-content outline-none transition placeholder:text-content-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15"
						type="email"
						id="email"
						name="email"
						autoComplete="email"
						required
						aria-invalid={Boolean(errors.email)}
						aria-describedby={errors.email ? "email-error" : undefined}
						{...register("email", {
							required: "Email is required so we can confirm your request",
							pattern: {
								value: /^\S+@\S+\.\S+$/,
								message: "Enter a valid email address",
							},
						})}
					/>
					{errors.email && (
						<p
							id="email-error"
							className="pb-2 text-sm font-semibold text-danger"
							role="alert"
						>
							{errors.email.message}
						</p>
					)}
					<label className="mb-1.5 text-sm font-medium" htmlFor="description">
						How can we help?
					</label>
					<textarea
						className="mb-4 min-h-32 rounded-xl border border-border bg-field px-3.5 py-3 text-field-content outline-none transition placeholder:text-content-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15"
						id="description"
						name="description"
						placeholder="Enter a brief description of services requested..."
						rows={5}
						{...register("description")}
					/>
					<button
						className="mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-brand px-5 py-3 font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light sm:w-auto"
						type="submit"
						disabled={loading}
					>
						{loading ? <Spinner loading={loading} /> : "Request Quote"}
					</button>
				</form>
			</div>
		</section>
	);
};

export default RequestQuoteForm;
