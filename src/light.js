const { getCurrentLocation } = require('./locations')
const { getObjectFromLocationOrInventory } = require('./object')

function isLocationLight() {
  const { conditions } = getCurrentLocation()
  const lamp = getObjectFromLocationOrInventory('lamp')

  return (conditions && conditions.lit) || (lamp && lamp.currentState === 'lampBright')
}

module.exports = { isLocationLight }
