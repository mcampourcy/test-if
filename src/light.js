const { getObjectFromLocationOrInventory } = require('./object')

function isLocationLight(currentLocation) {
  const { conditions } = currentLocation
  const lamp = getObjectFromLocationOrInventory('lamp')

  return (conditions && conditions.lit) || (lamp && lamp.currentState === 'lampBright')
}

module.exports = { isLocationLight }
