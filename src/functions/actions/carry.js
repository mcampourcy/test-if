import { messages, settings } from '../../variables'
import { fill, inventory } from '../actions'
import { getCurrentLocation } from '../locations'
import { addObjectToInventory, getObjectFromInventory } from '../inventory'
import {
  changeObjectState,
  getObjectFromLocation,
  getObjectsList,
  getObjectFromCurrentLocation,
  isObjectALiquid,
} from '../objects'
import { getAction } from './utils'
import { getTheBird } from '../bird'

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

  // Already carrying
  if (getObjectFromInventory(obj.name)) return getAction(actionName).message

  // "take water / oil"
  if (isObjectALiquid(obj.name)) {
    const bottle = getObjectFromCurrentLocation('bottle') || getObjectFromInventory('bottle')

    if (!bottle) return messages.noContainer
    if (bottle.currentState === 'fullBottle') return messages.bottleFull

    return fill(actionName)
  }

  if (obj.name === 'bottle' && conditions.currentLocation.fluid) {
    const bottleState = changeObjectState(obj.name, conditions.currentLocation.oily ? 'oilBottle' : 'waterBottle')
    addObjectToInventory(obj.name)
    return `${bottleState.change}\n${messages.okMan}`
  }

  if (obj.name === 'bird') return getTheBird(obj)

  addObjectToInventory(obj)
  return messages.okMan
}
