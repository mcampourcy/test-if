const { settings } = require('./data')

function manageLocationsHistory(newLocation) {
  const { currentLocation, previousLocation } = settings
  settings.previousPreviousLocation = previousLocation
  settings.previousLocation = currentLocation
  settings.currentLocation = newLocation
}

module.exports = { manageLocationsHistory }
