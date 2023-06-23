import React, { useEffect } from 'react';
import L from 'leaflet';
import './Map.css';

const Map = () => {
  useEffect(() => {
    const latitude = 14.7167; // Latitude du Sénégal
    const longitude = -17.4677; // Longitude du Sénégal
    const zoom = 6;

    // Création de la carte
    const map = L.map('map').setView([latitude, longitude], zoom);

    // Ajout du fond de carte
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map);

    // Ajout d'un marqueur pour l'emplacement du Sénégal
    L.marker([latitude, longitude]).addTo(map);

    // Nettoyage de la carte lorsque le composant est démonté
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" />;
};

export default Map;
