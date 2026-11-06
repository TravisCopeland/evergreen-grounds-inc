"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { track } from "@vercel/analytics";
import Spinner from "@/components/Spinner";
import { quoteFormContent, quoteFormLimits } from "@/constants/form";

const formatPhoneNumber = (value) => {
	const digits = value.replace(/\D/g, "").slice(0, 10);

	if (digits.length <= 3) {
		return digits;
	}

	if (digits.length <= 6) {
		return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
	}

	return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

const RequestQuoteForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const [loading, setLoading] = useState(false);
	const [descriptionLength, setDescriptionLength] = useState(0);

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
					result.error || quoteFormContent.submitFallback
				);
			}

			reset();
			setDescriptionLength(0);
			track("quote_submitted");
			toast.success(
				result.confirmationSent
					? quoteFormContent.confirmationSent
					: quoteFormContent.confirmationPending
			);
		} catch (error) {
			toast.error(
				error instanceof Error
					? error.message
					: quoteFormContent.submitFallback
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="w-full">
			<div className="flex flex-col justify-center rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-7 md:p-8 lg:p-10">
				<div className="mb-6">
					<p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-light">
						{quoteFormContent.eyebrow}
					</p>
					<h2 className="mt-2 text-2xl font-bold tracking-tight text-content-primary sm:text-3xl">
						{quoteFormContent.title}
					</h2>
					<p className="mt-2 text-sm leading-relaxed text-content-muted">
						{quoteFormContent.description}
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
						{quoteFormContent.labels.name}<span className="text-danger"> *</span>
					</label>
					<input
						className="mb-4 rounded-xl border border-border bg-field px-3.5 py-3 text-field-content outline-none transition placeholder:text-content-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15"
						type="text"
						id="name"
						name="name"
						autoComplete="name"
						maxLength={quoteFormLimits.name}
						required
						aria-invalid={Boolean(errors.name)}
						aria-describedby={errors.name ? "name-error" : undefined}
						{...register("name", {
							required: quoteFormContent.messages.nameRequired,
						})}
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
						{quoteFormContent.labels.phone}<span className="text-danger"> *</span>
					</label>
					<input
						className="mb-4 rounded-xl border border-border bg-field px-3.5 py-3 text-field-content outline-none transition placeholder:text-content-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15"
						type="tel"
						id="phone"
						name="phone"
						autoComplete="tel"
						maxLength={14}
						inputMode="tel"
						required
						aria-invalid={Boolean(errors.phone)}
						aria-describedby={errors.phone ? "phone-error" : undefined}
						{...register("phone", {
							required: quoteFormContent.messages.phoneRequired,
							onChange: (event) => {
								event.target.value = formatPhoneNumber(event.target.value);
							},
						})}
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
						{quoteFormContent.labels.address}<span className="text-danger"> *</span>
					</label>
					<input
						className="mb-4 rounded-xl border border-border bg-field px-3.5 py-3 text-field-content outline-none transition placeholder:text-content-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15"
						type="text"
						id="address"
						name="address"
						autoComplete="street-address"
						maxLength={quoteFormLimits.address}
						required
						aria-invalid={Boolean(errors.address)}
						aria-describedby={errors.address ? "address-error" : undefined}
						{...register("address", {
							required: quoteFormContent.messages.addressRequired,
						})}
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
						{quoteFormContent.labels.email}<span className="text-danger"> *</span>
					</label>
					<input
						className="mb-4 rounded-xl border border-border bg-field px-3.5 py-3 text-field-content outline-none transition placeholder:text-content-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15"
						type="email"
						id="email"
						name="email"
						autoComplete="email"
						maxLength={quoteFormLimits.email}
						required
						aria-invalid={Boolean(errors.email)}
						aria-describedby={errors.email ? "email-error" : undefined}
						{...register("email", {
							required: quoteFormContent.messages.emailRequired,
							pattern: {
								value: /^\S+@\S+\.\S+$/,
								message: quoteFormContent.messages.invalidEmail,
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
						{quoteFormContent.labels.project}
					</label>
					<textarea
						className="min-h-32 rounded-xl border border-border bg-field px-3.5 py-3 text-field-content outline-none transition placeholder:text-content-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15"
						id="description"
						name="description"
						placeholder={quoteFormContent.placeholders.project}
						rows={5}
						maxLength={quoteFormLimits.description}
						aria-describedby="description-help"
						{...register("description", {
							onChange: (event) =>
								setDescriptionLength(event.target.value.length),
						})}
					/>
					<p
						id="description-help"
						className="mb-4 mt-1 text-right text-xs text-content-muted"
						aria-live="polite"
					>
						{descriptionLength.toLocaleString()} /{" "}
						{quoteFormLimits.description.toLocaleString()} characters
					</p>
					<button
						className="button-primary mt-2 min-h-12 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
						type="submit"
						disabled={loading}
						aria-disabled={loading}
					>
						{loading ? (
							<Spinner loading={loading} />
						) : (
							quoteFormContent.submitLabel
						)}
					</button>
				</form>
			</div>
		</section>
	);
};

export default RequestQuoteForm;
