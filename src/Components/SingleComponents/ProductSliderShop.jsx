import React, { useState } from "react";
import { MdNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import data from "../../assets/ProductDetails.json";
import useProductStore from "../../Zustand/ProductStore";
import toast from "react-hot-toast";

export default function ProductSliderShop() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const { addProduct } = useProductStore();

  const rotateLeft = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const rotateRight = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const getVisibleItems = () => {
    const visible = [];
    const length = data.length;
    for (let i = -2; i <= 2; i++) {
      visible.push(data[(activeIndex + i + length) % length]);
    }
    return visible;
  };

  // Add to cart handler
  const handleAddToCart = () => {
    const product = data[activeIndex];

    const productData = {
      id: product.id || Date.now(), // use existing id or fallback
      name: product.name,
      price: product.price,
      quantity: 1, // default 1 case
      caseQuantity: product.caseQuantity || 1,
      totalBottles: product.caseQuantity || 1,
      totalPrice: (
        product.price *
        1 *
        (product.caseQuantity || 1)
      ).toFixed(2),
      image: product.image,
      size: product.size,
    };

    addProduct(productData);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div
      className="flex flex-col items-center justify-center px-4 py-12 gap-10 transition-all duration-700 ease-in-out"
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
          className="absolute cursor-pointer left-2 top-1/2 transform -translate-y-1/2 text-3xl md:text-4xl text-[var(--primary-color)] hover:text-[var(--fifth-color)] transition-all duration-300 ease-in-out"
        >
          <MdOutlineNavigateBefore />
        </button>

        {/* Desktop View */}
        <div className="hidden md:flex gap-6 items-center justify-center w-full transition-all duration-700 ease-in-out">
          {getVisibleItems().map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center p-4 rounded-md  transition-transform duration-700 ease-in-out transform
              ${
                idx === 2
                  ? "scale-[1.15] opacity-100 translate-y-0 z-10"
                  : idx === 1 || idx === 3
                  ? "scale-100 opacity-70 translate-y-2 z-0"
                  : "scale-90 opacity-50 translate-y-4 z-0"
              }
              `}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-auto mb-4 transition-transform duration-700 ease-in-out hover:scale-105"
              />
              <h2 className="text-sm text-[var(--primary-color)]">{item.name}</h2>
              <p className="text-lg font-bold text-gray-600">{item.size}</p>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center justify-center w-full transition-all duration-700 ease-in-out">
          <div className="flex flex-col items-center text-center p-4 rounded-md  transition-all duration-700 ease-in-out scale-100 animate-fade-in">
            <img
              src={data[activeIndex].image}
              alt={data[activeIndex].name}
              className="w-32 h-auto mb-4 transition-transform duration-500 hover:scale-105"
            />
            <h2 className="font-bold text-lg text-[var(--primary-color)]">
              {data[activeIndex].name}
            </h2>
            <p className="text-sm text-gray-600">{data[activeIndex].size}</p>
          </div>
        </div>

        <button
          onClick={rotateRight}
          className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 text-3xl md:text-4xl text-[var(--primary-color)] hover:text-[var(--fifth-color)] transition-all duration-300 ease-in-out"
        >
          <MdNavigateNext />
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <button
          onClick={handleAddToCart}
          className="px-6 py-2 cursor-pointer rounded-md text-[var(--primary-color)] font-bold border border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 ease-in-out"
        >
          ADD TO CART
        </button>
        <button
          onClick={() => navigate("/shop")}
          className="px-6 py-2 cursor-pointer rounded-md bg-[var(--primary-color)] text-white font-bold hover:opacity-90 transition-all duration-300 ease-in-out"
        >
          VIEW PRODUCTS
        </button>
      </div>
    </div>
  );
}
