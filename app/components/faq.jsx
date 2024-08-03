"use client";

import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

const Faq = () => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <>
      <div className="relative mt-10 h-full w-full overflow-hidden bg-[#233552] pt-10 sm:px-4 sm:py-10 md:px-4 md:py-10 lg:px-10 xl:px-20">
        <p className="text-center font-[Satoshi] text-xl font-semibold capitalize text-white">
          FAQs
        </p>
        <h4 className="my-2 text-center font-[Satoshi] text-3xl font-semibold capitalize text-white">
          Frequently Asked Questions
        </h4>
        <div className="mt-10 flex items-center justify-between lg:gap-10">
          <div className="accordion_wrapper sm:w-full md:w-full lg:w-1/2">
            <div id="accordionExample">
              <div className="py-2">
                <h2 className="mb-0" id="headingOne">
                  <button
                    className={`${
                      activeElement === "element1" && ``
                    } text-text-white font-poppins relative flex w-full items-center justify-start gap-5 rounded-[50px] border-0 bg-transparent bg-white py-6 text-left font-normal sm:text-sm md:text-lg`}
                    type="button"
                    onClick={() => handleClick("element1")}
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span
                      className={`${
                        activeElement === "element1"
                          ? `-mr-1 rotate-[-180deg]`
                          : `rotate-0 fill-[#212529] dark:fill-white`
                      } h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                    ></span>
                    What is business consulting?
                  </button>
                </h2>
                <TECollapse
                  show={activeElement === "element1"}
                  className="!mt-0 !rounded-b-none !shadow-none transition-[height] duration-500 ease-in-out"
                >
                  <div className="text-md px-5 py-4 font-[Satoshi] font-normal text-white">
                    <strong>This is the first item's accordion body.</strong>{" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum eu rhoncus purus, vitae tincidunt nibh. Vivamus
                    elementum egestas ligula in varius. Proin ac erat pretium,
                    ultricies leo at, cursus ante. Pellentesque at odio euismod,
                    mattis urna ac, accumsan metus. Nam nisi leo, malesuada
                    vitae pretium et, laoreet at lorem. Curabitur non
                    sollicitudin neque.
                  </div>
                </TECollapse>
              </div>
            </div>
            <div id="accordionExample">
              <div className="py-2">
                <h2 className="mb-0" id="headingOne">
                  <button
                    className={`${
                      activeElement === "element2" && ``
                    } text-text-white font-poppins relative flex w-full items-center justify-start gap-5 rounded-[50px] border-0 bg-transparent bg-white py-6 text-left font-normal sm:text-sm md:text-lg`}
                    type="button"
                    onClick={() => handleClick("element2")}
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    <span
                      className={`${
                        activeElement === "element2"
                          ? `-mr-1 rotate-[-180deg]`
                          : `rotate-0 fill-[#212529] dark:fill-white`
                      } h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                    ></span>
                    What do business consultants do?
                  </button>
                </h2>
                <TECollapse
                  show={activeElement === "element2"}
                  className="!mt-0 !rounded-b-none !shadow-none transition-[height] duration-500 ease-in-out"
                >
                  <div className="text-md px-5 py-4 font-[Satoshi] font-normal text-white">
                    <strong>This is the first item's accordion body.</strong>{" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum eu rhoncus purus, vitae tincidunt nibh. Vivamus
                    elementum egestas ligula in varius. Proin ac erat pretium,
                    ultricies leo at, cursus ante. Pellentesque at odio euismod,
                    mattis urna ac, accumsan metus. Nam nisi leo, malesuada
                    vitae pretium et, laoreet at lorem. Curabitur non
                    sollicitudin neque.
                  </div>
                </TECollapse>
              </div>
            </div>
            <div id="accordionExample">
              <div className="py-2">
                <h2 className="mb-0" id="headingOne">
                  <button
                    className={`${
                      activeElement === "element3" && ``
                    } text-text-white font-poppins relative flex w-full items-center justify-start gap-5 rounded-[50px] border-0 bg-transparent bg-white py-6 text-left font-normal sm:text-sm md:text-lg`}
                    type="button"
                    onClick={() => handleClick("element3")}
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    <span
                      className={`${
                        activeElement === "element3"
                          ? `-mr-1 rotate-[-180deg]`
                          : `rotate-0 fill-[#212529] dark:fill-white`
                      } h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                    ></span>
                    Why do companies hire business consultants?
                  </button>
                </h2>
                <TECollapse
                  show={activeElement === "element3"}
                  className="!mt-0 !rounded-b-none !shadow-none transition-[height] duration-500 ease-in-out"
                >
                  <div className="text-md px-5 py-4 font-[Satoshi] font-normal text-white">
                    <strong>This is the first item's accordion body.</strong>{" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum eu rhoncus purus, vitae tincidunt nibh. Vivamus
                    elementum egestas ligula in varius. Proin ac erat pretium,
                    ultricies leo at, cursus ante. Pellentesque at odio euismod,
                    mattis urna ac, accumsan metus. Nam nisi leo, malesuada
                    vitae pretium et, laoreet at lorem. Curabitur non
                    sollicitudin neque.
                  </div>
                </TECollapse>
              </div>
            </div>
            <div id="accordionExample">
              <div className="py-2">
                <h2 className="mb-0" id="headingOne">
                  <button
                    className={`${
                      activeElement === "element4" && ``
                    } text-text-white font-poppins relative flex w-full items-center justify-start gap-5 rounded-[50px] border-0 bg-transparent bg-white py-6 text-left font-normal sm:text-sm md:text-lg`}
                    type="button"
                    onClick={() => handleClick("element4")}
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    <span
                      className={`${
                        activeElement === "element4"
                          ? `-mr-1 rotate-[-180deg]`
                          : `rotate-0 fill-[#212529] dark:fill-white`
                      } h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                    ></span>
                    How much do business consultants charge?
                  </button>
                </h2>
                <TECollapse
                  show={activeElement === "element4"}
                  className="!mt-0 !rounded-b-none !shadow-none transition-[height] duration-500 ease-in-out"
                >
                  <div className="text-md px-5 py-4 font-[Satoshi] font-normal text-white">
                    <strong>This is the first item's accordion body.</strong>{" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum eu rhoncus purus, vitae tincidunt nibh. Vivamus
                    elementum egestas ligula in varius. Proin ac erat pretium,
                    ultricies leo at, cursus ante. Pellentesque at odio euismod,
                    mattis urna ac, accumsan metus. Nam nisi leo, malesuada
                    vitae pretium et, laoreet at lorem. Curabitur non
                    sollicitudin neque.
                  </div>
                </TECollapse>
              </div>
            </div>
          </div>
          <div className="right__faq h-[550px] w-1/2 sm:hidden md:hidden lg:block">
            <img
              src="/images/faq.png"
              className="h-full w-full object-contain"
              alt=" about us image"
              srcset=""
            />
          </div>
        </div>
      </div>
      <div className="relative my-10 flex h-full w-full flex-col items-center justify-center sm:px-4">
        <p className="text-center font-[Satoshi] font-semibold capitalize text-black sm:text-lg md:text-2xl">
          Still Have Any Doubts?
          <br /> Contact Us and Ask Your Query’s
        </p>
        <p className="mt-5 text-center font-[Satoshi] font-semibold capitalize text-black sm:text-lg md:text-2xl">
          Feel Free to Contact Us
          <br />
          +91 9265064513 +44 7448006087
        </p>
      </div>
    </>
  );
};

export default Faq;
