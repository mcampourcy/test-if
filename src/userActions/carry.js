import { objectList, bottleStateList } from './constants/utils.js'
import { messages, settings } from '../data/index.js'
import { cageTheBird, getTheBird } from './bird.js'
import { getCurrentLocation } from '../locations.js'
import { addObjectToInventory } from '../inventory.js'
import { getObjectById, getObjectFromCurrentLocation, updateObjectState } from '../object.js'
import { getObjectsList } from '../objects.js'

export function carry({ name = null, verb = 'carry' }) {
    const { BIRD, BOTTLE, CAGE, OIL, WATER } = objectList
    const { EMPTY, FULL_OIL, FULL_WATER } = bottleStateList
    const { inventory, inventoryLimit } = settings
    const { conditions } = getCurrentLocation()
    let objectFromCurrentLocation = getObjectFromCurrentLocation(name)

    // If no name given (e.g. "take") and only one object here
    if (!name) {
        const objectsList = getObjectsList()
        if (objectsList.length === 1) {
            objectFromCurrentLocation = objectsList[0]
        }
    }

    // "take water / oil"
    if (name === WATER || name === OIL) {
        const bottleInInventory = inventory.find(o => o === BOTTLE) ? getObjectById(BOTTLE) : null
        const bottleInCurrentLocation = !bottleInInventory && getObjectFromCurrentLocation(BOTTLE)

        if (!bottleInInventory && !bottleInCurrentLocation) return messages.noContainer

        if (!conditions.fluid) return messages.noLiquid

        if (bottleInCurrentLocation && bottleInCurrentLocation.currentState !== EMPTY) {
            return messages.fullBottle
        }

        const bottle = bottleInInventory || bottleInCurrentLocation
        if (bottle.currentState === EMPTY) {
            addObjectToInventory(BOTTLE)
            const bottleState = updateObjectState(name, conditions.oily ? FULL_OIL : FULL_WATER)
            return `${bottleState.change}\n${messages.okMan}`
        }
    }

    // If there is something to carry
    if (objectFromCurrentLocation) {
        const { id, immovable } = objectFromCurrentLocation

        // Object already carried
        if (inventory.find(o => o === id)) return messages.alreadyCarrying

        // Inventory full
        if (inventory.length >= inventoryLimit) return messages.carryLimit

        // The object can't be moved
        if (immovable) return messages.youJoking

        // Carry bird || carry cage || cage bird
        if (name === BIRD || name === CAGE) {
            const carryCage = name === CAGE && getObjectFromCurrentLocation(BIRD)
            const cageBird = name === BIRD && verb === CAGE
            const carryBird = name === BIRD && verb !== CAGE

            if (carryCage || cageBird) {
                return cageTheBird(objectFromCurrentLocation, verb)
            }

            if (carryBird) {
                return getTheBird(objectFromCurrentLocation)
            }
        }

        addObjectToInventory(id)
        return messages.okMan
    }

    // Nothing to carry
    // No param given with too many objects in here OR object is not here
    return messages.doWhat(verb)
}
