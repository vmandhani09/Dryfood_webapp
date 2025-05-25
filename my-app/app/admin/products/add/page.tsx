"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

export default function AddProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    image: "",
    description: "",
    category: "",
    sku: "",
    stockQuantity: "",
    discountPrice: "",
    tags: "",
    brand: "",
    weights: [{ label: "", price: "" }],
  });

  const [message, setMessage] = useState(""); // Success/Error Feedback

 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleWeightChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  const newWeights = [...formData.weights];

  if (name in newWeights[index]) {
    newWeights[index] = { ...newWeights[index], [name]: value }; // ✅ Allows dynamic indexing
  }

  setFormData((prev) => ({ ...prev, weights: newWeights }));
};
const addWeightOption = () => {
  setFormData((prev) => ({
    ...prev,
    weights: [...prev.weights, { label: "", price: "" }],
  }));
};

const removeWeightOption = (index: number) => {
  setFormData((prev) => ({
    ...prev,
    weights: prev.weights.filter((_, i) => i !== index),
  }));
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setMessage("Saving product...");

  const response = await fetch("/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    setMessage("✅ Product added successfully!");
    setTimeout(() => router.push("/admin/products"), 1500);
  } else {
    setMessage("❌ Failed to add product.");
  }
};


  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-10 mt-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-emerald-700">➕ Add New Product</h1>

      {message && <p className="text-center text-lg mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Product Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border rounded p-3 focus:ring focus:ring-emerald-300"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block font-semibold mb-1">Product Slug:</label>
          <input
            type="text"
            name="slug"
            placeholder="Enter slug (e.g., almond-pack)"
            value={formData.slug}
            onChange={handleInputChange}
            className="w-full border rounded p-3 focus:ring focus:ring-emerald-300"
            required
          />
        </div>

        {/* Image */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-1">Image URL:</label>
          <input
            type="text"
            name="image"
            placeholder="Provide image URL"
            value={formData.image}
            onChange={handleInputChange}
            className="w-full border rounded p-3 focus:ring focus:ring-emerald-300"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-1">Description:</label>
          <textarea
            name="description"
            placeholder="Enter product description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full border rounded p-3 focus:ring focus:ring-emerald-300"
            rows={3}
            required
          />
        </div>

        {/* Category & SKU */}
        <div>
          <label className="block font-semibold mb-1">Category:</label>
          <input
            type="text"
            name="category"
            placeholder="Enter category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full border rounded p-3 focus:ring focus:ring-emerald-300"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">SKU:</label>
          <input
            type="text"
            name="sku"
            placeholder="Enter SKU"
            value={formData.sku}
            onChange={handleInputChange}
            className="w-full border rounded p-3 focus:ring focus:ring-emerald-300"
            required
          />
        </div>

        {/* Stock & Discount Price */}
        <div>
          <label className="block font-semibold mb-1">Stock Quantity:</label>
          <input
            type="number"
            name="stockQuantity"
            placeholder="Enter stock quantity"
            value={formData.stockQuantity}
            onChange={handleInputChange}
            className="w-full border rounded p-3 focus:ring focus:ring-emerald-300"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Discount Price:</label>
          <input
            type="number"
            name="discountPrice"
            placeholder="Enter discount price (optional)"
            value={formData.discountPrice}
            onChange={handleInputChange}
            className="w-full border rounded p-3 focus:ring focus:ring-emerald-300"
          />
        </div>

        {/* Tags */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-1">Tags:</label>
          <input
            type="text"
            name="tags"
            placeholder="Enter tags (comma-separated)"
            value={formData.tags}
            onChange={handleInputChange}
            className="w-full border rounded p-3 focus:ring focus:ring-emerald-300"
          />
        </div>

        {/* Brand */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-1">Brand:</label>
          <input
            type="text"
            name="brand"
            placeholder="Enter brand name"
            value={formData.brand}
            onChange={handleInputChange}
            className="w-full border rounded p-3 focus:ring focus:ring-emerald-300"
          />
        </div>

        {/* Weight Options */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-2">Weight & Price:</label>
          {formData.weights.map((weight, index) => (
            <div key={index} className="flex gap-4 mb-2">
              <input
                type="text"
                name="label"
                placeholder="Weight (e.g., 250g)"
                value={weight.label}
                onChange={(e) => handleWeightChange(index, e)}
                className="w-full border rounded p-3 focus:ring focus:ring-emerald-300"
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={weight.price}
                onChange={(e) => handleWeightChange(index, e)}
                className="w-full border rounded p-3 focus:ring focus:ring-emerald-300"
                required
              />
              <button type="button" onClick={() => removeWeightOption(index)} className="text-red-500 font-bold">
                ✖
              </button>
            </div>
          ))}
          <button type="button" onClick={addWeightOption} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            ➕ Add Weight Option
          </button>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-3 rounded">
            🚀 Add Product
          </button>
        </div>
      </form>
    </div>
  );
}