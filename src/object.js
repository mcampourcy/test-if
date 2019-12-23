import { objects, settings } from './data'
import { isObjectInInventory, removeObjectFromInventory, updateInventory } from './inventory'
import { updateObjectsList } from './objects'
import { getCurrentLocation } from './locations'

export const destroyObject = (object) => {
  removeObjectFromInventory(object.id)
  object.locations = ['locNowhere']
  updateObjectsList(object)
  return object
}

export const dropObject = (id, location = null) => {
  const currentLocation = getCurrentLocation()
  const obj = getObjectById(id)

  obj.locations = location || [currentLocation.id]
  updateObjectsList(obj)
  removeObjectFromInventory(obj.id)
}

export const getObjectByWord = word => objects.find(({ id, words }) => words.includes(word))

export const getObjectById = objId => objects.find(({ id }) => id === objId)

export const getObjectFromCurrentLocation = name => (
  objects.find(({ locations, words }) => (
    locations.includes(settings.currentLocation) && words.includes(name)
  ))
)

export const getObjectState = (objId) => {
  const obj = getObjectById(objId)
  return obj.states.find(({ id }) => id === obj.currentState)
}

export const isObjectALiquid = (id) => {
  const water = objects.find(({ id }) => id === 'water')
  const oil = objects.find(({ id }) => id === 'oil')
  return [...water.words, ...oil.words].includes(id)
}

export const updateObjectState = (id, nextStateId) => {
  const obj = getObjectById(id)
  const state = obj.states.find(({ id }) => id === nextStateId)
  const objectInInventory = isObjectInInventory(obj.id)

  obj.currentState = state.id
  updateObjectsList(obj)
  if (objectInInventory) updateInventory(obj)
  return state
}
