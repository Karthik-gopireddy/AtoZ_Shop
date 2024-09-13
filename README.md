
E-Commerce Application
Overview
This is a React-based e-commerce application that focuses on clean, modular, and scalable architecture.
The app includes role-based access for users (Admin & Regular Users), product listing, search functionality, pagination,
cart management, and a final order placement workflow. The backend API is simulated using JSON Server.

Features
Login Flow and Role-Based Access:

User login with username and password.
Role-based access for Admin and Regular Users.
Admin access to product management pages.
User redirection based on their role after login.
Product Listing and Search:

Fetches product list from the JSON Server.
Implements search functionality (by name, category, and price range).
Pagination for product listing.
Cart Functionality:

Users can add products to their cart.
Update product quantity and remove items from the cart.
Cart summary with total price before proceeding to checkout.
Placing an Order:

Final checkout page for reviewing the cart.
Order confirmation screen after placing an order.
Backend Simulation:

Uses JSON Server to simulate backend API calls for products, cart operations, and order placement.
Tech Stack
Frontend: React, JavaScript, HTML, CSS
Backend Simulation: JSON Server
Routing: React Router
Installation
Prerequisites
Node.js (v14+)
NPM (v6+)
JSON Server
Steps to Run the Project
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install dependencies:

bash
Copy code
npm install
Set up JSON Server:

Create a db.json file in the root of the project with the following structure:

json
Copy code
{
  "products": [
    { "id": 1, "name": "Product 1", "price": 100, "category": "Category 1" },
    { "id": 2, "name": "Product 2", "price": 200, "category": "Category 2" }
  ],
  "users": [
    { "id": 1, "username": "admin", "password": "admin123", "role": "admin" },
    { "id": 2, "username": "user", "password": "user123", "role": "user" }
  ],
  "orders": []
}
Run JSON Server:

bash
Copy code
json-server --watch db.json --port 5000
Start the React App:

bash
Copy code
npm start
Access the Application:

Frontend: http://localhost:3000
JSON Server API: http://localhost:5000
Application Structure
src/components: Contains reusable components like Navbar, ProductList, Cart, etc.
src/pages: Different page components like Login, Product Management, Cart Summary, Checkout.
src/services: API service functions to handle communication with the JSON Server.
src/utils: Helper functions and utilities.
Usage
Login
Use the following credentials to test role-based access:
Admin: admin/admin123
Regular User: user/user123
Product Management (Admin Only)
Admin can view, add, edit, and delete products from the product management page.
Cart and Checkout
Users can add products to their cart, view the cart summary, and proceed to checkout.
Deployment
You can deploy the frontend using services like Netlify or Vercel. For the backend (JSON Server), use Heroku or another Node.js-supported platform. For detailed instructions on deploying both, refer to the guide in the documentation folder.

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
