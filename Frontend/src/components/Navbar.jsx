import { Link, useNavigate } from 'react-router-dom';
import axios from '../utils/axios';

export default function Navbar({ user }) {
  const nav = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('/logout');
      window.location.href = '/';
    } catch (err) {
      alert('Logout failed');
    }
  };

  return (
    <nav className="flex justify-between px-6 py-3 bg-gray-800 text-white">
      <div>MyApp</div>
      <div className="flex gap-4">
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={handleLogout} className="text-red-400 hover:underline">Logout</button>
          </>
        ) : (
          <>
            <Link to="/">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
