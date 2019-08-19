import { locations, objects, settings } from '../variables'

export function getObjectsDescription () {
  const { currentLocation } = settings
  const { conditions } = locations[currentLocation]
  if (conditions.lit) {
    // TODO : don't display objects that are already in inventory
    let description = []
    objects.map(({ descriptions, locations, states }) => {
      if (locations.includes(currentLocation)) {
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
