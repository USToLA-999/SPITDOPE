import { useState } from "react";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CartPage = () => {
  const { cart, clearCart, removeFromCart, undoRemove, increaseQty, decreaseQty,  } = useCart();
  const total = cart.reduce((sum, item) => sum + item.Price * item.qty, 0);
  const [form, setForm] = useState({ name: "", phone: "", address: "", state: "", zipcode: "", city: "" });
  const [toast, setToast] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = { customer: form, products: cart, total };

    try {
      await axios.post("http://localhost:5000/api/orders", order);
      alert("Order Saved Successfully!");
      clearCart();
    } catch (error) {
      alert("Error saving order.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="p-4 sm:p-8 maincontainer min-h-screen text-white font-[orbitron] relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl text-[#b82fde] jersey-15-regular mb-6">🛒 Checkout</h2>

          <form onSubmit={handleSubmit} className=" sm:grid flex-col  gap-4 grid-cols-1  sm:grid-cols-2  bg-[#c4c4c4] px-2 rounded-lg border border-[#b82fde] shadow-md" >
            {Object.keys(form).map((field) => (
              <input
                key={field}
                required
                name={field}
                placeholder={field.toUpperCase()}
                onChange={handleChange}
                className="p-3 text-white border w-full mt-5 border-[#b82fde] placeholder-gray-400 rounded shadow-sm bg-[#000] focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            ))}
            <button
              type="submit"
              className="col-span-2 w-full mt-5 bg-[#b82fde] hover:bg-purple-700 text-white py-3 my-3 rounded "
            >
              📝 Place Order
            </button>
          </form>

          <h3 className="text-3xl jersey-15-regular text-yellow-400 mt-10">🧾 Cart Items</h3>

          {cart.length === 0 ? (
            <p className="mt-4 text-gray-300">Your cart is empty.</p>
          ) : (
            cart.map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row justify-between items-center bg-[#bebebe] mt-4 p-4 rounded border-l-4 border-[#b82fde] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4 w-full sm:w-1/2 mb-2 sm:mb-0">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded shadow-md border border-[#b82fde]"
                    />
                  )}
                  <div className="font-bold text-black">{item.name}</div>
                </div>
                <div className="text-sm text-purple-800 mb-2 sm:mb-0">Size: {item.selectedSize}</div>
                <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
                  <button onClick={() => decreaseQty(item.id)} className="px-2 py-1 bg-gray-700 text-white rounded">
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)} className="px-2 py-1 bg-gray-700 text-white rounded">
                    +
                  </button>
                  <button
                    onClick={() => {
                      removeFromCart(i);
                      setToast("Item removed. You can undo.");
                    }}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-800"
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))
          )}

          <div className="text-xl text-green-400 mt-4 font-bold">🧮 Total: ₹{total}</div>

          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="mt-6 bg-red-800 hover:bg-red-700 text-white px-6 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              🧹 Clear Cart
            </button>
          )}

          {toast && (
            <div className="mt-4 bg-yellow-400 text-black p-3 rounded shadow">
              {toast}
              <button
                onClick={() => {
                  undoRemove();
                  setToast("");
                }}
                className="ml-4 text-blue-700 underline"
              >
                Undo
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default CartPage;
