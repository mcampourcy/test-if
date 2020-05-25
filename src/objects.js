const { messages, objects, settings } = require('./data')
const { getCurrentLocation } = require('./locations')
const { isObjectInInventory } = require('./inventory')
const { isLocationLight } = require('./light')

const getObjectsDescription = () => {
  const { id: currentLocation } = getCurrentLocation()

  if (isLocationLight()) {
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

const getObjectsList = () => (
  objects.filter(({ locations }) => locations.includes(settings.currentLocation))
)

const getObjectsSound = () => {
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

const updateObjectsList = object => (
  objects.splice(
    objects.indexOf(objects.find(({ id }) => id === object.id)),
    1,
    object
  )
)

module.exports = { getObjectsDescription, getObjectsList, getObjectsSound, updateObjectsList }
