const { messages, settings } = require('../data')
const { getObjectById, getObjectByWord } = require('../object')

function inventory() {
  const { inventory: i } = settings
  let description = i.length ? messages.nowHolding : messages.noCarry

  if (i.length) {
    const hasBird = i.find(id => id === 'bird')
    const hasCage = i.find(id => id === 'cage')
    const invent = (hasBird && hasCage) ? i.filter(id => id !== 'cage') : i

    invent.map((objId) => {
      const { id, currentState, inventory } = getObjectByWord(objId)
      description += `\n${inventory}`

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
