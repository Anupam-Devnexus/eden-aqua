import React from "react";
import { useNavigate } from "react-router-dom";
export default function Login({ closePopup }) {
  const navigate = useNavigate()
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-70">
      <div className="bg-white p-8 rounded-lg w-[90%] max-w-md relative shadow-xl">
        {/* Close Button */}
        <button
          onClick={()=> navigate('/')}
          className="absolute top-2 right-3 px-2 cursor-pointer underline text-gray-600 text-xl hover:text-red-500"
        >
          back
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-[var(--primary-color)]">Login</h2>

        {/* Login Form */}
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border px-4 py-2 rounded-md focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)]"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-4 py-2 rounded-md focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)]"
            required
          />
          <button
            type="submit"
            className="bg-[var(--primary-color)] cursor-pointer text-white py-2 rounded-md font-semibold hover:bg-[var(--fifth-color)] transition"
          >
            Login
          </button>
        </form>

        <div className="mt-4 flex justify-between text-sm text-[var(--primary-color)]">
          <button onClick={() => navigate('/forget-password')} className="hover:underline">
            Forgot Password?
          </button>
          <button onClick={() => navigate('/signup')} className="hover:underline">
            New User? Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
