import { locations, messages, settings, sounds } from '../variables'

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
