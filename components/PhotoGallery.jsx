"use client";
import { useState } from "react";
import Image from "next/image";
import frontyard1l from "@/assets/images/frontyard1l.webp";
import frontyard2l from "@/assets/images/frontyard2l.webp";
import frontyard3p from "@/assets/images/frontyard3p.webp";
import backyard1p from "@/assets/images/backyard1p.jpg";
import backyard2l from "@/assets/images/backyard2l.webp";
import garden1l from "@/assets/images/garden1l.webp";
import drainage1p from "@/assets/images/drainage1p.webp";
import drainage2p from "@/assets/images/drainage2p.webp";
import { MdClose } from "react-icons/md";
import RequestQuoteButton from "./RequestQuoteButton";

const PhotoGallery = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [activeImage, setActiveImage] = useState("");
	const [activeAlt, setActiveAlt] = useState("");

	const handleImageClick = (src, alt) => {
		setIsFullScreen(true);
		setActiveImage(src);
		setActiveAlt(alt);
	};

	const handleClose = () => {
		setIsFullScreen(false);
		setActiveImage("");
		setActiveAlt("");
	};

	return (
		<div className="bg-zinc w-full p-2 md:py-20 md:px-4 sm:min-h-screen">
			<h1 className="text-white text-center text-lg md:text-3xl font-bold py-3 md:py-6 bg-white bg-opacity-5 border-transparent rounded-lg mb-3">
				Photo Gallery
			</h1>
			{isFullScreen && (
				<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
					<button
						onClick={handleClose}
						className="absolute text-white top-0 right-0 p-1 m-2 z-50"
					>
						<MdClose size={30} />
					</button>
					<div
						onClick={handleClose}
						className="max-h-[calc(85%)] md:max-h-screen hover:cursor-zoom-out z-50"
					>
						<Image
							src={activeImage}
							alt={activeAlt}
							className="w-auto max-h-[calc(85%)] md:max-h-screen z-50"
						/>
					</div>
					<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
				</div>
			)}
			<div className="bg-zinc w-full flex flex-row justify-center flex-wrap">
				<div
					className="w-1/2 p-1 md:w-1/4 hover:cursor-zoom-in"
					onClick={() =>
						handleImageClick(
							frontyard1l,
							"Front of a house, showing off the front yard"
						)
					}
				>
					<Image
						src={frontyard1l}
						alt={"Front of a house, showing off the front yard"}
						priority
					/>
				</div>
				<div
					className="w-1/2 p-1 md:w-1/4 hover:cursor-zoom-in"
					onClick={() =>
						handleImageClick(
							frontyard2l,
							"Side of a house, showing off the front yard"
						)
					}
				>
					<Image
						src={frontyard2l}
						alt={"Side of a house, showing off the front yard"}
						priority
					/>
				</div>
				<div
					className="w-1/2 p-1 md:w-1/4 hover:cursor-zoom-in"
					onClick={() =>
						handleImageClick(garden1l, "Garden with planted flowers and plants")
					}
				>
					<Image
						src={garden1l}
						alt={"Garden with planted flowers and plants"}
						priority
					/>
				</div>
				<div
					className="w-1/2 p-1 md:w-1/4 hover:cursor-zoom-in"
					onClick={() =>
						handleImageClick(
							backyard2l,
							"Backyard, showing off fresh cut grass"
						)
					}
				>
					<Image
						src={backyard2l}
						alt={"Backyard, showing off fresh cut grass"}
						priority
					/>
				</div>
				<div
					className="w-1/2 p-1 md:w-1/4  hover:cursor-zoom-in"
					onClick={() =>
						handleImageClick(
							drainage1p,
							"Backyard from top, showing off rocks for water drainage"
						)
					}
				>
					<Image
						src={drainage1p}
						alt={"Backyard from top, showing off rocks for water drainage"}
						priority
					/>
				</div>
				<div
					className="w-1/2 p-1 md:w-1/4 hover:cursor-zoom-in"
					onClick={() =>
						handleImageClick(
							drainage2p,
							"Backyard from bottom, showing off rocks for water drainage"
						)
					}
				>
					<Image
						src={drainage2p}
						alt={"Backyard from bottom, showing off rocks for water drainage"}
						priority
					/>
				</div>
				<div
					className="w-1/2 p-1 md:w-1/4 hover:cursor-zoom-in"
					onClick={() =>
						handleImageClick(
							backyard1p,
							"Backyard, showing off fresh cut grass and patio"
						)
					}
				>
					<Image
						src={backyard1p}
						alt={"Backyard, showing off fresh cut grass and patio"}
						className="aspect-[3/4]"
						priority
					/>
				</div>
				<div
					className="w-1/2 p-1 md:w-1/4 hover:cursor-zoom-in"
					onClick={() =>
						handleImageClick(frontyard3p, "Street view of the front of a house")
					}
				>
					<Image
						src={frontyard3p}
						alt={"Street view of the front of a house"}
						priority
					/>
				</div>
			</div>
			<div className="px-1 py-3 md:py-6">
				<RequestQuoteButton />
			</div>
		</div>
	);
};

export default PhotoGallery;
