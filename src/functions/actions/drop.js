import { messages, objects, settings } from '../../variables'
import { getCurrentLocation } from '../locations'
import { getObject, isInInventory } from '../objects'
import { displayLine } from '../console'

export const drop = (object, actionName, instruction) => {
  if (isInInventory(object)) {
    const { inventory } = settings
    const currentLocation = getCurrentLocation()
    const obj = getObject(object)

    obj.locations = [currentLocation]
    inventory.slice(inventory.indexOf(obj.name), 1)
    displayLine(messages.okMan)
  } else {
    displayLine(messages.doWhat(instruction))
  }
}