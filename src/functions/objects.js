import { objects, settings } from '../variables'
import { displayLine } from './console'
import { getCurrentLocation } from './locations'

export const getObject = object => objects.find(({ name }) => name === object)

export const getObjectFromLocation = object => (
  objects.find(({ locations, words }) => (
    locations.includes(settings.currentLocation) && words.includes(object)
  ))
)

export const getObjectsList = () => (
  objects.find(({ locations }) => locations.includes(settings.currentLocation))
)

export const getObjectsDescription = () => {
  const { conditions, name: currentLocation } = getCurrentLocation()
  const lamp = getObject('lamp')

  if (conditions.lit || lamp.currentState === 'lampBright') {
    const description = []

    objects.map(object => {
      if (object.locations.includes(currentLocation) && !isInInventory(object.name)) {
        if (object.states) {
          const current = object.states.find(({ name }) => name === object.currentState)
          description.push(object.currentState ? current.description : object.states[0].description)
          return
        }

        if (object.descriptions) {
          const objDescription = object.descriptions[object.locations.indexOf(currentLocation)]
          description.push(objDescription)
        }
      }
    })
    return description.join('\n')
  }
}

export const getObjectsSound = () => {
  const { currentLocation, inventory } = settings
  const description = []
  objects.map(({ locations, name, states }) => {
    const alreadyInInventory = inventory.find((obj => obj.name === name))
    if (locations.includes(currentLocation) && !alreadyInInventory && states) {
      description.push(states[0].sound)
    }
    return name
  })
  return description.join('\n')
}

export const isLiquid = (object) => {
  const water = objects.find(({ name }) => name === 'water')
  const oil = objects.find(({ name }) => name === 'oil')
  return water.words.includes(object) || oil.words.includes(object)
}

export const isHere = (object) => {
  const { currentLocation } = settings

  return objects.find(({ locations, words }) => (
    locations.includes(currentLocation) && words.includes(object)
  ))
}

export function stateChange(obj, nextStateName) {
  const state = obj.states.find(({ name }) => name === nextStateName)
  obj.currentState = state.name
  updateObject(obj)
  if (state.change) displayLine(state.change)
}

export function updateObject(object) {
  const index = objects.indexOf(objects.find(({ name }) => name === object.name))
  objects.splice(index, 1, object)
}
