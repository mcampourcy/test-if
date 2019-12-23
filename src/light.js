import { getCurrentLocation } from './locations'
import { getObjectFromLocationOrInventory } from './object'

export function isLocationLight() {
  const { conditions } = getCurrentLocation()
  const lamp = getObjectFromLocationOrInventory('lamp')

  return (conditions && conditions.lit) || (lamp && lamp.currentState === 'lampBright')
}
