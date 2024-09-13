import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'; // Update import for React Router v6
import emptycart from "../../components/emptycart.jpg";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const roundedTotalPrice = Math.round(totalPrice);

  const handleQuantityChange = (itemId, change) => {
    const item = cart.find(item => item.id === itemId);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        updateQuantity(itemId, newQuantity);
      }
    }
  };

  return (
    <div className="cart-page">
      {cart.length === 0 ? (
        <div className='emptycartcontainer'>
          <p>Your cart is empty</p>
          <img className='emptycartimage' src={emptycart} alt="empty cart" />
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <input
                    type="number"
                    value={item.quantity}
                    readOnly
                  />
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          <div className='buycontainer'>
            <h3>Total: ${roundedTotalPrice}</h3>
            <Link to="/checkout">
              <button className="buy-button">Buy Now</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
