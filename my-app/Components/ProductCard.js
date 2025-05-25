"use client";

import slugify from "slugify";
import Link from "next/link";

const ProductCard = ({ product }) => {
  if (!product) return null; // ✅ Prevents rendering if product is missing

  const slug = product.slug ?? slugify(product.name, { lower: true });

  return (
    <Link href={`/Shop/products/${slug}`} className="block">
      <div className="border rounded-lg p-4 hover:shadow-lg transition-transform hover:scale-105 bg-white">
        {/* ✅ Ensuring Image Has Proper Accessibility & Fallback */}
        <img
          src={product.image ?? "/placeholder.png"}
          alt={product.name}
          className="h-40 w-full object-contain rounded-md"
          loading="lazy"
        />

        {/* ✅ Ensuring Proper Title Formatting */}
        <h3 className="font-semibold mt-2 text-xl text-emerald-700">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description ?? "No description available"}</p>

        {/* ✅ Handling Multiple Weights & Prices */}
        {product.weights?.length > 0 ? (
          <p className="mt-2 font-bold text-green-600">
            Starting at ₹{product.weights[0]?.price ?? "N/A"}
          </p>
        ) : (
          <p className="mt-2 text-red-500 font-bold">Price unavailable</p>
        )}

        {/* ✅ Additional Product Info */}
        <p className="text-sm text-gray-600 mt-2">
          <strong>Category:</strong> {product.category}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Stock:</strong> {product.stockQuantity} available
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;