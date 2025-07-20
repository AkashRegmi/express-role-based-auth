import { useState } from 'react';
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('/signin', { email, password });
      setUser(res.data.data);
      const role = res.data.data.role;
      if (role === 'admin') nav('/admindashboard');
      else if (role === 'manager') nav('/managerdashboard');
      else nav('/userdashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border px-2 py-1 mb-2" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="border px-2 py-1 mb-2" />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-1 rounded">Login</button>
    </div>
  );
};

export default Login;
