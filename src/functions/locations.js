import { directions, locations, messages, settings } from '../data'
import { getObject, getObjectsDescription } from './objects'
import { manageLocationsHistory } from './settings'
import { displayLine, format } from './console'

export const getCurrentLocation = () => locations.find(({ name }) => name === settings.currentLocation)

const isSpecial = location => /^locFoof/.test(location)

export const getLocationDescription = (forceLong = false) => {
  const { previousPreviousLocation, repeat } = settings
  const { conditions, description: { long, short }, name: current, travels } = getCurrentLocation()
  const lamp = getObject('lamp')

  // The player came here two moves ago
  // e.g. : locStart => locBuilding => locStart
  const turnAround = current === previousPreviousLocation

  if ((conditions && conditions.lit) || lamp.currentState === 'lampBright') {
    const objectsDescription = getObjectsDescription()
    const routesFromLocation = getRoutesFromLocation()

    const hasShortDescription = short && !forceLong
    const description = hasShortDescription && (repeat || turnAround) ? short : long

    if (!routesFromLocation.length) manageLocationsHistory(travels[0].action.description)

    return format(objectsDescription.length ? `${description}\n${objectsDescription}` : description)
  }

  if (isSpecial(current)) {
    displayLine(long)
    manageLocationsHistory(travels[0].action.description)
  }

  return format(messages.pitchDark)
}

export const getFluidConditions = () => {
  const { conditions } = getCurrentLocation()
  if (conditions.fluid) return conditions.oily ? 'oil' : 'water'

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
