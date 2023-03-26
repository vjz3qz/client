import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavigationBar from './components/NavigationBar';
import './styles/App.css';
import { Loader } from '@googlemaps/js-api-loader';

function App() {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'YOUR_API_KEY',
      version: 'weekly',
    });

    loader.load().then(() => {
      const google = window.google;
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 8,
      });
      setMap(map);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home map={map} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div ref={mapRef} style={{ height: '500px', width: '100%' }}></div>
      </div>
    </Router>
  );
}

export default App;

