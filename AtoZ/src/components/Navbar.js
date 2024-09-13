import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';
import logo from "./logo.png"

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
        <img src={logo} alt="logo" className='logoimage'/>
        </Link>
      </div>
      <button className="menu-toggle" onClick={handleMenuToggle}>
        ☰
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
        {user && user.role === 'admin' && <Link to="/admin-dashboard">Admin Dashboard</Link>}
        {user ? (
          <>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
