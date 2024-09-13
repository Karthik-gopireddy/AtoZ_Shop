import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/auth/Login';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AdminDashboard from './pages/AdminDashboard'; // Admin Dashboard import
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import './styles/global.css'; // Ensure global styles are imported

// In index.js or App.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Orders from './pages/Orders';
import BillingAddress from './pages/BillingAddress';


const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/cart" component={CartPage} />
            <Route path="/orders" component={Orders} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/admin-dashboard" component={AdminDashboard} /> {/* Admin route */}
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
