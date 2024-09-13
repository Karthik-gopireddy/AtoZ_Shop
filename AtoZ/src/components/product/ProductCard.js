import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
// Ensure you have custom styles for ProductCard

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    alert('Item added to cart!');
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
