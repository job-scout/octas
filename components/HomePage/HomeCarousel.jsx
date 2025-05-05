/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Slider from "react-slick";

export default function HomeCarousel() {
	const router = useRouter();
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	};

	const HOME_CAROUSEL_DATA = [
		{
			src: "/banner-bg.png",
			heading: "Innovate, Execute, Elevate",
			subHeading:
				"Empowering your digital journey with tailored technology solutions at Octas Solutions.",
		},
		{
			src: "/banner-bg.png",
			heading: "Drive Engagement & Growth",
			subHeading:
				"Boost your digital presence and achieve measurable business outcomes with our marketing and tech expertise.",
		},
		{
			src: "/banner-bg.png",
			heading: "Scale with Confidence",
			subHeading:
				"From idea to execution, Octas Solutions helps you build scalable, future-ready digital products.",
		},
		{
			src: "/banner-bg.png",
			heading: "Your Agile Tech Partner",
			subHeading:
				"We design, develop, and deliver high-performance solutions that match global standards — on demand.",
		},
	];

	return (
		<div className="home">
			<Slider
				pauseOnHover={false}
				pauseOnFocus={false}
				pauseOnDotsHover={false}
				{...settings}
			>
				{HOME_CAROUSEL_DATA?.map((data, index) => (
					<div key={index} className="relative w-screen h-screen">
						<span className="bg-black/70 absolute top-0 bottom-0 right-0 left-0 z-[1]">
							<div
								data-aos="fade-right"
								className="h-full grid justify-center items-center p-6 md:p-40"
							>
								<div className="flex flex-col gap-8 text-textPrimary items-center justify-center">
									<h1 className=" lg:max-w-2xl text-3xl lg:text-5xl font-bold text-center">
										{data.heading}
									</h1>
									<p className=" text-md lg:text-xl font-normal max-w-xl text-center ">
										{data.subHeading}
									</p>
									<button
										onClick={() => {
											const el = document.getElementById(
												"contact-us",
											);
											if (el)
												el.scrollIntoView({
													behavior: "smooth",
												});
										}}
										className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-xl mt-2 cursor-pointer hover:bg-green-700 transition-all duration-300 ease-in-out"
									>
										Get In Touch
									</button>
								</div>
							</div>
						</span>
						<img
							className="w-full h-full object-cover"
							src={data.src}
							alt={data.heading}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
}
