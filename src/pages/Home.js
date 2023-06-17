import React from "react";
import Map from '../components/Map';
import '../styles/App.css';

const Home = () => {
  return (
    <div>
      <h1 style={{ paddingBottom: "10px", paddingTop: "7px" }}>
        Welcome to Leftover Link
      </h1>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontWeight: "bold" }}>About</p>
          <p style={{ paddingLeft: "80px", paddingRight: "80px", textAlign: "left", fontSize: "17px" }}>
            Leftover Link is an app that connects local restaurants with nearby homeless shelters to donate unused food before it expires. Our goal is to reduce food waste while helping those in need. Join us in making a difference today!
          </p>
          <p style={{ fontWeight: "bold" }}>Mission Statement</p>
          <p style={{ paddingLeft: "80px", paddingRight: "80px", textAlign: "left", fontSize: "17px" }}>
            Leftover Link's mission is to bridge the gap between local restaurants and homeless shelters, by providing a platform that facilitates the donation of unused food before it goes to waste. We believe that everyone deserves access to fresh and nutritious meals, and that we can reduce food waste while addressing hunger in our communities. Our app provides a simple and easy-to-use solution for restaurants and shelters to connect and make a positive impact on people's lives. Join us in our mission to make a difference today, one meal at a time.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <div className="map-container">
            <div className="map-wrapper">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
