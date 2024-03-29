import { actions, directions, messages } from './data/index.js'
import { getErrorMessage } from './directions.js'
import { getLocationDescription, getCurrentLocation } from './locations.js'
import { getObjectByWord } from './object.js'
import {
    attack,
    carry,
    discard,
    drink,
    extinguish,
    fill,
    inventory,
    light,
    listen,
    lock,
    read,
    wave,
} from './userActions/index.js'
import { getLocationLight } from './light.js'

function getAction(instruction) {
    return actions.find(({ verbs }) => verbs && verbs.includes(instruction))
}

/**
 * Manage user actions
 *
 * Manage actions !== manage travels
 * This function manage actions verbs, not directions indications
 *
 * Correct input form : <verb> <object>
 * <object> <verb>: Irregular form of input, but should be allowed
 *
 * Difference between 'action.id' and 'verb' :
 * 'verb' is the instruction given by the user, action.id is the generic id of 'verb'
 * */
export function manageActions(answer) {
    const answerIsDirection = directions.find(({ verbs }) => verbs.includes(answer))
    if (answerIsDirection) return getErrorMessage(answer)
    const currentLocation = getCurrentLocation()
    const locationTooDark = !getLocationLight(currentLocation)

    let [verb, param] = answer.split(/\s/)

    // <object> <verb> form
    if (getAction(param) && getObjectByWord(verb)) {
        const oldVerb = verb
        verb = param
        param = oldVerb
    }

    const action = getAction(verb)

    if (!action) return messages.cantApply

    if (action.noaction) return action.message

    switch (action.id) {
    case 'attack':
    case 'throw':
        return attack(param, action.id)
    case 'carry':
        return locationTooDark
            ? messages.cantApply
            : carry(param, action.id, verb)
    case 'discard':
        return discard(param, action.id, verb)
    case 'drink':
        return drink(param, action.id)
    case 'extinguish':
        return extinguish(param)
    case 'fill':
        return locationTooDark
            ? messages.cantApply
            : fill(param, action.id, verb)
    case 'inventory':
        return inventory()
    case 'light':
        return light(action, param)
    case 'listen':
        return listen()
    case 'look':
        return `${messages.noMoreDetail}\n${getLocationDescription(true)}`
    case 'lock':
    case 'unlock':
        return lock(param, action.id)
    case 'read':
        return read(param)
    case 'wave':
        return wave(param, verb)
    default:
        return messages.cantApply
    }
}
