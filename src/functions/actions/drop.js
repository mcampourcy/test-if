import { messages } from '../../variables'
import { getObjectFromInventory, removeObjectFromInventory } from '../inventory'
import { getCurrentLocation } from '../locations'
import { getObject } from '../objects'
import { displayLine } from '../console'

export const drop = (object, actionName, instruction) => {
  if (getObjectFromInventory(object)) {
    const currentLocation = getCurrentLocation()
    const obj = getObject(object)

    obj.locations = [currentLocation]
    removeObjectFromInventory(object)
    displayLine(messages.okMan)
  } else {
    displayLine(messages.doWhat(instruction))
  }
}