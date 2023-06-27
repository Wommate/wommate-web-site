import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = () => {
  const position = [14.6884, -17.4569]; // Coordonnées du siège de Simplon Sénégal

  return (
    <MapContainer center={position} zoom={16} scrollWheelZoom={false} className="map-container">
    <TileLayer
        attribution='&copy; <a href="#">Wommate TECH</a> | Map data  Contribution' /* &copy; <a href="https://leafletjs.com">Leaflet</a> */
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

      <Marker position={position}>
        <Popup>
            Siège  Wommate TECH. <br />
            Thoés, Sénégal rue 10
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
