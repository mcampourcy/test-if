import { actions, messages, settings } from '../data'
import { isObjectInInventory, removeObjectFromInventory } from '../inventory'
import { getFluidConditions } from '../locations'
import { getObjectFromCurrentLocation, updateObjectState, } from '../object'

export function fill(param, actionName, verb) {
  const obj = getObjectFromCurrentLocation(param)
  const isInInvent = isObjectInInventory(obj.name)
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
  if (obj.name !== 'bottle') return actions.find(({ name }) => name === actionName).message

  // No bottle here
  if (!bottle) return messages.doWhat(verb)

  // Bottle full
  if (bottle.currentState !== 'emptyBottle') return messages.bottleFull
  return updateObjectState(obj.name, `${fluid}Bottle`)
}