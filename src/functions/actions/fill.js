import { displayLine } from '../console'
import { getObjectFromInventory, removeObjectFromInventory, updateInventory } from '../inventory'
import { getFluidConditions } from '../locations'
import { getObjectFromLocation, getObjectFromCurrentLocation, changeObjectState, updateObjectsList, } from '../objects'
import { actions, messages, settings } from '../../variables'

export function fill(object, verb) {
  const obj = getObjectFromLocation(object)
  const isInInvent = getObjectFromInventory(object)
  const fluid = getFluidConditions()

  if (obj.name === 'vase') {
    if (!fluid) {
      displayLine(messages.fillInvalid)
      return
    }

    if (!isInInvent) {
      displayLine(messages.arentCarrying)
      return
    }

    displayLine(messages.shatterVase)
    obj.currentState = 'vaseBroken'
    obj.locations = [settings.currentLocation]
    removeObjectFromInventory(obj.name)
  } else {
    if (fluid) { // oil or water here
      if (obj.name !== 'bottle') { // fill what ?
        displayLine(actions.find(({ name }) => name === verb).message)
        return
      }

      if (!getObjectFromCurrentLocation('bottle')) { // no bottle here
        displayLine(messages.doWhat(verb))
      } else { // bottle here
        const bottle = getObjectFromLocation('bottle')
        if (bottle.currentState !== 'emptyBottle') {
          displayLine(messages.bottleFull)
        } else {
          displayLine(changeObjectState(obj, `${fluid}Bottle`))
          return
        }
        if (isInInvent) updateInventory(obj.name)
      }
    } else {
      displayLine(messages.noLiquid)
    }
  }
  updateObjectsList(obj)
}