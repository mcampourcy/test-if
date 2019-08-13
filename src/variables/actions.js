import { locations } from './locations'
import { settings } from './settings'
import { messages } from './messages'

export const listen = () => {
    const { currentLocation } = settings
    const { sound } = locations[currentLocation]
        if (sound) {
            return sound
            // If loc loud, no sound coming from objects
        }
        //TODO: manage objects sounds
    return messages.allSilent
}

export const actions = {
    listen: ['liste', 'LISTE'],
    look: ['l', 'x', 'look', 'exami', 'touch', 'descr'],
}
