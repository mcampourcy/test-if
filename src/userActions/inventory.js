'use strict'

const { messages, settings } = require('../data')
const { getObjectById, getObjectByWord } = require('../object')

function inventory() {
  const { inventory: currentInventory } = settings
  let description = currentInventory.length ? messages.nowHolding : messages.noCarry

  if (currentInventory.length) {
    const hasBird = currentInventory.find(id => id === 'bird')
    const hasCage = currentInventory.find(id => id === 'cage')
    const invent = (hasBird && hasCage) ? currentInventory.filter(id => id !== 'cage') : currentInventory

    invent.map((objId) => {
      const { id, currentState, inventoryName } = getObjectByWord(objId)
      description += `\n${inventoryName}`

      if (id === 'bottle' && currentState !== 'emptyBottle') {
        const type = currentState.substring(0, currentState.indexOf('Bottle'))
        const liquid = getObjectById(type).inventory

        description += `\n${liquid}`
      }
    })
  }

  return description
}

module.exports = { inventory }
