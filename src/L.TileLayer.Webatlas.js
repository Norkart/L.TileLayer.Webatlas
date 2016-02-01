L.TileLayer.Webatlas = L.TileLayer.extend({

    options: {
        url: '//waapi.webatlas.no/maptiles/tiles/{tileset}/wa_grid/{z}/{x}/{y}.{ext}?APITOKEN={apikey}',
        tileset: {
            vector: 'webatlas-standard-vektor',
            aerial: 'webatlas-orto-newup',
            hybrid: 'webatlas-standard-hybrid'
        },
        mapType: 0,
        maxZoom: 20,
        minZoom: 0
    },

    initialize: function (options) {
        //Leaflet options pass through our constructor to TileLayer along with our specific options 
        L.Util.setOptions(this, options);

        if (window.location.protocol == 'https:') //Can't just use relative urls because the imgs are  added after the intial load
            this.options.url = 'https:' + this.options.url;
        else
            this.options.url = 'http:' + this.options.url;
        
        this.options.url = this.options.url.replace('{apikey}', this.options.apikey)

        //Set the tileset and style once here to save on replace operations later
        switch (this.options.mapType) {
            case 0:
                this.options.url = this.options.url.replace('{tileset}', this.options.tileset.vector).replace('{ext}', 'png');
            case 1:
                this.options.url = this.options.url.replace('{tileset}', this.options.tileset.aerial).replace('{ext}', 'jpeg');
            case 2:
                this.options.url = this.options.url.replace('{tileset}', this.options.tileset.hybrid).replace('{ext}', 'jpeg');
        }
        this.setUrl(this.options.url);
    } 
});

//Enumeration of the type of layers we offer
L.TileLayer.Webatlas.Type = {
    VECTOR : 0,
    AERIAL : 1,
    HYBRID : 2
}