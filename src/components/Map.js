import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;

const Map = () => {
  const defaultProps = {
    center: {
      lat: 38.0355514,
      lng: -78.5060009
    },
    zoom: 8
  };

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchExpiredRestaurants = async () => {
      try {
        const response = await axios.get('/api/restaurants/expiring-food');
        const expiredRestaurants = response.data;
        const restaurantMarkers = expiredRestaurants.map(restaurant => ({
          lat: restaurant.coordinates[1],
          lng: restaurant.coordinates[0],
          title: restaurant.name
        }));
        setMarkers(restaurantMarkers);
      } catch (error) {
        console.error('Failed to fetch expired restaurants:', error);
      }
    };

    fetchExpiredRestaurants();
  }, []);

  const addMarkers = (map, maps) => {
    markers.forEach(marker => {
      new maps.Marker({
        position: { lat: marker.lat, lng: marker.lng },
        map: map,
        title: marker.title
      });
    });
  };

  const handleApiLoaded = (map, maps) => {
    addMarkers(map, maps);
  };

  return (
    <div className="map" style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: api_key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {/* You can render additional components or markers here */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;