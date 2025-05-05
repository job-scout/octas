import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const motionVariants = {
	initial: { opacity: 0, y: -60 },
	whileInView: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 60 },
	transition: {
		duration: 0.5,
		delay: 0.2,
		scale: {
			type: "spring",
			damping: 14,
			stiffness: 200,
			restDelta: 0.001,
		},
	},
};

function Partners() {
	const images1 = [
		"/partners/1.png",
		"/partners/2.png",
		"/partners/3.png",
		"/partners/4.png",
		"/partners/5.png",
		"/partners/6.png",
		
	];

	return (
		<div className="container mx-auto lg:w-[70%] w-full px-4 py-5">
			<div className=" py-4">
				<Marquee autoFill className="" speed={60}>
					{images1.map((img, i) => (
						<div
							key={i}
							className="flex items-center justify-center lg:mx-8 mx-2 rounded-xl p-5  my-5"
						>
							<img
								className="h-12 w-auto lg:h-20 lg:w-auto lg:object-contain"
								src={img}
								alt=""
							/>
						</div>
					))}
				</Marquee>
			</div>
		</div>
	);
}

export default Partners;
