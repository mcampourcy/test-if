import { settings } from './data'

export function addObjectToInventory(object) {
  if (!isObjectInInventory(object)) return settings.inventory.push(object)
  return null
}

export function isObjectInInventory(object) {
  return settings.inventory.find((id => id === object))
}

export function removeObjectFromInventory(object) {
  const { inventory } = settings
  const index = inventory.indexOf(inventory.find(o => o === object))
  if (index >= 0) return inventory.splice(index, 1)
  return null
}

export function updateInventory(object) {
  const { inventory } = settings
  const index = inventory.indexOf(inventory.find(o => o === object))
  if (index >= 0) return inventory.splice(index, 1, object)
  return null
}
