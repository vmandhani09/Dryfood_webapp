"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const EditProductPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    category: "",
    price: 0,
    stockQuantity: 0,
    brand: "",
  });

  useEffect(() => {
    if (!id) return;

    console.log("Fetching product for ID:", id);

    fetch(`/api/admin/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data || !data.product) {
          console.error("Product not found:", data);
          setLoading(false);
          return;
        }
        setProduct(data.product);
        setUpdatedProduct(data.product); // ✅ Pre-fills the form with existing product details
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  const handleUpdate = async () => {
    try {
      console.log("Updating product:", updatedProduct);

      const res = await fetch(`/api/admin/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });

      if (!res.ok) {
        throw new Error("Failed to update product");
      }

      alert("Product updated successfully!");
      router.push("/admin/products");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-6">
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">✏️ Edit Product</h1>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading product details...</p>
      ) : !product ? (
        <p className="text-center text-lg text-red-500">⚠️ Product not found. Please check the ID or try again later.</p>
      ) : (
        <>
          <label className="text-gray-700 font-semibold">Product Name:</label>
          <input
            type="text"
            value={updatedProduct?.name ?? ""}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
            className="w-full border rounded p-3 mb-4"
          />

          <label className="text-gray-700 font-semibold">Category:</label>
          <input
            type="text"
            value={updatedProduct?.category ?? ""}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, category: e.target.value })}
            className="w-full border rounded p-3 mb-4"
          />

          <label className="text-gray-700 font-semibold">Price (₹):</label>
          <input
            type="number"
            value={updatedProduct?.price ?? ""}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: Number(e.target.value) })}
            className="w-full border rounded p-3 mb-4"
          />

          <label className="text-gray-700 font-semibold">Stock Quantity:</label>
          <input
            type="number"
            value={updatedProduct?.stockQuantity ?? ""}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, stockQuantity: Number(e.target.value) })}
            className="w-full border rounded p-3 mb-4"
          />

          <label className="text-gray-700 font-semibold">Brand:</label>
          <input
            type="text"
            value={updatedProduct?.brand ?? ""}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, brand: e.target.value })}
            className="w-full border rounded p-3 mb-4"
          />

          <button
            onClick={handleUpdate}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 mt-3"
          >
            Update Product
          </button>
        </>
      )}
    </div>
  );
};

export default EditProductPage;