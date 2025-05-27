import React from 'react';
import ProductCard from '@/Components/ProductCard';

const products = [
  {
    name: "Ajneer (Figs)",
    price: 350,
    image: "/products/anj   eer.png",
    description: "Premium quality dried figs for daily health and energy."
  },
  {
    name: "Kaju (Cashew)",
    price: 450,
    image: "/products/kaju.png",
    description: "Whole cashews packed with taste and nutrition."
  },
  {
    name: "Badam (Almonds)",
    price: 400,
    image: "/products/badam.png",
    description: "Rich, crunchy almonds perfect for snacks or gifts."
  }
];

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading products...</p>
      ) : products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <p className="text-gray-500 col-span-full text-center mt-20">No products found.</p>
      )}
    </div>
  );
};

export default ProductGrid;