import L from "leaflet";
import styles from './leaflet.less';

import 'leaflet/dist/leaflet.css';
import { useEffect } from "react";

const Leaflet = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  }, []);

  return (
    <div id="map" className={styles.map} />
  );
};

export default Leaflet;
