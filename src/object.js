'use strict'

const { objects, settings } = require('./data')
const { isObjectInInventory, removeObjectFromInventory, updateInventory } = require('./inventory')
const { updateObjectsList } = require('./objects')

function destroyObject(object) {
  removeObjectFromInventory(object.id)
  const newObject = object
  newObject.locations = ['locNowhere']
  updateObjectsList(newObject)
  return newObject
}

function dropObject(id, location = null) {
  const obj = getObjectById(id)

  obj.locations = location
  updateObjectsList(obj)
  removeObjectFromInventory(obj.id)
}

function getObjectByWord(word) {
  return objects.find(({ words }) => words.includes(word))
}

function getObjectById(objId) {
  return objects.find(({ id }) => id === objId)
}

function getObjectFromLocationOrInventory(name) {
  const isInInventory = isObjectInInventory(name)
  if (isInInventory) return getObjectByWord(name)

  return getObjectFromCurrentLocation(name)
}

function getObjectFromCurrentLocation(name) {
  return objects.find(({ locations, words }) => (
    locations.includes(settings.currentLocation) && words.includes(name)
  ))
}

function getObjectState(objId) {
  const obj = getObjectById(objId)
  return obj.states.find(({ id }) => id === obj.currentState)
}

function isObjectALiquid(objectId) {
  const water = objects.find(({ id }) => id === 'water')
  const oil = objects.find(({ id }) => id === 'oil')
  return [...water.words, ...oil.words].includes(objectId)
}

function updateObjectState(objectId, nextStateId) {
  const obj = getObjectById(objectId)
  const state = obj.states.find(({ id }) => id === nextStateId)
  const objectInInventory = isObjectInInventory(obj.id)

  obj.currentState = state.id
  updateObjectsList(obj)
  if (objectInInventory) updateInventory(obj)
  return state
}

module.exports = {
  destroyObject,
  dropObject,
  getObjectByWord,
  getObjectById,
  getObjectFromLocationOrInventory,
  getObjectFromCurrentLocation,
  getObjectState,
  isObjectALiquid,
  updateObjectState,
}
