import { locations, objects, settings } from '../variables'

export function getObjectsDescription () {
  const { currentLocation } = settings
  const { conditions } = locations[currentLocation]
  if (conditions.lit) {
    // TODO : don't display objects that are already in inventory
    const objectsDescription = []
    for (let params of Object.values(objects)) {
      const { locations } = params
      if (locations.includes(currentLocation)) {
        if (params.states) {
          objectsDescription.push(Object.values(params.states)[0].description)
        } else {
          objectsDescription.push(params.descriptions[locations.indexOf(currentLocation)])
        }
      }
    }
    return objectsDescription.join('\n\n')
  }
}
