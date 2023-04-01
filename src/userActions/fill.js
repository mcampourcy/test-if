import { messages, settings } from '../data/index.js'
import { isObjectInInventory, removeObjectFromInventory } from '../inventory.js'
import { getFluidConditions } from '../locations.js'
import { getObjectFromCurrentLocation, updateObjectState } from '../object.js'

export function fill({ object }) {
    const obj = getObjectFromCurrentLocation(object)
    const isInInvent = isObjectInInventory(obj.id)
    const fluid = getFluidConditions()

    if (obj.id === 'vase') {
        if (!fluid) return messages.fillInvalid
        if (!isInInvent) return messages.arentCarrying

        const state = updateObjectState(obj.id, 'vaseBroken')
        obj.locations = [settings.currentLocation]
        removeObjectFromInventory(obj.id)
        return `${state.change}\n${messages.shatterVase}`
    }

    if (!fluid) return messages.noLiquid

    return updateObjectState(obj.id, `${fluid}Bottle`)
}
