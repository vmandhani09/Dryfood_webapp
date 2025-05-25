'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('admin-token');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    // (Optional) You can verify token with backend here
    setAdmin({ name: 'Admin User' }); // dummy name, replace with real fetched data
  }, []);

  if (!admin) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div
          className="bg-white shadow rounded-lg p-6 hover:shadow-md cursor-pointer transition"
          onClick={() => router.push('/admin/products/add')}
        >
          <h2 className="text-xl font-semibold mb-2">➕ Add Product</h2>
          <p className="text-gray-600">Create a new product listing for your store.</p>
        </div>

        <div
          className="bg-white shadow rounded-lg p-6 hover:shadow-md cursor-pointer transition"
          onClick={() => router.push('/admin/products')}
        >
          <h2 className="text-xl font-semibold mb-2">🛍️ Manage Products</h2>
          <p className="text-gray-600">Edit or remove existing products.</p>
        </div>

        <div
          className="bg-white shadow rounded-lg p-6 hover:shadow-md cursor-pointer transition"
          onClick={() => router.push('/admin/orders')}
        >
          <h2 className="text-xl font-semibold mb-2">📦 Manage Orders</h2>
          <p className="text-gray-600">View and manage customer orders.</p>
        </div>

        <div
          className="bg-white shadow rounded-lg p-6 hover:shadow-md cursor-pointer transition"
          onClick={() => router.push('/admin/users')}
        >
          <h2 className="text-xl font-semibold mb-2">👥 View Users</h2>
          <p className="text-gray-600">Check all registered users.</p>
        </div>

        <div
          className="bg-white shadow rounded-lg p-6 hover:shadow-md cursor-pointer transition"
          onClick={() => {
            localStorage.removeItem('admin-token');
            router.push('/admin/login');
          }}
        >
          <h2 className="text-xl font-semibold mb-2">🚪 Logout</h2>
          <p className="text-gray-600">End your session securely.</p>
        </div>
      </div>
    </div>
  );
}
