import { settings } from '../data'
import {getObject, updateObjectsList} from '../objects'
import { removeObjectFromInventory } from '../inventory'

/**
 * To destroy an object :
 *   Remove it from inventory
 *   Change its location to locNowhere
 * @param object
 */
export const destroy = (object) => {
  removeObjectFromInventory(object.name)
  object.locations = ['locNowhere']
  updateObjectsList(object)
  return object
}
