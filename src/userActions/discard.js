import { actions, messages, settings } from '../data'
import { isObjectInInventory, removeObjectFromInventory } from '../inventory'
import { getCurrentLocation } from '../locations'
import { updateObjectState, getObject, getObjectFromCurrentLocation } from '../object'
import { updateObjectsList } from '../objects'
import { isPreciousGem } from '../treasure'
import { displayLine } from '../console'

/**
 * Discard object. "Throw" also comes here for most objects. Special cases for bird (might attack snake or dragon) and cage (might contain bird) and vase.
 * Drop coins at vending machine for extra batteries.
**/

export const discard = (name, verb) => {
  const cavity = getObjectFromCurrentLocation('cavity')
  const rug = getObjectFromCurrentLocation('rug')
  let obj = getObject(name)

  if (obj.name === 'rod' && !isObjectInInventory(obj.name) && isObjectInInventory('rod2')) {
    obj = getObject('rod2')
  }

  if (!isObjectInInventory(obj.name)) return actions[verb].message

  if (isPreciousGem(obj.name) && cavity && cavity.currentState !== 'cavityFull') {
    displayLine(messages.gemFits)
    obj.currentState = 'inCavity'
    updateObjectsList(obj)
    updateObjectState(cavity.name, 'cavityFull')

    if(rug && (
      (obj.name === 'emerald' && rug.currentState !== 'rugHover') ||
      (obj.name === 'ruby' && rug.currentState === 'rugHover')
    )) {
      if (obj.name === 'ruby') return messages.rugSettles
      if (isObjectInInventory(rug.name)) return messages.rugWiggles
      else return messages.rugRises

      if (!isObjectInInventory(rug.name) || obj.name !== 'ruby') {
        const state = (rug.currentState === 'rugHover') ? 'rugFloor' : 'rugHover'
        updateObjectState(rug.name, state)
        if (state === 'rugHover') {
          const sapph = getObject('sapph')
          // k = objects[SAPPH].plac;
          // move(RUG + NOBJECTS, k);
        }
      }

      // drop(obj, currentLocation)
    }
  }

  // if (isObjectInInventory(object)) {
  //
  //   if (['bird', 'cage'].includes(object)) {
  //     moveObject('bird')
  //     updateObjectState(getObject('bird'), 'birdUncaged')
  //   } else {
  //     moveObject(object)
  //   }
  //
  //   return messages.okMan
  // } else {
  //   return messages.doWhat(instruction)
  // }
}

//
// if (GSTONE(obj) && AT(CAVITY) && game.prop[CAVITY] != CAVITY_FULL) {
//   rspeak(GEM_FITS);
//   game.prop[obj] = STATE_IN_CAVITY;
//   game.prop[CAVITY] = CAVITY_FULL;
//   if (HERE(RUG) && ((obj == EMERALD && game.prop[RUG] != RUG_HOVER) ||
//     (obj == RUBY && game.prop[RUG] == RUG_HOVER))) {
//     if (obj == RUBY)
//       rspeak(RUG_SETTLES);
//     else if (TOTING(RUG))
//       rspeak(RUG_WIGGLES);
//     else
//       rspeak(RUG_RISES);
//     if (!TOTING(RUG) || obj == RUBY) {
//       int k = (game.prop[RUG] == RUG_HOVER) ? RUG_FLOOR : RUG_HOVER;
//       game.prop[RUG] = k;
//       if (k == RUG_HOVER)
//         k = objects[SAPPH].plac;
//       move(RUG + NOBJECTS, k);
//     }
//   }
//   drop(obj, game.loc);
//   return GO_CLEAROBJ;
// }
//
// if (obj == COINS && HERE(VEND)) {
//   DESTROY(COINS);
//   drop(BATTERY, game.loc);
//   pspeak(BATTERY, look, true, FRESH_BATTERIES);
//   return GO_CLEAROBJ;
// }
//
// if (LIQUID() == obj)
//   obj = BOTTLE;
// if (obj == BOTTLE && LIQUID() != NO_OBJECT) {
//   game.place[LIQUID()] = LOC_NOWHERE;
// }
//
// if (obj == BEAR && AT(TROLL)) {
//   state_change(TROLL, TROLL_GONE);
//   move(TROLL, LOC_NOWHERE);
//   move(TROLL + NOBJECTS, IS_FREE);
//   move(TROLL2, objects[TROLL].plac);
//   move(TROLL2 + NOBJECTS, objects[TROLL].fixd);
//   juggle(CHASM);
//   drop(obj, game.loc);
//   return GO_CLEAROBJ;
// }
//
// if (obj == VASE) {
//   if (game.loc != objects[PILLOW].plac) {
//     state_change(VASE, AT(PILLOW)
//       ? VASE_WHOLE
//       : VASE_DROPPED);
//     if (game.prop[VASE] != VASE_WHOLE)
//       game.fixed[VASE] = IS_FIXED;
//     drop(obj, game.loc);
//     return GO_CLEAROBJ;
//   }
// }
//
// if (obj == CAGE && game.prop[BIRD] == BIRD_CAGED) {
//   drop(BIRD, game.loc);
// }
//
// if (obj == BIRD) {
//   if (AT(DRAGON) && game.prop[DRAGON] == DRAGON_BARS) {
//     rspeak(BIRD_BURNT);
//     DESTROY(BIRD);
//     return GO_CLEAROBJ;
//   }
//   if (HERE(SNAKE)) {
//     rspeak(BIRD_ATTACKS);
//     if (game.closed)
//       return GO_DWARFWAKE;
//     DESTROY(SNAKE);
//     /* Set game.prop for use by travel options */
//     game.prop[SNAKE] = SNAKE_CHASED;
//   } else
//     rspeak(OK_MAN);
//
//   game.prop[BIRD] = FOREST(game.loc) ? BIRD_FOREST_UNCAGED : BIRD_UNCAGED;
//   drop(obj, game.loc);
//   return GO_CLEAROBJ;
// }
//
// rspeak(OK_MAN);
// drop(obj, game.loc);
// return GO_CLEAROBJ;

// const moveObject = (object) => {
//   const currentLocation = getCurrentLocation()
//   const obj = getObject(object)
//
//   obj.locations = [currentLocation.name]
//   updateObjectsList(obj)
//   removeObjectFromInventory(obj.name)
// }
