import React, { useContext, useEffect, useState } from "react";
import NavItems from "./NavItems";
import TechnicalServices from "./Icons/TechnicalServices";
import DigitalMarketing from "./Icons/DigitalMarketing";
import Apps from "./Icons/Apps";
import Softwares from "./Icons/Softwares";
import FinTech from "./Icons/FinTech";
import PropTech from "./Icons/PropTech";
import SocialLifeStyle from "./Icons/SocialLifeStyle";
import EdTech from "./Icons/EdTech";
import RetailCommerce from "./Icons/RetailCommerce";
import HealthCare from "./Icons/HealthCare";

import { useRouter } from "next/router";

const NewNavbar = ({ windowHeight, activeNav, setActiveNav }) => {
	

	const router = useRouter();

	const navItems = {
		services: {
			name: "Services",
			link: null,
			title: "service",
			id: 1,
			child: [
				{
					name: "Technical Services",
					link: "/services",
					icon: <TechnicalServices />,
				},
				{
					name: "Digital Marketing Services",
					link: "/digital-marketing-services",
					icon: <DigitalMarketing />,
				},
			],
		},
		Portfolio: {
			name: "Portfolio",
			link: null,
			title: "portfolio",
			id: 2,
			child: [
				{
					name: "Apps",
					link: "/our-apps",
					icon: <Apps />,
				},
				{
					name: "Softwares",
					link: "/our-demo-software",
					icon: <Softwares />,
				},
				{
					name: "Digital Marketing",
					link: "/digital-marketing-portfolio",
					icon: <DigitalMarketing />,
				},
			],
		},
		Industries: {
			name: "Industries",
			title: "industries",
			link: "/industries",
			id: 3,
			child: [
				{
					name: "FinTech",
					link: "/industries/fintech",
					icon: <FinTech />,
				},
				{
					name: "PropTech",
					link: "/industries/proptech",
					icon: <PropTech />,
				},
				{
					name: "Social & Lifestyle",
					link: "/industries/social-lifestyle",
					icon: <SocialLifeStyle />,
				},
				{
					name: "EdTech",
					link: "/industries/edtech",
					icon: <EdTech />,
				},
				{
					name: "Retail & Commerce",
					link: "/industries/retail-commerce",
					icon: <RetailCommerce />,
				},
				{
					name: "Healthcare",
					link: "/industries/healthcare",
					icon: <HealthCare />,
				},
			],
		},
		About: {
			name: "About",
			link: "/about",
			title: "about",
			id: 4,
			child: [],
		},
		Careers: {
			name: "Careers",
			link: "/careers",
			title: "careers",
			id: 5,
			child: [],
		},
	};

	useEffect(() => {
		const urls = [
			"/services",
			"/our-apps",
			"/our-demo-software",
			"/about",
			"/careers",
		];

		const trackUrl = (url) => {
			const currentUrl = url.replace(/\//g, "");

			if (urls.includes(url)) {
				if (window.fbq) {
					const pathName = currentUrl.split("?")[0];
					const capitalizedPathname =
						pathName
							.split("-")
							.map(
								(word) =>
									word.charAt(0).toUpperCase() +
									word.slice(1),
							)
							.join("-") + "-Page";
					//  console.log(capitalizedPathname);
					window.fbq("track", capitalizedPathname, {
						content_name: currentUrl,
						content_category: "URL",
					});
				}
			}
		};

		trackUrl(router.pathname);

		router.events.on("routeChangeComplete", trackUrl);

		return () => {
			router.events.off("routeChangeComplete", trackUrl);
		};
	}, []);

	return (
		<div
			className="hidden lg:flex lg:flex-[1] 2xl:flex-[.8]
         gap-16 items-center justify-end "
		>
			{Object.keys(navItems).map((key, index) => (
				<NavItems
					key={index}
					details={navItems[key]}
					itemNo={index}
					activeNav={activeNav}
					setActiveNav={setActiveNav}
				/>
			))}
			
		</div>
	);
};

export default NewNavbar;
