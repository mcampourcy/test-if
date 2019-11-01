import { messages, settings } from '../data'
import { getObject } from '../object'

export function inventory() {
  const { inventory: i } = settings
  let description = i.length ? messages.nowHolding : messages.noCarry

  if (i.length) {
    const hasBird = i.find(id => id === 'bird')
    const hasCage = i.find(id => id === 'cage')
    const invent = (hasBird && hasCage) ? i.filter(id => id !== 'cage') : i

    invent.map((id) => {
      const obj = getObject(id)
      description += `\n${obj.inventory}`
    })
  }

  return description
}
