"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

function WhyToChoose() {
  return (
    <>
      <div className="about-us_section relative h-full w-full bg-white xl:px-20 xl:py-36 sm:px-4 sm:py-10 md:px-4 md:py-20">
        <div className="title relative mx-auto flex w-full max-w-6xl items-start justify-center sm:flex-col sm:gap-10 md:gap-10 xl:gap-20">
          <div className="left__about rounded-xl sm:w-full md:h-[350px] md:w-1/2 lg:h-[450px] xl:h-[500px]">
            <img
              src="/images/info.png"
              className="h-full w-full rounded-xl object-cover"
              alt=" about us image"
              srcset=""
            />
          </div>
          <div className="right__about flex lg:h-[500px] flex-col items-start justify-start sm:w-full md:w-1/2">
            <p className="text-left font-[Satoshi] text-xl font-semibold capitalize text-black">
              Why the Innovator Foundation Visa?
            </p>
            <h4 className="my-4 text-left font-[Satoshi] font-semibold capitalize text-black sm:text-lg md:my-2 lg:text-2xl xl:text-3xl">
              We offer Business Insight world class consulting
            </h4>
            <p className="mt-2 lg:mt-2 text-left font-[Satoshi] font-semibold capitalize text-black md:mt-0 md:text-sm lg:text-xl xl:text-xl">
              Launch Your Vision:{" "}
              <span className="font-normal">
                {" "}
                Turn your unique ideas into a thriving UK business.
              </span>
            </p>
            <p className="mt-2 text-left font-[Satoshi] font-semibold capitalize text-black md:text-sm lg:text-xl xl:text-xl">
              Expert Guidance:{" "}
              <span className="font-normal">
                {" "}
                Tap into a world-class network of mentors and investors.
              </span>
            </p>
            <p className="mt-2 text-left font-[Satoshi] font-semibold capitalize text-black md:text-sm lg:text-xl xl:text-xl">
              Global Connections:
              <span className="font-normal">
                {" "}
                Build partnerships and find clients across the globe.
              </span>
            </p>
            <p className="mt-2 text-left font-[Satoshi] font-semibold capitalize text-black md:text-sm lg:text-xl xl:text-xl">
              Innovation Central:
              <span className="font-normal">
                {" "}
                Join a cutting-edge hub of technology and entrepreneurial
                spirit.
              </span>
            </p>
            <p className="mt-2 text-left font-[Satoshi] font-semibold capitalize text-black md:text-sm lg:text-xl xl:text-xl">
              Build Your Future:
              <span className="font-normal">
                {" "}
                Achieve long-term residency and success in the UK.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyToChoose;
