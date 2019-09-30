import { locations, messages, objects, settings } from '../variables'
import { displayLine } from './console'
import { getCurrentLocation } from './locations'
import { displayLine } from './console'

export function getObject(object) {
  return objects.find(({ name }) => name === object)
}

export function getObjectFromHere(object) {
  const { currentLocation } = settings

  return objects.find(({ locations, words }) => (
    locations.includes(currentLocation) && words.includes(object)
  ))
}

export function getObjectsListFromHere() {
  const { currentLocation } = settings
  return objects.find(({ locations }) => locations.includes(currentLocation))
}

export function getObjectsDescription() {
  const { currentLocation } = settings
  const { conditions } = getCurrentLocation()
  const lamp = getObject('lamp')

  if (conditions.lit || lamp.currentState === 'lampBright') {
    let description = []
    objects.map(object => {
      if (object.locations.includes(currentLocation) && !isInInventory(object.name)) {
        if (object.states) {
          const current = object.states.find(({ name }) => name === object.currentState)
          description.push(object.currentState ? current.description : object.states[0].description)
        } else {
          if (object.descriptions) {
            const objDescription = object.descriptions[object.locations.indexOf(currentLocation)]
            description.push(objDescription)
          }
        }
      }
    })
    return description.join('\n')
  }
}

export function getObjectsSound () {
  const { currentLocation, inventory } = settings
  const description = []
  objects.map(({ locations, name, states }) => {
    const alreadyInInventory = inventory.find((obj => obj.name === name ))
    if (locations.includes(currentLocation) && !alreadyInInventory && states) {
      description.push(states[0].sound)
    }
  })
  return description.join('\n')
}

export function isLiquid(object) {
  const water = objects.find(({ name }) => name === 'water')
  const oil = objects.find(({ name }) => name === 'oil')
  return water.words.includes(object) || oil.words.includes(object)
}

export function isHere(object) {
  const { currentLocation } = settings

  return objects.find(({ locations, words }) => (
    locations.includes(currentLocation) && words.includes(object)
  ))
}

export function isInInventory(object) {
  const { inventory } = settings
  return inventory.find((objName => objName === object))
}

export function stateChange(obj, nextStateName) {
  const state = obj.states.find(({ name }) => name === nextStateName)
  obj.currentState = state.name
  if (state.change) displayLine(state.change)
  updateObject(obj)
}

export function removeFromInventory(object) {
  const index = inventory.indexOf(inventory.find(o => o === object))
  inventory.splice(index)
}

export function updateInventory(object) {
  const index = inventory.indexOf(inventory.find(o => o === object))
  inventory.splice(index, 1, object)
}

export function updateObject(object) {
  const index = objects.indexOf(objects.find(({ name }) => name === object.name))
  objects.splice(index, 1, object)
}
