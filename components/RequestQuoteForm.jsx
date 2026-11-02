"use client";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner";
import emailjs from "@emailjs/browser";

const RequestQuoteForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const form = useRef();

	const [loading, setLoading] = useState(false);

	const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
	const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
	const myPublicKey = process.env.NEXT_PUBLIC_KEY;

	const handleFormSubmit = () => {
		setLoading(true);
		emailjs
			.sendForm(serviceId, templateId, form.current, {
				publicKey: myPublicKey,
			})
			.then(
				() => {
					console.log("SUCCESS");
					toast.success("Quote Request Sent Successfully");
					reset();
				},
				(error) => {
					console.log("FAILED...", error.text);
					toast.error("Something Went Wrong... Try Again");
				}
			)
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<section className="md:w-1/2 p-2 md:px-12 md:py-24">
			<div className="bg-white bg-opacity-5 flex flex-col justify-center border-solid border-2 border-lime rounded-lg p-6 md:p-12 md:mt-4">
				<h2 className="text-white text-xl md:text-3xl font-semibold text-center pb-4">
					Request Free Quote
				</h2>
				<form
					ref={form}
					className="text-white flex flex-col justify-center"
					onSubmit={handleSubmit(handleFormSubmit)}
					aria-busy={loading}
					noValidate
				>
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
					<label htmlFor="email">Email</label>
					<input
						className="text-black border-solid border-2 border-lime rounded-lg p-2 mb-2"
						type="email"
						id="email"
						name="email"
						autoComplete="email"
						aria-invalid={Boolean(errors.email)}
						aria-describedby={errors.email ? "email-error" : undefined}
						{...register("email", {
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
