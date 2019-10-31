import { objects, settings } from './data'
import { isObjectInInventory, removeObjectFromInventory, updateInventory } from './inventory'
import { updateObjectsList } from './objects'
import { getCurrentLocation } from './locations'

export const destroyObject = (object) => {
  removeObjectFromInventory(object.name)
  object.locations = ['locNowhere']
  updateObjectsList(object)
  return object
}

export const dropObject = (name) => {
  const currentLocation = getCurrentLocation()
  const obj = getObject(name)

  obj.locations = [currentLocation.name]
  updateObjectsList(obj)
  removeObjectFromInventory(obj.name)
}

export const getObject = objName => objects.find(({ name, words }) => words.includes(objName) || name === objName)

export const getObjectFromCurrentLocation = (object) => (
  objects.find(({ locations, words }) => (
    locations.includes(settings.currentLocation) && words.includes(object)
  ))
)

export const getObjectState = (objName) => {
  const obj = getObject(objName)
  return obj.states.find(({ name }) => name === obj.currentState)
}

export const isObjectALiquid = (name) => {
  const water = objects.find(({ name }) => name === 'water')
  const oil = objects.find(({ name }) => name === 'oil')
  return [...water.words, ...oil.words].includes(name)
}

export const updateObjectState = (name, nextStateName) => {
  const obj = getObject(name)
  const state = obj.states.find(({ name }) => name === nextStateName)
  const objectInInventory = isObjectInInventory(obj.name)

  obj.currentState = state.name
  updateObjectsList(obj)
  if (objectInInventory) updateInventory(obj)
  return state
}