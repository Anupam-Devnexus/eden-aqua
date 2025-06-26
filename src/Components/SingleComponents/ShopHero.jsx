import React from "react";

export default function ShopHero() {
  return (
    <div
      className="h-[82vh] w-full bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828021/image_28_2_lldrqf.png')",
      }}
    >
      <div className="w-full justify-around md:w-full flex flex-col items-start gap-4 text-center md:text-left">
      <div className="flex flex-col gap-2">

        <span className="text-[var(--primary-color)] w-full md:w-1/2  font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
          Naturally Sourced, Expertly Packaged, Unmatched in Purity
        </span>

        <div className="flex gap-4">
          <button className="px-5 cursor-pointer py-2 border border-[var(--primary-color)] text-[var(--primary-color)] font-semibold rounded hover:bg-[var(--primary-color)] hover:text-white transition">
            SHOP NOW
          </button>
          <button className="px-5 cursor-pointer py-2 bg-[var(--primary-color)] text-white font-semibold rounded hover:opacity-90 transition">
               VIEW PRODUCTS
          </button>
        </div>
        <div></div>
      </div>
      </div>
    </div>
  );
}
