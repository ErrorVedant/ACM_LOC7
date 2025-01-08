import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet styles
import L from 'leaflet';
import minecraft from './minecraft.jpg'; // Add image for Social Cause

// Fixing the default marker icon issue in Leaflet when using React
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Update default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const AddressMap = () => {
  const position = [19.1041, 72.8392]; // Latitude and Longitude of the address
  const address =
    "No.U-15, J.V.P.D. Scheme, Bhaktivedanta Swami Marg, Opp.Cooper Hospital, Vile Parle (West), Mumbai-400 056. India";

  return (
    <div
      className="flex flex-col z-20 items-center justify-center py-12"
      style={{
        backgroundImage: `url(${minecraft})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Optional, for parallax effect
      }}
    >
      <h2 className="text-5xl md:text-7xl  font-extrabold mb-8 tracking-wider text-center text-white">
        LOCATION
      </h2>
      <div className="w-full md:w-2/3 lg:w-1/2" style={{ height: '400px' }}>
        <MapContainer
          center={position}
          zoom={16}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>{address}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default AddressMap;
