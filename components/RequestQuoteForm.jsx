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
				}
			)
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<section className={`md:w-1/2 p-2 md:p-16`}>
			<div className="flex flex-col justify-center border-solid border-2 border-lime rounded-lg p-6 md:p-12">
				<p className="text-white text-xl md:text-3xl font-semibold text-center pb-4">
					Request Free Quote
				</p>
				<form
					ref={form}
					className="text-white flex flex-col justify-center"
					onSubmit={handleSubmit(handleFormSubmit)}
				>
					<label htmlFor="name">
						Name<span className="text-red-500"> *</span>
					</label>
					<input
						className="text-black border-solid border-2 border-lime rounded-lg p-2 mb-2"
						type="text"
						id="name"
						name="name"
						autoComplete="on"
						{...register("name", { required: "Name is required" })}
					/>
					{errors.name && (
						<p className="text-error-red text-sm font-bold pb-2">
							{errors.name.message}
						</p>
					)}
					<label htmlFor="email">
						Email<span className="text-red-500"> *</span>
					</label>
					<input
						className="text-black border-solid border-2 border-lime rounded-lg p-2 mb-2"
						type="text"
						id="email"
						name="email"
						autoComplete="on"
						{...register("email", {
							required: "Email is required",
							validate: {
								matchPattern: (value) => /^[^@]+@[^@]+\.[^@]+$/.test(value),
							},
						})}
					/>
					{errors.email?.type === "required" && (
						<p className="text-error-red text-sm font-bold pb-2">
							{errors.email.message}
						</p>
					)}
					{errors.email?.type === "matchPattern" && (
						<p className="text-error-red text-sm font-bold pb-2">
							Please enter a valid email
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
						autoComplete="on"
						{...register("address", { required: "Address is required" })}
					/>
					{errors.address && (
						<p className="text-error-red text-sm font-bold pb-2">
							{errors.address.message}
						</p>
					)}
					<label htmlFor="phone">Phone</label>
					<input
						className="text-black border-solid border-2 border-lime rounded-lg p-2 mb-2"
						type="text"
						id="phone"
						name="phone"
						autoComplete="on"
						{...register("phone")}
					/>
					<textarea
						className="text-black border-solid border-2 border-lime rounded-lg p-2 my-4 h-auto"
						type="text"
						id="description"
						name="description"
						placeholder="Enter a brief description of services requested..."
						rows={5}
						{...register("description")}
					/>
					<button
						className="bg-lime hover:bg-lime-dark p-2 mt-2 mb-2 rounded-lg w-auto"
						type="submit"
					>
						{loading ? <Spinner loading={loading} /> : "Request Quote"}
					</button>
				</form>
			</div>
		</section>
	);
};

export default RequestQuoteForm;
