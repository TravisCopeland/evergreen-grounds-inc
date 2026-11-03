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
			aria-label="Photo viewer"
			onKeyDown={handleDialogKeyDown}
			onClick={(event) => {
				if (event.target === event.currentTarget) {
					handleClose();
				}
			}}
			className="fixed inset-0 z-50 flex flex-col bg-black/95 text-white backdrop-blur-md outline-none"
		>
			<header className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6">
				<p
					className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/85"
					aria-live="polite"
				>
					{`${activeIndex + 1} / ${images.length}`}
				</p>
				<button
					ref={closeButtonRef}
					type="button"
					onClick={handleClose}
					aria-label="Close image viewer"
					className="rounded-full border border-white/15 bg-white/10 p-2 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-light"
				>
					<MdClose size={24} aria-hidden="true" />
				</button>
			</header>
			<div
				{...swipeHandlers}
				className="relative min-h-0 flex-1 px-14 py-5 sm:px-20"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						handleClose();
					}
				}}
			>
				<button
					type="button"
					aria-label="Previous image"
					className="absolute left-2 z-10 rounded-full border border-white/15 bg-black/50 p-3 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-light sm:left-6"
					onClick={showPrevious}
				>
					<FaArrowLeft size={18} aria-hidden="true" />
				</button>
				<Image
					key={images[activeIndex].src.src}
					src={images[activeIndex].src}
					alt={images[activeIndex].alt}
					priority
					unoptimized
					sizes="100vw"
					className="select-none object-contain"
					fill
				/>
				<button
					type="button"
					aria-label="Next image"
					className="absolute right-2 z-10 rounded-full border border-white/15 bg-black/50 p-3 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-light sm:right-6"
					onClick={showNext}
				>
					<FaArrowRight size={18} aria-hidden="true" />
				</button>
			</div>
		</div>
	);
};

export default ImageLightBox;
