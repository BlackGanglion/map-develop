import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './mapbox.less';
import { token } from '../../../config';

mapboxgl.accessToken = token;

const Mapbox = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }, []);
  return (
    <div id="map" className={styles.map} />
  );
}

export default Mapbox;