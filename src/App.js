import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AddFood from "./pages/AddFood";
import NavigationBar from './components/NavigationBar';
//import Map from './components/Map';
import './styles/App.css';
import { Loader } from '@googlemaps/js-api-loader';

function App() {

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AddFood" element={<AddFood />} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;