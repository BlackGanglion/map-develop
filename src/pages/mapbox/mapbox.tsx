import { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './mapbox.less';
import { token } from '../../../config';
import useFetch from '@/utils/useFetch';

mapboxgl.accessToken = token;

const Mapbox = () => {
  const { data } = useFetch('http://localhost:3000/api/geojson');

  useEffect(() => {
    if (data) {
      const map = new mapboxgl.Map({
        // style: 'mapbox://styles/blackganglion/cm4ps80vc006101su8ofl1z6q', // style URL
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
  
        container: 'map',
        zoom: 16.12,
        center: [-119.71815002555762, 37.71805350964638],
        pitch: 22.442548201757614,
        bearing: -21.246399999999426,
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        // style: 'mapbox://styles/mapbox/standard'
      });

      console.log(map);
  
      map.on('style.load', () => {
        map.addSource('mapbox-dem', {
          'type': 'raster-dem',
          'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
          'tileSize': 512,
          'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

        map.addSource("running-routes", {
          type: "geojson",
          // a reference to the converted data
          // could come from a file, API, etc
          data: (data as any).data,
        });
      
        map.addLayer({
          id: "running-routes-line",
          type: "line",
          source: "running-routes",
          paint: {
            "line-color": "#15cc09",
            "line-width": 4,
          },
        })
      });
    }
      
  }, [data]);

  return (
    <div id="map" className={styles.map} />
  );
}

export default Mapbox;