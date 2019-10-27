import { messages } from '../../variables'
import { isInInventory, removeFromInventory } from '../inventory'
import { getCurrentLocation } from '../locations'
import { getObject } from '../objects'
import { displayLine } from '../console'

export const drop = (object, actionName, instruction) => {
  if (isInInventory(object)) {
    const currentLocation = getCurrentLocation()
    const obj = getObject(object)

    obj.locations = [currentLocation]
    removeFromInventory(object)
    displayLine(messages.okMan)
  } else {
    displayLine(messages.doWhat(instruction))
  }
}