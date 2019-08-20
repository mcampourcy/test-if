import { locations, messages, objects, settings } from '../variables'
import { display } from './console'

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

export function carryObject(object) {
  const { currentLocation } = settings
  const { conditions } = locations[currentLocation]
  if (conditions.lit) {
    const getObject = objects.find(({ locations, words }) => (
      locations.includes(currentLocation) && words.includes(object)
    ))
    if (getObject) {
      settings.inventory.push(getObject)
      display(messages.okMan)
    } else {
      display(messages.doWhat)
    }
  }
}
