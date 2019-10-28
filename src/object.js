import { objects, settings } from './data'
import { isObjectInInventory, removeObjectFromInventory, updateInventory } from './inventory'
import { updateObjectsList } from './objects'

export const destroyObject = (object) => {
  removeObjectFromInventory(object.name)
  object.locations = ['locNowhere']
  updateObjectsList(object)
  return object
}

export const getObject = name => objects.find(({ words }) => words.includes(name))

export const getObjectFromCurrentLocation = (object) => (
  objects.find(({ locations, words }) => (
    locations.includes(settings.currentLocation) && words.includes(object)
  ))
)

export const isObjectALiquid = (object) => {
  const water = objects.find(({ name }) => name === 'water')
  const oil = objects.find(({ name }) => name === 'oil')
  return water.words.includes(object) || oil.words.includes(object)
}

export const updateObjectState = (obj, nextStateName) => {
  const state = obj.states.find(({ name }) => name === nextStateName)
  const objectInInventory = isObjectInInventory(obj.name)

  obj.currentState = state.name
  updateObjectsList(obj)
  if (objectInInventory) updateInventory(obj)
  return state
}