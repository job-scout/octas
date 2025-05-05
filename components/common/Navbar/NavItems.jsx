import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const NavItems = () => {
  const navigation = [
    { name: "Home", href: "/" },
   
    // { name: "Features", href: "/our-features" },
     { name: "Why Us", href: "/why-us" },
   
    { name: "Contact Us", href: "/contact-us" },
    
  ];
  const router = useRouter();

  return (
    <div className=" flex flex-col items-center gap-10 lg:mt-0 lg:flex-row">
      <ul className="flex flex-col items-center gap-6 text-base font-semibold sm:gap-10 lg:flex-row">
        {navigation?.map((nav, index) => (
          <li key={index} className={`flex `}>
            <Link
              className={ `font-semibold ${
                (router.pathname === "/" && nav.href === "/") ||
                
                (router.pathname !== "/" && router.pathname.includes("our-features") && nav.href === "/our-features") ||
                 
                (router.pathname !== "/" && router.pathname.includes("contact-us") && nav.href === "/contact-us") ||
                (router.pathname !== "/" && router.pathname.includes("why-us") && nav.href === "/why-us") ||
                router.pathname === nav.href ? "text-green" : "text-[#000000]"
              } hover:text-green`}
              href={nav.href}
            >
              <span className="poppins-text">{nav.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button
          className="rounded-md px-8 py-2 font-bold text-secondary bg-primary"
        // onClick={() => alert("Nothing to download!")}
      >
       Book Now
      </button> 
    </div>
  );
};

export default NavItems;
