"use client";
import React from "react";
import Button from "./ui/button";

const GetInTouch = () => {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden sm:mt-10 sm:h-full sm:pb-10 md:mt-10 md:h-full md:pb-10">
        <div className="get-in-touch_wrapper flex h-full w-full items-center justify-between sm:flex-col-reverse sm:gap-10 sm:px-4">
          <div className="left relative h-full sm:w-full sm:p-0 md:pl-5 xl:w-1/2 xl:pl-10">
            <div className="items-left flex w-full flex-col justify-start">
              <p className="xxl:text-5xl text-left font-[Satoshi] font-semibold capitalize text-black sm:text-center md:text-lg xl:text-3xl">
                The SamSara Advantage
              </p>
              <h4 className="xxl:text-3xl my-4 text-left font-[Satoshi] font-semibold capitalize text-black md:text-sm xl:text-lg">
                SamSara Consultancy is dedicated to empowering visionary
                entrepreneurs. We offer comprehensive support and guidance
                throughout the Innovator Foundation Visa process, helping you
                navigate every step with confidence.
              </h4>
              <p className="xxl:text-2xl mt-2 text-left font-[Satoshi] font-medium capitalize text-black md:text-sm xl:text-lg">
                • Personalized support throughout the visa application process.
              </p>
              <p className="xxl:text-2xl mt-2 text-left font-[Satoshi] font-medium capitalize text-black md:text-sm xl:text-lg">
                • Expert guidance on developing a compelling business plan.
              </p>
              <p className="xxl:text-2xl mt-2 text-left font-[Satoshi] font-medium capitalize text-black md:text-sm xl:text-lg">
                • Help securing endorsements from leading innovation bodies.
              </p>
              <p className="xxl:text-2xl mt-2 text-left font-[Satoshi] font-medium capitalize text-black md:text-sm xl:text-lg">
                • Ongoing advice and resources for success in the UK market.
              </p>
              <Button title={"Get in touch"} styles={"mt-4"} />
            </div>
          </div>
          <div className="right relative h-full sm:w-full xl:w-1/2">
            <img
              src="/images/getintouch.png"
              className="h-full w-full object-cover"
              alt="hero image"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-[150px] w-[400px] sm:hidden md:hidden xl:block">
          <img
            src="/images/Rectangle.png"
            className="h-full w-full object-cover"
            alt="hero image"
          />
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
