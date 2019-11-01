import { actions, messages } from '../data'
import { isObjectInInventory } from '../inventory'
import {
  destroyObject,
  dropObject,
  getObjectFromCurrentLocation,
  updateObjectState,
} from '../object'

export function lock(param, actionName) {
  const action = actions.find(a => a.name === actionName)
  const keys = isObjectInInventory('keys') || getObjectFromCurrentLocation('keys')
  const lock = actionName === 'lock'
  let obj

  // Lock, unlock, no object given

  if (!param) {
    ['chain', 'clam', 'oyster'].map(name => {
      obj = getObjectFromCurrentLocation(name) || isObjectInInventory(name)
    })

    ['door', 'grate'].map(name => {
      obj = getObjectFromCurrentLocation(name)
    })

    if (!obj) return messages.nothingLocked
  } else {
    obj = getObjectFromCurrentLocation(param)
    if (!obj) return action.message
  }

  // Lock, unlock object. Special stuff for opening clam/oyster and for chain.

  if (obj) {
    switch (obj.name) {
      case 'chain':
        // if (keys) return chain(actionName)
        return messages.noKeys
      case 'grate':
        if (!keys) return messages.noKeys
        const state = updateObjectState(obj.name, (lock) ? 'grateClosed' : 'grateOpen')
        if (state.change) return state.change
        break
      case 'clam':
        if (lock) return messages.huhMan
        if (!isObjectInInventory('trident')) return messages.clamOpener

        destroyObject(obj.name)
        dropObject('oyster')
        dropObject('pearl', 'locCuldesac')
        return messages.pearlFalls
      case 'oyster':
        if (lock) return messages.huhMan
        if (isObjectInInventory('oyster')) return messages.dropOyster
        if (!isObjectInInventory('trident')) return messages.oysterOpener

        return messages.oysterOpens
      case 'door':
        return obj.currentState === 'doorUnrusted' ? messages.okMan : messages.rustyDoor
      case 'cage':
        return messages.noLock
      case 'keys':
        return messages.cannotUnlock
      default:
        return actionName.message
    }
  }
}
