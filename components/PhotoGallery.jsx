"use client";
import { useState } from "react";
import Image from "next/image";
import { images } from "@/constants";
import RequestQuoteButton from "./RequestQuoteButton";
import ImageLightBox from "./ImageLightBox";

const PhotoGallery = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleImageClick = (index) => {
		setIsFullScreen(true);
		setActiveIndex(index);
	};

	const handleArrowClick = (direction) => {
		if (direction === "left") {
			if (activeIndex === 0) {
				setActiveIndex(images.length - 1);
			} else {
				setActiveIndex((prev) => prev - 1);
			}
		} else if (direction === "right") {
			if (activeIndex === images.length - 1) {
				setActiveIndex(0);
			} else {
				setActiveIndex((prev) => prev + 1);
			}
		}
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
					handleArrowClick={handleArrowClick}
					setIsFullScreen={setIsFullScreen}
				/>
			)}
			<div className="bg-zinc w-full flex flex-row justify-center flex-wrap">
				{images.map((image, index) => (
					<Image
						key={index}
						src={image.src}
						alt={image.alt}
						priority={index === 0 || index === 4 ? true : false}
						placeholder="blur"
						className={
							index === 6
								? "w-1/2 p-1 md:w-1/4 hover:cursor-pointer aspect-[3/4]"
								: "w-1/2 p-1 md:w-1/4 hover:cursor-pointer"
						}
						onClick={() => handleImageClick(index)}
					/>
				))}
			</div>
			<div className="px-1 py-3 md:py-6">
				<RequestQuoteButton />
			</div>
		</div>
	);
};

export default PhotoGallery;
