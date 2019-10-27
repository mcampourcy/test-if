import { getObjectFromInventory, removeObjectFromInventory } from '../inventory'
import { getFluidConditions } from '../locations'
import { getObjectFromLocation, changeObjectState, } from '../objects'
import { actions, messages, settings } from '../../variables'

export function fill(object, verb) {
  const obj = getObjectFromLocation(object)
  const isInInvent = getObjectFromInventory(object)
  const fluid = getFluidConditions()
  const bottle = getObjectFromLocation('bottle')

  if (obj.name === 'vase') {
    if (!fluid) return messages.fillInvalid
    if (!isInInvent) return messages.arentCarrying

    const state = changeObjectState(obj.name, 'vaseBroken')
    obj.locations = [settings.currentLocation]
    removeObjectFromInventory(obj.name)
    return `${state.changes}\n${messages.shatterVase}`
  }

  if (!fluid) return messages.noLiquid

  // Fill what ?
  if (obj.name !== 'bottle') return actions.find(({ name }) => name === verb).message

  // No bottle here
  if (!bottle) return messages.doWhat(verb)

  // Bottle full
  if (bottle.currentState !== 'emptyBottle') return messages.bottleFull
  return changeObjectState(obj, `${fluid}Bottle`)
}