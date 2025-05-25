"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Admin Dashboard Cards Component
const DashboardCard = ({ title, description, icon, onClick }) => (
  <div
    className="bg-white shadow rounded-lg p-6 hover:shadow-md cursor-pointer transition"
    onClick={onClick}
    aria-label={title}
  >
    <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
      {icon} {title}
    </h2>
    <p className="text-gray-600">{description}</p>
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
        <p className="ml-3 text-emerald-700">Authenticating...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <DashboardCard
          title="➕ Add Product"
          description="Create a new product listing for your store."
          icon="🆕"
          onClick={() => router.push("/admin/products/add")}
        />
        <DashboardCard
          title="🛍️ Manage Products"
          description="Edit or remove existing products."
          icon="📦"
          onClick={() => router.push("/admin/products")}
        />
        <DashboardCard
          title="📦 Manage Orders"
          description="View and manage customer orders here."
          icon="📋"
          onClick={() => router.push("/admin/orders")}
        />
        <DashboardCard
          title="👥 View Users"
          description="Check all registered users."
          icon="👤"
          onClick={() => router.push("/admin/users")}
        />
        <DashboardCard
          title="🚪 Logout"
          description="End your session securely."
          icon="🔐"
          onClick={() => {
            localStorage.removeItem("admin-token");
            router.push("/admin/login");
          }}
        />
      </div>
    </div>
  );
}