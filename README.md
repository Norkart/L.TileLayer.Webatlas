L.TileLayer.Webatlas
====================
Leaflet plugin to use Webatlas tilecache with correct attribution and API keys. Requires only vanilla Leaflet.


Usage
-----
Instantiate a new layer just as you would instantiate a new L.TileLayer, just remember the API token:

    L.tileLayer.webatlas({apikey: 'my-api-key'}).addTo(map);

To specify another layer:

    L.tileLayer.webatlas({apikey: 'my-api-key', mapType: L.TileLayer.Webatlas.Type.GREY}).addTo(map);

See examples/example.html for example use.


Obtaining an API Token
----------------------
Contact us for details.


Options
-------

- ```mapType```: one of L.TileLayer.Webatlas.Type (Default: L.TileLayer.Webatlas.Type.VECTOR)
- ```apiKey```: a Webatlas API Token


Building
--------
1. Install dependencies: ```npm install```
2. Run ```gulp dist```
