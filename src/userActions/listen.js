import { messages, sounds } from '../data'
import { getCurrentLocation } from '../locations'
import { getObjectsSound } from '../objects'

export const listen = () => {
  const { loud, sound } = getCurrentLocation()
  const objectsSounds = getObjectsSound()

  if (sound && !loud && objectsSounds) return objectsSounds

  if (sound) return sounds[sound]

  return messages.allSilent
}
