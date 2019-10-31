/*  Light.  Applicable only to lamp and urn. */
import { isObjectInInventory } from '../inventory'
import { getCurrentLocation, getLocationDescription } from '../locations'
import {
  getObject,
  updateObjectState,
  getObjectFromCurrentLocation,
  getObjectState,
} from '../object'
import { messages } from '../data'

export function extinguish(action, object) {
  const lamp = isObjectInInventory('lamp') || getObjectFromCurrentLocation('lamp')
  const urn = isObjectInInventory('urn') || getObjectFromCurrentLocation('urn')
  const { conditions } = getCurrentLocation()
  let obj = object

  if (!object && (lamp || urn)) {
    const name = lamp ? 'lamp' : 'urn'
    const lightObj = getObject(name)
    if (lightObj.currentState === `${name}Bright`) obj = lightObj
  }

  if (obj.name === 'urn') {
    if (obj.currentState !== 'urnEmpty') return updateObjectState(obj.name, 'urnDark').change
    return getObjectState(obj.name).change
  }

  if (obj.name === 'lamp') {
    let description = updateObjectState(obj.name, 'lampDark')
    if ((conditions && conditions.lit) || lamp.currentState === 'lampBright') description += `\n${messages.pitchDark}`
    return description
  }
}
