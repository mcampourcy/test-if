const { messages, sounds } = require('../data')
const { getCurrentLocation } = require('../locations')
const { getObjectsSound } = require('../objects')

const listen = () => {
  const { loud, sound } = getCurrentLocation()
  const objectsSounds = getObjectsSound()

  if (sound && !loud && objectsSounds) return objectsSounds

  if (sound) return sounds[sound]

  return messages.allSilent
}

module.exports = { listen }
