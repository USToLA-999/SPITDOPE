import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/orders", { withCredentials: true }).then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin - Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="border p-4 mb-4">
          <p><strong>Name:</strong> {order.name}</p>
          <p><strong>Phone:</strong> {order.phone}</p>
          <p><strong>Address:</strong> {order.address}</p>
          <p><strong>Products:</strong> {JSON.parse(order.products).join(", ")}</p>
          <p><strong>Total:</strong> ₹{order.total}</p>
          <p><strong>Date:</strong> {new Date(order.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;

