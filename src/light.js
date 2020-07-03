'use strict'

const { getObjectFromLocationOrInventory } = require('./object')

function getLocationLight(currentLocation) {
  const { conditions } = currentLocation
  const lamp = getObjectFromLocationOrInventory('lamp')

  return (conditions && conditions.lit) || (lamp && lamp.currentState === 'lampBright')
}

module.exports = { getLocationLight }
