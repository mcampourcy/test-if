/*  Light.  Applicable only to lamp and urn. */
import { isObjectInInventory } from '../inventory'
import { getLocationDescription } from '../locations'
import { getObject, changeObjectState, getObjectFromCurrentLocation } from '../objects'

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
    const lampState = changeObjectState(obj, 'lampBright')
    return `${lampState.change}\n${getLocationDescription()}`
  }

  if (obj && obj.name === 'urn') {
    const urnState = changeObjectState(obj, obj.currentState === 'urnEmpty' ? 'urnLit' : 'urnEmpty')
    return urnState.change
  }

  return action.message
}
