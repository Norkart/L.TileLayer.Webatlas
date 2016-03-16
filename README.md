L.TileLayer.Webatlas
====================
Leaflet plugin to use Webatlas tilecache with correct attribution and API keys. Requires only vanilla Leaflet.


Usage
-----

1. Include the file ```L.TileLayer.Webatlas.js``` on your page.

2. Instantiate a new layer just as you would instantiate a new L.TileLayer, just remember the API token:

    L.tileLayer.webatlas({apikey: 'my-api-key'}).addTo(map);

To specify another layer:

    L.tileLayer.webatlas({apikey: 'my-api-key', mapType: L.TileLayer.Webatlas.Type.GREY}).addTo(map);

See examples/example.html for example use.


Install using NPM
-----------------

Install the package

    npm install leaflet-webatlastile --save


And then use it

    //the Object method
    var TileLayer = require('leaflet-webatlastile').WebatlasTileLayer;

    //The function method
    var tileLayer = require('leaflet-webatlastile').webatlasTileLayer;


Install using Bower
-------------------

    bower install leaflet-webatlastile



Obtaining an API Token
----------------------
Contact Arild Nomeland (arild.nomeland@norkart.no) for pricing and trial tokens.


Options
-------

- ```mapType```: one of L.TileLayer.Webatlas.Type (Default: L.TileLayer.Webatlas.Type.VECTOR)
- ```apiKey```: a Webatlas API Token


Building
--------
1. Install dependencies: ```npm install```
2. Run ```gulp dist```
