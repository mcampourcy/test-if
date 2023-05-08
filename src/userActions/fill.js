import { messages, settings } from '../data/index.js'
import { isObjectInInventory, removeObjectFromInventory } from '../inventory.js'
import { getFluidConditions } from '../locations.js'
import { getObjectFromCurrentLocation, updateObjectState } from '../object.js'

export function fill({ name, verb = 'fill' }) {
    const objectInCurrentLocation = getObjectFromCurrentLocation(name)
    const isInInventory = isObjectInInventory(name)
    const fluid = getFluidConditions()

    if (name === 'vase' && (objectInCurrentLocation || isInInventory)) {
        if (!isInInventory) return messages.arentCarrying
        if (!fluid) return messages.fillInvalid

        updateObjectState(name, 'vaseBroken')
        objectInCurrentLocation.locations = [settings.currentLocation]
        removeObjectFromInventory(name)
        return messages.shatterVase
    }

    return messages.doWhat(verb)
}
