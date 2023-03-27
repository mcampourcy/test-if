import { actions, messages } from '../data'
import { isObjectInInventory } from '../inventory'
import {
    destroyObject,
    dropObject,
    getObjectFromCurrentLocation,
    updateObjectState,
} from '../object'

export function lock(param, actionId) {
    const action = actions.find((a) => a.id === actionId)
    const keys = isObjectInInventory('keys') || getObjectFromCurrentLocation('keys')
    const lockAction = actionId === 'lock'
    let obj

    // Lock, unlock, no object given

    if (param) {
        obj = getObjectFromCurrentLocation(param)
        if (!obj) return action.message
    } else {
        const objects = ['chain', 'clam', 'oyster']
        const places = ['door', 'grate']

        objects.forEach((id) => {
            obj = getObjectFromCurrentLocation(id) || isObjectInInventory(id)
        })

        places.forEach((id) => {
            obj = getObjectFromCurrentLocation(id)
        })

        if (!obj) return messages.nothingLocked
    }

    // Lock, unlock object. Special stuff for opening clam/oyster and for chain.

    if (obj) {
        switch (obj.id) {
        case 'chain':
            // if (keys) return chain(actionId)
            return messages.noKeys
        case 'grate':
            if (!keys) return messages.noKeys
            return (
                updateObjectState(
                    obj.id,
                    lockAction ? 'grateClosed' : 'grateOpen',
                ).change || ''
            )
        case 'clam':
            if (lockAction) return messages.huhMan
            if (!isObjectInInventory('trident')) return messages.clamOpener

            destroyObject(obj.id)
            dropObject('oyster')
            dropObject('pearl', 'locCuldesac')
            return messages.pearlFalls
        case 'oyster':
            if (lockAction) return messages.huhMan
            if (isObjectInInventory('oyster')) return messages.dropOyster
            if (!isObjectInInventory('trident')) return messages.oysterOpener

            return messages.oysterOpens
        case 'door':
            return obj.currentState === 'doorUnrusted'
                ? messages.okMan
                : messages.rustyDoor
        case 'cage':
            return messages.noLock
        case 'keys':
            return messages.cannotUnlock
        default:
            return actionId.message
        }
    }

    return actionId.message
}
