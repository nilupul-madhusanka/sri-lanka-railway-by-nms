import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import Downloads from './components/Downloads';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/support" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
