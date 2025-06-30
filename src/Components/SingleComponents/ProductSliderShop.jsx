import React, { useState } from "react";
import { MdNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function ProductSliderShop() {
  const navigate = useNavigate();
  const ProductData = [
    {
      name: "Events & Kid Friendly",
      size: "330mL",
      image:
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750836675/35c325155c67e7261d31f6a4256285529036647d_qosmbx.png",
    },
    {
      name: "Everyday Hydration",
      size: "500mL",
      image:
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750836821/35c325155c67e7261d31f6a4256285529036647d_2_kntr80.png",
    },
    {
      name: "Active Lifestyle",
      size: "700mL",
      image:
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828200/image_24_w72gh3.png",
    },
    {
      name: "Generation Hydration",
      size: "1 L",
      image:
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750836645/69328f6e7004d6c7a1d2c852cbb6356613b37a24_au0xjz.png",
    },
    {
      name: "Ongoing Hydration",
      size: "1.5 L",
      image:
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750836662/e6937df5757c83887f4bdd29a6187e254db3b17d_tpn09i.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const rotateLeft = () => {
    setActiveIndex((prev) => (prev - 1 + ProductData.length) % ProductData.length);
  };

  const rotateRight = () => {
    setActiveIndex((prev) => (prev + 1) % ProductData.length);
  };

  const getVisibleItems = () => {
    const visible = [];
    const length = ProductData.length;
    for (let i = -2; i <= 2; i++) {
      visible.push(ProductData[(activeIndex + i + length) % length]);
    }
    return visible;
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 gap-10"
    style={{
    background: "linear-gradient(to bottom, #FFFFFF, #EFFBFD, #FFFFFF, #E0F7FA)",
  }}
    >
      <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-[var(--primary-color)] text-center">
        SHOP EDEN AQUA WATER
      </h1>

      {/* Slider */}
      <div className="relative flex items-center justify-center w-full max-w-full">
        <button
          onClick={rotateLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl md:text-4xl text-[var(--primary-color)] hover:text-[var(--fifth-color)]"
        >
          <MdOutlineNavigateBefore />
        </button>

        {/* Large screen view with all 5 items */}
        <div className="hidden md:flex gap-6 items-center justify-center w-full transition-all duration-700 ease-in-out">
          {getVisibleItems().map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center p-4 rounded-md transition-all duration-700 ease-in-out transform 
                ${idx === 2
                  ? "scale-[1.15] opacity-100 translate-y-0 "
                  : idx === 1 || idx === 3
                    ? "scale-[0.95] opacity-70  translate-y-2"
                    : "scale-[0.85] opacity-50  translate-y-4"
                }
              `}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-auto mb-4 transition duration-700 ease-in-out"
              />
              <h2 className="font-bold text-lg text-[var(--primary-color)]">
                {item.name}
              </h2>
              <p className="text-sm text-gray-600">{item.size}</p>
            </div>
          ))}
        </div>

        {/* Mobile View - Only Active Item */}
        <div className="md:hidden flex items-center justify-center w-full transition-all duration-700 ease-in-out">
          <div className="flex flex-col items-center text-center p-4 rounded-md scale-100  transition-all duration-700 ease-in-out">
            <img
              src={ProductData[activeIndex].image}
              alt={ProductData[activeIndex].name}
              className="w-32 h-auto mb-4"
            />
            <h2 className="font-bold text-lg text-[var(--primary-color)]">
              {ProductData[activeIndex].name}
            </h2>
            <p className="text-sm text-gray-600">{ProductData[activeIndex].size}</p>
          </div>
        </div>

        <button
          onClick={rotateRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl md:text-4xl text-[var(--primary-color)] hover:text-[var(--fifth-color)]"
        >
          <MdNavigateNext />
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <button className="px-6 py-2 cursor-pointer rounded-md text-[var(--primary-color)] font-bold border border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300">
          ADD TO CART
        </button>
        <button
        onClick={() => navigate('/shop')}
        className="px-6 py-2 cursor-pointer rounded-md bg-[var(--primary-color)] text-white font-bold hover:opacity-90 transition-all duration-300">
          VIEW PRODUCTS
        </button>
      </div>
    </div>
  );
}
