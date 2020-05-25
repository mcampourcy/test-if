const { settings } = require('./data')

const addObjectToInventory = (object) => {
  if (!isObjectInInventory(object)) return settings.inventory.push(object)
  return null
}

const isObjectInInventory = object => settings.inventory.find((id => id === object))

const removeObjectFromInventory = (object) => {
  const { inventory } = settings
  const index = inventory.indexOf(inventory.find(o => o === object))
  if (index >= 0) return inventory.splice(index, 1)
  return null
}

const updateInventory = (object) => {
  const { inventory } = settings
  const index = inventory.indexOf(inventory.find(o => o === object))
  if (index >= 0) return inventory.splice(index, 1, object)
  return null
}

module.exports = { addObjectToInventory, isObjectInInventory, removeObjectFromInventory, updateInventory }
