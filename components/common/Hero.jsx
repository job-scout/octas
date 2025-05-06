/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import GetInTouchButton from "./GetInTouchButton";


export default function Hero({
  image,
  heading,
  subHeading,
 
}) {
  return (
    <div className="relative w-screen h-screen">
      <span className="bg-black/70 absolute top-0 bottom-0 right-0 left-0 z-[1]">
        <div className="h-full flex flex-col gap-10 md:gap-10 justify-center items-center text-white">
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center text-center px-4"
          >
            <h1 className="heading max-w-[750px]">{heading}</h1>
            <p className="max-w-[600px] text-base sm:text-xl font-normal mt-4">
              {subHeading}
            </p>
          </div>
         <GetInTouchButton  />  
        </div>
      </span>
      <img src={image} alt="hero" className="w-full h-full object-cover" />
    </div>
  );
}
