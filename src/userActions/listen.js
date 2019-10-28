import { messages, sounds } from '../data'
import { display, displayLine } from '../console'
import { getCurrentLocation } from '../locations'
import { getObjectsSound } from '../objects'

export const listen = () => {
  const { loud, sound } = getCurrentLocation()
  const objectsSounds = getObjectsSound()

  if (sound) {
    displayLine(sounds[sound])
    if (!loud && objectsSounds) display(objectsSounds)
  } else {
    displayLine(messages.allSilent)
  }
}
