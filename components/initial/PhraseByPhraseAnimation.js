import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


const phrases = ["We Design", "We Develop", "We Advertise", "We Automate"];

const backgrounds = [
	"/banner-bg.png",
	"/banner-bg.png",
	"/banner-bg.png",
	"/banner-bg.png",
];


const PhraseByPhraseAnimation = ({ onAnimationEnd }) => {
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
	const [progress, setProgress] = useState(25);
	const [showLogo, setShowLogo] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const animationTimer = setTimeout(() => {
			if (onAnimationEnd) {
				onAnimationEnd();
			}
		}, 8000);

		return () => clearTimeout(animationTimer);
	}, [onAnimationEnd]);

	useEffect(() => {
		const totalPhrases = phrases.length;
		const phraseDuration = 2500;

		if (!showLogo) {
			let phraseIndex = 0;

			const interval = setInterval(() => {
				setCurrentPhraseIndex((prevIndex) => {
					if (prevIndex === totalPhrases - 1) {
						clearInterval(interval);
						setShowLogo(true);
						setTimeout(() => {
							router.push("/");
						}, 100);
						return prevIndex;
					}
					return prevIndex + 1;
				});

				setProgress((prevProgress) =>
					Math.min(prevProgress + 100 / totalPhrases, 100),
				);

				phraseIndex++;
			}, phraseDuration);

			return () => clearInterval(interval);
		}
	}, [showLogo, router]);

	const currentPhrase = phrases[currentPhraseIndex] || "";

	return (
		<div
			className="relative flex flex-col items-center justify-center h-screen bg-center w-full object-cover "
			style={{
				backgroundImage: `url(${backgrounds[currentPhraseIndex]})`,
			}}
		>
			<div className="absolute inset-0 bg-black/70 z-10" />

			<div className="relative z-20">
				{!showLogo ? (
					<>
						{/* Phrase Animation */}
						<div className="relative">
							<AnimatePresence mode="wait">
								<motion.div
									key={currentPhraseIndex}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.8 }}
									className="font-bold text-center text-3xl lg:text-4xl drop-shadow-xl tracking-wide text-white"
								>
									<div className="flex items-center justify-center mb-8">
										<img
								src={"/logo.png"}
								alt="Logo"
								className="h-24 w-auto"
							/>
									</div>
									{currentPhrase
										.split("")
										.map((letter, i) => (
											<motion.span
												key={i}
												className="inline-block"
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{
													delay: i * 0.05,
													duration: 0.3,
												}}
											>
												{letter === " "
													? "\u00A0"
													: letter}
											</motion.span>
										))}
								</motion.div>
							</AnimatePresence>
						</div>

						{/* Progress Bar */}
						<div className="mt-10 w-72 h-3 bg-gray-300 rounded-full overflow-hidden">
							<motion.div
								className="h-full bg-yellow-200"
								initial={{ width: "0%" }}
								animate={{ width: `${progress}%` }}
								transition={{
									duration: 0.8,
									ease: "easeInOut",
								}}
							/>
						</div>
					</>
				) : (
					// Logo Animation
					<div className="bg-white h-screen w-[100vw] flex items-center justify-center">
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 1, ease: "easeOut" }}
						>
							<img
								src={"/logo.png"}
								alt="Logo"
								className="h-28 w-auto"
							/>
						</motion.div>
					</div>
				)}
			</div>
		</div>
	);
};

export default PhraseByPhraseAnimation;
