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
/*
    <div>
        <h1>Welcome to Leftover Love</h1>
        <p style={{ paddingLeft: "80px", paddingRight: "80px" }} >
            Leftover Love is an app that connects local restaurants with nearby
            homeless shelters to donate unused food before it expires. Our goal is
            to reduce food waste while helping those in need. Join us in making a
            difference today!
        </p>

        <div className="map-container">

        < div ref={mapRef} style={{height: "500px", width: "65%", margin: "0 auto", padding: "100px", border: "5px solid black", borderRadius: "18px"}}></div>

        </div> 
    </div>
  */
    <div>
    <h1 style={{ paddingBottom: "10px", paddingTop: "7px", }}>
      Welcome to Leftover Love
      </h1>
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <div style={{ flex: 1}}>
      <p style={{ fontWeight: "bold"}}>
              About
        </p>
        <p style={{ paddingLeft: "80px", paddingRight: "80px", textAlign: "left", fontSize: "17px"}} >
              Leftover Love is an app that connects local restaurants with nearby
              homeless shelters to donate unused food before it expires. Our goal is
              to reduce food waste while helping those in need. Join us in making a
              difference today!
        </p>
        <p style={{ fontWeight: "bold"}}>
              Mission Statement
        </p>
        <p style={{ paddingLeft: "80px", paddingRight: "80px", textAlign: "left", fontSize: "17px"}} >
              Leftover Love's mission is to bridge the gap between local restaurants and homeless shelters, 
              by providing a platform that facilitates the donation of unused food before it goes to waste. We believe that 
              everyone deserves access to fresh and nutritious meals, and that we can reduce food waste while addressing hunger 
              in our communities. Our app provides a simple and easy-to-use solution for restaurants and shelters to connect and 
              make a positive impact on people's lives. Join us in our mission to make a difference today, one meal at a time.
        </p>
      </div>
      <div style={{ flex: 1 }}>

        <div className="map-container">

          <div ref={mapRef} style={{
          height: "300px", 
          width: "50%", 
          margin: "0 auto", 
          padding: "100px", 
          border: "5px solid black", 
          borderRadius: "18px",
          borderColor: "#9c3030"}}></div>

        </div>

      </div>
    </div>
  </div>
  
  );
};

export default Home;



/*
<div>
  <h1>Welcome to Leftover Love</h1>
  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
    <div style={{ flex: 1}}>
      <p>
            Leftover Love is an app that connects local restaurants with nearby
            homeless shelters to donate unused food before it expires. Our goal is
            to reduce food waste while helping those in need. Join us in making a
            difference today!
      </p>
    </div>
    <div style={{ flex: 1 }}>
      <div className="map-container">
        <div ref={mapRef} className="map"></div>
      </div>
    </div>
  </div>
</div>



*/