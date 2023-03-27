import { messages, settings } from '../data'
import { inventory } from './inventory'
import { cageTheBird, getTheBird } from '../bird'
import { addObjectToInventory, isObjectInInventory } from '../inventory'
import { getCurrentLocation } from '../locations'
import {
    getObjectFromCurrentLocation,
    isObjectALiquid,
    updateObjectState,
} from '../object'
import { getObjectsList } from '../objects'
import { getAction } from './utils'
import { fill } from './fill'

export function carry(param, actionId, verb) {
    const { inventoryLimit } = settings
    const { conditions } = getCurrentLocation()
    const objectsList = getObjectsList()
    const onlyOneObjectHere = objectsList.length === 1
    let obj

    // Inventory full
    if (inventory.length === inventoryLimit) return messages.carryLimit

    // if user didn't mention any param ("take") and there is only one object here, take the object
    // Otherwise, return error message
    if (!param) {
        obj = objectsList[0]
        if (!onlyOneObjectHere) return messages.doWhat(verb)
    }

    if (param) obj = getObjectFromCurrentLocation(param)
    if (!obj) return messages.doWhat(verb)

    // Already carrying
    if (isObjectInInventory(obj.id)) return getAction(actionId).message

    // Not moveable
    if (obj.immovable) return messages.youJoking

    // "take water / oil"
    if (isObjectALiquid(obj.id)) {
        const bottle = getObjectFromCurrentLocation('bottle')
            || isObjectInInventory('bottle')

        if (!bottle) return messages.noContainer
        if (getObjectFromCurrentLocation('bottle')) addObjectToInventory(obj.id)
        if (bottle.currentState === 'fullBottle') return messages.bottleFull

        return fill({ objectToFill: obj, actionId })
    }

    if (obj.id === 'bird') return getTheBird(obj)

    if (obj.id === 'bottle' && conditions.fluid) {
        addObjectToInventory(obj.id)

        if (obj.currentState === 'emptyBottle') {
            const bottleState = updateObjectState(
                obj.id,
                conditions.oily ? 'oilBottle' : 'waterBottle',
            )
            return `${bottleState.change}\n${messages.okMan}`
        }

        return messages.okMan
    }

    if (
        (obj.id === 'cage' && getObjectFromCurrentLocation('bird'))
        || (obj.id === 'bird' && verb === 'cage')
    ) {
        return cageTheBird(obj, verb)
    }

    addObjectToInventory(obj.id)
    return messages.okMan
}
