import { directions, locations, messages, settings } from '../variables'
import { getObject, getObjectsDescription } from './objects'

export function getCurrentLocation() {
  const { currentLocation } = settings
  return locations.find(({ name }) => name === currentLocation)
}

export function getLocationDescription (forceLong = false) {
  const { currentLocation, previousLocationBis, repeat } = settings
  const { conditions, description: { long, short } } = getCurrentLocation()
  const lamp = getObject('lamp')
  // The player came here two moves ago
  // e.g. : locStart => locBuilding => locStart
  const turnAround = currentLocation === previousLocationBis

  if (conditions.lit || lamp.currentState === 'lampBright') {
    const objectsDescription = getObjectsDescription()
    if (short && !forceLong && (repeat || turnAround)) {
      return short
    } else {
      return objectsDescription.length ? `${long}\n${objectsDescription}` : long
    }
  } else {
    return messages.pitchDark
  }
}

export function getLocationLiquid() {
  const { conditions } = getCurrentLocation()
  if (conditions.fluid) {
    return conditions.oily ? 'oil' : 'water'
  }

  return null
}

export function getLocationPossibleTravels() {
  const { travel } = getCurrentLocation()
  const locationTravels = travel.map(({ verbs }) => verbs).flat()
  // get words dictionary from travel' ids
  return locationTravels.map(travel => directions.find(({ name }) => name === travel ).verbs).flat()
}

export function getLocationTravel(answer) {
  const { travel } = getCurrentLocation()
  const direction = directions.find(({ verbs }) => verbs.includes(answer))
  return travel.find(({ verbs }) => verbs.includes(direction.name)).action
}
