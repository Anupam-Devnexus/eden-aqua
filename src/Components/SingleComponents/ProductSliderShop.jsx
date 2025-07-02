import React, { useEffect, useState } from "react";
import { MdNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useProductStore from "../../Zustand/ProductStore";
import toast from "react-hot-toast";
import getProductStore from "../../Zustand/GetProduct";

export default function ProductSliderShop() {
  const { productlist = [], fetchProducts } = getProductStore();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const { addProduct } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);
console.log("Product List:", productlist);
  const rotateLeft = () => {
    setActiveIndex((prev) => (prev - 1 + productlist.length) % productlist.length);
  };

  const rotateRight = () => {
    setActiveIndex((prev) => (prev + 1) % productlist.length);
  };

  const getVisibleItems = () => {
    const visible = [];
    const length = productlist.length;
    for (let i = -2; i <= 2; i++) {
      visible.push(productlist[(activeIndex + i + length) % length]);
    }
    return visible;
  };

  const handleAddToCart = () => {
    const product = productlist[activeIndex];
    if (!product) return;

    const productData = {
      id: product._id || Date.now(),
      name: product.Name,
      price: product.Price,
      quantity: 1,
      caseQuantity: product.BottbottlesPerCase || 1,
      totalBottles: product.BottbottlesPerCase || 1,
      totalPrice: (
        product.Price *
        1 *
        (product.BottbottlesPerCase || 1)
      ).toFixed(2),
      image: product.Sub_Images?.[0],
      size: product.Capacity,
    };

    addProduct(productData);
    toast.success(`${product.Name} added to cart!`);
  };

  if (!productlist.length) {
    return <div className="text-center py-12">Loading products...</div>;
  }

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
              key={item._id}
              className={`flex flex-col items-center text-center p-4 rounded-md transition-transform duration-700 ease-in-out transform
                ${idx === 2
                  ? "scale-[1.15] opacity-100 translate-y-0 z-10"
                  : idx === 1 || idx === 3
                  ? "scale-100 opacity-70 translate-y-2 z-0"
                  : "scale-90 opacity-50 translate-y-4 z-0"
                }
              `}
            >
              <img
                src={item.Sub_Images?.[0]}
                alt={item.Name}
                className="w-32 h-auto mb-4 transition-transform duration-700 ease-in-out hover:scale-105"
              />
              <h2 className="text-sm text-[var(--primary-color)]">{item.Name}</h2>
              <p className="text-lg font-bold text-gray-600">{item.Capacity}</p>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center justify-center w-full transition-all duration-700 ease-in-out">
          <div className="flex flex-col items-center text-center p-4 rounded-md transition-all duration-700 ease-in-out scale-100 animate-fade-in">
            <img
              src={productlist[activeIndex]?.Sub_Images?.[0]}
              alt={productlist[activeIndex]?.Name}
              className="w-32 h-auto mb-4 transition-transform duration-500 hover:scale-105"
            />
            <h2 className="font-bold text-lg text-[var(--primary-color)]">
              {productlist[activeIndex]?.Name}
            </h2>
            <p className="text-sm text-gray-600">
              {productlist[activeIndex]?.Capacity}
            </p>
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
