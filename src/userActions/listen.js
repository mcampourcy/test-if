import { messages, sounds } from '../data/index.js'
import { getCurrentLocation } from '../locations.js'
import { getObjectsSound } from '../objects.js'

//  Listen.  Intransitive only.  Print stuff based on object sound properties.
export const listen = () => {
    const { loud, sound } = getCurrentLocation()
    const objectsSounds = getObjectsSound()

    if (!loud && sound) return sounds[sound]

    if (!loud && objectsSounds) return objectsSounds

    return messages.allSilent
}
