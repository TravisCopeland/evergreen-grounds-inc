const ContactBox = ({ children, name, content, wrapper }) => {
	return (
		<a href={wrapper}>
			<div className="text-white md:flex justify-center p-16 bg-white bg-opacity-5 border-transparent rounded-lg mt-20 ml-16">
				<div className="flex flex-col gap-4">
					<div className="flex justify-center">{children}</div>
					<h3 className="flex justify-center font-bold text-lime-light">
						{name}
					</h3>
					<p className="flex justify-center">{content}</p>
				</div>
			</div>
		</a>
	);
};

export default ContactBox;
