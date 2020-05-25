const { directions, locations, messages, settings } = require('./data')
const { format } = require('./console')
const { getObjectsDescription } = require('./objects')
const { manageLocationsHistory } = require('./settings')
const { pct } = require('./global')
const { isLocationLight } = require('./light')

const getCurrentLocation = () => locations.find(({ id }) => id === settings.currentLocation)

const isSpecial = location => /^locFoof/.test(location)

const getLocationDescription = (forceLong = false) => {
  const { previousPreviousLocation, repeat } = settings
  const currentLocation = getCurrentLocation()
  let description = ''

  if (isSpecial(currentLocation.id)) {
    description += `${currentLocation.description.long}\n`
    manageLocationsHistory(currentLocation.travels[0].action.description)
  }

  const { description: { long, short }, id: current, travels } = getCurrentLocation()

  // The player came here two moves ago
  // e.g. : locStart => locBuilding => locStart
  const turnAround = current === previousPreviousLocation

  if (isLocationLight()) {
    const objectsDescription = getObjectsDescription()
    const routesFromLocation = getRoutesFromLocation()
    const hasShortDescription = short && !forceLong

    description += hasShortDescription && (repeat || turnAround) ? short : long

    if (!routesFromLocation.length) manageLocationsHistory(travels[0].action.description)

    if (current === 'y2' && pct(25)) description += `\n ${messages.saysPlugh}`

    return format(objectsDescription.length ? `${description}\n${objectsDescription}` : description)
  }

  return format(description.length ? `${description}\n${messages.pitchDark}` : messages.pitchDark)
}

const getFluidConditions = () => {
  const { conditions } = getCurrentLocation()
  if (conditions.fluid) return conditions.oily ? 'oil' : 'water'

  return null
}

const getRoutesFromLocation = () => {
  const { travels } = getCurrentLocation()
  const travelsVerbs = travels.map(({ verbs }) => verbs).flat()
  // get dictionary from travels ids
  return travelsVerbs.map(travel => directions.find(({ id }) => id === travel).verbs).flat()
}

const getTravel = (answer) => {
  const { travels } = getCurrentLocation()
  const direction = directions.find(({ verbs }) => verbs.includes(answer))
  return travels.find(({ verbs }) => verbs.includes(direction.id)).action
}

module.exports = { getCurrentLocation, getLocationDescription, getFluidConditions, getRoutesFromLocation, getTravel }
