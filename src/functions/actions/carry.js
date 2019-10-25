import { messages, settings } from '../../variables'
import { getCurrentLocation } from '../locations'
import {
  getObject,
  getObjectFromLocation,
  getObjectsList,
  isHere,
  isInInventory,
  isLiquid, updateObject,
} from '../objects'
import { displayLine } from '../console'
import { fill, inventory } from '../actions'
import { getAction } from './utils'

export const carry = (object, actionName, instruction) => {
  const { inventoryLimit } = settings
  const { conditions } = getCurrentLocation()
  const lamp = getObject('lamp')

  if (inventory.length === inventoryLimit) { // Inventory full
    displayLine(messages.carryLimit)
    return
  }

  if (isInInventory(object)) { // Already carrying
    displayLine(getAction(actionName).message)
    return
  }

  if (conditions.lit || lamp.currentState === 'lampBright') {
    if (isLiquid(object)) { // "take water / oil"
      const isBottleHere = isHere('bottle')
      const isBottleInInvent = isInInventory('bottle')

      if (!isBottleHere && !isBottleInInvent) {
        displayLine(messages.noContainer)
      } else {
        if (isBottleHere || isBottleInInvent.currentState === 'emptyBottle') {
          fill(actionName)
          return
        }
        displayLine(messages.bottleFull)
      }
    } else {
      let obj
      // if user didn't mention any param ("take") and there is only one object here, take the object
      if (!object && getObjectsList.length === 1) {
        [obj] = getObjectsList()
      } else if (object) {
        obj = getObjectFromLocation(object)
      }

      if (obj) { // Object in current location
        switch (obj.name) {
          case 'messag':
            // displayLine(messages.removeMessage)
            break
          case 'bottle':
            obj.currentState = 'emptyBottle'
            if (conditions.currentLocation.fluid) obj.currentState = conditions.currentLocation.oily ? 'oilBottle' : 'waterBottle'
            updateObject(obj)
            settings.inventory.push(obj.name)
            displayLine(messages.okMan)
            break
          default:
            if (obj.states) {
              obj.currentState = obj.states[0].name
              updateObject(obj)
            }
            settings.inventory.push(obj.name)
            displayLine(messages.okMan)
            break
        }
      } else {
        displayLine(messages.doWhat(instruction))
      }
    }
  }
}