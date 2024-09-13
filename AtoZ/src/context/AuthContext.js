import { createContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const history = useHistory(); // For React Router v5
  // For React Router v6, use `import { useNavigate } from 'react-router-dom';` and replace `history` with `navigate`

  const login = async (username, password) => {
    try {
      const response = await axios.get(`http://localhost:5000/users?username=${username}&password=${password}`);
      if (response.data.length > 0) {
        const loggedInUser = response.data[0];
        setUser(loggedInUser);

        // Redirect based on user role
        if (loggedInUser.role === 'admin') {
          history.push('/admin-dashboard'); // Adjust this route as needed
        } else {
          history.push('/');
        }
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  const logout = () => {
    setUser(null);
    history.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
