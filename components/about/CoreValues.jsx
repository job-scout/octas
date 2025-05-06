/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { CORE_VALUES } from "../../data/ABOUT_DATA";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CoreValues() {
  return (
    <section className="bg-[#FEFFF6] items-center ">
      <h2 className="heading lg:inline-flex hidden">Core Values</h2>
      {CORE_VALUES.map((value, index) => (
        <div
          key={index}
          className="lg:inline-flex hidden bg-white flex flex-col lg:flex-row gap-10 lg:gap-20 drop-shadow-md p-5 lg:pr-20 items-center"
        >
          <img
            data-aos="fade-right"
            className="w-48 h-48 object-cover"
            src={value.src}
            alt="about"
          />
          <div
            data-aos="fade-left"
            className="flex flex-col gap-5 max-w-xl lg:max-w-2xl text-center lg:text-start "
          >
            <h3 className="text-2xl font-bold leading-10">{value.heading}</h3>
            <p className="text ">{value.description}</p>
          </div>
        </div>
      ))}







      <div className="lg:hidden  container mx-auto  CORE">
      <h2 className="heading mb-7">Core Values</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}

          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {CORE_VALUES.map((value, index) => (
            <SwiperSlide key={index}>
              <div >
                <div
                  key={index}
                  className="w-full bg-white flex flex-col  gap-6 min-h-[420px] px-5 py-8 items-center"
                >
                  <img

                    className="w-32 h-32 object-cover"
                    src={value.src}
                    alt="about"
                  />
                  <div

                    className="flex flex-col gap-5  text-center  "
                  >
                    <h3 className="text-xl font-bold ">{value.heading}</h3>
                    <p className="text-sm ">{value.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>



  );
}
