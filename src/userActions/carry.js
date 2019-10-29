import { messages, settings } from '../data'
import { fill, inventory } from './index'
import { cageTheBird, getTheBird } from '../bird'
import { addObjectToInventory, isObjectInInventory } from '../inventory'
import { getCurrentLocation } from '../locations'
import { getObjectFromCurrentLocation, isObjectALiquid, updateObjectState } from '../object'
import { getObjectsList } from '../objects'
import { getAction } from './utils'

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

  if (object) obj = getObjectFromCurrentLocation(object)
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
    const bottleState = updateObjectState(obj.name, conditions.currentLocation.oily ? 'oilBottle' : 'waterBottle')
    addObjectToInventory(obj.name)
    return `${bottleState.change}\n${messages.okMan}`
  }

  if (obj.name === 'cage' && getObjectFromCurrentLocation('bird')) return cageTheBird(obj, instruction)

  addObjectToInventory(obj.name)
  return messages.okMan
}
