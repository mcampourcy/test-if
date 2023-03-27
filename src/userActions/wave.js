import { actions, messages, settings } from '../data'
import { isObjectInInventory } from '../inventory'
import {
    getObjectByWord,
    getObjectFromCurrentLocation,
    updateObjectState,
} from '../object'
import { isTreasureFound } from '../treasure'

// Wave - No effect unless waving rod at fissure or at bird
export function wave(param, actionId) {
    const isInInventory = isObjectInInventory(param)
    const bird = getObjectFromCurrentLocation('bird') || isObjectInInventory('bird')
    const fissure = getObjectFromCurrentLocation('fissure')
    const rod2InInventory = isObjectInInventory('rod2')
    const steps = getObjectFromCurrentLocation('steps')

    if (param !== 'rod' || !isInInventory || (!bird && !fissure)) {
        if (!isInInventory && (param !== 'rod' || !rod2InInventory)) {
            return messages.arentCarrying
        }
        return actions[actionId].message
    }

    if (
        bird.currentState === 'birdUncaged'
        && steps
        && !isTreasureFound('jade')
    ) {
        const treasure = getObjectByWord('jade')
        treasure.locations = [settings.currentLocation]
        return messages.necklaceFly
    }

    if (bird) {
        let description = bird.currentState === 'birdCaged'
            ? messages.cageFly
            : messages.freeFly

        if (fissure) {
            const state = updateObjectState(
                'fissure',
                fissure.currentState === 'bridged' ? 'unbridged' : 'bridged',
            )
            description += `\n${state.change}`
        }

        return description
    }

    return null
}
