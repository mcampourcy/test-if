import { locations, messages, objects, settings } from '../variables'
import { displayLine } from './console'

export function getObjectFromHere(object) {
  const { currentLocation } = settings

  return objects.find(({ locations, words }) => (
    locations.includes(currentLocation) && words.includes(object)
  ))
}

export function getObjectsDescription () {
  const { currentLocation, inventory } = settings
  const { conditions } = locations[currentLocation]
  if (conditions.lit) {
    let description = []
    objects.map(({ descriptions, locations, name, states }) => {
      const alreadyInInventory = inventory.find((obj => obj.name === name ))
      if (locations.includes(currentLocation) && !alreadyInInventory) {
        if (states) {
          description.push(states[0].description)
        } else {
          description.push(descriptions[locations.indexOf(currentLocation)])
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
  return water.concat(oil).includes(object)
}

export function isHere(object) {
  const { currentLocation } = settings

  return objects.find(({ locations, words }) => (
    locations.includes(currentLocation) && words.includes(object)
  ))
}

export function isInInventory(object) {
  const { inventory } = settings
  return  inventory.find(({ words }) => words.includes(object))
}
