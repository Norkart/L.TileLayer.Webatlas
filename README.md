# L.TileLayer.Webatlas
Leaflet plugin to use Webatlas tilecache with correct attribution and apikey's. Requires only vanilla Leaflet. 

Tilecache-urls (only few implemented)
```
http://waapi.webatlas.no/maptiles/tiles/webatlas-standard-vektor/wa_grid/{z}/{x}/{y}.png?apitoken=[nøkkel]
http://waapi.webatlas.no/maptiles/tiles/webatlas-medium-vektor/wa_grid/{z}/{x}/{y}.png?apitoken=[nøkkel]
http://waapi.webatlas.no/maptiles/tiles/webatlas-lite-vektor/wa_grid/{z}/{x}/{y}.png?apitoken=[nøkkel]
http://waapi.webatlas.no/maptiles/tiles/webatlas-gray-vektor/wa_grid/{z}/{x}/{y}.png?apitoken=[nøkkel]
http://waapi.webatlas.no/maptiles/tiles/webatlas-orto-newup/wa_grid/{z}/{x}/{y}.jpeg?apitoken=[nøkkel]
http://waapi.webatlas.no/maptiles/tiles/webatlas-standard-hybrid/wa_grid/{z}/{x}/{y}.jpeg?apitoken=[nøkkel]
```

complete list
```
http://waapi.webatlas.no/maptiles/wmts/1.0.0/WMTSCapabilities.xml?apitoken=[nøkkel]
``` 


Building
--------
1. Install dependencies: ```npm install```
2. Run ```gulp dist```
