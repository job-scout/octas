import Introduction from "@/components/about/Introduction";
import BookNowCTA from "@/components/common/BookNowCTA";
import Hero from "@/components/common/Hero";
import Header from "@/components/Header";
import React from "react";

function About() {
	return (
		<div className="overflow-hidden">
			<Header />
			<Hero
				image="/banner-bg.png"
				heading="Empowering Innovation Through Agile Tech Partnership"
				subHeading="From startups to enterprises, Octas Solutions delivers tailor-made applications with a relentless focus on performance, scalability, and exceptional user experience."
            />
            <Introduction />
            <BookNowCTA/>
		</div>
	);
}

export default About;
