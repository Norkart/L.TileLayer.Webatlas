import {ControlPosition} from 'leaflet';

export interface Tileset {
  tileset: string;
  ext: string;
}

export interface TilesetList {
  [key: string]: Tileset;
}

export interface WebatlasTileLayerOptions {
  mapType: string;
  apiKey: string;
  attributionPosition?: ControlPosition;
  tileset?: TilesetList;
}
