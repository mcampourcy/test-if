import {messages, settings} from '../../variables'
import { getObjectFromInventory, removeObjectFromInventory } from '../inventory'
import {changeObjectState, getObject, updateObjectsList} from '../objects'

export const drop = (object, actionName, instruction) => {
  if (getObjectFromInventory(object)) {
    const obj = getObject(object)

    if (['bird', 'cage'].includes(obj.name)) {
      if (obj.name === 'bird') changeObjectState('bird', 'birdUncaged')
      if (obj.name === 'cage') removeObject('bird')
    }

    removeObject(obj)
    return messages.okMan
  }
  return messages.doWhat(instruction)
}

const removeObject = (obj) => {
  obj.locations = [settings.currentLocation]
  removeObjectFromInventory(obj.name)
  updateObjectsList(obj)
}
