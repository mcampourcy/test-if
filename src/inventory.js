'use strict'

const { settings } = require('./data')

function addObjectToInventory(object) {
  if (!isObjectInInventory(object)) return settings.inventory.push(object)
  return null
}

function isObjectInInventory(object) {
  return settings.inventory.find((id => id === object))
}

function removeObjectFromInventory(object) {
  const { inventory } = settings
  const index = inventory.indexOf(inventory.find(o => o === object))
  if (index >= 0) return inventory.splice(index, 1)
  return null
}

function updateInventory(object) {
  const { inventory } = settings
  const index = inventory.indexOf(inventory.find(o => o === object))
  if (index >= 0) return inventory.splice(index, 1, object)
  return null
}

module.exports = {
  addObjectToInventory, isObjectInInventory, removeObjectFromInventory, updateInventory,
}
