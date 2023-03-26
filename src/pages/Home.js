import { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Home = () => {
  const mapRef = useRef(null);
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });
  
    loader.load().then(() => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 16,
      });
  
      const marker = new window.google.maps.Marker({
        position: location,
        map: map,
      });
  
      // Get the current position once and stop watching for updates
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(currentPosition);
          map.setCenter(currentPosition);
          marker.setPosition(currentPosition);
        },
        (error) => {
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    });
  }, []);

  return (
    <div>
      <div ref={mapRef} style={{ height: "500px", width: "100%" }}></div>
    </div>
  );
};

export default Home;
