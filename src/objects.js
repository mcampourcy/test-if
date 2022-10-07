import { messages, objects, settings } from './data'
import { isObjectInInventory } from './inventory'

export function getObjectsDescription(location, isLocationLight) {
  const { id: currentLocation } = location

  if (isLocationLight) {
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

export function getObjectsList() {
  return objects.filter(({ locations }) => locations.includes(settings.currentLocation))
}

export function getObjectsSound() {
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

export function updateObjectsList(object) {
  return objects.splice(
    objects.indexOf(objects.find(({ id }) => id === object.id)),
    1,
    object,
  )
}
