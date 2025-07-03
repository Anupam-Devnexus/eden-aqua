import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useProductStore from "../../Zustand/ProductStore";
import getProductStore from "../../Zustand/GetProduct";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductSliderShop() {
  const { productlist = [], fetchProducts } = getProductStore();
  const { addProduct } = useProductStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = () => {
    const product = productlist[activeIndex];
    if (!product) return;

    const productData = {
      id: product._id,
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
      image: product.ProductImage,
      size: product.Capacity,
    };

    addProduct(productData);
    toast.success(`${product.Name} added to cart!`);
  };

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow:3,
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    afterChange: (index) => setActiveIndex(index),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  if (!productlist.length) {
    return <div className="text-center py-12">Loading products...</div>;
  }

  return (
    <div
      className="flex flex-col items-center justify-center px-4 py-12 gap-10"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #EFFBFD, #FFFFFF, #E0F7FA)",
      }}
    >
      <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-[var(--primary-color)] text-center">
        SHOP EDEN AQUA WATER
      </h1>

      <div className="w-full max-w-[90vw]">
        <Slider {...settings}>
          {productlist.map((product, idx) => (
            <div key={product._id} className="px-2">
              <div
                className={`flex flex-col items-center text-center p-4 rounded-lg transition-all duration-300 ease-in-out ${
                  idx === activeIndex ? "scale-105 " : "opacity-70"
                }`}
              >
                <img
                  src={product.ProductImage}
                  alt={product.Name}
                  className="w-32 h-32 object-contain mb-4"
                />
                <h2 className="text-[var(--primary-color)] font-semibold text-sm">
                  {product.Name}
                </h2>
                <p className="text-gray-600 font-bold text-base"> {product.Capacity}</p>
                <p className="text-gray-600 text-sm">
                  Case: {product.BottbottlesPerCase} bottles
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-4 flex-wrap mt-4">
        <button
          onClick={handleAddToCart}
          className="px-6 py-2 cursor-pointer rounded-md text-[var(--primary-color)] font-bold border border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300"
        >
          ADD TO CART
        </button>
        <button
          onClick={() => navigate("/shop")}
          className="px-6 py-2 cursor-pointer rounded-md bg-[var(--primary-color)] text-white font-bold hover:opacity-90 transition-all duration-300"
        >
          VIEW PRODUCTS
        </button>
      </div>
    </div>
  );
}
