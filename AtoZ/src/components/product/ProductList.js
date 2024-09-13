import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import c1 from "./images/c1.jpg"
import c2 from "./images/c2.jpg"
import c3 from "./images/c3.png"
import c4 from "./images/c4.jpg"
import c5 from "./images/c5.jpg"

// Ensure you have the custom styles

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
      setFilteredProducts(response.data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        (selectedCategory === 'All' || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, selectedCategory, products]);

  // Carousel settings for static images
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic scrolling
    autoplaySpeed: 2000, // Scroll every 2 seconds
  };

  // Static images for the carousel
  const carouselImages = [
    c1,
    c2,
    c3,
    c4,
    c5
  ];

  // Extract categories from products
  const categories = ['All', ...new Set(products.map(product => product.category))];

  // Check if filters are applied
  const isFilterApplied = searchTerm !== '' || selectedCategory !== 'All';

  return (
    <div className="product-list">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-dropdown"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      
      {/* Render the carousel only if no filters are applied */}
      {!isFilterApplied && (
        <div className="carousel-container">
          <Slider {...carouselSettings}>
            {carouselImages.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`Carousel ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      )}
      
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
