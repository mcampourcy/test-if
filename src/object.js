import { objects, settings } from './data'
import { isObjectInInventory, removeObjectFromInventory, updateInventory } from './inventory'
import { updateObjectsList } from './objects'

export function destroyObject(object) {
  removeObjectFromInventory(object.id)
  const newObject = object
  newObject.locations = ['locNowhere']
  updateObjectsList(newObject)
  return newObject
}

export function dropObject(id, location = null) {
  const obj = getObjectById(id)

  obj.locations = location
  updateObjectsList(obj)
  removeObjectFromInventory(obj.id)
}

export function getObjectByWord(word) {
  return objects.find(({ words }) => words.includes(word))
}

export function getObjectById(objId) {
  return objects.find(({ id }) => id === objId)
}

export function getObjectFromLocationOrInventory(name) {
  const isInInventory = isObjectInInventory(name)
  if (isInInventory) return getObjectByWord(name)

  return getObjectFromCurrentLocation(name)
}

export function getObjectFromCurrentLocation(name) {
  return objects.find(({ locations, words }) => (
    locations.includes(settings.currentLocation) && words.includes(name)
  ))
}

export function getObjectState(objId) {
  const obj = getObjectById(objId)
  return obj.states.find(({ id }) => id === obj.currentState)
}

export function isObjectALiquid(objectId) {
  const water = objects.find(({ id }) => id === 'water')
  const oil = objects.find(({ id }) => id === 'oil')
  return [...water.words, ...oil.words].includes(objectId)
}

export function updateObjectState(objectId, nextStateId) {
  const obj = getObjectById(objectId)
  const state = obj.states.find(({ id }) => id === nextStateId)
  const objectInInventory = isObjectInInventory(obj.id)

  obj.currentState = state.id
  updateObjectsList(obj)
  if (objectInInventory) updateInventory(obj)
  return state
}
