import { useCart } from "../../context/CartContext";
import { useState } from "react";
import tshirt from "../../assets/tshirt.webp";

const productData = [
  { id: 1, name: "SpitDope Unite & Rule White", size: ["S", "M", "L"], Price: 1000, image: tshirt },
  { id: 2, name: "SpitDope Unite & Rule Black", size: ["S", "M", "L"], Price: 1000, image: tshirt },
];

const ProductList = () => {
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (product) => {
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    addToCart({ ...product, selectedSize });
  };

  return (
    <div className="maincontainer text-black min-h-screen py-12 px-4 sm:px-8">
      <h1 className="text-6xl jersey-15-regular font-bold text-center text-purple-600 mb-10 uppercase tracking-wide ">SpitDope Merch</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl  mx-auto">
        {productData.map((product) => (
          <div key={product.id} className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg border border-neutral-700 transition-transform hover:-translate-y-1" >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 text-white">
              <h2 className="text-lg orbitron text-white font-bold mb-2">{product.name}</h2>
              <label className="block text-sm mb-1 orbitron text-neutral-300">Select Size</label>
              <select
                className="w-full p-2 bg-neutral-800 orbitron border border-neutral-600 rounded text-white mb-3 text-sm"
                value={selectedSizes[product.id] || ""}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                <option value="" className="orbitron">-- Select --</option>
                {product.size.map((sz) => (
                  <option key={sz} value={sz}>
                    {sz}
                  </option>
                ))}
              </select>
              <p className="text-md orbitron font-semibold mb-3">Rs: ₹{product.Price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full py-2 orbitron bg-purple-800 hover:bg-purple-900 transition text-white rounded text-sm font-semibold uppercase"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
