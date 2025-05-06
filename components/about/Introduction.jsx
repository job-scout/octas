/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

export default function Introduction() {
	return (
		<section className="items-center">
			<div className="flex flex-col lg:flex-row gap-20 justify-between items-start ">
				<img
					className="w-[200px] h-auto object-cover py-2"
					data-aos="fade-right"
					src="/octas.png"
					alt="about"
				/>
				<div
					data-aos="fade-left"
					className="flex flex-col gap-10 max-w-xl text-center lg:text-start"
				>
					<h3 className="sub_heading">Octas Solutions</h3>
					<p className="text">
						At Octas Solutions, we empower both startups and
						enterprises to thrive in the digital era. Whether you're
						launching a new idea or scaling an existing operation,
						we deliver AI-powered apps, scalable platforms, and
						impactful strategies — including SEO, ASO, SMM, content,
						and email marketing — that drive measurable results.
					</p>
					<p className="text">
						As one of the fastest-growing consultancies, our dynamic
						team combines deep technical expertise with strategic
						thinking to deliver high-performance digital products.
						From UX-driven design to development, testing,
						deployment, and project management — we tailor solutions
						that grow with your vision.
					</p>
				</div>
			</div>
			<div className=" bg-[#F2FDFF] flex flex-col lg:flex-row gap-10 lg:gap-20 p-5 lg:p-0 justify-between items-center ">
				<img data-aos="fade-right" src="/our-vision.svg" alt="about"  />
				<div
					data-aos="fade-left"
					className="flex flex-col gap-5 lg:gap-5 max-w-xl text-center lg:text-start p-0 lg:p-10"
				>
					<h3 className="sub_heading">Our Vision</h3>
					<p className="text">
						To become a globally recognized partner for startups and
						enterprises alike — admired for building intelligent,
						sustainable digital ecosystems that drive innovation,
						impact, and long-term value.
					</p>
				</div>
			</div>
			<div className=" bg-[#FFF8F1] flex flex-col lg:flex-row gap-10 lg:gap-20 p-5 lg:p-0 justify-between items-center ">
				<div
					data-aos="fade-right"
					className="flex flex-col gap-5 lg:gap-5 max-w-xl text-center lg:text-start p-0 lg:p-10"
				>
					<h3 className="sub_heading">Our Mission</h3>
					<p className="text">
						To help visionary startups launch with confidence and
						empower enterprises to scale with agility — by
						delivering innovative digital solutions, fostering
						long-term partnerships, and creating meaningful user
						experiences built on trust, collaboration, and results.
					</p>
				</div>
				<img data-aos="fade-left" src="/our-mission.svg" alt="about" />
			</div>
		</section>
	);
}
