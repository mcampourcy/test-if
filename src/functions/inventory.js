import { settings } from '../variables'

export const addObjectToInventory = object => settings.inventory.push(object.name)

export const getObjectFromInventory = object => settings.inventory.find((objName => objName === object))

export const removeObjectFromInventory = (object) => {
  const { inventory } = settings
  const index = inventory.indexOf(inventory.find(o => o === object))
  if (index >= 0) return inventory.splice(index, 1)
  return null
}

export const updateInventory = (object) => {
  const { inventory } = settings
  const index = inventory.indexOf(inventory.find(o => o === object))
  if (index >= 0) return inventory.splice(index, 1, object)
  return null
}
