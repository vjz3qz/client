// // Import the Google Maps JavaScript API
// import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// // Import the API endpoint URL
// import { API_ENDPOINT as AVAILABLE_FOODS_API } from "../utils/AvailableRestaurants";

// // Define the center of the map
// const mapCenter = { lat: 38.0356, lng: -78.5033 };
// const SECRET_KEY = process.env.API_KEY;
// // Define the initial state of the component
// const [restaurants, setRestaurants] = useState([]);

// // Fetch the list of restaurants with food available
// useEffect(() => {
//   fetch(AVAILABLE_FOODS_API)
//     .then((response) => response.json())
//     .then((data) => setRestaurants(data))
//     .catch((error) => console.error(error));
// }, []);


// function Map() {
//     // Render the map with markers for each restaurant
//     return (
//     <LoadScript googleMapsApiKey={SECRET_KEY}>
//         <GoogleMap center={mapCenter} zoom={5}>
//         {restaurants.map((restaurant) => (
//             <Marker
//             key={restaurant._id}
//             position={{ lat: restaurant.latitude, lng: restaurant.longitude }}
//             />
//         ))}
//         </GoogleMap>
//     </LoadScript>
//     )};

// module.export = Map;


import React from 'react';
import GoogleMapReact from 'google-map-react';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
};

const Map = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={59.955413} lng={30.337844} />
      </GoogleMapReact>
    </div>
  );
};

const Marker = () => <div className="marker" />;

export default Map;
