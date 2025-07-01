import React, { useState } from "react";
import useProductStore from "../../Zustand/ProductStore";
import toast from "react-hot-toast";
export default function ProductCard({
  image,
  name,
  price,
  caseQuantity,
  defaultQuantity = 1,
  onAddToCart = () => {},
}) {
  const [quantity, setQuantity] = useState(defaultQuantity);

  const { products, addProduct } = useProductStore();

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    const totalBottles = quantity * caseQuantity;
    const productData = {
      id: Date.now(), // or use a better unique ID system
      name,
      price,
      quantity,
      caseQuantity,
      totalBottles,
      totalPrice: (price * quantity * caseQuantity).toFixed(2),
      image,
    };

    // Add to Zustand store
    addProduct(productData);

    // Optionally call external callback
    onAddToCart(productData);

    // Show alert and log updated store
   toast.success(`${name} added to cart!`);
    console.log("🛒 All Products in Store:", useProductStore.getState().products);
  };

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  const totalPrice = (price * quantity * caseQuantity).toFixed(2);
  const totalCase = (quantity * caseQuantity).toFixed(2);

  return (
    <div className="max-w-sm w-full border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 bg-white">
      {/* Product Image */}
      <div className="bg-[#F9FBFC] p-4 flex justify-center rounded-2xl items-center h-56">
        <img src={image} alt={name} className="h-full object-contain" loading="lazy" />
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-[var(--primary-color)] leading-snug">{name}</h3>

        <div className="flex flex-col items-start gap-2 justify-between">
          <p className="text-xl font-bold text-[var(--fifth-color)]">Price: {formattedPrice}</p>
          <i className="text-xs font-light text-gray-600">Number of Bottles in 1 Case : {caseQuantity}</i>
        </div>

        {/* Quantity with increment/decrement buttons */}
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-[var(--sixth-color)] select-none">Case Quantity:</label>
          <div className="flex items-center justify-center rounded-md overflow-hidden">
            <button
              type="button"
              onClick={decrementQuantity}
              className="px-3 py-1 bg-gray-200 text-red-600 cursor-pointer rounded-4xl hover:bg-gray-300 transition text-lg font-bold select-none"
              aria-label="Decrease quantity"
            >
              –
            </button>
            <input
              type="text"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-14 text-center py-1 focus:outline-none"
              aria-label="Quantity input"
            />
            <button
              type="button"
              onClick={incrementQuantity}
              className="px-3 py-1 bg-gray-200 rounded-2xl text-green-800 cursor-pointer hover:bg-gray-300 transition text-lg font-bold select-none"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        <div className="text-[var(--fifth-color)] font-semibold text-base">
          Total Price: <span className="text-xl">${totalPrice}</span>
          <p className="text-xs text-gray-500">({totalCase} Bottles in total)</p>
        </div>

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
