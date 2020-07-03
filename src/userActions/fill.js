'use strict'

const { actions, messages, settings } = require('../data')
const { isObjectInInventory, removeObjectFromInventory } = require('../inventory')
const { getFluidConditions } = require('../locations')
const { getObjectFromCurrentLocation, updateObjectState } = require('../object')

function fill(param, actionId, verb) {
  const obj = getObjectFromCurrentLocation(param)
  const isInInvent = isObjectInInventory(obj.id)
  const fluid = getFluidConditions()
  const bottle = getObjectFromCurrentLocation('bottle')

  if (obj.id === 'vase') {
    if (!fluid) return messages.fillInvalid
    if (!isInInvent) return messages.arentCarrying

    const state = updateObjectState(obj.id, 'vaseBroken')
    obj.locations = [settings.currentLocation]
    removeObjectFromInventory(obj.id)
    return `${state.change}\n${messages.shatterVase}`
  }

  if (!fluid) return messages.noLiquid

  // Fill what ?
  if (obj.id !== 'bottle') return actions.find(({ id }) => id === actionId).message

  // No bottle here
  if (!bottle) return messages.doWhat(verb)

  // Bottle full
  if (bottle.currentState !== 'emptyBottle') return messages.bottleFull
  return updateObjectState(obj.id, `${fluid}Bottle`)
}

module.exports = { fill }
