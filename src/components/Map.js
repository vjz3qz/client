// Import the Google Maps JavaScript API
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Import the API endpoint URL
import { API_ENDPOINT } from "../utils/api";

// Define the center of the map
const mapCenter = { lat: 38.0356, lng: -78.5033 };
const SECRET_KEY = process.env.API_KEY;
// Define the initial state of the component
const [restaurants, setRestaurants] = useState([]);

// Fetch the list of restaurants with food available
useEffect(() => {
  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => setRestaurants(data))
    .catch((error) => console.error(error));
}, []);

// Render the map with markers for each restaurant
return (
  <LoadScript googleMapsApiKey={SECRET_KEY}>
    <GoogleMap center={mapCenter} zoom={12}>
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant._id}
          position={{ lat: restaurant.latitude, lng: restaurant.longitude }}
        />
      ))}
    </GoogleMap>
  </LoadScript>
);
