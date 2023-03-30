import { actions, messages } from '../data/index.js'
import { getFluidConditions } from '../locations.js'
import { addObjectToInventory, isObjectInInventory } from '../inventory.js'
import {
    getObjectFromCurrentLocation,
    getObjectByWord,
    getObjectState,
    updateObjectState,
} from '../object.js'

/*  Drink.  If no object, assume water and look for it here.  If water is in
 *  the bottle, drink that, else must be at a water loc, so drink stream. */
export function drink(param, actionId) {
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
            // if (!isBottleInInventory) {
            //     return addObjectToInventory(param)
            // }

            const hasBottleWater = getObjectState(param).id === 'waterBottle'
            if (hasBottleWater) {
                return updateObjectState(param, 'emptyBottle')
            }

            return messages.noLiquid
        }
    }

    return actions.find(({ id }) => id === actionId).message
}
