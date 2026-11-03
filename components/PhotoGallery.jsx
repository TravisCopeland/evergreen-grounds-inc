"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/constants";
import RequestQuoteButton from "./RequestQuoteButton";
import ImageLightBox from "./ImageLightBox";

const PhotoGallery = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const openerRef = useRef(null);

	const handleImageClick = (index, event) => {
		setIsFullScreen(true);
		setActiveIndex(index);
		openerRef.current = event.currentTarget;
	};

	return (
		<section
			aria-labelledby="gallery-title"
			className="min-h-screen w-full bg-page px-4 py-10 sm:px-6 md:py-16 lg:px-8"
		>
			{isFullScreen && (
				<ImageLightBox
					images={images}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setIsFullScreen={setIsFullScreen}
					openerRef={openerRef}
				/>
			)}
			<header className="mx-auto mb-8 max-w-7xl text-center md:mb-12">
				<h1
					id="gallery-title"
					className="text-3xl font-bold tracking-tight text-content-primary md:text-5xl"
				>
					Our Work
				</h1>
				<p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-content-muted md:text-lg">
					A closer look at the outdoor spaces we care for across North
					Atlanta.
				</p>
			</header>
			<div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-5 xl:grid-cols-4">
				{images.map((image, index) => (
					<button
						key={image.src.src}
						type="button"
						className={`group relative overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-light/70 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-light ${
							image.src.height > image.src.width
								? "aspect-[3/4]"
								: "aspect-[4/3]"
						}`}
						aria-label={`View photo ${index + 1}`}
						aria-haspopup="dialog"
						onClick={(event) => handleImageClick(index, event)}
					>
						<Image
							src={image.src}
							alt={image.alt}
							priority={index === 0}
							placeholder="blur"
							sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
							className="object-cover transition duration-500 group-hover:scale-105"
							fill
						/>
					</button>
				))}
			</div>
			<div className="mx-auto mt-10 flex max-w-7xl justify-center md:mt-14">
				<RequestQuoteButton />
			</div>
		</section>
	);
};

export default PhotoGallery;
