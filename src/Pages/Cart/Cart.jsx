import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import NewsLetter from "../../Components/SingleComponents/NewsLetter";
export default function Cart() {
  // Replace this array with your products or fetch from Zustand/store later
  const initialProducts = [
    {
      id: 1,
      name: "Ongoing Hydration",
      size: "1.5 L",
      image:
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750836662/e6937df5757c83887f4bdd29a6187e254db3b17d_tpn09i.png",
      price: 3.99,
      quantity: 1,
    },
    // Add more products here if you want
  ];

  const [products, setProducts] = useState(initialProducts);

  // Update quantity for product by id
  const updateQuantity = (id, newQty) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: newQty < 1 ? 1 : newQty } : p
      )
    );
  };

  const totalPayable = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  if (products.length === 0) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center border border-dashed rounded-md mt-12">
        <p className="text-xl mb-2 text-gray-600">Your cart is currently empty.</p>
        <button className="mt-4 px-6 py-3 bg-[var(--primary-color)] text-white rounded-md hover:bg-[var(--fifth-color)] transition">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <>
    <div className="max-w-7xl mx-auto p-6 mt-12 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-[var(--primary-color)] text-center">
        Your Shopping Cart
      </h2>

      {/* Products List */}
      <div className="flex flex-col gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col sm:flex-row items-center gap-6  pb-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-contain"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600">{product.size}</p>
              <p className="text-lg font-bold text-[var(--primary-color)] mt-1">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-4 mt-3 sm:mt-0">
              <button
                onClick={() => updateQuantity(product.id, product.quantity - 1)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-[var(--primary-color)] transition"
                aria-label="Decrease quantity"
              >
                <FaMinus />
              </button>
              <span className="text-lg font-semibold">{product.quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, product.quantity + 1)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-[var(--primary-color)] transition"
                aria-label="Increase quantity"
              >
                <FaPlus />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total & Payment */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t pt-6">
        <div className="text-xl font-bold text-gray-700">
          Total Payable:{" "}
          <span className="text-[var(--primary-color)]">${totalPayable.toFixed(2)}</span>
        </div>

        <button
          onClick={() => alert("Proceed to payment clicked!")}
          className="bg-[var(--primary-color)] text-white px-8 py-3 rounded-md font-semibold hover:bg-[var(--fifth-color)] transition"
        >
          Proceed to Payment
        </button>
      </div>
    </div>

    <NewsLetter/>
    </>
  );
}
