import { actions, messages, settings } from '../data'
import { isObjectInInventory } from '../inventory'
import { getObject, getObjectFromCurrentLocation, updateObjectState } from '../object'
import { isTreasureFound } from '../treasure'

// Wave - No effect unless waving rod at fissure or at bird
export const wave = (param, actionName) => {
  const isInInventory = isObjectInInventory(param)
  const bird = getObjectFromCurrentLocation('bird')
  const fissure = getObjectFromCurrentLocation('fissure')
  const rod2InInventory = isObjectInInventory('rod2')
  const steps = getObjectFromCurrentLocation('steps')

  if (param !== 'rod' || !isInInventory || (!bird && !fissure)) {
    if (!isInInventory && (param !== 'rod' || !rod2InInventory)) {
      return messages.arentCarrying
    }
    return actions[actionName].message
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
