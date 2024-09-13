import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    await axios.post('http://localhost:5000/products', newProduct);
    setNewProduct({ name: '', price: '', category: '' });
    const response = await axios.get('http://localhost:5000/products');
    setProducts(response.data);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="add-product-form">
        <h2>Add New Product</h2>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <div className="product-list">
        <h2>Product List</h2>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
