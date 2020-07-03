'use strict'

/*  Light.  Applicable only to lamp and urn. */
const { isObjectInInventory } = require('../inventory')
const { getLocationDescription } = require('../locations')
const { getObjectByWord, updateObjectState, getObjectFromCurrentLocation } = require('../object')

function light(action, param) {
  const lamp = isObjectInInventory('lamp') || getObjectFromCurrentLocation('lamp')
  const urn = isObjectInInventory('urn') || getObjectFromCurrentLocation('urn')
  let obj = param

  if (!param && (lamp || urn)) {
    const id = lamp ? 'lamp' : 'urn'
    const lightObj = getObjectByWord(id)
    if (lightObj.currentState === `${id}Dark`) obj = lightObj
  }

  if (obj && obj.id === 'lamp') {
    const lampState = updateObjectState(obj.id, 'lampBright')
    return `${lampState.change}\n${getLocationDescription()}`
  }

  if (obj && obj.id === 'urn') {
    const urnState = updateObjectState(obj.id, obj.currentState === 'urnEmpty' ? 'urnBright' : 'urnEmpty')
    return urnState.change
  }

  return action.message
}

module.exports = { light }
