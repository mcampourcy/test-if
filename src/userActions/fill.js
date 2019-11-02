import { actions, messages, settings } from '../data'
import { isObjectInInventory, removeObjectFromInventory } from '../inventory'
import { getFluidConditions } from '../locations'
import { updateObjectState, getObjectFromLocationOrInventory } from '../object'

export function fill(param, actionId, verb) {
  const obj = getObjectFromLocationOrInventory(param)
  const isInInvent = isObjectInInventory(obj.id)
  const fluid = getFluidConditions()

  if (obj.id === 'vase') {
    if (!fluid) return messages.fillInvalid
    if (!isInInvent) return messages.arentCarrying

    const state = updateObjectState(obj.id, 'vaseBroken')
    obj.locations = [settings.currentLocation]
    removeObjectFromInventory(obj.id)
    return `${state.change}\n${messages.shatterVase}`
  }

  // Fill what ?
  if (obj.id !== 'bottle') return actions.find(({ id }) => id === actionId).message

  // fill bottle

  // No bottle here
  if (!isInInvent) return messages.doWhat(verb)

  // Bottle full
  if (obj.currentState !== 'emptyBottle') return messages.bottleFull
  if (!fluid) return messages.noLiquid

  return updateObjectState(obj.id, `${fluid}Bottle`).change
}
