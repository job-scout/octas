import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";


import { useRouter } from "next/router";

import Image from "next/image";


import NewNavbar from "./NewNavbar/NewNavbar";
import TechnicalServices from "./NewNavbar/Icons/TechnicalServices";
import DigitalMarketing from "./NewNavbar/Icons/DigitalMarketing";
import Apps from "./NewNavbar/Icons/Apps";
import Softwares from "./NewNavbar/Icons/Softwares";
import FinTech from "./NewNavbar/Icons/FinTech";
import PropTech from "./NewNavbar/Icons/PropTech";
import SocialLifeStyle from "./NewNavbar/Icons/SocialLifeStyle";
import EdTech from "./NewNavbar/Icons/EdTech";
import RetailCommerce from "./NewNavbar/Icons/RetailCommerce";
import HealthCare from "./NewNavbar/Icons/HealthCare";
import SmallDeviceNavItems from "./NewNavbar/SmallDeviceNavItems";

export default function Header() {
	const [windowHeight, setWindowHeight] = useState("");
	
	const [activeNav, setActiveNav] = useState(null);
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
	const handleScroll = () => {
		setWindowHeight(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const [menu, setMenu] = useState(false);

	return (
		<>
			<header
				className={`flex w-full justify-between items-center px-5 lg:px-10 py-5 top-0 z-[101] fixed font-medium drop-shadow ${
					windowHeight >= 100
						? "bg-white text-black"
						: "bg-transparent text-white"
				} transition-five`}
			>
				<Link href="/">
					<div className="flex items-center gap-4">
					
						
							{windowHeight > 100 ? 	<img
								src={"/octas.png"}
								alt="Logo"
								className="h-12 lg:h-14 w-auto"
							/> : 	<img
								src={"/octas-white.png"}
								alt="Logo"
								className="h-12 lg:h-14 w-auto"
							/>
							}
						
						
					</div>
				</Link>
				
				<NewNavbar
					windowHeight={windowHeight}
					navItem={navItems}
					activeNav={activeNav}
					setActiveNav={setActiveNav}
				/>
				{menu ? (
					""
				) : (
					<span
						onClick={() => setMenu(true)}
						className="cursor-pointer flex lg:hidden"
					>
						<Image
							src={
								windowHeight >= 100
									? "/icons/menu-black.svg"
									: "/icons/menu.svg"
							}
							width="34"
							height="34"
							alt="close"
						/>
					</span>
				)}
			</header>
			{menu ? (
				<main
					className={`fixed z-[9999] top-0 bottom-0 right-0 left-0 flex items-center justify-end lg:hidden `}
				>
					<main
						data-aos="fade-left"
						className="relative bg-white z-20 w-full h-[100vh] flex flex-col justify-start overflow-auto"
					>
						<div className="flex p-10 justify-between w-full">
							<img
								src={"/octas.png"}
								alt="Logo"
								className="h-12 lg:h-14 w-auto"
							/> 
							<span
								onClick={() => setMenu(false)}
								className="pt-1 cursor-pointer"
							>
								<Image
									src="/icons/cut.svg"
									width="28"
									height="28"
									alt="close"
								/>
							</span>
						</div>
						<div className="text-container items-center">
							<h2 className="sub_heading">Menu</h2>
							<div className="w-[70%] text-base font-semibold flex flex-col gap-10">
								{Object.keys(navItems).map((key, index) => (
									<SmallDeviceNavItems
										key={index}
										details={navItems[key]}
										itemNo={index}
										activeNav={activeNav}
										setActiveNav={setActiveNav}
									/>
								))}
							</div>
						</div>
					
					</main>
					<span
						onClick={() => setMenu(false)}
						className={`absolute z-10 top-0 bottom-0  right-0 left-0 bg-black/70 cursor-pointer`}
					></span>
				</main>
			) : (
				""
			)}
		</>
	);
}
