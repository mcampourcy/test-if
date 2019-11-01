import { directions, locations, messages, settings } from './data'
import { format } from './console'
import { getObject } from './object'
import { getObjectsDescription } from './objects'
import { manageLocationsHistory } from './settings'
import { pct } from './global'

export const getCurrentLocation = () => locations.find(({ id }) => id === settings.currentLocation)

const isSpecial = location => /^locFoof/.test(location)

export const getLocationDescription = (forceLong = false) => {
  const lamp = getObject('lamp')
  const { previousPreviousLocation, repeat } = settings
  let description = ''

  if (isSpecial(getCurrentLocation().id)) {
    description += `${getCurrentLocation().description.long}\n`
    manageLocationsHistory(getCurrentLocation().travels[0].action.description)
  }

  const { conditions, description: { long, short }, id: current, travels } = getCurrentLocation()

  // The player came here two moves ago
  // e.g. : locStart => locBuilding => locStart
  const turnAround = current === previousPreviousLocation

  if ((conditions && conditions.lit) || lamp.currentState === 'lampBright') {
    const objectsDescription = getObjectsDescription()
    const routesFromLocation = getRoutesFromLocation()
    const hasShortDescription = short && !forceLong

    description += hasShortDescription && (repeat || turnAround) ? short : long

    if (!routesFromLocation.length) manageLocationsHistory(travels[0].action.description)

    if (current === 'y2' && pct(25)) description += `\n ${messages.saysPlugh}`

    return format(objectsDescription.length ? `${description}\n${objectsDescription}` : description)
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
  return travelsVerbs.map(travel => directions.find(({ id }) => id === travel).verbs).flat()
}

export const getTravel = (answer) => {
  const { travels } = getCurrentLocation()
  const direction = directions.find(({ verbs }) => verbs.includes(answer))
  return travels.find(({ verbs }) => verbs.includes(direction.id)).action
}
