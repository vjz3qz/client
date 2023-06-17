import React from 'react';
import GoogleMapReact from 'google-map-react';

const api_key = process.env.API_KEY;

const Map = () => {
  const defaultProps = {
    center: {
      lat: 37.7749,
      lng: -122.4194
    },
    zoom: 8
  };
  // Sample marker data
  const markers = [
    { lat: 37.7749, lng: -122.4194 },
    { lat: 37.773, lng: -122.421 },
    { lat: 37.772, lng: -122.418 }
  ];

  const Marker = ({ lat, lng }) => <div className="marker" lat={lat} lng={lng} />;

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: api_key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* Add markers or other map components here */}
        {markers.map(marker => (
          <Marker key={`${marker.lat}-${marker.lng}`} lat={marker.lat} lng={marker.lng} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
