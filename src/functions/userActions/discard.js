import { messages } from '../../data'
import { isObjectInInventory, removeObjectFromInventory } from '../inventory'
import { getCurrentLocation } from '../locations'
import { updateObjectState, getObject } from '../object'
import { updateObjectsList } from '../objects'

export const discard = (object, instruction) => {
  if (isObjectInInventory(object)) {

    if (['bird', 'cage'].includes(object)) {
      moveObject('bird')
      updateObjectState(getObject('bird'), 'birdUncaged')
    } else {
      moveObject(object)
    }

    return messages.okMan
  } else {
    return messages.doWhat(instruction)
  }
}

// if (obj == ROD && !TOTING(ROD) && TOTING(ROD2)) {
//   obj = ROD2;
// }
//²
// if (!TOTING(obj)) {
//   speak(actions[verb].message);
//   return GO_CLEAROBJ;
// }
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

const moveObject = (object) => {
  const currentLocation = getCurrentLocation()
  const obj = getObject(object)

  obj.locations = [currentLocation.name]
  updateObjectsList(obj)
  removeObjectFromInventory(obj.name)
}
