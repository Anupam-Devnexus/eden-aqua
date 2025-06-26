import React, { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationData = [
    { name: "SHOP", path: "/shop" },
    { name: "SUBSCRIBE & SAVE", path: "/subscribe" },
    { name: "SUSTAINBILITY", path: "/sustainability" },
    { name: "ABOUT", path: "/about" },
    { name: "WHERE TO BUY", path: "/where-to-buy" },
  ];

  return (
    <>
      {/* Main Nav */}
      <nav className="bg-[var(--primary-color)] text-white flex items-center justify-between h-16 w-full px-4 sm:px-6 lg:px-12 sticky top-0 z-50">
        {/* Logo */}
        <img
          src="https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828045/Group_2085663303_o82ll5.png"
          alt="Logo"
          className="w-[110px] sm:w-[120px] h-auto"
        />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-[15px] font-semibold tracking-[2px]">
          {navigationData.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:underline transition-all duration-200"
              onClick={() => window.location.href = item.path}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Menu toggle button (Mobile/Tablet) */}
        <div
          className="text-2xl lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RxCross1 /> : <CiMenuFries />}
        </div>

        {/* Icon section (desktop only) */}
        <div className="hidden lg:flex items-center gap-4 h-full px-4 bg-[var(--secondary-color)]">
          <FaUser className="cursor-pointer" />
          <div className="w-px h-4 bg-white" />
          <FaShoppingCart className="cursor-pointer" />
        </div>
      </nav>

      {/* Mobile/Tablet Dropdown Menu with Slide Transition */}
      <div
        className={`lg:hidden transform transition-all duration-300 ease-in-out origin-top ${
          isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        } bg-[var(--primary-color)] text-white flex flex-col gap-4 px-6 py-4 text-[15px] font-semibold tracking-[2px] shadow-md`}
        style={{ transformOrigin: "top" }}
      >
        {navigationData.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer w-full border-b border-white pb-2"
            onClick={() => {
              setIsMenuOpen(false);
              window.location.href = item.path;
            }}
          >
            {item.name}
          </div>
        ))}

        {/* Mobile/Tablet Icons */}
        <div className="flex items-center gap-4 bg-[var(--secondary-color)] w-full px-4 py-3 mt-2 rounded">
          <FaUser className="cursor-pointer" />
          <div className="w-px h-4 bg-white" />
          <FaShoppingCart className="cursor-pointer" />
        </div>
      </div>
    </>
  );
}
