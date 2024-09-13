import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom'; // For React Router v5
// For React Router v6, use `import { useNavigate } from 'react-router-dom';` and replace `history` with `navigate`

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const history = useHistory(); // For React Router v5
  // For React Router v6, use `const navigate = useNavigate();` and replace `history` with `navigate`

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
