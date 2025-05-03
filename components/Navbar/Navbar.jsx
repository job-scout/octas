import Image from "next/image";
import React, { useState } from "react";

import { Menu, X } from "lucide-react";
import NavItems from "./NavItems";
import Link from "next/link";

const Navbar = () => {
  const [navModal, setNavModal] = useState(false);
  // const [menuHam, setMenuHam] = useState(false)

  return (
    <>
      <section className="sticky top-0 z-50 mb-1 flex  justify-center bg-white lg:py-4 container mx-auto px-2 lg:px-4 2xl:w-[90%] w-full">
        <div className="container hidden w-full justify-between px-4 py-2 lg:flex">
          <Link href="/">
           <div className="logo  logo-clip text-3xl font-bold text-primary">OCTAS</div>
          </Link>
          <NavItems />
        </div>
      </section>
      <div
        className={`sticky top-0 z-50 h-16 flex  items-center justify-between bg-white px-4 lg:hidden`}
      >
       <Link href="/">
           <div className="logo  logo-clip text-2xl font-bold text-primary">OCTAS</div>
          </Link>
        <div>
          {!navModal ? (
            <Menu
              className="h-8 w-8"
              onClick={() =>
                navModal ? setNavModal(false) : setNavModal(true)
              }
            />
          ) : null}
        </div>
        <div
          className={`fixed right-0 top-0 z-50 h-screen w-[240px] bg-white px-4 pt-5 shadow-xl shadow-black  ${
            !navModal ? "hidden" : "block lg:hidden"
          }`}
        >
          <div className="flex items-center justify-between pb-16">
           <Link href="/">
           <div className="logo  logo-clip text-2xl font-bold text-primary">OCTAS</div>
          </Link>
            <span>
              {navModal ? (
                <X
                  className="z-50 h-8 w-8"
                  onClick={() =>
                    navModal ? setNavModal(false) : setNavModal(true)
                  }
                />
              ) : null}
            </span>
          </div>
          <NavItems />
        </div>
      </div>
    </>
  );
};

export default Navbar;
