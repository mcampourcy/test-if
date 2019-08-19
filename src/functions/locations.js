import { locations, messages, directions, settings } from '../variables'
import { getObjectsDescription } from './objects'

export function getLocationDescription () {
  const { currentLocation, previousLocationBis, repeat } = settings
  const { conditions, description: { long, short } } = locations[currentLocation]
  // The player came here two moves ago
  // e.g. : locStart => locBuilding => locStart
  const turnAround = currentLocation === previousLocationBis

  if (conditions.lit) {
    const objectsDescription = getObjectsDescription()
    if (short && (repeat || turnAround)) {
      return short
    } else {
      return objectsDescription.length ? `${long}\n${objectsDescription}` : long
    }
  } else {
    return messages.pitchDark
  }
}

export function getLocationPossibleTravels() {
  const { currentLocation } = settings
  const { travel } = locations[currentLocation]
  // récupère tous les voyages possibles à partir d'un endroit
  const locationTravels = travel.map(({ verbs }) => verbs).flat()
  // récupère le dictionnaire de mots à partir de l'id des voyages
  return locationTravels.map(travel => directions.find(({ name }) => name === travel ).verbs).flat()
}

export function getLocationTravel(answer) {
  const { currentLocation } = settings
  const { travel } = locations[currentLocation]
  const direction = directions.find(({ verbs }) => verbs.includes(answer))
  return travel.find(({ verbs }) => verbs.includes(direction.name)).action
}
