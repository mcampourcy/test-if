import { messages, sounds } from '../data/index.js'
import { getCurrentLocation } from '../locations.js'
import { getObjectsSound } from '../objects.js'

export const listen = () => {
    const { loud, sound } = getCurrentLocation()
    const objectsSounds = getObjectsSound()

    if (sound && !loud && objectsSounds) return objectsSounds

    if (sound) return sounds[sound]

    return messages.allSilent
}
