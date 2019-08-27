import { locations, messages, settings, sounds } from '../variables'
import { display, displayLine } from './console'
import { getObjectFromHere, getObjectsSound, isHere, isInInventory, isLiquid } from './objects'
import { getCurrentLocation, getLocationLiquid } from './locations'

export function carry(object, verb) {
  const { currentLocation } = settings
  const { conditions } = locations[currentLocation]

  if (conditions.lit) {

    if (isLiquid(object)) { // "take water / oil"
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

export function fill(object) {
  const obj = getObjectFromHere(object)
  const isInvent = isInInventory(object)

  if (obj.name === 'vase') {
    if (!getLocationLiquid()) {
      displayLine(messages.fillInvalid)
      return
    }

    if (!isInvent) {
      displayLine(messages.arentCarrying)
      return
    }

    displayLine(messages.shatterVase)
    obj.state = 'vaseBroken'
    obj.locations = [settings.currentLocation]
    // rspeak(SHATTER_VASE);
    // game.prop[VASE] = VASE_BROKEN;
    // game.fixed[VASE] = IS_FIXED;
    // drop(VASE, game.loc);
    // return GO_CLEAROBJ;
  // }
  //
  //   if (obj == URN) {
  //     if (game.prop[URN] != URN_EMPTY) {
  //       rspeak(FULL_URN);
  //       return GO_CLEAROBJ;
  //     }
  //     if (!HERE(BOTTLE)) {
  //       rspeak(FILL_INVALID);
  //       return GO_CLEAROBJ;
  //     }
  //     int k = LIQUID();
  //     switch (k) {
  //       case WATER:
  //         game.prop[BOTTLE] = EMPTY_BOTTLE;
  //         rspeak(WATER_URN);
  //         break;
  //       case OIL:
  //         game.prop[URN] = URN_DARK;
  //         game.prop[BOTTLE] = EMPTY_BOTTLE;
  //         rspeak(OIL_URN);
  //         break;
  //       case NO_OBJECT:
  //       default:
  //         rspeak(FILL_INVALID);
  //         return GO_CLEAROBJ;
  //     }
  //     game.place[k] = LOC_NOWHERE;
  //     return GO_CLEAROBJ;
  //   }
  //   if (obj != INTRANSITIVE && obj != BOTTLE) {
  //     speak(actions[verb].message);
  //     return GO_CLEAROBJ;
  //   }
  //   if (obj == INTRANSITIVE && !HERE(BOTTLE))
  //     return GO_UNKNOWN;
  //
  //   if (HERE(URN) && game.prop[URN] != URN_EMPTY) {
  //     rspeak(URN_NOPOUR);
  //     return GO_CLEAROBJ;
  //   }
  //   if (LIQUID() != NO_OBJECT) {
  //     rspeak(BOTTLE_FULL);
  //     return GO_CLEAROBJ;
  //   }
  //   if (LIQLOC(game.loc) == NO_OBJECT) {
  //     rspeak(NO_LIQUID);
  //     return GO_CLEAROBJ;
  //   }
  //
  //   state_change(BOTTLE, (LIQLOC(game.loc) == OIL)
  //     ? OIL_BOTTLE
  //     : WATER_BOTTLE);
  //   if (TOTING(BOTTLE))
  //     game.place[LIQUID()] = CARRIED;
  //   return GO_CLEAROBJ;
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
