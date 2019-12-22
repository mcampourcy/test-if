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
  const obj = getObject(id)

  obj.locations = location || [currentLocation.id]
  updateObjectsList(obj)
  removeObjectFromInventory(obj.id)
}

export const getObject = objId => objects.find(({ id, words }) => words.includes(objId) || id === objId)

export const getObjectFromCurrentLocation = name => (
  objects.find(({ locations, words }) => (
    locations.includes(settings.currentLocation) && words.includes(name)
  ))
)

export const isInCurrentOrPreviousLocation = (name) => {
  const inCurrentLocation = getObjectFromCurrentLocation(name)

  const inPreviousLocation = objects.find(({ locations, words }) => (
    locations.includes(settings.previousLocation) && words.includes(name)
  ))

  const inPreviousPreviousLocation = objects.find(({ locations, words }) => (
    locations.includes(settings.previousPreviousLocation) && words.includes(name)
  ))

  return inCurrentLocation || inPreviousLocation || inPreviousPreviousLocation
}

export const getObjectState = (objId) => {
  const obj = getObject(objId)
  return obj.states.find(({ id }) => id === obj.currentState)
}

export const isObjectALiquid = (id) => {
  const water = objects.find(({ id }) => id === 'water')
  const oil = objects.find(({ id }) => id === 'oil')
  return [...water.words, ...oil.words].includes(id)
}

export const updateObjectState = (id, nextStateId) => {
  const obj = getObject(id)
  const state = obj.states.find(({ id }) => id === nextStateId)
  const objectInInventory = isObjectInInventory(obj.id)

  obj.currentState = state.id
  updateObjectsList(obj)
  if (objectInInventory) updateInventory(obj)
  return state
}
