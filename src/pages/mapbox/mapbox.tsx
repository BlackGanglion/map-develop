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
        zoom: 14.010835765263757,
        center: [-119.62979667500952, 37.73032742474979],
        pitch: 59.44254820175759,
        bearing: 20.35360000000128,
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        // style: 'mapbox://styles/mapbox/standard'
      });

      map.on('style.load', () => {
        map.addSource('mapbox-dem', {
          'type': 'raster-dem',
          'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
          'tileSize': 512,
          'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

        map.addSource("trace", {
          type: "geojson",
          lineMetrics: true,
          data: (data as any).data,
        });

        map.addLayer({
          type: 'line',
          source: 'trace',
          id: 'line',
          paint: {
            'line-color': 'blue',
            'line-width': 1
          },
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
            'line-z-offset': 10
          }
        })
      });

      function printMapState() {
        console.log("Zoom: " + map.getZoom());
        console.log("Center: " + JSON.stringify(map.getCenter()));
        console.log("Pitch: " + map.getPitch());
        console.log("Bearing: " + map.getBearing());
      }

      map.on('moveend', printMapState);
    }

  }, [data]);

  return (
    <div id="map" className={styles.map} />
  );
}

export default Mapbox;