import React from "react";
import { HumBergerButton } from "./humbergerButton";

const Navbar = ({ links, isSticky, menuOpen, setMenuOpen }) => {
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <header
      className={`xxl:h-36 w-full py-4 sm:px-4 md:px-4 lg:px-12 ${
        isSticky
          ? "fixed left-0 top-0 z-50 lg:rounded-b-[50px] bg-[#233552] py-2 shadow-lg"
          : "absolute left-0 top-0 z-50 bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between">
        <div className="logo xxl:h-24 xxl:w-36 h-20 w-20">
          <img
            src="/images/logo.png"
            alt="SamSara Logo"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="links block items-center justify-center gap-8 sm:hidden md:hidden lg:flex">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover-links xxl:text-3xl font-[Satoshi] text-lg font-semibold text-white"
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="small_devices-menu xxl:hidden block sm:block md:block lg:hidden xl:hidden">
          <HumBergerButton onToggle={toggleMenu} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
