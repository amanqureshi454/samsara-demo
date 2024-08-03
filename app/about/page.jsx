"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Button from "../components//ui/button";
import Navbar from "../components//ui/navbar";
import MobileMenu from "../components/ui/mobileMenu";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Footer from "../components/footer";

const AboutPage = () => {
  const menuContainer = useRef(null);
  const menuItemsText = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

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

    animateMenu(menuOpen);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);
  return (
    <>
      <section
        style={{ backgroundImage: "url(/images/about-us-2.jpg)" }}
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
            About Us
          </h1>
          <p className="my-6 text-left text-lg leading-relaxed sm:w-full sm:text-lg md:w-full md:text-lg md:leading-relaxed lg:w-[80%] xl:w-[40%] xxl:w-[80%] xxl:text-4xl">
            We offer tailored assistance throughout the visa application
            process, ensuring that each client's needs and goals are met with
            precision and care.
          </p>
          <Button title={"Let’s Work Together"} />
        </div>
      </section>
      <div className="about-us_section relative h-full w-full bg-white py-24 sm:px-4 md:px-4 lg:h-full lg:px-10 xl:px-20">
        <div className="title relative mx-auto flex w-full max-w-7xl items-start justify-center sm:flex-col sm:gap-6 md:gap-5 lg:gap-10 xl:gap-20">
          <div className="left__about rounded-lg sm:w-full md:w-1/2 lg:h-[500px] xl:h-[550px]">
            <img
              src="/images/about.png"
              className="h-full w-full rounded-lg object-cover"
              alt=" about us image"
              srcset=""
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
              enabling our clients to navigate each step with confidence and
              ease.
            </h4>
            <p className="mt-2 text-left font-[Satoshi] font-semibold capitalize text-black md:text-xs lg:text-sm xl:text-lg">
              Personalized Support:{" "}
              <span className="font-normal">
                {" "}
                We offer tailored assistance throughout the visa application
                process, ensuring that each client's needs and goals are met
                with precision and care.
              </span>
            </p>
            <p className="mt-2 text-left font-[Satoshi] font-semibold capitalize text-black md:text-xs lg:text-sm xl:text-lg">
              Expert Guidance:{" "}
              <span className="font-normal">
                {" "}
                Our team of seasoned professionals provides invaluable advice on
                developing compelling business plans that attract endorsements
                from leading innovation bodies.
              </span>
            </p>
            <p className="mt-2 text-left font-[Satoshi] font-semibold capitalize text-black md:text-xs lg:text-sm xl:text-lg">
              Global Connections:{" "}
              <span className="font-normal">
                {" "}
                We connect our clients with a world-class network of mentors,
                investors, and partners, facilitating the establishment of vital
                relationships and opening doors to global opportunities.
              </span>
            </p>
            <p className="mt-2 text-left font-[Satoshi] font-semibold capitalize text-black md:text-xs lg:text-sm xl:text-lg">
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
      <div className="our__goals_section relative h-full w-full bg-white py-24 sm:px-4 md:px-4 lg:h-full lg:px-10 xl:px-20">
        <div className="goal-1 relative mx-auto flex w-full max-w-7xl items-start justify-center sm:flex-col sm:gap-6 md:gap-5 lg:gap-10 xl:gap-20">
          <div className="left__goals rounded-lg sm:w-full md:w-1/2 lg:h-[300px] xl:h-[350px]">
            <img
              src="/images/vision.jpg"
              className="h-full w-full rounded-lg object-cover"
              alt=" our goals image"
            />
          </div>
          <div className="right__goals flex flex-col items-start justify-start sm:w-full md:w-1/2">
            <h1 className="text-left font-medium leading-tight sm:text-2xl sm:leading-tight md:text-3xl md:leading-none xl:text-5xl xxl:text-[60px]">
              Our Mission
            </h1>
            <p className="text-left text-lg leading-relaxed sm:w-full sm:text-lg md:my-3 md:w-full md:text-sm md:leading-relaxed lg:my-6 lg:text-lg xxl:text-4xl">
              our mission is to empower individuals and businesses to achieve
              their global ambitions through expert UK visa consulting services.
              We are dedicated to delivering excellence, providing personalized
              solutions, and maintaining integrity and transparency. By staying
              updated with the latest immigration laws and building lasting
              relationships, we strive to ensure our clients' success and
              satisfaction every step of the way.
            </p>
          </div>
        </div>
        <div className="goal-2 relative mx-auto mt-16 flex w-full max-w-7xl items-start justify-center sm:flex-col-reverse sm:gap-6 md:gap-5 lg:gap-10 xl:gap-20">
          <div className="right__goals flex flex-col items-start justify-start sm:w-full md:w-1/2">
            <h1 className="text-left font-medium leading-tight sm:text-2xl sm:leading-tight md:text-3xl md:leading-none xl:text-5xl xxl:text-[60px]">
              Our Vision
            </h1>
            <p className="text-left text-lg leading-relaxed sm:w-full sm:text-lg md:my-3 md:w-full md:text-sm md:leading-relaxed lg:my-6 lg:text-lg xxl:text-4xl">
              our vision is to be the leading UK visa consulting firm known for
              expertise, integrity, and client success. We aim to set industry
              standards by delivering innovative and effective visa solutions,
              connect people globally through seamless immigration processes,
              and enhance client experiences with supportive and rewarding
              application procedures. We envision a world where opportunities
              are limitless and are committed to making this a reality for our
              clients.
            </p>
          </div>
          <div className="left__goals rounded-lg sm:w-full md:w-1/2 lg:h-[300px] xl:h-[350px]">
            <img
              src="/images/mission.jpg"
              className="h-full w-full rounded-lg object-cover"
              alt=" our goals image"
              srcset=""
            />
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className="why-us h-full w-full py-24 sm:px-4 md:px-4 lg:h-full lg:px-10 xl:px-20"
      >
        <p className="text-center font-[Satoshi] text-3xl font-semibold capitalize text-black">
          Why SamSara Consultancy?
        </p>
        <h4 className="mx-auto md:w-[70%] sm:w-full text-center font-[Satoshi] font-semibold capitalize text-black sm:mt-3 md:text-xs md:my-3 lg:my-6 lg:text-sm xl:text-lg">
          At SamSara Consultancy, we are dedicated to empowering visionary
          entrepreneurs and helping them realize their global business
          ambitions. Our mission is to provide comprehensive support and expert
          guidance throughout the Innovator Foundation Visa process, enabling
          our clients to navigate each step with confidence and ease.
        </h4>
        <div className="md:mt-16 sm:mt-8 flex justify-around">
          <div className="flex flex-col items-center justify-center text-center">
            {inView && (
              <CountUp
                end={150}
                duration={2}
                suffix="+"
                className="text-4xl font-bold text-blue-900"
              />
            )}
            <p className="text-lg font-semibold text-black">Clients</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            {inView && (
              <CountUp
                end={150}
                duration={2}
                suffix="+"
                className="text-4xl font-bold text-blue-900"
              />
            )}
            <p className="text-xl font-semibold text-black">Clients</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            {inView && (
              <CountUp
                end={150}
                duration={2}
                suffix="+"
                className="text-4xl font-bold text-blue-900"
              />
            )}
            <p className="text-xl font-semibold text-black">Countries</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
