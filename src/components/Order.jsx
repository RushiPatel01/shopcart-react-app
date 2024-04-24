import React, { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore/lite";
import { orderCollection } from "../firebase/firebase.config";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(orderCollection);
        const ordersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();

    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Orders</h2>
      <div>
        <h3>Order List:</h3>
        {orders.map((order) => (
          <div key={order.id}>
            <h4>Order ID: {order.id}</h4>
            {/* Render other order details here */}
          </div>
        ))}
      </div>
      <div>
        <h3>Cart Items:</h3>
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>Item: {item.title}</p>
            <p>Quantity: {item.quantity}</p>
            {/* Render other cart item details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
