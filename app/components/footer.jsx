"use client";

import React from "react";
import Button from "./ui/button";

const Footer = () => {
  return (
    <div className="footer h-full w-full bg-[#233552] pt-16">
      <div className="mx-auto flex w-full items-start justify-between py-10 sm:flex-col sm:px-4 md:px-10 xl:max-w-7xl">
        <div className="flex flex-col items-start justify-start gap-7 md:w-1/2 xl:w-[40%]">
          <div className="footer_img flex items-center justify-center gap-3">
            <img
              src="/images/logo.jpg"
              className="object-cover sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-32"
              alt="SamSara Logo"
            />
            <p className="text-left font-[Satoshi] font-semibold capitalize text-white md:text-xl lg:text-2xl">
              SamSara Consultancy
            </p>
          </div>
          <p className="text-left font-[Satoshi] font-normal capitalize text-white md:text-sm lg:text-lg">
            Your ticket to launching and scaling an innovative business in the
            UK, with expert guidance and support each step of the way
          </p>
          <Button title={"Get Consultant"} styles={""} />
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-2 sm:items-start md:w-[25%] xl:w-[30%]">
          <p className="text-left font-[Satoshi] font-semibold capitalize text-white md:text-xl lg:text-2xl">
            Our Services
          </p>
          <p className="hover-links cursor-pointer text-left font-[Satoshi] font-normal capitalize text-white md:text-sm lg:text-lg">
            Application Process
          </p>
          <p className="hover-links cursor-pointer text-left font-[Satoshi] font-normal capitalize text-white md:text-sm lg:text-lg">
            Visa Guidance
          </p>
          <p className="hover-links cursor-pointer text-left font-[Satoshi] font-normal capitalize text-white md:text-sm lg:text-lg">
            Immigration Services
          </p>
          <p className="hover-links cursor-pointer text-left font-[Satoshi] font-normal capitalize text-white md:text-sm lg:text-lg">
            Customized Solutions
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-2 sm:items-start md:w-[25%] xl:w-[30%]">
          <p className="text-left font-[Satoshi] font-semibold capitalize text-white md:text-xl lg:text-2xl">
            Useful Links
          </p>
          <p className="hover-links cursor-pointer text-left font-[Satoshi] font-normal capitalize text-white md:text-sm lg:text-lg">
            Home
          </p>
          <p className="hover-links cursor-pointer text-left font-[Satoshi] font-normal capitalize text-white md:text-sm lg:text-lg">
            About
          </p>
          <p className="hover-links cursor-pointer text-left font-[Satoshi] font-normal capitalize text-white md:text-sm lg:text-lg">
            Services
          </p>
          <p className="hover-links cursor-pointer text-left font-[Satoshi] font-normal capitalize text-white md:text-sm lg:text-lg">
            Contact
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between pb-4 pt-10 sm:flex-col sm:gap-2 md:px-6 lg:px-20">
        <p className="text-left font-[Satoshi] text-lg font-medium capitalize text-white">
          http://samsaratrust.org/
        </p>
        <p className="text-left font-[Satoshi] text-lg font-medium capitalize text-white">
          suraj@forofuse.com
        </p>
        <p className="text-left font-[Satoshi] text-lg font-medium capitalize text-white">
          +44 7448006087, +91 9265064513
        </p>
      </div>
    </div>
  );
};

export default Footer;
