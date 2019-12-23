import { actions, messages, settings } from '../data'
import { isObjectInInventory } from '../inventory'
import { getObjectByWord, getObjectFromCurrentLocation, updateObjectState } from '../object'
import { isTreasureFound } from '../treasure'

// Wave - No effect unless waving rod at fissure or at bird
export const wave = (param, actionId) => {
  const isInInventory = isObjectInInventory(param)
  const bird = getObjectFromCurrentLocation('bird')
  const fissure = getObjectFromCurrentLocation('fissure')
  const rod2InInventory = isObjectInInventory('rod2')
  const steps = getObjectFromCurrentLocation('steps')

  if (param !== 'rod' || !isInInventory || (!bird && !fissure)) {
    if (!isInInventory && (param !== 'rod' || !rod2InInventory)) {
      return messages.arentCarrying
    }
    return actions[actionId].message
  }

  if (bird.currentState === 'birdUncaged' && steps && !isTreasureFound('jade')) {
    const treasure = getObjectByWord('jade')
    treasure.locations = [settings.currentLocation]
    return messages.necklaceFly
  }
  if (bird) {
    return bird.currentState === 'birdCaged' ? messages.cageFly : messages.freeFly
  }

  const state = updateObjectState('fissure', fissure.currentState === 'bridged' ? 'unbridged' : 'bridged')

  return state.change
}
