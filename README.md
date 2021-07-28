# L.TileLayer.Webatlas

Leaflet plugin to use Webatlas tilecache with correct attribution and API keys. Requires only vanilla Leaflet.

## Usage

1. Install the package

   npm i leaflet-webatlastile

2. Require what you need:

   import {webatlasTileLayer} from 'leaflet-webatlastile';

3. Instantiate a new layer just as you would instantiate a new L.TileLayer, just remember the API token:

   webatlasTileLayer({apikey: 'my-api-key'}).addTo(map);

To specify another layer:

    webatlasTileLayer({apikey: 'my-api-key', mapType: WebatlasTileLayerTypes.GREY}).addTo(map);

See demo/index.ts for example use.

## Obtaining an API Token

See <developer.norkart.no> for obtaining a trial token.

## Options

- `mapType`: one of L.TileLayer.Webatlas.Type (Default: L.TileLayer.Webatlas.Type.VECTOR)
- `apiKey`: a Webatlas API Token
- `attributionPosition`: Position of the attribution text. Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright'. Default: 'bottomright'.

## Developent

1. Install dependencies: `npm install`
2. Run `npm run start` to start a dev server, and edit files in the `/demo` folder
3. Run tests with `npm test`
