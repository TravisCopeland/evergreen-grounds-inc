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
		<section className="md:w-1/2 p-2 md:px-12 md:py-24">
			<div className="bg-white bg-opacity-5 flex flex-col justify-center border-solid border-2 border-lime rounded-lg p-6 md:p-12 md:mt-4">
				<h2 className="text-white text-xl md:text-3xl font-semibold text-center pb-4">
					Request Free Quote
				</h2>
				<form
					className="text-white flex flex-col justify-center"
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
					<label htmlFor="name">
						Name<span className="text-red-500"> *</span>
					</label>
					<input
						className="text-black border-solid border-2 border-lime rounded-lg p-2 mb-2"
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
							className="text-error-red text-sm font-bold pb-2"
							role="alert"
						>
							{errors.name.message}
						</p>
					)}
					<label htmlFor="phone">
						Phone<span className="text-red-500"> *</span>
					</label>
					<input
						className="text-black border-solid border-2 border-lime rounded-lg p-2 mb-2"
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
							className="text-error-red text-sm font-bold pb-2"
							role="alert"
						>
							{errors.phone.message}
						</p>
					)}
					<label htmlFor="address">
						Address<span className="text-red-500"> *</span>
					</label>
					<input
						className="text-black border-solid border-2 border-lime rounded-lg p-2 mb-2"
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
							className="text-error-red text-sm font-bold pb-2"
							role="alert"
						>
							{errors.address.message}
						</p>
					)}
					<label htmlFor="email">
						Email<span className="text-red-500"> *</span>
					</label>
					<input
						className="text-black border-solid border-2 border-lime rounded-lg p-2 mb-2"
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
							className="text-error-red text-sm font-bold pb-2"
							role="alert"
						>
							{errors.email.message}
						</p>
					)}
					<label htmlFor="description">How can we help?</label>
					<textarea
						className="text-black border-solid border-2 border-lime rounded-lg p-2 my-4 h-auto"
						id="description"
						name="description"
						placeholder="Enter a brief description of services requested..."
						rows={5}
						{...register("description")}
					/>
					<button
						className="bg-lime hover:bg-lime-dark p-2 mt-2 mb-2 font-bold rounded-lg w-auto shadow-md shadow-lime-shadow hover:shadow-lime-shadow-dark"
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
