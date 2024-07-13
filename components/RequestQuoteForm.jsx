"use client";
import { useState } from "react";

const RequestQuoteForm = () => {
	const defaultFormValues = {
		fullName: "",
		email: "",
		address: "",
		phone: "",
		description: "",
	};

	const [formValues, setFormValues] = useState(defaultFormValues);

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log("form submitted", formValues);
		setFormValues(defaultFormValues);
	};

	return (
		<section className="md:w-1/2 p-16">
			<div className="flex flex-col justify-center border-solid border-2 border-lime rounded-lg p-12">
				<p className="text-white text-3xl font-semibold text-center pb-4">
					Request Quote
				</p>
				<form
					className="text-white flex flex-col justify-center"
					onSubmit={handleFormSubmit}
				>
					<label htmlFor="fullName">Full Name</label>
					<input
						className="text-black border-solid border-2 border-lime rounded-lg p-2 mb-2"
						type="text"
						id="fullName"
						name="fullName"
						value={formValues.fullName}
						onChange={handleInputChange}
					/>
					<label htmlFor="email">Email</label>
					<input
						className="text-black border-solid border-2 border-lime rounded-lg p-2 mb-2"
						type="email"
						id="email"
						name="email"
						value={formValues.email}
						onChange={handleInputChange}
					/>
					<label htmlFor="address">Address</label>
					<input
						className="text-black border-solid border-2 border-lime rounded-lg p-2 mb-2"
						type="text"
						id="address"
						name="address"
						value={formValues.address}
						onChange={handleInputChange}
					/>
					<label htmlFor="phone">Phone</label>
					<input
						className="text-black border-solid border-2 border-lime rounded-lg p-2 mb-2"
						type="text"
						id="phone"
						name="phone"
						value={formValues.phone}
						onChange={handleInputChange}
					/>
					<textarea
						className="text-black border-solid border-2 border-lime rounded-lg p-2 my-4 h-auto"
						type="text"
						id="description"
						name="description"
						placeholder="Enter a brief description of services requested..."
						rows={5}
						value={formValues.description}
						onChange={handleInputChange}
					/>
					<button
						className="bg-lime hover:bg-lime-dark p-2 mt-2 mb-2 rounded-lg w-auto"
						type="submit"
					>
						Request Quote
					</button>
				</form>
			</div>
		</section>
	);
};

export default RequestQuoteForm;
