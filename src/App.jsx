import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'; // Make sure this imports your custom styles along with Tailwind's utilities

import LandingPage from './pages/LandingPage';
import SignUp from './pages/Signup';       // create these components if not already
import SignIn from './pages/SignIn';
import AdminDashboard from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Teachers from './pages/Teachers';
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    
  );
}

export default App;
