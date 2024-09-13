# E-Commerce Application

## Overview
This is a React-based e-commerce application that focuses on clean, modular, and scalable architecture. The app includes role-based access for users (Admin & Regular Users), product listing, search functionality, pagination, cart management, and a final order placement workflow. The backend API is simulated using JSON Server.

## Features

### Login Flow and Role-Based Access:
- User login with username and password.
- Role-based access for Admin and Regular Users.
- Admin access to product management pages.
- User redirection based on their role after login.

### Product Listing and Search:
- Fetches product list from the JSON Server.
- Implements search functionality (by name, category, and price range).
- Pagination for product listing.

### Cart Functionality:
- Users can add products to their cart.
- Update product quantity and remove items from the cart.
- Cart summary with total price before proceeding to checkout.

### Placing an Order:
- Final checkout page for reviewing the cart.
- Order confirmation screen after placing an order.

### Backend Simulation:
- Uses JSON Server to simulate backend API calls for products, cart operations, and order placement.

## Tech Stack
- **Frontend:** React, JavaScript, HTML, CSS
- **Backend Simulation:** JSON Server
- **Routing:** React Router

## Installation

### Prerequisites
- Node.js (v14+)
- NPM (v6+)
- JSON Server

### Steps to Run the Project

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
