/*  Light.  Applicable only to lamp and urn. */
import { getObjectFromInventory } from '../inventory'
import { getLocationDescription } from '../locations'
import { getObject, changeObjectState } from '../objects'
import { getAction } from './utils'

export function light(verb, object) {
  const action = getAction(verb)
  let obj = object ? getObject(object) : null
  const lights = ['lamp', 'urn']

  lights.map(name => {
    if (!object && getObjectFromInventory(name)) {
      const light = getObject(name)
      if (light.currentState === `${name}Dark`) obj = light
    }
  })

  if (obj && obj.name === 'lamp') {
    const lampState =  changeObjectState(obj, 'lampBright')
    return `${lampState.change}\n${getLocationDescription()}`
  }

  if (obj && obj.name === 'urn') {
    return changeObjectState(obj, obj.currentState === 'urnEmpty' ? 'urnLit' : 'urnEmpty').change
  }

  return action.message
}
