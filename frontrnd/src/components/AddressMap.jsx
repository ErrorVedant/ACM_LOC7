import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const AddressMap = () => {
  const position = [19.1041, 72.8392]; // Latitude and Longitude of the address
  const address = "No.U-15, J.V.P.D. Scheme, Bhaktivedanta Swami Marg, Opp.Cooper Hospital, Vile Parle (West), Mumbai-400 056. India";

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-wider text-center">
        LOCATION
      </h2>
      <div className="w-full md:w-2/3 lg:w-1/2" style={{ height: '400px' }}>
        <MapContainer center={position} zoom={16} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
