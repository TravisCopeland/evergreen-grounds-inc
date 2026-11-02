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
		<div className="bg-zinc w-full p-2 md:py-20 md:px-4 sm:min-h-screen">
			<h1 className="text-white text-center text-lg md:text-3xl font-bold py-3 md:py-6 bg-white bg-opacity-5 border-transparent rounded-lg mb-3">
				Photo Gallery
			</h1>
			{isFullScreen && (
				<ImageLightBox
					images={images}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setIsFullScreen={setIsFullScreen}
					openerRef={openerRef}
				/>
			)}
			<div className="bg-zinc w-full flex flex-row justify-center flex-wrap">
				{images.map((image, index) => (
					<button
						key={index}
						type="button"
						className={`w-1/2 p-1 md:w-1/4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-light ${
							index === 6 ? "aspect-[3/4]" : ""
						}`}
						aria-label={`View image ${index + 1}: ${image.alt}`}
						onClick={(event) => handleImageClick(index, event)}
					>
						<Image
							src={image.src}
							alt={image.alt}
							priority={index === 0}
							placeholder="blur"
							className={
								index === 6
									? "h-full w-full object-cover"
									: "w-full"
							}
						/>
					</button>
				))}
			</div>
			<div className="px-1 py-3 md:py-6">
				<RequestQuoteButton />
			</div>
		</div>
	);
};

export default PhotoGallery;
