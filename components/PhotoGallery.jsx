"use client";
import { useState } from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { images } from "@/constants";
import RequestQuoteButton from "./RequestQuoteButton";
import { useSwipeable } from "react-swipeable";

const PhotoGallery = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleImageClick = (index) => {
		setIsFullScreen(true);
		setActiveIndex(index);
	};

	const handleClose = () => {
		setIsFullScreen(false);
		setActiveIndex(0);
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

	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => handleArrowClick("right"),
		onSwipedRight: () => handleArrowClick("left"),
		preventScrollOnSwipe: true,
	});

	return (
		<div className="bg-zinc w-full p-2 md:py-20 md:px-4 sm:min-h-screen">
			<h1 className="text-white text-center text-lg md:text-3xl font-bold py-3 md:py-6 bg-white bg-opacity-5 border-transparent rounded-lg mb-3">
				Photo Gallery
			</h1>
			{isFullScreen && (
				<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
					<p className="absolute text-white top-0 left-0 p-1 m-2 z-50">
						{`${activeIndex + 1} / ${images.length}`}
					</p>
					<button
						onClick={handleClose}
						className="absolute text-white top-0 right-0 p-1 m-2 z-50"
					>
						<MdClose size={30} />
					</button>
					<div
						{...swipeHandlers}
						className="max-h-[calc(85%)] md:max-h-screen z-50"
					>
						<div
							onClick={handleClose}
							className="max-h-[calc(85%)] md:max-h-screen z-50"
						>
							<Image
								src={images[activeIndex].src}
								alt={images[activeIndex].alt}
								className="w-auto max-h-[calc(85%)] md:max-h-screen z-50"
							/>
						</div>
					</div>
					<button
						className="hidden md:block absolute text-white top-50 left-0 px-4 py-16 z-50 hover:bg-white hover:bg-opacity-30"
						onClick={() => handleArrowClick("left")}
					>
						<FaArrowLeft size={20} />
					</button>
					<button
						className="hidden md:block absolute text-white top-50 right-0 px-4 py-16 z-50 hover:bg-white hover:bg-opacity-30"
						onClick={() => handleArrowClick("right")}
					>
						<FaArrowRight size={20} />
					</button>
					<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
				</div>
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
