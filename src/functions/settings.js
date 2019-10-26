import { settings } from '../variables'

export function manageLocationsHistory(newLocation) {
  const { currentLocation, previousLocation } = settings
  settings.previousPreviousLocation = previousLocation
  settings.previousLocation = currentLocation
  settings.currentLocation = newLocation
}
