import { messages, settings } from '../../variables'
import { displayLine } from '../console'
import { getObject } from '../objects'

export function inventory() {
  const { inventory: i } = settings
  if (i.length) {
    console.log(`\n${messages.nowHolding}`)
    i.map(object => {
      const obj = getObject(object)
      console.log(obj.inventory)
    })
    console.log('\n')
  } else {
    displayLine(messages.noCarry)
  }
}