import {
    directions, locations, messages, settings,
} from './data/index.js'
import { format } from './console.js'
import { getObjectsDescription } from './objects.js'
import { manageLocationsHistory } from './settings.js'
import { pct } from './global.js'
import { getLocationLight } from './light.js'

export function getCurrentLocation() {
    return locations.find(({ id }) => id === settings.currentLocation)
}

function isSpecial(location) {
    return /^locFoof/.test(location)
}

export function getLocationDescription(forceLong = false) {
    const { previousPreviousLocation, repeat } = settings
    const currentLocation = getCurrentLocation()
    const isLocationLight = getLocationLight(currentLocation)
    let description = ''

    if (isSpecial(currentLocation.id)) {
        description += `${currentLocation.description.long}\n`
        manageLocationsHistory(currentLocation.travels[0].action.description)
    }

    const {
        description: { long, short },
        id: current,
        travels,
    } = currentLocation

    // The player came here two moves ago
    // e.g. : locStart => locBuilding => locStart
    const turnAround = current === previousPreviousLocation

    if (isLocationLight) {
        const objectsDescription = getObjectsDescription(
            currentLocation,
            isLocationLight,
        )
        const routesFromLocation = getRoutesFromLocation()
        const hasShortDescription = short && !forceLong

        description
            += hasShortDescription && (repeat || turnAround) ? short : long

        if (!routesFromLocation.length) manageLocationsHistory(travels[0].action.description)

        if (current === 'y2' && pct(25)) description += `\n ${messages.saysPlugh}`

        return objectsDescription.length
            ? `${description}\n${objectsDescription}`
            : description
    }

    return format(
        description.length
            ? `${description}\n${messages.pitchDark}`
            : messages.pitchDark,
    )
}

export function getFluidConditions() {
    const { conditions } = getCurrentLocation()
    if (conditions.fluid) return conditions.oily ? 'oil' : 'water'

    return null
}

export function getRoutesFromLocation() {
    const { travels } = getCurrentLocation()
    const travelsVerbs = travels.map(({ verbs }) => verbs).flat()
    // get dictionary from travels ids
    return travelsVerbs
        .map((travel) => directions.find(({ id }) => id === travel).verbs)
        .flat()
}

export function getTravel(answer) {
    const { travels } = getCurrentLocation()
    const direction = directions.find(({ verbs }) => verbs.includes(answer))
    return travels.find(({ verbs }) => verbs.includes(direction.id)).action
}
