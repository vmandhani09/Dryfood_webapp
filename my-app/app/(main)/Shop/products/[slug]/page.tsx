"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import React from "react";

type WeightOption = {
  label: string;
  price: number;
};

type Product = {
  _id: string;
  name: string;
  image?: string;
  description?: string;
  weights: WeightOption[];
  category: string;
  brand?: string;
  stockQuantity: number;
};

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedWeight, setSelectedWeight] = useState<WeightOption | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.product);
        setSelectedWeight(data.product?.weights?.[0] || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <p className="text-center text-lg text-gray-600">Loading product details...</p>;
  }

  if (!product) {
    return <p className="text-center text-lg text-red-600">Product not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-6">
      <h1 className="text-4xl font-bold text-emerald-700">{product.name}</h1>
      <img src={product.image ?? "/placeholder.png"} alt={product.name} className="w-full h-64 object-cover rounded-lg mt-4" />
      <p className="text-lg text-gray-600 mt-4">{product.description ?? "No description available"}</p>

      {product.weights?.length > 0 && (
        <div className="mt-6">
          <label className="font-semibold text-gray-700">Choose Weight:</label>
          <select
            className="w-full border rounded-lg p-3 mt-2"
            value={selectedWeight?.label}
            onChange={(e) => {
              const selected = product.weights.find((w) => w.label === e.target.value);
              setSelectedWeight(selected || null);
            }}
          >
            {product.weights.map((weight) => (
              <option key={weight.label} value={weight.label}>
                {weight.label}
              </option>
            ))}
          </select>
          {selectedWeight && (
            <p className="mt-2 text-lg font-bold text-green-600">₹{selectedWeight.price}</p>
          )}
        </div>
      )}

      <div className="mt-6 text-gray-700">
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Brand:</strong> {product.brand ?? "N/A"}</p>
        <p><strong>Stock:</strong> {product.stockQuantity} available</p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
