import { isObjectInInventory } from '../inventory'
import {
  getObject,
  getObjectFromCurrentLocation,
  isTreasureFound,
  updateObjectState,
} from '../object'
import { actions, messages, settings } from '../data'

// Wave - No effect unless waving rod at fissure or at bird
export const wave = (object, verb) => {
  const isInInventory = isObjectInInventory(object)
  const bird = getObjectFromCurrentLocation('bird')
  const fissure = getObjectFromCurrentLocation('fissure')
  const rod2InInventory = isObjectInInventory('rod2')
  const steps = getObjectFromCurrentLocation('steps')

  if (object !== 'rod' || !isInInventory || (!bird && !fissure)) {
    if (!isInInventory && (object !== 'rod' || !rod2InInventory)) {
      return messages.arentCarrying
    }
    return actions[verb].message
  }

  if (bird.currentState === 'birdUncaged' && steps && !isTreasureFound('jade')) {
    const treasure = getObject('jade')
    treasure.locations = [settings.currentLocation]
    return messages.necklaceFly
  } else {
    if (bird) {
      return bird.currentState === 'birdCaged' ? messages.cageFly : messages.freeFly
    }

    const state = updateObjectState('fissure', fissure.currentState === 'bridged' ? 'unbridged' : 'bridged')

    return state.change
  }
}
