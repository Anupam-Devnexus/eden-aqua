import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import data from "../../assets/ProductDetails.json";

export default function ProductDetails() {
  const [productIndex, setProductIndex] = useState(0);
  const [caseCount, setCaseCount] = useState(1);
  const product = data[productIndex];

  const nextProduct = () => {
    setProductIndex((prev) => (prev + 1) % data.length);
    setCaseCount(1);
  };

  const prevProduct = () => {
    setProductIndex((prev) => (prev - 1 + data.length) % data.length);
    setCaseCount(1);
  };

  const handleProductChange = (e) => {
    setProductIndex(Number(e.target.value));
    setCaseCount(1);
  };

  const handleIncrease = () => setCaseCount((prev) => prev + 1);
  const handleDecrease = () => setCaseCount((prev) => (prev > 1 ? prev - 1 : 1));

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextProduct,
    onSwipedRight: prevProduct,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Section */}
      <div className="flex flex-col items-center gap-4">
        <div {...swipeHandlers} className="relative w-full flex items-center justify-center">
          <button
            onClick={prevProduct}
            className="absolute cursor-pointer left-2 z-10 text-3xl text-[var(--primary-color)]"
          >
            <MdNavigateBefore />
          </button>
          <img
            src={product.image}
            alt={product.name}
            className="w-60 h-80 object-contain transition duration-300 ease-in-out"
          />
          <button
            onClick={nextProduct}
            className="absolute cursor-pointer right-2 z-10 text-3xl text-[var(--primary-color)]"
          >
            <MdNavigateNext />
          </button>
        </div>
        <span className="text-sm text-gray-500 text-center">{product.name}</span>
      </div>

      {/* Details Section */}
      <div className="w-full flex flex-col gap-6 text-[var(--primary-color)]">
        {/* Bottle Size & Case Quantity Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
            1. Select Bottle Size & Case Quantity
          </label>
          <select
            onChange={handleProductChange}
            value={productIndex}
            className="px-4 py-2 rounded-md border border-gray-300 text-sm text-gray-800 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--fifth-color)]"
          >
            {data.map((item, index) => (
              <option key={index} value={index}>
                {item.name} — {item.size} — {item.caseQuantity} Bottles
              </option>
            ))}
          </select>
        </div>

        {/* Frequency Selector */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
            2. Select from Frequency
          </label>
          <select
            className="px-4 py-2 rounded-md border border-gray-300 text-sm text-gray-800 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--fifth-color)]"
            defaultValue=""
          >
            <option disabled value="">
              Select frequency
            </option>
            <option value="one-time">One Time</option>
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        {/* Pricing */}
        <div className="text-sm">
          <p className="text-gray-600 mb-1">
            Price per Bottles:{" "}
            <span className="font-semibold">${product.price.toFixed(2)}</span>
          </p>
          <p className="text-lg font-bold text-[var(--fifth-color)]">
            TOTAL: ${(product.price * caseCount).toFixed(2)}
          </p>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
          <div className="flex items-center gap-3 rounded-xl border border-gray-300 px-4 py-2 shadow-sm bg-white transition-all duration-200 hover:shadow-md">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 text-red-500 hover:text-red-600 transition"
              aria-label="Decrease"
            >
              <FaMinus size={14} />
            </button>
            <div className="text-center">
              <span className="block text-lg font-bold text-gray-800">{caseCount}</span>
            </div>
            <button
              onClick={handleIncrease}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-green-100 text-green-600 hover:text-green-700 transition"
              aria-label="Increase"
            >
              <FaPlus size={14} />
            </button>
          </div>

          <button className="w-full sm:w-auto bg-[var(--primary-color)] text-white font-semibold px-6 py-3 rounded-md hover:bg-[var(--fifth-color)] transition">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
