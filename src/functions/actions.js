import { locations, messages, settings, sounds } from '../variables'

export const listen = () => {
  const { currentLocation } = settings
  const { sound } = locations[currentLocation]
  if (sound) {
    console.log(`\n\n${sounds[sound]}`)
    // If loc loud, no sound coming from objects
  }
  //TODO: manage objects sounds
  console.log(`\n\n${messages.allSilent}`)
}
