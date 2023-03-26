import { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import '../styles/App.css';

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

    // Fetch the data from the API endpoint
    fetch("/restaurants-with-food")
    .then((response) => response.json())
    .then((data) => {
      // Loop through the data and create a marker for each location
      data.forEach((location) => {
        
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address: location }, (results, status) => {
            if (status === "OK") {
            const marker = new window.google.maps.Marker({
                position: results[0].geometry.location,
                map: map,
                title: location,
            });
            marker.setMap(map);
            } else {
            console.error("Geocode was not successful for the following reason: " + status);
            }
        });
      });
    })
    .catch((error) => {
      console.error(error);
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
        <h1>Welcome to Leftover Love</h1>
        <p>
            Leftover Love is an app that connects local restaurants with nearby
            homeless shelters to donate unused food before it expires. Our goal is
            to reduce food waste while helping those in need. Join us in making a
            difference today!
        </p>

        <div className="map-container">

        < div ref={mapRef} style={{height: "500px", width: "65%", margin: "0 auto", padding: "100px", border: "5px solid black", borderRadius: "18px"}}></div>

        </div> 
    </div>
  );
};

export default Home;
