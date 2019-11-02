import { settings } from './data'

export function manageLocationsHistory(newLocation) {
  const { currentLocation, previousLocation } = settings
  settings.previousPreviousLocation = previousLocation
  settings.previousLocation = currentLocation
  settings.currentLocation = newLocation
}

export function manageTurns() {
  settings.turns.global++
  if (settings.repeat) settings.turns.current++
  else settings.turns.current = 0
}
