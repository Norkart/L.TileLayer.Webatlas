import L, {ControlPosition} from 'leaflet';

import {TilesetList, WebatlasTileLayerOptions} from './types';
import {doTemplate} from './util';
import {defaultTilesets} from './constants/defaultTilesets';
import {WebatlasTileLayerTypes} from './constants/layerTypes';
import {getAttributionText} from './getAttributionText';

const defaultOptions = {
  mapType: 'vector',
  maxZoom: 20,
  minZoom: 0,
  attributionPosition: 'bottomright' as ControlPosition
};

const TILE_URL = '//waapi.webatlas.no/maptiles/tiles/{tileset}/wa_grid/{z}/{x}/{y}.{ext}?APITOKEN={apiKey}';

const getUrl = (mapType: string, apiKey: string, tilesetList: TilesetList) =>
  doTemplate(window.location.protocol === 'https:' ? 'https:' + TILE_URL : 'http:' + TILE_URL, {
    apiKey,
    ...tilesetList[mapType]
  });

export class WebatlasTileLayer extends L.TileLayer {
  private attributionPosition: ControlPosition;
  private attributionText: string;

  constructor(options: WebatlasTileLayerOptions) {
    const {attributionPosition, apiKey, mapType, tileset, ...rest} = {...defaultOptions, ...options};

    const url = getUrl(mapType || WebatlasTileLayerTypes.VECTOR, apiKey, {...defaultTilesets, ...(tileset || {})});
    super(url, rest);
    this.attributionPosition = attributionPosition;
  }

  onAdd(map: L.Map) {
    this._map = map;
    this.attributionText = '';
    this._map.on('moveend', this._onMapMoved, this);

    if (this._map.attributionControl) {
      this._map.removeControl(this._map.attributionControl);
      //@ts-ignore
      this._map.attributionControl = undefined;
    }

    this._onMapMoved();
    L.TileLayer.prototype.onAdd.call(this, map);
    return this;
  }

  onRemove(map: L.Map) {
    this._map.off('moveend', this._onMapMoved, this);
    L.TileLayer.prototype.onRemove.call(this, map);
    return this;
  }

  _onMapMoved() {
    const attributionText = getAttributionText(this._map.getCenter(), this._map.getZoom());

    //add an attribution control if the default is disabled
    if (!this._map.attributionControl) {
      this._map.attributionControl = L.control
        .attribution({
          position: this.attributionPosition
        })
        .addTo(this._map);
    }
    //remove the previous attribution we set
    this._map.attributionControl.removeAttribution(this.attributionText);

    //set the new attribution
    this._map.attributionControl.addAttribution(attributionText);

    //store the current so that we can remove it later
    this.attributionText = attributionText;
  }
}

export const webatlasTileLayer = (options: any) => new WebatlasTileLayer(options);
export {WebatlasTileLayerTypes};
