import _default from '@/assets/icon/default.svg'

import mountain from '@/assets/icon/mountain.svg'
import lake from '@/assets/icon/lake.svg'
import scenery from '@/assets/icon/scenery.svg'

export const IconMap = new Map<string, string>()

IconMap.set('mountain', mountain)
IconMap.set('lake', lake)
IconMap.set('scenery', scenery)

export function getIconMap(key: string): string {
  return IconMap.get(key) || _default
}
