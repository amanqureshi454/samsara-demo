import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-us_section relative w-full bg-white py-24 sm:px-4 md:px-4 lg:h-full lg:px-10 xl:h-screen xl:px-20">
      <div className="title relative mx-auto flex w-full max-w-7xl items-start justify-center sm:flex-col sm:gap-6 md:gap-5 lg:gap-10 xl:gap-20">
        <div className="left__about rounded-lg sm:w-full md:w-1/2 lg:h-[500px] xl:h-[550px]">
          <Image
            src="/images/about.png"
            className="h-auto w-full rounded-lg object-cover"
            alt="about us image"
            width={600} // Use the natural width of the image if known
            height={400} // Use the natural height of the image if known
            quality={100} // Set the quality to maximum (optional)
            layout="responsive" // Ensures the image scales correctly
          />
        </div>
        <div className="right__about flex flex-col items-start justify-start sm:w-full md:w-1/2 lg:h-[500px]">
          <p className="text-left font-[Satoshi] text-xl font-semibold capitalize text-black">
            About us
          </p>
          <h4 className="text-left font-[Satoshi] font-semibold capitalize text-black sm:mt-2 md:text-xs lg:my-4 lg:text-sm xl:text-lg">
            At SamSara Consultancy, we are dedicated to empowering visionary
            entrepreneurs and helping them realize their global business
            ambitions. Our mission is to provide comprehensive support and
            expert guidance throughout the Innovator Foundation Visa process,
            enabling our clients to navigate each step with confidence and ease.
          </h4>
          <p className="mt-2 text-left font-[Satoshi] font-semibold capitalize text-black md:text-xs lg:text-sm">
            Personalized Support:{" "}
            <span className="font-normal">
              {" "}
              We offer tailored assistance throughout the visa application
              process, ensuring that each client's needs and goals are met with
              precision and care.
            </span>
          </p>
          <p className="mt-2 text-left font-[Satoshi] font-semibold capitalize text-black md:text-xs lg:text-sm">
            Expert Guidance:{" "}
            <span className="font-normal">
              {" "}
              Our team of seasoned professionals provides invaluable advice on
              developing compelling business plans that attract endorsements
              from leading innovation bodies.
            </span>
          </p>
          <p className="mt-2 text-left font-[Satoshi] font-semibold capitalize text-black md:text-xs lg:text-sm">
            Global Connections:{" "}
            <span className="font-normal">
              {" "}
              We connect our clients with a world-class network of mentors,
              investors, and partners, facilitating the establishment of vital
              relationships and opening doors to global opportunities.
            </span>
          </p>
          <p className="mt-2 text-left font-[Satoshi] font-semibold capitalize text-black md:text-xs lg:text-sm">
            Ongoing Resources:
            <span className="font-normal">
              {" "}
              We provide continuous support and resources to help our clients
              succeed in the competitive UK market, fostering long-term growth
              and success.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
