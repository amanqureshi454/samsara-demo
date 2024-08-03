"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Button from "../components/ui/button";
import Navbar from "../components/ui/navbar";
import MobileMenu from "../components/ui/mobileMenu";
import Footer from "../components/footer";
import { HoverEffect } from "../components/ui/card-hover-effect";

const ServicesPage = () => {
  const menuContainer = useRef(null);
  const menuItemsText = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const links = [
    { id: 1, href: "/", text: "Home" },
    { id: 2, href: "/about", text: "About" },
    { id: 3, href: "/services", text: "Services" },
    { id: 4, href: "/contact", text: "Contact" },
  ];

  const animateMenu = (isOpen) => {
    if (isOpen) {
      gsap.from(menuContainer.current, {
        height: 0,
        duration: 1.2,
        ease: "power",
      });

      gsap.from(
        menuItemsText.current.map((element) => element),
        {
          opacity: 0,
          y: 100,
          duration: 1,
          stagger: 0.2,
          ease: "back",
        },
      );
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    animateMenu(menuOpen);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <>
      <section
        style={{ backgroundImage: "url(/images/services.png)" }}
        className="relative flex items-center justify-center overflow-hidden bg-cover bg-top px-20 sm:h-screen sm:px-4 md:h-[70vh] md:px-10 xl:h-screen"
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <Navbar
          links={links}
          isSticky={isSticky}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        <MobileMenu
          links={links}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        <div className="left__content relative z-10 flex flex-col items-start text-white sm:w-full md:w-full xxl:w-[60%]">
          <h1 className="text-left font-medium leading-tight sm:text-2xl sm:leading-tight md:text-4xl md:leading-none xl:text-[75px] xxl:text-[80px]">
            Services
          </h1>
          <p className="my-6 text-left text-lg leading-relaxed sm:w-full sm:text-lg md:w-full md:text-lg md:leading-relaxed lg:w-[80%] xl:w-[40%] xxl:w-[80%] xxl:text-4xl">
            Turn your business dreams into reality with our expert guidance on
            the Innovator Visa. We provide end-to-end support, from preparing
            your business plan to navigating the application process, ensuring a
            seamless experience.
          </p>
          <Button title={"Let’s Work Together"} />
        </div>
      </section>
      <div className="relative mx-auto mt-10 h-full max-w-7xl sm:px-4 md:px-4 lg:px-10">
        <h4 className="mt-10 text-left font-[Satoshi] text-3xl font-semibold capitalize text-black">
          Our Services
        </h4>
        <p className="mt-2 text-left font-[Satoshi] text-lg font-medium capitalize text-black">
          We can inspire and offer different services
        </p>

        <HoverEffect />
      </div>
      <div className="welcome_section relative h-full w-full bg-white sm:px-4 sm:py-10 md:px-4 md:py-20 xl:px-20 xl:py-36">
        <div className="title relative mx-auto flex w-full max-w-6xl items-start justify-start sm:flex-col sm:gap-10 md:gap-10 xl:gap-20">
          <div className="left__about rounded-xl sm:w-full md:h-[350px] md:w-1/2 lg:h-[450px] xl:h-[500px]">
            <img
              src="/images/about-us.png"
              className="h-full w-full rounded-xl object-cover"
              alt=" about us image"
              srcset=""
            />
          </div>
          <div className="right__about flex flex-col items-start justify-start sm:w-full md:w-1/2 lg:h-[500px]">
            <p className="text-left font-[Satoshi] text-xl font-semibold capitalize text-blue-600">
              WELCOME TO SAMSARA
            </p>
            <h4 className="my-4 text-left font-[Satoshi] font-semibold capitalize text-black sm:text-lg md:my-2 lg:text-2xl xl:text-xl">
              Welcome To Immigration Advisory Services
            </h4>
            <p className="mt-2 text-left font-[Satoshi] font-normal capitalize text-black md:mt-0 md:text-sm lg:mt-2 lg:text-xl xl:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              maiores quia hic quaerat, cumque quidem totam id porro distinctio
              voluptatibus?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              maiores quia hic quaerat, cumque quidem totam id porro distinctio
              voluptatibus?
            </p>
            <p className="mt-5 text-left font-[Satoshi] font-normal capitalize text-black md:text-sm lg:text-xl xl:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              maiores quia hic quaerat, cumque quidem totam id porro distinctio
              voluptatibus?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              maiores quia hic quaerat, cumque quidem totam id porro distinctio
              voluptatibus?
            </p>
          </div>
        </div>
      </div>
      <div className="mb-20 flex h-[250px] w-full flex-col items-center justify-center bg-[#233552] py-6">
        <p className="font-[Satoshi]lg:text-3xl text-center font-semibold capitalize text-white sm:text-lg md:text-2xl">
          WE MAKE A DIFFERENCE
        </p>{" "}
        <p className="mt-3 text-center font-[Satoshi] font-semibold capitalize text-white sm:text-lg md:text-2xl">
          We Have Been Counselling Innovator Visa Opportunities In Foreign
          Countries
        </p>
        <Button title={"Book a Consultant"} styles={"mt-5"} />
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
