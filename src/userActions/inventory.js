import { messages, settings } from '../data'
import { getObjectById, getObjectByWord } from '../object'

export function inventory() {
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
        const liquid = getObjectById(type).inventoryName

        description += `\n${liquid}`
      }
    })
  }

  return description
}
