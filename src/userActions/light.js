/*  Light.  Applicable only to lamp and urn. */
import { isObjectInInventory } from '../inventory'
import { getLocationDescription } from '../locations'
import { getObject, updateObjectState, getObjectFromCurrentLocation } from '../object'

export function light(action, object) {
  const lamp = isObjectInInventory('lamp') || getObjectFromCurrentLocation('lamp')
  const urn = isObjectInInventory('urn') || getObjectFromCurrentLocation('urn')
  let obj = object

  if (!object && (lamp || urn)) {
    const name = lamp ? 'lamp' : 'urn'
    const lightObj = getObject(name)
    if (lightObj.currentState === `${name}Dark`) obj = lightObj
  }

  if (obj && obj.name === 'lamp') {
    const lampState = updateObjectState(obj.name, 'lampBright')
    return `${lampState.change}\n${getLocationDescription()}`
  }

  if (obj && obj.name === 'urn') {
    const urnState = updateObjectState(obj.name, obj.currentState === 'urnEmpty' ? 'urnBright' : 'urnEmpty')
    return urnState.change
  }

  return action.message
}
