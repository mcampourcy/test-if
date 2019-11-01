import { messages, objects, settings } from './data'
import { getCurrentLocation } from './locations'
import { isObjectInInventory } from './inventory'
import { getObject } from './object'

export const getObjectsDescription = () => {
  const { conditions, id: currentLocation } = getCurrentLocation()
  const lamp = getObject('lamp')

  if (conditions.lit || lamp.currentState === 'lampBright') {
    const description = []

    objects.map((object) => {
      if (object.locations.includes(currentLocation) && !isObjectInInventory(object.id)) {
        if (object.states) {
          const current = object.states.find(({ id }) => id === object.currentState)
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

  return messages.pitchDark
}

export const getObjectsList = () => (
  objects.filter(({ locations }) => locations.includes(settings.currentLocation))
)

export const getObjectsSound = () => {
  const { currentLocation, inventory } = settings
  const description = []
  objects.map(({ locations, id, states }) => {
    const alreadyInInventory = inventory.find((obj => obj.id === id))
    if (locations.includes(currentLocation) && !alreadyInInventory && states) {
      description.push(states[0].sound)
    }
    return id
  })
  return description.join('\n')
}

export const updateObjectsList = object => (
  objects.splice(
    objects.indexOf(objects.find(({ id }) => id === object.id)),
    1,
    object
  )
)
