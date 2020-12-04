'use strict'

const { actions, messages } = require('../data')
const { getFluidConditions } = require('../locations')
const { addObjectToInventory, isObjectInInventory } = require('../inventory')
const {
  getObjectFromCurrentLocation, getObjectByWord, getObjectState, updateObjectState,
} = require('../object')

/*  Drink.  If no object, assume water and look for it here.  If water is in
 *  the bottle, drink that, else must be at a water loc, so drink stream. */
function drink(param, actionId) {
  const fluid = getFluidConditions()
  const isBottleHere = getObjectFromCurrentLocation('bottle')
  const isBottleInInventory = isObjectInInventory('bottle')
  const isParamWater = getObjectByWord(param)

  if (!param && fluid !== 'water' && !isBottleHere && !isBottleInInventory) {
    return messages.noLiquid
  }

  if (!param && isBottleHere) {
    const hasBottleWater = getObjectState('bottle').id === 'waterBottle'
    if (hasBottleWater) {
      addObjectToInventory('bottle')
      return updateObjectState('bottle', 'emptyBottle').change
    }
  }

  // if (obj == BLOOD) {
  //   DESTROY(BLOOD);
  //   state_change(DRAGON, DRAGON_BLOODLESS);
  //   game.blooded = true;
  //   return GO_CLEAROBJ;
  // }

  if (param) {
    if (!isParamWater) {
      return messages.ridiculousAttempt
    }

    if (isParamWater && (isBottleHere || isBottleInInventory)) {
      if (!isBottleInInventory) {
        return addObjectToInventory(param)
      }

      const hasBottleWater = getObjectState(param).id === 'waterBottle'
      if (hasBottleWater) {
        return updateObjectState(param, 'emptyBottle')
      }

      return messages.noLiquid
    }
  }

  return actions.find(({ id }) => id === actionId).message
}

module.exports = { drink }
