'use strict'

const { format } = require('../console')
const { actions, messages } = require('../data')
const {
  destroyObject,
  getObjectByWord,
  getObjectFromCurrentLocation,
  getObjectFromLocationOrInventory,
  updateObjectState,
} = require('../object')

// ATTACK. ASSUME TARGET IF UNAMBIGUOUS. "THROW" ALSO LINKS HERE. ATTACKABLE
// OBJECTS FALL INTO TWO CATEGORIES: ENEMIES (SNAKE, DWARF, ETC.) AND OTHERS (BIRD, CLAM).
// AMBIGUOUS IF TWO ENEMIES, OR IF NO ENEMIES BUT TWO OTHERS.

function attack(param, actionId) {
  const bird = getObjectFromLocationOrInventory('bird')
  const clam = getObjectFromCurrentLocation('clam')
  const oyster = getObjectFromCurrentLocation('oyster')
  const ogre = getObjectFromCurrentLocation('ogre')
  const snake = getObjectFromCurrentLocation('snake')
  const vendingMachine = getObjectFromCurrentLocation('vend')
  let changes = 0
  let obj = getObjectByWord(param)

  if (!param) {
    if (snake) {
      obj = snake
      changes += 1
    }

    // Can't attack bird or machine by throwing axe
    if (bird && actionId !== 'throw') {
      obj = bird
      changes += 1
    }

    if (vendingMachine && actionId !== 'throw') {
      obj = vendingMachine
      changes += 1
    }

    // Clam and oyster both treated as clam for intransitive case, no harm done
    if (clam || oyster) {
      obj = clam
      changes += 1
    }

    // if (atdwrf(game.loc) > 0) {
    //   obj = DWARF;
    //    += 1changes;
    // }
    // if (AT(DRAGON) && game.prop[DRAGON] == DRAGON_BARS) {
    //   obj = DRAGON;
    //    += 1changes;
    // }
    // if (AT(TROLL)) {
    //   obj = TROLL;
    //    += 1changes;
    // }
    if (ogre) {
      obj = ogre
      changes += 1
    }
    // if (HERE(BEAR) && game.prop[BEAR] == UNTAMED_BEAR) {
    //   obj = BEAR;
    //   ++changes;
    // }
    if (changes >= 2) return messages.noTarget
  }

  if (obj === bird) {
    // if (game.closed) {
    //   rspeak(UNHAPPY_BIRD);
    destroyObject('bird')
    return messages.birdDead
  }

  if (obj === vendingMachine) {
    const state = updateObjectState(
      'vend',
      vendingMachine.currentState === 'vendBlocks' ? 'vendUnblocks' : 'vendBlocks',
    )
    return state.change
  }

  // if (obj == BEAR) {
  //   switch (game.prop[BEAR]) {
  //     case UNTAMED_BEAR:
  //       rspeak(BEAR_HANDS);
  //       break;
  //     case SITTING_BEAR:
  //       rspeak(BEAR_CONFUSED);
  //       break;
  //     case CONTENTED_BEAR:
  //       rspeak(BEAR_CONFUSED);
  //       break;
  //     case BEAR_DEAD:
  //       rspeak(ALREADY_DEAD);
  //       break;
  //   }
  // }
  // if (obj == DRAGON && game.prop[DRAGON] == DRAGON_BARS) {
  //  Fun stuff for dragon.  If he insists on attacking it, win!
  //  Set game.prop to dead, move dragon to central loc (still
  // fixed), move rug there (not fixed), and move him there,
  // too.  Then do a null motion to get new description.
  // rspeak(BARE_HANDS_QUERY);
  // if (!silent_yes()) {
  //   speak(arbitrary_messages[NASTY_DRAGON]);
  //   return GO_MOVE;
  // }
  // state_change(DRAGON, DRAGON_DEAD);
  // game.prop[RUG] = RUG_FLOOR;
  // Hardcoding LOC_SECRET5 as the dragon's death location is ugly.
  //  he way it was computed before was worse; it depended on the
  // two dragon locations being LOC_SECRET4 and LOC_SECRET6 and
  // LOC_SECRET5 being right between them.
  // move(DRAGON + NOBJECTS, IS_FIXED);
  // move(RUG + NOBJECTS, IS_FREE);
  // move(DRAGON, LOC_SECRET5);
  // move(RUG, LOC_SECRET5);
  // drop(BLOOD, LOC_SECRET5);
  // for (obj_t i = 1; i <= NOBJECTS; i++) {
  //   if (game.place[i] == objects[DRAGON].plac ||
  //     game.place[i] == objects[DRAGON].fixd)
  //     move(i, LOC_SECRET5);
  // }
  // game.loc = LOC_SECRET5;
  // return GO_MOVE;
  // }

  if (obj === ogre) {
    return format(messages.ogreDodge)
  //   if (atdwrf(game.loc) == 0)
  //     return GO_CLEAROBJ;
  //
  //   rspeak(KNIFE_THROWN);
  //   DESTROY(OGRE);
  //   int dwarves = 0;
  //   for (int i = 1; i < PIRATE; i++) {
  //     if (game.dloc[i] == game.loc) {
  //       ++dwarves;
  //       game.dloc[i] = LOC_LONGWEST;
  //       game.dseen[i] = false;
  //     }
  //   }
  //   rspeak((dwarves > 1) ?
  //     OGRE_PANIC1 :
  //     OGRE_PANIC2);
  }

  if (!obj) return messages.noTarget

  switch (obj.id) {
    case 'clam':
    case 'oyster':
      return messages.shellImpervious
    case 'snake':
      return messages.snakeWarning
    case 'dwarf':
      // if (game.closed) return GO_DWARFWAKE
      // rspeak(BARE_HANDS_QUERY)
      break
    case 'dragon':
      return messages.alreadyDead
    case 'troll':
      return messages.rockyTroll
    default:
      return actions[actionId].message
  }

  return null
}

module.exports = { attack }
