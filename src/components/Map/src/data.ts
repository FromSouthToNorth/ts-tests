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
  },
  {
    name: '果子沟大桥观景点',
    type: getIconMap('scenery'),
    latLng: { lat: 44.47985, lng: 81.15817 },
  },
  {
    name: '安集海大峡谷',
    type: getIconMap('scenery'),
    latLng: { lat: 44.10537, lng: 85.10005 },
  },
  {
    name: '琼库什台',
    type: getIconMap('scenery'),
    latLng: { lat: 42.9155, lng: 82.19738 },
  },
  {
    name: '洱海',
    type: getIconMap('lake'),
    latLng: { lat: 25.7829, lng: 100.1919 }
  },
  {
    name: '玉龙雪山',
    type: getIconMap('mountain'),
    latLng: { lat: 27.09841, lng: 100.17670 }
  },
  {
    name: '冷噶错',
    type: getIconMap('scenery'),
    latLng: { lat: 29.65115, lng: 101.68477 }
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
    featureGroup.addLayer(marker)
  })
  map.fitBounds(featureGroup.getBounds())
}
