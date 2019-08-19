import { locations, messages, directions, settings } from '../variables'
import { getObjectsDescription } from './objects'

export function getLocationDescription () {
  const { currentLocation, previousLocationBis, repeat } = settings
  const { description: { long, short }, conditions } = locations[currentLocation]
  // The player came here two moves ago
  // e.g. : locStart => locBuilding => locStart
  const turnAround = currentLocation === previousLocationBis

  if (conditions.lit) {
    const objectsDescription = getObjectsDescription()
    if (short && (repeat || turnAround)) {
      return short
    } else {
      return objectsDescription ? `${long}\n\n${objectsDescription}` : long
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
  return locationTravels.map(name => directions[name]).flat()
}

export function getLocationTravel(direction) {
  const { currentLocation } = settings
  const { travel } = locations[currentLocation]
  for (let [key, value] of Object.entries(directions)) {
    if (value && value.includes(direction)) {
      return travel.find(({ verbs }) => verbs.includes(key)).action
    }
  }
}
