import { actions, locations, messages, objects, settings, sounds } from '../variables'
import { display, displayLine } from './console'
import { getObjectFromHere, getObjectsListFromHere, getObjectsSound, isHere, isInInventory, isLiquid } from './objects'
import { getCurrentLocation, getLocationLiquid } from './locations'

export function carry(object, verb, instruction) {
  const { currentLocation } = settings
  const { conditions } = getCurrentLocation()

  if (isInInventory(object)) { // Already carrying
    displayLine(actions.find(({ name }) => name === verb).message)
    return
  }

  if (conditions.lit) {

    if (isLiquid(object)) { // "take water / oil"
      const bottleHere = isHere('bottle')
      const bottleInvent = isInInventory('bottle')

      if (!bottleHere && !bottleInvent) {
        displayLine(messages.noContainer)
      } else {
        if (bottleHere || bottleInvent.currentState === 'emptyBottle') {
          // return fill(verb)
        } else {
          displayLine(messages.bottleFull)
        }
      }

    } else {
      let obj
      // if user didn't mention any param ("take") and there is only one object here, take the object
      if (!object && getObjectsListFromHere.length === 1) {
        obj = getObjectsListFromHere()[0]
      } else if (object) {
        obj = getObjectFromHere(object)
      }

      if (obj) { // Object in current location

        switch (obj.name) {
          case 'messag':
            // displayLine(messages.removeMessage)
            break
          case 'bottle':
            const { conditions } = currentLocation
            obj.currentState = 'emptyBottle'
            if (conditions.fluid) obj.currentState = conditions.oily ? 'oilBottle' : 'waterBottle'
            settings.inventory.push(obj)
            displayLine(messages.okMan)
            break
          default:
            if (obj.states) obj.currentState = obj.states[0].name
            settings.inventory.push(obj)
            displayLine(messages.okMan)
            break
        }

      } else {
        displayLine(messages.doWhat(instruction))
      }
    }
  }
}

export function fill(object, verb) {
  const obj = getObjectFromHere(object)
  const isInvent = isInInventory(object)
  const locationLiquid = getLocationLiquid()
  const indexObject = objects.indexOf(obj)
  const indexInvent = settings.inventory.indexOf(obj)

  if (obj.name === 'vase') {
    if (!locationLiquid) {
      displayLine(messages.fillInvalid)
      return
    }

    if (!isInvent) {
      displayLine(messages.arentCarrying)
      return
    }

    displayLine(messages.shatterVase)
    obj.currentState = 'vaseBroken'
    obj.locations = [settings.currentLocation]
    settings.inventory.splice(indexInvent)

  } else {
    if (locationLiquid) { // oil or water here
      if (obj.name !== 'bottle') { // fill what ?
        displayLine(actions.find(({ name }) => name === verb).message)
        return
      }

      if (!isHere('bottle')) { // no bottle here
        displayLine(messages.doWhat(verb))
      } else { // bottle here
        const bottle = getObjectFromHere('bottle')
        if (bottle.currentState !== 'emptyBottle') {
          displayLine(messages.bottleFull)
        } else {
          objects.splice(indexObject, 1, stateChange(obj, `${locationLiquid}Bottle`))
          return
        }
        if (isInvent) settings.inventory[indexInvent] = obj
      }
    } else {
      displayLine(messages.noLiquid)
    }
  }
  objects.splice(indexObject, 1, obj)
}

export function inventory() {
  const { inventory } = settings
  if (inventory.length) {
    console.log(`\n${messages.nowHolding}`)
    inventory.map(object => console.log(object.inventory))
    console.log(`\n`)
  } else {
    displayLine(messages.noCarry)
  }
}

export const listen = () => {
  const { currentLocation } = settings
  const { loud, sound } = getCurrentLocation()
  const objectsSounds = getObjectsSound()
  if (sound) {
    displayLine(sounds[sound])
    if (!loud && objectsSounds) display(objectsSounds)
  } else {
    displayLine(messages.allSilent)
  }
}

export function unlock(object, verb) {
  let obj = getObjectFromHere(object)
  const action  = actions.find(a => a.name === verb)
  const indexObject = objects.indexOf(obj)

  switch (obj.name) {
    case 'chain':
      // if (isHere('keys')) {
      //   return chain(verb);
      // } else {
      //   displayLine(messages.noKeys)
      // }
      break
    case 'grate':
      if (isInInventory('keys')) {
        // if (game.closng) {
        //   displayLine(messages.exitClosed)
        //   if (!game.panic)
        //     game.clock2 = PANICTIME;
        //   game.panic = true;
        // } else {
        objects.splice(indexObject, 1, stateChange(obj, (verb === 'lock') ? 'grateClosed' : 'grateOpen'))
        // }
      } else {
        displayLine(messages.noKeys)
      }
      break
    case 'clam':

      // if (verb == LOCK)
      //   rspeak(HUH_MAN);
      // else if (!TOTING(TRIDENT))
      //   rspeak(CLAM_OPENER);
      // else {
      //   DESTROY(CLAM);
      //   drop(OYSTER, game.loc);
      //   drop(PEARL, LOC_CULDESAC);
      //   rspeak(PEARL_FALLS);
      // }
      break
    case 'oyster':
      // if (verb == LOCK)
      //   rspeak(HUH_MAN);
      // else if (TOTING(OYSTER))
      //   rspeak(DROP_OYSTER);
      // else if (!TOTING(TRIDENT))
      //   rspeak(OYSTER_OPENER);
      // else
      //   rspeak(OYSTER_OPENS);
      break
    case 'door':
      displayLine(obj.currentState === 'doorUnrusted' ? messages.okMan : messages.rustyDoor)
      break
    case 'cage':
      displayLine(messages.noLock)
      break
    case 'keys':
      displayLine(messages.cannotUnlock)
      break
    default:
      displayLine(action.message)
  }
}
