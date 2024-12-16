import tj from '@mapbox/togeojson';
import fs from 'fs';
import xmldom from 'xmldom';

const DOMParser = xmldom.DOMParser;

const gpx = new DOMParser().parseFromString(fs.readFileSync('../route/TUOLUMNEMEADOWSOutdoorClimb20240427081229.gpx', 'utf8'));

const geojson = tj.gpx(gpx);

const data = JSON.stringify(geojson);

// write JSON string to a file
fs.writeFile('../route/TUOLUMNEMEADOWSOutdoorClimb20240427081229.json', data, (err) => {
  if (err) {
    throw err;
  }
  console.log("JSON data is saved.");
});
