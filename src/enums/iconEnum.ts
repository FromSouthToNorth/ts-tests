import mountain from '@/assets/icon/mountain.svg'
import lake from '@/assets/icon/lake.svg'
import _default from '@/assets/icon/default.svg'
export const IconMap = new Map<string, string>()

IconMap.set('mountain', mountain)
IconMap.set('lake', lake)

export function getIconMap(key: string): string {
  return IconMap.get(key) || _default
}
