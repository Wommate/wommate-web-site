import React, { useEffect } from 'react';
import L from 'leaflet';
import './Map.css'; // Import du fichier CSS pour la carte

const Map = () => {
  useEffect(() => {
    const latitude = 14.6962; // Latitude de Sonatel Sénégal
    const longitude = -17.4649; // Longitude de Sonatel Sénégal
    const zoom = 5; // Niveau de zoom initial

    // Création de la carte
    const map = L.map('map').setView([latitude, longitude], zoom);

    // Ajout du fond de carte
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors',
      maxZoom: 18, //niveau zoom maximum
    }).addTo(map);

    // Ajout d'un marqueur pour l'emplacement de l'entreprise
    const marker = L.marker([latitude, longitude]).addTo(map);

    // Ajout d'une info-bulle au marqueur
    marker.bindPopup('Sonatel Sénégal');

    // Nettoyage de la carte lorsque le composant est démonté
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className='container'>
      <div id="map" >

      </div>
    </div>
  )
};

export default Map;

