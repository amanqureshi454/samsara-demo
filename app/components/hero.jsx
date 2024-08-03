"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import Button from "./ui/button";
import Navbar from "./ui/navbar";
import MobileMenu from "./ui/mobileMenu";

export default function Hero() {
  const menuContainer = useRef(null);
  const menuItemsText = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const links = [
    { id: 1, href: "/", text: "Home" },
    { id: 2, href: "/about", text: "About" },
    { id: 3, href: "/services", text: "Services" },
    { id: 4, href: "/contact", text: "Contact" },
    // Add more links here
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

    // Defer GSAP animations to avoid blocking rendering
    setTimeout(() => {
      animateMenu(menuOpen);
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-cover bg-top px-20 sm:h-screen sm:px-4 md:h-[70vh] md:px-10 xl:h-screen">
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      <Image
        src="/images/hero1.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={75}
        priority
      />
      <Navbar
        links={links}
        isSticky={isSticky}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <MobileMenu links={links} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="left__content relative z-10 flex flex-col items-start text-white sm:w-full md:w-full xxl:w-[60%]">
        <h1 className="text-left font-medium leading-tight sm:text-2xl sm:leading-tight md:text-4xl md:leading-none xl:text-[65px] xxl:text-[80px]">
          Unlock Your Potential <br /> & Global Ambitions
        </h1>
        <p className="my-6 text-left text-lg leading-relaxed sm:w-full sm:text-lg md:w-full md:text-lg md:leading-relaxed lg:w-[80%] xl:w-[40%] xxl:w-[80%] xxl:text-4xl">
          At SamSara Consultancy, We Help Unlock Your Global Business Dreams –
          The Innovator Foundation Visa
        </p>
        <Button title={"Let’s Work Together"} />
      </div>
    </section>
  );
}
