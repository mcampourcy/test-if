import { actions, messages, settings } from '../data'
import { isObjectInInventory, removeObjectFromInventory } from '../inventory'
import { getFluidConditions } from '../locations'
import { getObjectFromCurrentLocation, updateObjectState, } from '../object'

export function fill(object, verb) {
  const obj = getObjectFromCurrentLocation(object)
  const isInInvent = isObjectInInventory(object)
  const fluid = getFluidConditions()
  const bottle = getObjectFromCurrentLocation('bottle')

  if (obj.name === 'vase') {
    if (!fluid) return messages.fillInvalid
    if (!isInInvent) return messages.arentCarrying

    const state = updateObjectState(obj.name, 'vaseBroken')
    obj.locations = [settings.currentLocation]
    removeObjectFromInventory(obj.name)
    return `${state.change}\n${messages.shatterVase}`
  }

  if (!fluid) return messages.noLiquid

  // Fill what ?
  if (obj.name !== 'bottle') return actions.find(({ name }) => name === verb).message

  // No bottle here
  if (!bottle) return messages.doWhat(verb)

  // Bottle full
  if (bottle.currentState !== 'emptyBottle') return messages.bottleFull
  return updateObjectState(obj, `${fluid}Bottle`)
}