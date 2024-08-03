"use client";
import React from "react";
import Button from "./ui/button";

const Goals = () => {
  return (
    <div
      className="relative w-full bg-cover bg-top sm:h-[50vh] md:h-[70vh] lg:h-[90vh]"
      style={{ backgroundImage: "url(/images/goals-bg.png)" }}
    >
      <div className="flex h-full flex-col items-start justify-end px-4 pb-10 md:w-[70%] md:px-10 md:pb-28 xl:w-1/2">
        <p className="rounded-4xl bg-[#007bff] px-3 py-2 text-left font-[Satoshi] font-semibold capitalize text-white md:px-5 md:py-4 md:text-lg lg:text-xl">
          Changing the way
        </p>
        <h4 className="text-left font-[Satoshi] font-semibold capitalize text-white sm:my-2 md:my-4 md:text-xl lg:text-3xl">
          The primary goal of business consulting is to help organizations
          improve their performance, solve specific problems, and achieve their.
        </h4>
        <Button title={"Get in touch"} styles={"md:mt-5 sm:mt-2"} />
      </div>
      {/* Your content goes here */}
    </div>
  );
};

export default Goals;
