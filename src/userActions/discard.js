import { actions, messages } from '../data'
import { isObjectInInventory } from '../inventory'
import { getCurrentLocation } from '../locations'
import {
  destroyObject,
  dropObject,
  getObject,
  getObjectFromCurrentLocation,
  isObjectALiquid,
  updateObjectState,
} from '../object'
import { updateObjectsList } from '../objects'
import { isPreciousGem } from '../treasure'

/**
 * Discard object. "Throw" also comes here for most objects. Special cases for bird (might attack snake or dragon) and cage (might contain bird) and vase.
 * Drop coins at vending machine for extra batteries.
**/

export const discard = (name, verb) => {
  const cavity = getObjectFromCurrentLocation('cavity')
  const dragon = getObjectFromCurrentLocation('dragon')
  const rug = getObjectFromCurrentLocation('rug')
  const snake = getObjectFromCurrentLocation('snake')
  const vendingMachine = getObjectFromCurrentLocation('vend')
  const hasAnotherRodInInventory = !isObjectInInventory('rod') && isObjectInInventory('rod2')
  const { conditions } = getCurrentLocation()

  let obj = getObject(name)

  if (obj.name === 'rod' && hasAnotherRodInInventory) obj = getObject('rod2')

  if (!isObjectInInventory(obj.name)) return actions[verb].message

  if (isPreciousGem(obj.name) && cavity && cavity.currentState !== 'cavityFull') {
    const rugIsHover = rug.currentState === 'rugHover'
    const rugInInventory = isObjectInInventory(rug.name)
    let message = messages.gemFits

    obj.currentState = 'inCavity'
    updateObjectsList(obj)
    updateObjectState(cavity.name, 'cavityFull')

    if(rug && ((obj.name === 'emerald' && !rugIsHover) || (obj.name === 'ruby' && rugIsHover))) {
      if (obj.name === 'ruby') message += `\n${messages.rugSettles}`

      if (rugInInventory) message += `\n${messages.rugWiggles}`

      if (!rugInInventory && obj.name !== 'ruby') message += `\n${messages.rugRises}`

      if (!rugInInventory || obj.name !== 'ruby') {
        const state = (rug.currentState === 'rugHover') ? 'rugFloor' : 'rugHover'
        updateObjectState(rug.name, state)
      }

      dropObject(obj.name)
      return message
    }
  }

  if (obj.name === 'coins' && vendingMachine) {
    destroyObject('coins')
    dropObject('battery')
    // pspeak(BATTERY, look, true, FRESH_BATTERIES);
    return null
  }

  if (isObjectALiquid(obj.name)) obj = getObject('bottle')

  if (obj.name === 'cage' && getObject('bird').currentState === 'birdCaged') dropObject('bird')

  if (obj.name === 'bird') {
    if (dragon && dragon.currentState === 'dragonBars') {
      destroyObject('bird')
      return messages.birdBurnt
    }

    if (snake) {
      updateObjectState('snake', 'snakeChased')
      destroyObject('snake')
      return messages.birdAttacks
    }

    const state = updateObjectState('bird', conditions.forest ? 'birdForestUncaged' : 'birdUncaged')
    dropObject('bird')
    return `${messages.okMan}\n${state.change}`
  }

  dropObject(obj.name)
  return messages.okMan
}
