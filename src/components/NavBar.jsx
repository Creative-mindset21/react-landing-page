import React, { useState } from "react";
import { navItems } from "../data";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <header className="header">
      <div className="flex items-center w-full h-16 lg:h-20 justify-between container mx-auto px-4 sm:px-6 lg:px-8">
        {/* LOGO SECTION */}
        <a href="/" className="flex items-center gap-1 transition-all">
          <div className="w-4 h-4 bg-blue-500 rounded-full opacity-75 hover:opacity-100 duration-200"></div>
          <div className="w-4 h-4 bg-red-600 rounded-full opacity-100 hover:opacity-75 duration-200 -ml-2"></div>
        </a>

        {/* MENU ICONS */}
        <button
          className="block md:hidden px-2"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <HiX size={25} /> : <HiMenu size={25} />}
        </button>

        {/* DESKTOP NAV ITEMS */}
        <nav className="">
          {navItems.map((link, index) => (
            <a
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              key={index}
              className={`textAnimation ${
                activeLink === link.href
                  ? "after:w-full text-blue-500"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* GET IN TOUCH BTN */}
        <a href="#newsletter" className="getInTouchBtn">
          Get in Touch
        </a>
      </div>

      {/* MOBILE NAV ITEMS */}
      {isMenuOpen && (
        <div className="py-4 border-t md:hidden border-gray-100 bg-white">
          <div className="container mx-auto px-4 space-y-3">
            {navItems.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className={`block text-sm font-medium py-2 ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a href="#newsletter" className="getInTouchBtn1">
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
