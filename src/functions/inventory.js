import { settings } from '../variables'

export const isInInventory = object => settings.inventory.find((objName => objName === object))

export const removeFromInventory = (object) => {
  const { inventory } = settings
  const index = inventory.indexOf(inventory.find(o => o === object))
  if (index >= 0) return inventory.splice(index)
  return null
}

export const updateInventory = (object) => {
  const { inventory } = settings
  const index = inventory.indexOf(inventory.find(o => o === object))
  if (index >= 0) return inventory.splice(index, 1, object)
  return null
}
