import { objects, settings } from './data'
const { isObjectInInventory, removeObjectFromInventory, updateInventory } = require('./inventory')
const { updateObjectsList } = require('./objects')
const { getCurrentLocation } = require('./locations')

const destroyObject = (object) => {
  removeObjectFromInventory(object.id)
  object.locations = ['locNowhere']
  updateObjectsList(object)
  return object
}

const dropObject = (id, location = null) => {
  const currentLocation = getCurrentLocation()
  const obj = getObjectById(id)

  obj.locations = location || [currentLocation.id]
  updateObjectsList(obj)
  removeObjectFromInventory(obj.id)
}

const getObjectByWord = word => objects.find(({ words }) => words.includes(word))

const getObjectById = objId => objects.find(({ id }) => id === objId)

const getObjectFromLocationOrInventory = (name) => {
  const isInInventory = isObjectInInventory(name)
  if (isInInventory) return getObjectByWord(name)

  return getObjectFromCurrentLocation(name)
}

const getObjectFromCurrentLocation = name => (
  objects.find(({ locations, words }) => (
    locations.includes(settings.currentLocation) && words.includes(name)
  ))
)

const getObjectState = (objId) => {
  const obj = getObjectById(objId)
  return obj.states.find(({ id }) => id === obj.currentState)
}

const isObjectALiquid = (id) => {
  const water = objects.find(({ id }) => id === 'water')
  const oil = objects.find(({ id }) => id === 'oil')
  return [...water.words, ...oil.words].includes(id)
}

const updateObjectState = (id, nextStateId) => {
  const obj = getObjectById(id)
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
