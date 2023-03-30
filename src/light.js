import { getObjectFromLocationOrInventory } from './object.js'

export function getLocationLight(currentLocation) {
    const { conditions } = currentLocation
    const lamp = getObjectFromLocationOrInventory('lamp')

    return (
        (conditions && conditions.lit)
        || (lamp && lamp.currentState === 'lampBright')
    )
}
