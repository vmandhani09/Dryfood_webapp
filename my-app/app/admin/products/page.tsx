'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";

// ✅ Define Product type to avoid 'never' errors
type Product = {
  _id: string;
  name: string;
  category: string;
  weights?: { price: number }[];
};

const AdminProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]); // ✅ Explicit type for state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // ✅ Ensure fetched data matches Product type
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-6">
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">🛠️ Product Management</h1>
      
      <Link href="/admin/products/add">
        <button className="bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 mb-4">
          ➕ Add New Product
        </button>
      </Link>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading products...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-3">Name</th>
              <th className="border border-gray-300 p-3">Category</th>
              <th className="border border-gray-300 p-3">Price</th>
              <th className="border border-gray-300 p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="text-center hover:bg-gray-50">
                <td className="border border-gray-300 p-3">{product.name}</td>
                <td className="border border-gray-300 p-3">{product.category}</td>
                <td className="border border-gray-300 p-3">₹{product.weights?.[0]?.price ?? "N/A"}</td>
                <td className="border border-gray-300 p-3">
                  <Link href={`/admin/products/edit/${product._id}`}>
                    <button className="text-blue-500 font-semibold hover:underline">Edit</button>
                  </Link>
                  <Link href={`/admin/products/delete/${product._id}`}>
                    <button className="text-red-500 font-semibold hover:underline ml-4">Delete</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminProductsPage;