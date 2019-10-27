import { messages } from '../../variables'
import { isObjectInInventory, removeObjectFromInventory } from '../inventory'
import { getCurrentLocation } from '../locations'
import { getObject, updateObjectsList } from '../objects'

export const drop = (object, instruction = 'drop') => {
  if (isObjectInInventory(object)) {

    if (['bird', 'cage'].includes(object)) {
      ['bird', 'cage'].map(obj => moveObject(obj))
    } else {
      moveObject(object)
    }

    return messages.okMan
  } else {
    return messages.doWhat(instruction)
  }
}

const moveObject = (object) => {
  const currentLocation = getCurrentLocation()
  const obj = getObject(object)

  obj.locations = [currentLocation.name]
  updateObjectsList(obj)
  removeObjectFromInventory(obj.name)
}
