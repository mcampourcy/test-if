import { locations, messages, settings, sounds } from '../variables'
import { display, displayLine } from './console'
import { getObjectsSound } from './objects'

export const listen = () => {
  const { currentLocation } = settings
  const { loud, sound } = locations[currentLocation]
  const objectsSounds = getObjectsSound()
  if (sound) {
    displayLine(sounds[sound])
    if (!loud && objectsSounds) display(objectsSounds)
  } else {
    displayLine(messages.allSilent)
  }
}
