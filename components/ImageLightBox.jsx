"use client";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { MdClose } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageLightBox = ({
	images,
	activeIndex,
	setActiveIndex,
	handleArrowClick,
	setIsFullScreen,
}) => {
	const handleClose = () => {
		setIsFullScreen(false);
		setActiveIndex(0);
	};

	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => handleArrowClick("right"),
		onSwipedRight: () => handleArrowClick("left"),
		preventScrollOnSwipe: true,
	});

	return (
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
				className="flex items-center h-screen max-h-[calc(85%)] md:max-h-screen z-50"
			>
				<Image
					src={images[activeIndex].src}
					alt={images[activeIndex].alt}
					className="w-auto max-h-[calc(85%)] md:max-h-screen z-50"
				/>
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
	);
};

export default ImageLightBox;
