import tj from '@mapbox/togeojson';
import fs from 'fs';
import xmldom from 'xmldom';

const DOMParser = xmldom.DOMParser;

const kml = new DOMParser().parseFromString(fs.readFileSync('../route/TUOLUMNEMEADOWSMulti-Abschn.20241119080426.kml', 'utf8'));

const geojson = tj.kml(kml);

const data = JSON.stringify(geojson);

// write JSON string to a file
fs.writeFile('../route/TUOLUMNEMEADOWSMulti-Abschn.20241119080426.json', data, (err) => {
  if (err) {
    throw err;
  }
  console.log("JSON data is saved.");
});
