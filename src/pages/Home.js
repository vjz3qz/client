import React, { useState, useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

function Home() {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);
  
    useEffect(() => {
      const loader = new Loader({
        apiKey: 'YOUR_API_KEY',
        version: 'weekly',
      });
  
      loader.load().then(() => {
        const center = { lat: 37.7749, lng: -122.4194 };
  
        const map = new window.google.maps.Map(mapRef.current, {
          center,
          zoom: 12,
        });
  
        const marker = new window.google.maps.Marker({
          position: center,
          map,
          title: 'San Francisco',
        });
  
        setMap(map);
      });
    }, []);
  
    useEffect(() => {
      return () => {
        if (map) {
          map.setMap(null);
        }
      };
    }, [map]);
  
    return (
      <div>
        <h1>Welcome to Leftover Love</h1>
        <div ref={mapRef} style={{ height: '500px' }}></div>
        <p>
          Leftover Love is a website that connects local restaurants with nearby homeless shelters to donate unused food before it expires. Our goal is
          to reduce food waste while helping those in need. Join us in making a
          difference today!
        </p>
      </div>
    );
  }
  
  export default Home;