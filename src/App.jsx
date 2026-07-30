import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { AllPartnersPage } from './pages/AllPartnersPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route Halaman Utama */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Route Halaman Semua Partner */}
        <Route path="/partner" element={<AllPartnersPage />} />
      </Routes>
    </Router>
  );
}

export default App;