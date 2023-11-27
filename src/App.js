import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/Home.css';
import About from './pages/About';
import Login from './pages/Login';
import HApp from './HApp';





const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/secondapp" element={<HApp />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
