import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rentals from './pages/Rentals';
import Packages from './pages/Packages';
import Places from './pages/Places';
import Owners from './pages/Owners';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#020617]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rentals/:type" element={<Rentals />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/places" element={<Places />} />
          <Route path="/owners" element={<Owners />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
