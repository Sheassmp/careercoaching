import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Newsletter from './pages/Newsletter';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className='app-container'>
    <Router>
      <Header />
      <div className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
      </div>
      <Footer />
    </Router>
    </div>
  );
};

export default App;
