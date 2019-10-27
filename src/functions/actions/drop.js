import { messages, objects } from '../../variables'
import { isObjectInInventory, removeObjectFromInventory } from '../inventory'
import { getCurrentLocation } from '../locations'
import { getObject, updateObjectsList } from '../objects'
import { displayLine } from '../console'

export const drop = (object, actionName, instruction) => {
  if (isObjectInInventory(object)) {
    const currentLocation = getCurrentLocation()
    const obj = getObject(object)

    obj.locations = [currentLocation.name]
    updateObjectsList(obj)
    removeObjectFromInventory(object)
    displayLine(messages.okMan)
  } else {
    displayLine(messages.doWhat(instruction))
  }
}