import React from 'react';
import GoogleMapReact from 'google-map-react';

const api_key = process.env.REACT_APP_API_KEY;

const Map = () => {
  const defaultProps = {
    center: {
      lat: 38.0355514,
      lng: -78.5060009
    },
    zoom: 8
  };

  const markers = [
    { lat: 37.7749, lng: -122.4194 },
    { lat: 37.773, lng: -122.421 },
    { lat: 37.772, lng: -122.418 }
  ];

  const addMarkers = (map, maps) => {
    markers.forEach(marker => {
      new maps.Marker({
        position: { lat: marker.lat, lng: marker.lng },
        map: map,
        title: 'Hello World!'
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
