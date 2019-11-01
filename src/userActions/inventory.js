import { messages, settings } from '../data'
import { getObject } from '../object'

export function inventory() {
  const { inventory: i } = settings
  let description = i.length ? messages.nowHolding : messages.noCarry

  if (i.length) {
    const hasBird = i.find( name => name === 'bird')
    const hasCage = i.find( name => name === 'cage')
    let invent = (hasBird && hasCage) ? i.filter(name => name !== 'cage') : i

    invent.map(name => {
      const obj = getObject(name)
      description += `\n${obj.inventory}`
    })
  }

  return description
}
