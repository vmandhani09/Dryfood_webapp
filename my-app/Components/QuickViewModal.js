const QuickViewModal = ({ product, selectedWeight, onClose }) => {
  const weight = selectedWeight || Object.keys(product.weights)[0];
  const price = product.weights[weight];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <img src={product.image} className="w-full h-48 object-cover rounded mb-4" />
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        <p className="text-lg font-semibold">₹{price} for {weight}</p>
        <button className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
export default QuickViewModal;