import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const MobileMenu = ({ links, menuOpen, setMenuOpen }) => {
  const menuContainerMobile = useRef(null);
  const menuItemsTextMobile = useRef([]);

  useEffect(() => {
    if (menuOpen) {
      gsap.from(menuContainerMobile.current, {
        height: 0,
        duration: 1.2,
        ease: "power",
      });

      gsap.from(
        menuItemsTextMobile.current.map((element) => element),
        {
          opacity: 0,
          delay: 0.7,
          duration: 2,
          stagger: 0.3,
          ease: "ease",
        },
      );
    }
  }, [menuOpen]);

  return (
    menuOpen && (
      <div className="mobile__navbar lg:hidden">
        <div
          ref={menuContainerMobile}
          className="menu absolute left-0 top-0 z-20 flex h-full w-full flex-col items-start justify-between overflow-y-hidden bg-blue-950 px-4 py-6"
        >
          <div className="mobile__links mt-[120px] flex w-full flex-col items-start justify-start overflow-y-hidden">
            {links.map((item, index) => (
              <a
                data-hover={item.text}
                key={index}
                href={item.href}
                className="menu-text cursor-pointer p-1 font-[Satoshi] text-5xl capitalize text-white lg:text-[3.3vw]"
                ref={(element) => (menuItemsTextMobile.current[index] = element)}
              >
                <span>{item.text}</span>
              </a>
            ))}
          </div>
          <div className="flex w-full flex-col items-start justify-start">
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
      </div>
    )
  );
};

export default MobileMenu;
