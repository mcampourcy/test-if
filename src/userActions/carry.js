import { messages, settings } from '../data'
import { fill, inventory } from './index'
import { cageTheBird, getTheBird } from '../bird'
import { addObjectToInventory, isObjectInInventory } from '../inventory'
import { getCurrentLocation } from '../locations'
import { getObjectFromCurrentLocation, isObjectALiquid, updateObjectState } from '../object'
import { getObjectsList } from '../objects'
import { getAction } from './utils'

export const carry = (param, actionId, verb) => {
  const { inventoryLimit } = settings
  const { conditions } = getCurrentLocation()
  const onlyOneObjectHere = getObjectsList().length === 1
  let obj

  // Inventory full
  if (inventory.length === inventoryLimit) return messages.carryLimit

  // if user didn't mention any param ("take") and there is only one object here, take the object
  // Otherwise, return error message
  if (!param) {
    [obj] = getObjectsList()
    if (!onlyOneObjectHere) return messages.doWhat(verb)
  }

  if (param) obj = getObjectFromCurrentLocation(param)
  if (!obj) return messages.doWhat(verb)

  // Already carrying
  if (isObjectInInventory(obj.id)) return getAction(actionId).message

  // "take water / oil"
  if (isObjectALiquid(obj.id)) {
    const bottle = getObjectFromCurrentLocation('bottle') || isObjectInInventory('bottle')

    if (!bottle) return messages.noContainer
    if (bottle.currentState === 'fullBottle') return messages.bottleFull

    return fill(actionId)
  }

  if (obj.id === 'bird') return getTheBird(obj)

  if (obj.id === 'bottle' && conditions.currentLocation.fluid) {
    const bottleState = updateObjectState(obj.id, conditions.currentLocation.oily ? 'oilBottle' : 'waterBottle')
    addObjectToInventory(obj.id)
    return `${bottleState.change}\n${messages.okMan}`
  }

  if ((obj.id === 'cage' && getObjectFromCurrentLocation('bird')) || (obj.id === 'bird' && verb === 'cage')) {
    return cageTheBird(obj, verb)
  }

  addObjectToInventory(obj.id)
  return messages.okMan
}
