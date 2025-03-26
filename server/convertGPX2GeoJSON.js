import tj from '@mapbox/togeojson';
import fs from 'fs';
import xmldom from 'xmldom';

const DOMParser = xmldom.DOMParser;

const gpx = new DOMParser().parseFromString(fs.readFileSync('../route/450092046183596032.gpx', 'utf8'));

const geojson = tj.gpx(gpx);

const data = JSON.stringify(geojson);

// write JSON string to a file
fs.writeFile('../route/450092046183596032.json', data, (err) => {
  if (err) {
    throw err;
  }
  console.log("JSON data is saved.");
});
