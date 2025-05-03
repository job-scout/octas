import React from "react";

import { AnimatePresence, motion } from "framer-motion";
const Header = () => {
	
	return (
		<div className="flex w-full justify-center lg:h-[85vh] h-[90vh]">
			<AnimatePresence mode="wait">
				<div className="container relative flex w-full flex-col items-center justify-center px-1 lg:flex-row gap-8 lg:px-12">
					<div
						className="absolute -z-10 h-full w-full rounded-2xl bg-secondary"
						style={{
							clipPath: "polygon(0 0, 100% 0, 100% 78%, 0% 100%)",
						}}
					></div>
					<motion.div
						initial={{ opacity: 0, x: -60 }}
						whileInView={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -60 }}
						transition={{
							duration: 0.5,
							scale: {
								type: "spring",
								damping: 14,
								stiffness: 200,
								restDelta: 0.001,
							},
						}}
						className="flex flex-col items-center justify-center gap-7  lg:items-start "
					>
						

						<h1 className="text-center text-2xl font-medium md:text-4xl lg:text-start  md:mt-0 lg:max-w-xl lg:leading-snug">
							Empowering Businesses with AI- Driven Solutions
						</h1>
						<p className="text-center text-sm font-normal text-lightBlack md:text-lg lg:text-start lg:max-w-lg">
							At Octas, we blend artificial intelligence with scalable software to help your business grow smarter.
						</p>
					
					</motion.div>
					<motion.div initial={{ opacity: 0, x: 60 }}
							whileInView={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 60 }}
							transition={{
								duration: 0.5,
								delay: 0.2,
								scale: {
									type: "spring",
									damping: 14,
									stiffness: 200,
									restDelta: 0.001,
								},
							}} className="flex items-center justify-center">
						<img
							src="/banner-final.png"
							
							alt="Octas"
							className=" w-auto h-auto object-contain "
						/>
						
					</motion.div>
				</div>
			</AnimatePresence>
		</div>
	);
};

export default Header;
