import type { Map, MapOptions } from 'leaflet'
import L from 'leaflet'
import { tileAddTo } from './tileLayer'
import { layersAddTo } from './data'
import { behaviorHash } from '@/hooks/map/useHash'

export function rendererMap(el: any, options: MapOptions): Map {
  const map = L.map(el, options)
  tileAddTo(map)
  layersAddTo(map)

  const hash = behaviorHash({ map });
  hash();
  return map
}
