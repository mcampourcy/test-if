import { birdStateList, objectList } from './constants/utils.js'
import { messages } from '../data/index.js'
import { addObjectToInventory, isObjectInInventory } from '../inventory.js'
import { destroyObject, getObjectFromCurrentLocation, updateObjectState } from '../object.js'

const { CAGED, FOREST_UNCAGED, UNCAGED } = birdStateList
const { BIRD, CAGE, ROD } = objectList

// Carry bird
export function getTheBird(bird) {
    if (bird.currentState === FOREST_UNCAGED) {
        destroyObject(bird)
        return messages.birdCrap
    }
    if (bird.currentState === UNCAGED) {
        if (!isObjectInInventory(CAGE)) return messages.cannotCarry
        if (isObjectInInventory(ROD)) return messages.birdEvades
        updateObjectState(bird.id, CAGED)
        addObjectToInventory(BIRD)
        return messages.okMan
    }
    return messages.okMan
}

// carry cage || cage bird
export function cageTheBird(verb = 'carry') {
    const bird = getObjectFromCurrentLocation(BIRD)
    if (!bird) return messages.doWhat(verb)

    if (bird.currentState !== CAGED && isObjectInInventory(ROD)) return messages.birdEvades

    if (bird.currentState === CAGED) addObjectToInventory(BIRD)
    addObjectToInventory(CAGE)
    return messages.okMan
}
