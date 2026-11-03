const ContactBox = ({ children, name, content, wrapper }) => {
	return (
		<a
			href={wrapper}
			className="group flex min-h-44 flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand/50 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light"
		>
			<div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand-light transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
				{children}
			</div>
			<h3 className="font-semibold text-content-primary">{name}</h3>
			<p className="break-all text-sm text-content-muted">{content}</p>
		</a>
	);
};

export default ContactBox;
