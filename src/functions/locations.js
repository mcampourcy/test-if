import { directions, locations, messages, settings } from '../variables'
import { getObject, getObjectsDescription } from './objects'
import { manageLocationsHistory } from './settings'
import { doSomething } from './global'
import { displayLine } from './console'

export const getCurrentLocation = () => locations.find(({ name }) => name === settings.currentLocation)
const isSpecial = location => /^locFoof/.test(location)

export const getLocationDescription = (forceLong = false) => {
  const { previousLocationBis, repeat } = settings
  const { conditions, description: { long, short }, name: current, travels } = getCurrentLocation()
  const lamp = getObject('lamp')

  // The player came here two moves ago
  // e.g. : locStart => locBuilding => locStart
  const turnAround = current === previousLocationBis

  if (conditions && (conditions.lit || lamp.currentState === 'lampBright')) {
    const objectsDescription = getObjectsDescription()
    const routesFromLocation = getRoutesFromLocation()

    const description = (short && !forceLong && (repeat || turnAround)) ? short : long

    if (!routesFromLocation.length) {
      displayLine(objectsDescription.length ? `${description}\n${objectsDescription}` : description)
      manageLocationsHistory(travels[0].action.description)
      doSomething()
    }

    return objectsDescription.length ? `${description}\n${objectsDescription}` : description
  }

  if (isSpecial(current)) {
    displayLine(long)
    manageLocationsHistory(travels[0].action.description)
    doSomething()
  }

  return messages.pitchDark
}

export const getFluidConditions = () => {
  const { conditions } = getCurrentLocation()
  if (conditions.fluid) conditions.oily ? 'oil' : 'water'

  return null
}

export const getRoutesFromLocation = () => {
  const { travels } = getCurrentLocation()
  const travelsVerbs = travels.map(({ verbs }) => verbs).flat()
  // get dictionary from travels ids
  return travelsVerbs.map(travel => directions.find(({ name }) => name === travel).verbs).flat()
}

export const getTravel = (answer) => {
  const { travels } = getCurrentLocation()
  const direction = directions.find(({ verbs }) => verbs.includes(answer))
  return travels.find(({ verbs }) => verbs.includes(direction.name)).action
}
