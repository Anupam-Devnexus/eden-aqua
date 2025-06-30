import React from "react";
import ProductCard from "../../Components/Cards/ProductCard";
import NewsLetter from "../../Components/SingleComponents/NewsLetter";
export default function Shop() {
  const ProductData = [
    {
      name: "Events & Kid Friendly",
      size: "330mL",
      image:
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750836675/35c325155c67e7261d31f6a4256285529036647d_qosmbx.png",
      price: 1.99,
      quantity: 1,
    },
    {
      name: "Everyday Hydration",
      size: "500mL",
      image:
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750836821/35c325155c67e7261d31f6a4256285529036647d_2_kntr80.png",
      price: 2.49,
      quantity: 1,
    },
    {
      name: "Active Lifestyle",
      size: "700mL",
      image:
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828200/image_24_w72gh3.png",
      price: 2.99,
      quantity: 1,
    },
    {
      name: "Generation Hydration",
      size: "1 L",
      image:
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750836645/69328f6e7004d6c7a1d2c852cbb6356613b37a24_au0xjz.png",
      price: 3.49,
      quantity: 1,
    },
    {
      name: "Ongoing Hydration",
      size: "1.5 L",
      image:
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750836662/e6937df5757c83887f4bdd29a6187e254db3b17d_tpn09i.png",
      price: 3.99,
      quantity: 1,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[82vh] w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dt4ohfuwc/image/upload/v1751283158/pexels-paggiarofrancesco-593099_c4xroh.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-start px-6">
          <div className="w-full md:w-1/2 flex flex-col items-center gap-4 text-center md:text-left">
            <div className="flex flex-col justify-center gap-4">
              <span className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                Browse & Shop Your Essentials with Ease
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-full px-4 md:px-12 py-10 bg-[#F8FAFB]">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#021624] mb-8">
          Our Bottled Water Range
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ProductData.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              name={`${item.name} (${item.size})`}
              price={item.price}
              defaultQuantity={item.quantity}
            />
          ))}
        </div>
      </div>
      <NewsLetter/>
    </>
  );
}
