import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from './utils/axios';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './utils/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
axios.defaults.withCredentials = true;
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/userdashboard') // will fail if not logged in
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/userdashboard" element={
          <ProtectedRoute user={user} allowedRoles={['user', 'manager', 'admin']}>
            <UserDashboard />
          </ProtectedRoute>
        } />

        <Route path="/managerdashboard" element={
          <ProtectedRoute user={user} allowedRoles={['manager', 'admin']}>
            <ManagerDashboard />
          </ProtectedRoute>
        } />

        <Route path="/admindashboard" element={
          <ProtectedRoute user={user} allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
