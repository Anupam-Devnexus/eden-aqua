import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup({ closePopup }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email format";

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!form.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else if (!termsAccepted) {
      alert("You must accept the Terms and Conditions to proceed.");
    } else {
      setErrors({});
      console.log("Form submitted ✅", form);
      alert("Registration successful!");
      closePopup?.();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-2 z-50"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Form Container */}
      <div className="relative bg-white bg-opacity-90 rounded-xl shadow-xl max-w-[90%] w-full p-2 px-6 sm:p-12 z-10 mx-2 sm:mx-6 md:mx-auto">
        {/* Close Button */}
      

        <h2 className=" text-lg sm:text-3xl font-bold mb-1 text-center   text-[var(--primary-color)]">
          Create Account 
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-2 sm:grid-cols-2"
          noValidate
        >
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="px-4 py-3 border rounded-md focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)]"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1 font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="px-4 py-3 border rounded-md focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)]"
              placeholder="10-digit phone number"
              maxLength={10}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-3 border rounded-md focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)]"
              placeholder="example@mail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-1 font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="px-4 py-3 border rounded-md focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)]"
              placeholder="At least 6 characters"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="mb-1 font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="px-4 py-3 border rounded-md focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)]"
              placeholder="Re-enter your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center gap-3 sm:col-span-2">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={handleTermsChange}
              className="w-5 h-5 accent-[var(--primary-color)] cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="text-gray-700 select-none cursor-pointer"
            >
              I accept the{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer" className="underline text-[var(--primary-color)]">
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!termsAccepted}
            className={`sm:col-span-2 mt-4 py-3 rounded-md font-semibold text-white transition
              ${
                termsAccepted
                  ? "bg-[var(--primary-color)] hover:bg-[var(--fifth-color)] cursor-pointer"
                  : "bg-gray-400 cursor-not-allowed"
              }
            `}
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 flex flex-col items-center gap-3 text-sm">
          <button
            onClick={() => navigate("/")}
            className="text-[var(--primary-color)] font-medium hover:underline focus:outline-none"
          >
            Back to Home
          </button>
          <p className="text-gray-600">
            Already have an account?{" "}
            <span
              className="text-[var(--primary-color)] font-medium cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => { if (e.key === 'Enter') navigate("/login"); }}
            >
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
