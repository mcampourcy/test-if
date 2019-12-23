import { isObjectInInventory } from './inventory'
import { getCurrentLocation } from './locations'
import { getObjectFromCurrentLocation } from './object'

export function isLocationLight() {
  const { conditions } = getCurrentLocation()
  const lamp = getObjectFromCurrentLocation('lamp') || isObjectInInventory('lamp')

  return (conditions && conditions.lit) || (lamp && lamp.currentState === 'lampBright')
}
