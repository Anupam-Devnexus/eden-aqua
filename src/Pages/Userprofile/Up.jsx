import React, { useEffect, useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "Anupam Upadhyay",
    email: "anupam@example.com",
    phone: "+91 9876543210",
  });

  const [orders, setOrders] = useState([
    {
      id: "ORD123",
      date: "2025-06-30",
      items: 3,
      total: "₹899",
      status: "Delivered",
    },
    {
      id: "ORD124",
      date: "2025-06-25",
      items: 1,
      total: "₹299",
      status: "In Transit",
    },
  ]);

  // Fetch user and order data from backend (optional enhancement)
  useEffect(() => {
    // Example API call here
    // fetchUserData();
    // fetchUserOrders();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-6">
        My Profile
      </h1>

      {/* User Details */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Account Information</h2>
        <div className="space-y-2 text-gray-600">
          <p><span className="font-semibold">Name:</span> {user.name}</p>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
          <p><span className="font-semibold">Phone:</span> {user.phone}</p>
        </div>
      </div>

      {/* Order History */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Order History</h2>
        {orders.length === 0 ? (
          <p className="text-gray-500">No orders found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="text-xs uppercase bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3">Order ID</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Items</th>
                  <th className="px-4 py-3">Total</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="px-4 py-2">{order.id}</td>
                    <td className="px-4 py-2">{order.date}</td>
                    <td className="px-4 py-2">{order.items}</td>
                    <td className="px-4 py-2">{order.total}</td>
                    <td className="px-4 py-2">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
