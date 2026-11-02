"use client";
import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { MdClose } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageLightBox = ({
	images,
	activeIndex,
	setActiveIndex,
	setIsFullScreen,
	openerRef,
}) => {
	const closeButtonRef = useRef(null);
	const dialogRef = useRef(null);
	const imageCount = images.length;

	const handleClose = useCallback(() => {
		setIsFullScreen(false);
		setActiveIndex(0);
	}, [setActiveIndex, setIsFullScreen]);

	const showPrevious = useCallback(() => {
		setActiveIndex((index) => (index === 0 ? imageCount - 1 : index - 1));
	}, [imageCount, setActiveIndex]);

	const showNext = useCallback(() => {
		setActiveIndex((index) => (index === imageCount - 1 ? 0 : index + 1));
	}, [imageCount, setActiveIndex]);

	useEffect(() => {
		const previousOverflow = document.body.style.overflow;
		const opener = openerRef.current;
		document.body.style.overflow = "hidden";
		closeButtonRef.current?.focus();

		return () => {
			document.body.style.overflow = previousOverflow;
			opener?.focus();
		};
	}, [openerRef]);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				handleClose();
			} else if (event.key === "ArrowLeft") {
				event.preventDefault();
				showPrevious();
			} else if (event.key === "ArrowRight") {
				event.preventDefault();
				showNext();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleClose, showNext, showPrevious]);

	const swipeHandlers = useSwipeable({
		onSwipedLeft: showNext,
		onSwipedRight: showPrevious,
		preventScrollOnSwipe: true,
	});

	const handleDialogKeyDown = (event) => {
		if (event.key !== "Tab") {
			return;
		}

		const buttons = Array.from(
			dialogRef.current.querySelectorAll("button:not([disabled])")
		).filter((button) => button.getClientRects().length > 0);
		const firstButton = buttons[0];
		const lastButton = buttons[buttons.length - 1];

		if (event.shiftKey && document.activeElement === firstButton) {
			event.preventDefault();
			lastButton.focus();
		} else if (!event.shiftKey && document.activeElement === lastButton) {
			event.preventDefault();
			firstButton.focus();
		}
	};

	return (
		<div
			ref={dialogRef}
			role="dialog"
			aria-modal="true"
			aria-label="Photo gallery image viewer"
			onKeyDown={handleDialogKeyDown}
			className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
		>
			<p
				className="absolute text-white top-0 left-0 p-1 m-2 z-50"
				aria-live="polite"
			>
				{`${activeIndex + 1} / ${images.length}`}
			</p>
			<button
				ref={closeButtonRef}
				type="button"
				onClick={handleClose}
				aria-label="Close image viewer"
				className="absolute text-white top-0 right-0 p-2 m-2 z-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-light"
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
				type="button"
				aria-label="Previous image"
				className="hidden md:block absolute text-white top-50 left-0 px-4 py-16 z-50 hover:bg-white hover:bg-opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-light"
				onClick={showPrevious}
			>
				<FaArrowLeft size={20} aria-hidden="true" />
			</button>
			<button
				type="button"
				aria-label="Next image"
				className="hidden md:block absolute text-white top-50 right-0 px-4 py-16 z-50 hover:bg-white hover:bg-opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-light"
				onClick={showNext}
			>
				<FaArrowRight size={20} aria-hidden="true" />
			</button>
			<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
		</div>
	);
};

export default ImageLightBox;
