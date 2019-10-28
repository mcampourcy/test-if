import { messages, settings } from '../../variables'
import { fill, inventory } from '../actions'
import { getCurrentLocation } from '../locations'
import { addObjectToInventory, isObjectInInventory } from '../inventory'
import {
  changeObjectState,
  getObjectFromLocation,
  getObjectsList,
  getObjectFromCurrentLocation,
  isObjectALiquid, getObject,
} from '../objects'
import { getAction } from './utils'
import { cageTheBird, getTheBird } from '../bird'

export const carry = (object, actionName, instruction) => {
  const { inventoryLimit } = settings
  const { conditions } = getCurrentLocation()
  let obj

  // Inventory full
  if (inventory.length === inventoryLimit) return messages.carryLimit

  // if user didn't mention any param ("take") and there is only one object here, take the object
  // Otherwise, return error message
  if (!object && getObjectsList.length > 1) return messages.doWhat(instruction)
  if (!object && getObjectsList.length === 1) [obj] = getObjectsList()

  if (object) obj = getObjectFromLocation(object)
  if (!obj) return messages.doWhat(instruction)

  // Already carrying
  if (isObjectInInventory(obj.name)) return getAction(actionName).message

  // "take water / oil"
  if (isObjectALiquid(obj.name)) {
    const bottle = getObjectFromCurrentLocation('bottle') || isObjectInInventory('bottle')

    if (!bottle) return messages.noContainer
    if (bottle.currentState === 'fullBottle') return messages.bottleFull

    return fill(actionName)
  }

  if (obj.name === 'bird') return getTheBird(obj)

  if (obj.name === 'bottle' && conditions.currentLocation.fluid) {
    const bottleState = changeObjectState(obj.name, conditions.currentLocation.oily ? 'oilBottle' : 'waterBottle')
    addObjectToInventory(obj.name)
    return `${bottleState.change}\n${messages.okMan}`
  }

  if (obj.name === 'cage' && getObjectFromLocation('bird')) return cageTheBird(obj, instruction)

  addObjectToInventory(obj.name)
  return messages.okMan
}