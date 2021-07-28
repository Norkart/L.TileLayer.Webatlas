import {webatlasTileLayer, WebatlasTileLayerTypes} from '../src';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const map = L.map('map').setView([63.505, 10.09], 13);
const apiKey = '07C4A129-9D26-4B3D-9BC8-B22E4B6E509E'; //DO NOT USE THIS KEY: DEMO ONLY

var baseLayers = {
  Kart: webatlasTileLayer({
    mapType: WebatlasTileLayerTypes.VECTOR,
    apiKey: apiKey
  }).addTo(map),
  'Kart, Gråtone': webatlasTileLayer({
    mapType: WebatlasTileLayerTypes.GREY,
    apiKey: apiKey,
    attributionPosition: 'topright'
  }),
  'Kart, medium': webatlasTileLayer({
    mapType: WebatlasTileLayerTypes.MEDIUM,
    apiKey: apiKey
  }),
  'Kart, lite': webatlasTileLayer({
    mapType: WebatlasTileLayerTypes.LITE,
    apiKey: apiKey
  }),
  Foto: webatlasTileLayer({
    mapType: WebatlasTileLayerTypes.AERIAL,
    apiKey: apiKey
  }),
  Hybrid: webatlasTileLayer({
    mapType: WebatlasTileLayerTypes.HYBRID,
    apiKey: apiKey
  }),
  'Custom-Kart': webatlasTileLayer({
    mapType: WebatlasTileLayerTypes.VECTOR, //This is a constant with value 'vector'
    apiKey: apiKey,
    tileset: {
      vector: {tileset: 'webatlas-1881-vektor', ext: 'png'} //We overwrite the default vector map with a custom tileset (also available on the same server)
    }
  }),
  'Custom-Hybrid': webatlasTileLayer({
    mapType: WebatlasTileLayerTypes.HYBRID, //This is a constant with value 'hybrid'
    apiKey: apiKey,
    tileset: {
      hybrid: {tileset: 'webatlas-1881-hybrid', ext: 'jpeg'} //We overwrite the default hybrid map with a custom tileset (also available on the same server)
    }
  })
};

L.control.layers(baseLayers, {}).addTo(map);
