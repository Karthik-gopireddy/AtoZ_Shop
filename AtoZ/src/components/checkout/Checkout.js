import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import axios from 'axios';
import BillingAddress from '../../pages/BillingAddress'; // Import the BillingAddress component

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [billingDetails, setBillingDetails] = useState(null);
  const [showBillingForm, setShowBillingForm] = useState(false);

  // Function to handle the billing details
  const handleBillingSubmit = (details) => {
    setBillingDetails(details);
  };

  // Handle placing the order
  const handleOrder = async () => {
    if (!billingDetails) {
      alert('Please fill out your billing details.');
      setShowBillingForm(true); // Show the billing form
      return;
    }

    const orderData = {
      items: cart,
      billing: billingDetails
    };

    try {
      await axios.post('http://localhost:5000/orders', orderData);
      alert('Order placed successfully!');
    } catch (error) {
      alert('Order placement failed.');
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cart.map((item) => (
        <div className='details' key={item.id}>
          <p>Product Name: {item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}

      {/* Show billing form */}
      {showBillingForm && (
        <BillingAddress onSubmit={handleBillingSubmit} />
      )}

      <button className='checkoutButton' onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
