import React, { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigationData = [
    { name: "SHOP", path: "/shop" },
    { name: "SUBSCRIBE & SAVE", path: "/subscribe" },
    { name: "SUSTAINBILITY", path: "/sustainability" },
    { name: "ABOUT", path: "/about" },
    { name: "WHERE TO BUY", path: "/wheretobuy" },
  ];

  return (
    <>
      <nav className="bg-[var(--primary-color)] text-white flex items-center justify-between h-16 w-full px-4 sm:px-6 lg:px-12 sticky top-0 z-50">
        {/* Logo */}
        <img
          src="https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828045/Group_2085663303_o82ll5.png"
          alt="Logo"
          className="w-[110px] sm:w-[120px] h-auto cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-[15px] font-semibold tracking-[2px]">
          {navigationData.map(({ name, path }, index) => (
            <li
              key={index}
              className="cursor-pointer hover:underline transition-all duration-200"
              onClick={() => navigate(path)}
            >
              {name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="text-2xl lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RxCross1 /> : <CiMenuFries />}
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-4 h-full px-4 bg-[var(--secondary-color)]">
          <FaUser className="cursor-pointer" onClick={() => navigate("/login")} />
          <div className="w-px h-4 bg-white" />
          <FaShoppingCart className="cursor-pointer" onClick={() => navigate("/cart")} />
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden transition-all duration-300 origin-top ${
          isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        } bg-[var(--primary-color)] text-white flex flex-col gap-4 px-6 py-4 text-[15px] font-semibold tracking-[2px] shadow-md`}
      >
        {navigationData.map(({ name, path }, index) => (
          <div
            key={index}
            className="cursor-pointer w-full border-b border-white pb-2"
            onClick={() => {
              setIsMenuOpen(false);
              navigate(path);
            }}
          >
            {name}
          </div>
        ))}

        {/* Mobile Icons */}
        <div className="flex items-center gap-4 bg-[var(--secondary-color)] w-full px-4 py-3 mt-2 rounded">
          <FaUser
            className="cursor-pointer"
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/login");
            }}
          />
          <div className="w-px h-4 bg-white" />
          <FaShoppingCart
            className="cursor-pointer"
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/cart");
            }}
          />
        </div>
      </div>
    </>
  );
}
