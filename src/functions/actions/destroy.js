import { settings } from '../../variables'
import { getObject } from '../objects'
import { removeFromInventory } from '../inventory'

/**
 * To destroy an object :
 *   Remove it from inventory
 *   Change its location to locNowhere
 * @param object
 */
export const destroy = (object) => {
  removeFromInventory(object.name)
  object.locations = ['locNowhere']
  return object
}