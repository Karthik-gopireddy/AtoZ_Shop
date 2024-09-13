import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/orders');
        setOrders(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching orders.');
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="orders-page">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders.</p>
      ) : (
        <ul className="orders-list">
          {orders.map((order, index) => (
            <li key={index} className="order-item">
              <h4>Order #{index + 1}</h4>
              {order.items.map((item) => (
                <div className='ordereditemcontainet' key={item.id}>
                  <p>Product Name: {item.name}</p>
                  <p>Quantity:  {item.quantity}</p>
                  <p>Price ${item.price}</p>
                
                </div>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
