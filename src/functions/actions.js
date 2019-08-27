import { locations, messages, settings, sounds } from '../variables'
import { display, displayLine } from './console'
import { getObjectFromHere, getObjectsSound, isHere, isInInventory, isLiquid } from './objects'

export function carry(object, verb) {
  const { currentLocation } = settings
  const { conditions } = locations[currentLocation]

  if (conditions.lit) {

    if (isLiquid(object.name)) { // "take water / oil"
      const bottleHere = isHere('bottle')
      const bottleInvent = isInInventory('bottle')

      if (!bottleHere && !bottleInvent) {
        displayLine(messages.noContainer)
      } else {
        if (bottleHere || bottleInvent.state === 'emptyBottle') {
          // return fill(verb)
        } else {
          displayLine(messages.bottleFull)
        }
      }

    } else {
      const obj = getObjectFromHere(object)

      if (obj) { // Object in current location

        switch (obj.name) {
          case 'messag':
            // displayLine(messages.removeMessage)
            break
          case 'bottle':
            const { conditions } = currentLocation
            obj.state = 'emptyBottle'
            if (conditions.fluid) obj.state = conditions.oily ? 'oilBottle' : 'waterBottle'
            settings.inventory.push(obj)
            displayLine(messages.okMan)
            break
          default:
            if (obj.states) obj.state = obj.states[0]
            settings.inventory.push(obj)
            displayLine(messages.okMan)
            break
        }

      } else {
        displayLine(messages.doWhat(verb))
      }
    }
  }
}

export function inventory() {
  const { inventory } = settings
  if (inventory.length) {
    displayLine(messages.nowHolding)
    inventory.map(object => console.log(object.inventory))
    console.log('\n')
  } else {
    displayLine(messages.noCarry)
  }
}

export const listen = () => {
  const { currentLocation } = settings
  const { loud, sound } = locations[currentLocation]
  const objectsSounds = getObjectsSound()
  if (sound) {
    displayLine(sounds[sound])
    if (!loud && objectsSounds) display(objectsSounds)
  } else {
    displayLine(messages.allSilent)
  }
}
