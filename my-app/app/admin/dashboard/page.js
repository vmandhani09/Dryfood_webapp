"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaPlus, FaBoxOpen, FaClipboardList, FaUsers, FaSignOutAlt, FaChartBar } from "react-icons/fa";

// Admin Dashboard Cards Component
const DashboardCard = ({ title, description, icon, onClick, bgColor }) => (
  <div
    className={`bg-white border border-gray-200 shadow-lg rounded-xl p-6 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer`}
    onClick={onClick}
    aria-label={title}
  >
    <div className={`text-4xl ${bgColor} text-white p-4 rounded-full inline-block`}>
      {icon}
    </div>
    <h2 className="text-xl font-bold mt-4">{title}</h2>
    <p className="text-red-600 mt-2">{description}</p>
  </div>
);

export default function AdminDashboard() {
  const router = useRouter();
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin-token");

    if (!token) {
      router.push("/admin/login");
      return;
    }

    // TODO: Verify token with backend API
    setAdmin({ name: "Admin User" });
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-emerald-600"></div>
        <p className="ml-3 text-emerald-700 text-lg font-medium">Authenticating...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-10">
      <h1 className="text-4xl font-extrabold mb-6 text-emerald-700">Admin Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
        <DashboardCard
          title="Add Product "
          description="Create a new product listing for your store."
          icon={<FaPlus />}
          bgColor="bg-emerald-600"
          onClick={() => router.push("/admin/products/add")}
        />
        <DashboardCard
          title="Manage Products"
          description="Edit or remove existing products."
          icon={<FaBoxOpen />}
          bgColor="bg-blue-600"
          onClick={() => router.push("/admin/products")}
        />
        <DashboardCard
          title="Manage Orders"
          description="View and manage customer orders."
          icon={<FaClipboardList />}
          bgColor="bg-yellow-600"
          onClick={() => router.push("/admin/orders")}
        />
        <DashboardCard
          title="View Users"
          description="Check all registered users."
          icon={<FaUsers />}
          bgColor="bg-purple-600"
          onClick={() => router.push("/admin/users")}
        />
        <DashboardCard
          title="Reports & Analytics"
          description="View sales performance and product trends."
          icon={<FaChartBar />}
          bgColor="bg-red-600"
          onClick={() => router.push("/admin/reports")}
        />
        <DashboardCard
          title="Logout"
          description="End your session securely."
          icon={<FaSignOutAlt />}
          bgColor="bg-gray-600"
          onClick={() => {
            localStorage.removeItem("admin-token");
            router.push("/admin/login");
          }}
        />
      </div>
    </div>
  );
}