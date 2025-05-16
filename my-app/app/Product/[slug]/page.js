import { useSearchParams } from 'next/navigation';

const ProductDetailPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <p className="mt-2">Product ID: {id}</p>
      {/* You can fetch product data here using the ID */}
    </div>
  );
};

export default ProductDetailPage;
