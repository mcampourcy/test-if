import { getCurrentLocation } from '../locations'
import { getObjectsSound } from '../objects'
import { display, displayLine } from '../console'
import { messages, sounds } from '../../variables'

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
