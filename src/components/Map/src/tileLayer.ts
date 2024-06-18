import type { Map, TileLayerOptions } from 'leaflet'
import L from 'leaflet'

interface tileLayer {
  tileUrl: string;
  options?: TileLayerOptions;
}

const accessToken: string = 'pk.eyJ1Ijoib3BlbnN0cmVldG1hcCIsImEiOiJjbGRlaXd3cHUwYXN3M29waWp0bGNnYWdyIn0.RRlhUnKlUFNhKsKjhaZ2zA'
export const tileLayers: tileLayer[] = [
  {
    tileUrl: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}?blankTile=false',
  },
  {
    tileUrl: 'https://api.mapbox.com/styles/v1/openstreetmap/ckasmteyi1tda1ipfis6wqhuq/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}',
    options: {
      accessToken
    },
  },
];

export function tileAddTo(map: Map) {
  tileLayers.forEach(({ tileUrl, options }) => {
    L.tileLayer(tileUrl, options).addTo(map)
  })
}
