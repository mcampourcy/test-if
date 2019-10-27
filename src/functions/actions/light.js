/*  Light.  Applicable only to lamp and urn. */
import { displayLine } from '../console'
import { isObjectInInventory } from '../inventory'
import { getLocationDescription } from '../locations'
import { getObject, changeObjectState } from '../objects'
import { getAction } from './utils'

export function light(object, verb) {
  const action = getAction(verb)
  let obj = object ? getObject(object) : { name: null }

  if (!object && isObjectInInventory('lamp')) {
    const lamp = getObject('lamp')
    if (lamp.currentState === 'lampDark') obj = lamp
  } else if (!object && isObjectInInventory('urn')) {
    const urn = getObject('urn')
    if (urn.currentState === 'urnDark') obj = urn
  }

  if (obj) {
    switch (obj.name) {
      case 'urn':
        const urnState = changeObjectState(obj, obj.currentState === 'urnEmpty' ? 'urnLit' : 'urnEmpty')
        if (urnState.change) displayLine(urnState.change)
        break
      case 'lamp':
        const lampState = changeObjectState(obj, 'lampBright')
        if (lampState.change) displayLine(lampState.change)
        displayLine(getLocationDescription())
        break
      default:
        displayLine(action.message)
    }
  } else {
    displayLine(action.message)
  }
}