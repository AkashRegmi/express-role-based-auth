import { useState } from 'react';
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user'
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post('/signup', formData);
      alert("Signup successful! Now log in.");
      nav('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <input name="name" onChange={handleChange} placeholder="Name" className="border px-2 py-1 mb-2" />
      <input name="email" onChange={handleChange} placeholder="Email" className="border px-2 py-1 mb-2" />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" className="border px-2 py-1 mb-2" />
      <select name="role" onChange={handleChange} className="border px-2 py-1 mb-2">
        <option value="user">User</option>
        <option value="manager">Manager</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleSignup} className="bg-green-600 text-white px-4 py-1 rounded">Sign Up</button>
    </div>
  );
};

export default Signup;
