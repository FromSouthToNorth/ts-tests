import L from 'leaflet'
import 'leaflet.markercluster'
import { getIconMap } from '@/enums/iconEnum'
import type { LatLngExpression, Map } from 'leaflet'

interface Marker {
  latLng: LatLngExpression
  name: string
  type: string
}

export const markers: Marker[] = [
  {
    name: '青城山',
    type: getIconMap('mountain'),
    latLng: { lat: 30.9346, lng: 103.4761 },
  },
  {
    name: '贡嘎',
    type: getIconMap('mountain'),
    latLng: { lat: 29.5952, lng: 101.8789 },
  },
  {
    name: '四姑娘山',
    type: getIconMap('mountain'),
    latLng: { lat: 31.1064, lng: 102.9020 },
  },
  {
    name: '赛里木湖',
    type: getIconMap('lake'),
    latLng: { lat: 44.6084, lng: 81.1812 },
  }
]

export const featureGroup = L.featureGroup()
export const markerClusterGroup = L.markerClusterGroup()

export function layersAddTo(map: Map) {
  featureGroup.addTo(map)
  markerClusterGroup.addTo(map)

  markers.forEach((_marker) => {
    const option = {
      icon: L.icon({ iconSize: [32, 32], iconUrl: _marker.type })
    }
    const marker = L.marker(_marker.latLng, option).bindTooltip(_marker.name, { permanent: true })
    markerClusterGroup.addLayer(marker)
  })
  map.fitBounds(markerClusterGroup.getBounds())
}
