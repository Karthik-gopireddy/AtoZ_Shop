<h1>E-Commerce Application</h1>

    <h2>Overview</h2>
    <p>This is a React-based e-commerce application that focuses on clean, modular, and scalable architecture. The app includes role-based access for users (Admin & Regular Users), product listing, search functionality, pagination, cart management, and a final order placement workflow. The backend API is simulated using JSON Server.</p>

    <h2>Features</h2>

    <h3>Login Flow and Role-Based Access:</h3>
    <ul>
        <li>User login with username and password.</li>
        <li>Role-based access for Admin and Regular Users.</li>
        <li>Admin access to product management pages.</li>
        <li>User redirection based on their role after login.</li>
    </ul>

    <h3>Product Listing and Search:</h3>
    <ul>
        <li>Fetches product list from the JSON Server.</li>
        <li>Implements search functionality (by name, category, and price range).</li>
        <li>Pagination for product listing.</li>
    </ul>

    <h3>Cart Functionality:</h3>
    <ul>
        <li>Users can add products to their cart.</li>
        <li>Update product quantity and remove items from the cart.</li>
        <li>Cart summary with total price before proceeding to checkout.</li>
    </ul>

    <h3>Placing an Order:</h3>
    <ul>
        <li>Final checkout page for reviewing the cart.</li>
        <li>Order confirmation screen after placing an order.</li>
    </ul>

    <h3>Backend Simulation:</h3>
    <ul>
        <li>Uses JSON Server to simulate backend API calls for products, cart operations, and order placement.</li>
    </ul>

    <h2>Tech Stack</h2>
    <p>Frontend: React, JavaScript, HTML, CSS</p>
    <p>Backend Simulation: JSON Server</p>
    <p>Routing: React Router</p>

    <h2>Installation</h2>

    <h3>Prerequisites</h3>
    <ul>
        <li>Node.js (v14+)</li>
        <li>NPM (v6+)</li>
        <li>JSON Server</li>
    </ul>

    <h3>Steps to Run the Project</h3>

    <h4>Clone the repository:</h4>
    <pre><code>git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
    </code></pre>

    <h4>Install dependencies:</h4>
    <pre><code>npm install
    </code></pre>

    <h4>Set up JSON Server:</h4>
    <p>Create a <code>db.json</code> file in the root of the project with the following structure:</p>

    <pre><code>{
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
    </code></pre>

    <h4>Run JSON Server:</h4>
    <pre><code>json-server --watch db.json --port 5000
    </code></pre>

    <h4>Start the React App:</h4>
    <pre><code>npm start
    </code></pre>

    <h4>Access the Application:</h4>
    <p>Frontend: <a href="http://localhost:3000">http://localhost:3000</a></p>
    <p>JSON Server API: <a href="http://localhost:5000">http://localhost:5000</a></p>

    <h2>Application Structure</h2>
    <ul>
        <li><code>src/components</code>: Contains reusable components like Navbar, ProductList, Cart, etc.</li>
        <li><code>src/pages</code>: Different page components like Login, Product Management, Cart Summary, Checkout.</li>
        <li><code>src/services</code>: API service functions to handle communication with the JSON Server.</li>
        <li><code>src/utils</code>: Helper functions and utilities.</li>
    </ul>

    <h2>Usage</h2>

    <h3>Login</h3>
    <p>Use the following credentials to test role-based access:</p>
    <ul>
        <li>Admin: <code>admin/admin123</code></li>
        <li>Regular User: <code>user/user123</code></li>
    </ul>

    <h3>Product Management (Admin Only)</h3>
    <p>Admin can view, add, edit, and delete products from the product management page.</p>

    <h3>Cart and Checkout</h3>
    <p>Users can add products to their cart, view the cart summary, and proceed to checkout.</p>

    <h2>Deployment</h2>
    <p>You can deploy the frontend using services like Netlify or Vercel. For the backend (JSON Server), use Heroku or another Node.js-supported platform. For detailed instructions on deploying both, refer to the guide in the documentation folder.</p>

    <h2>Contributing</h2>
    <p>Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.</p>
