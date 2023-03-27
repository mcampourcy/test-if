import { actions, messages } from '../data'
import { isObjectInInventory } from '../inventory'
import { getCurrentLocation } from '../locations'
import {
    destroyObject,
    dropObject,
    getObjectByWord,
    getObjectFromCurrentLocation,
    isObjectALiquid,
    updateObjectState,
} from '../object'
import { updateObjectsList } from '../objects'
import { isPreciousGem } from '../treasure'

/**
 * Discard object. "Throw" also comes here for most objects.
 * Special cases for bird (might attack snake or dragon) and cage (might contain bird) and vase.
 * Drop coins at vending machine for extra batteries.
 * */

export function discard(param, actionId, verb) {
    const cavity = getObjectFromCurrentLocation('cavity')
    const dragon = getObjectFromCurrentLocation('dragon')
    const rug = getObjectFromCurrentLocation('rug')
    const snake = getObjectFromCurrentLocation('snake')
    const vendingMachine = getObjectFromCurrentLocation('vend')
    const hasAnotherRodInInventory = !isObjectInInventory('rod') && isObjectInInventory('rod2')
    const currentLocation = getCurrentLocation()

    let obj = getObjectByWord(param)

    if (!obj) return messages.doWhat(verb)

    if (obj.id === 'rod' && hasAnotherRodInInventory) obj = getObjectByWord('rod2')
    if (!isObjectInInventory(obj.id)) return actions[actionId].message

    if (
        isPreciousGem(obj.id)
        && cavity
        && cavity.currentState !== 'cavityFull'
    ) {
        const rugIsHover = rug.currentState === 'rugHover'
        const rugInInventory = isObjectInInventory(rug.id)
        let message = messages.gemFits

        obj.currentState = 'inCavity'
        updateObjectsList(obj)
        updateObjectState(cavity.id, 'cavityFull')

        if (
            rug
            && ((obj.id === 'emerald' && !rugIsHover)
                || (obj.id === 'ruby' && rugIsHover))
        ) {
            if (obj.id === 'ruby') message += `\n${messages.rugSettles}`

            if (rugInInventory) message += `\n${messages.rugWiggles}`

            if (!rugInInventory && obj.id !== 'ruby') message += `\n${messages.rugRises}`

            if (!rugInInventory || obj.id !== 'ruby') {
                const state = rug.currentState === 'rugHover' ? 'rugFloor' : 'rugHover'
                updateObjectState(rug.id, state)
            }

            dropObject(obj.id, currentLocation.id)
            return message
        }
    }

    if (obj.id === 'coins' && vendingMachine) {
        destroyObject('coins')
        dropObject('battery', currentLocation.id)
        // pspeak(BATTERY, look, true, FRESH_BATTERIES);
        return null
    }

    if (isObjectALiquid(obj.id)) obj = getObjectByWord('bottle')

    if (
        obj.id === 'cage'
        && getObjectByWord('bird').currentState === 'birdCaged'
    ) dropObject('bird', currentLocation.id)

    if (obj.id === 'bird') {
        if (dragon && dragon.currentState === 'dragonBars') {
            destroyObject('bird')
            return messages.birdBurnt
        }

        if (snake) {
            updateObjectState('snake', 'snakeChased')
            destroyObject(snake)
            updateObjectState(
                'bird',
                currentLocation.conditions.forest
                    ? 'birdForestUncaged'
                    : 'birdUncaged',
            )
            dropObject('bird', currentLocation.id)
            return messages.birdAttacks
        }

        updateObjectState(
            'bird',
            currentLocation.conditions.forest
                ? 'birdForestUncaged'
                : 'birdUncaged',
        )
        dropObject('bird', currentLocation.id)
    }

    dropObject(obj.id, currentLocation.id)
    return messages.okMan
}
