import React, { useState } from "react";

export default function ProductCard({
  image,
  name,
  price,
  defaultQuantity = 1,
  onAddToCart = () => {}
}) {
  const [quantity, setQuantity] = useState(defaultQuantity);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    onAddToCart({ name, quantity, price });
    alert(`Added ${quantity} item(s) of "${name}" to cart`);
  };

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(price);

  return (
    <div className="max-w-sm w-full border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 bg-white">
      {/* Product Image */}
      <div className="bg-[#F9FBFC] p-4 flex justify-center rounded-2xl items-center h-56">
        <img
          src={image}
          alt={name}
          className="h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col gap-3">
        {/* Name */}
        <h3 className="text-lg font-semibold text-[var(--primary-color)] leading-snug">
          {name}
        </h3>

        {/* Price */}
        <p className="text-xl font-bold text-[var(--fifth-color)]">
          {formattedPrice}
        </p>

        {/* Quantity */}
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-[var(--sixth-color)]">
            Quantity:
          </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16 px-2 py-1 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--fifth-color)]"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-[var(--fifth-color)] cursor-pointer hover:bg-[var(--primary-color)] text-white text-sm font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
