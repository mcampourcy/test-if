import { settings } from '../variables'

export function manageLocationsHistory(newLocation) {
  const { currentLocation, previousLocation } = settings
  settings.previousLocationBis = previousLocation
  settings.previousLocation = currentLocation
  settings.currentLocation = newLocation
}
