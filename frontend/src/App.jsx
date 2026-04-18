import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rentals from './pages/Rentals';
import Packages from './pages/Packages';
import Places from './pages/Places';
import Owners from './pages/Owners';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rentals/:type" element={<Rentals />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/places" element={<Places />} />
            <Route path="/owners" element={<Owners />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
