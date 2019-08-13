import { locations } from './locations'
import { settings } from './settings'
import { messages } from './messages'
import { sounds } from './sounds'

export const listen = () => {
    const { currentLocation } = settings
    const { sound } = locations[currentLocation]
    if (sound) {
        return sounds[sound]
        // If loc loud, no sound coming from objects
    }
    //TODO: manage objects sounds
    return messages.allSilent
}

export const actions = {
    listen: ['liste', 'LISTE', 'listen', 'LISTEN'],
    look: ['l', 'x', 'look', 'exami', 'touch', 'descr'],
}
