import { messages, settings } from '../data'
import { displayLine } from '../console'
import { getObject } from '../object'

export function inventory() {
  const { inventory: i } = settings
  if (i.length) {
    console.log(`\n${messages.nowHolding}`)
    const hasBird = i.find( name => name === 'bird')
    const hasCage = i.find( name => name === 'cage')
    let invent = (hasBird && hasCage) ? i.filter(name => name !== 'cage') : i

    invent.map(name => {
      const obj = getObject(name)
      console.log(obj.inventory)
    })

    console.log('\n')
  } else {
    displayLine(messages.noCarry)
  }
}
