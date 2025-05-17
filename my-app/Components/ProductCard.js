'use client';
import slugify from 'slugify';
import Link from 'next/link';
const ProductCard = ({ product }) => {
  if (!product) return null; // Prevents rendering if product is missing

  const slug = slugify(product.name, { lower: true });

  return (
    <Link href={`/product/${slug}`}>
      <div className="border rounded p-4 hover:shadow-md">
        <img src={product.image} alt={product.name} className="h-40 w-full object-contain" />
        <h3 className="font-semibold mt-2">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="mt-1 font-bold text-green-600">₹{product.weights[0].price}</p>
      </div>
    </Link>
  );
};
export default ProductCard;