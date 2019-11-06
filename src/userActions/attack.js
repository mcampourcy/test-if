/*  Attack.  Assume target if unambiguous.  "Throw" also links here.
 *  Attackable objects fall into two categories: enemies (snake,
 *  dwarf, etc.)  and others (bird, clam, machine).  Ambiguous if 2
 *  enemies, or no enemies but 2 others. */

export const attack = (actionId, verb, param = null) => {
  // verb_t verb = command.verb;
  // obj_t obj = command.obj;

  if (!param) {
      int changes = 0;
      if (atdwrf(game.loc) > 0) {
        obj = DWARF;
        ++changes;
      }
      if (HERE(SNAKE)) {
        obj = SNAKE;
        ++changes;
      }
      if (AT(DRAGON) && game.prop[DRAGON] == DRAGON_BARS) {
        obj = DRAGON;
        ++changes;
      }
      if (AT(TROLL)) {
        obj = TROLL;
        ++changes;
      }
      if (AT(OGRE)) {
        obj = OGRE;
        ++changes;
      }
      if (HERE(BEAR) && game.prop[BEAR] == UNTAMED_BEAR) {
        obj = BEAR;
        ++changes;
      }
      /* check for low-priority targets */
      if (obj == INTRANSITIVE) {
        /* Can't attack bird or machine by throwing axe. */
        if (HERE(BIRD) && verb != THROW) {
          obj = BIRD;
          ++changes;
        }
        if (HERE(VEND) && verb != THROW) {
          obj = VEND;
          ++changes;
        }
        /* Clam and oyster both treated as clam for intransitive case;
         * no harm done. */
        if (HERE(CLAM) || HERE(OYSTER)) {
          obj = CLAM;
          ++changes;
        }
      }
      if (changes >= 2)
        return GO_UNKNOWN;
    }
}




  if (obj == BIRD) {
    if (game.closed) {
      rspeak(UNHAPPY_BIRD);
    } else {
      DESTROY(BIRD);
      rspeak(BIRD_DEAD);
    }
    return GO_CLEAROBJ;
  }
  if (obj == VEND) {
    state_change(VEND,
      game.prop[VEND] == VEND_BLOCKS ? VEND_UNBLOCKS : VEND_BLOCKS);

    return GO_CLEAROBJ;
  }

  if (obj == BEAR) {
    switch (game.prop[BEAR]) {
      case UNTAMED_BEAR:
        rspeak(BEAR_HANDS);
        break;
      case SITTING_BEAR:
        rspeak(BEAR_CONFUSED);
        break;
      case CONTENTED_BEAR:
        rspeak(BEAR_CONFUSED);
        break;
      case BEAR_DEAD:
        rspeak(ALREADY_DEAD);
        break;
    }
    return GO_CLEAROBJ;
  }
  if (obj == DRAGON && game.prop[DRAGON] == DRAGON_BARS) {
    /*  Fun stuff for dragon.  If he insists on attacking it, win!
     *  Set game.prop to dead, move dragon to central loc (still
     *  fixed), move rug there (not fixed), and move him there,
     *  too.  Then do a null motion to get new description. */
    rspeak(BARE_HANDS_QUERY);
    if (!silent_yes()) {
      speak(arbitrary_messages[NASTY_DRAGON]);
      return GO_MOVE;
    }
    state_change(DRAGON, DRAGON_DEAD);
    game.prop[RUG] = RUG_FLOOR;
    /* Hardcoding LOC_SECRET5 as the dragon's death location is ugly.
     * The way it was computed before was worse; it depended on the
     * two dragon locations being LOC_SECRET4 and LOC_SECRET6 and
     * LOC_SECRET5 being right between them.
     */
    move(DRAGON + NOBJECTS, IS_FIXED);
    move(RUG + NOBJECTS, IS_FREE);
    move(DRAGON, LOC_SECRET5);
    move(RUG, LOC_SECRET5);
    drop(BLOOD, LOC_SECRET5);
    for (obj_t i = 1; i <= NOBJECTS; i++) {
      if (game.place[i] == objects[DRAGON].plac ||
        game.place[i] == objects[DRAGON].fixd)
        move(i, LOC_SECRET5);
    }
    game.loc = LOC_SECRET5;
    return GO_MOVE;
  }

  if (obj == OGRE) {
    rspeak(OGRE_DODGE);
    if (atdwrf(game.loc) == 0)
      return GO_CLEAROBJ;

    rspeak(KNIFE_THROWN);
    DESTROY(OGRE);
    int dwarves = 0;
    for (int i = 1; i < PIRATE; i++) {
      if (game.dloc[i] == game.loc) {
        ++dwarves;
        game.dloc[i] = LOC_LONGWEST;
        game.dseen[i] = false;
      }
    }
    rspeak((dwarves > 1) ?
      OGRE_PANIC1 :
      OGRE_PANIC2);
    return GO_CLEAROBJ;
  }

  switch (obj) {
    case INTRANSITIVE:
      rspeak(NO_TARGET);
      break;
    case CLAM:
    case OYSTER:
      rspeak(SHELL_IMPERVIOUS);
      break;
    case SNAKE:
      rspeak(SNAKE_WARNING);
      break;
    case DWARF:
      if (game.closed) {
        return GO_DWARFWAKE;
      }
      rspeak(BARE_HANDS_QUERY);
      break;
    case DRAGON:
      rspeak(ALREADY_DEAD);
      break;
    case TROLL:
      rspeak(ROCKY_TROLL);
      break;
    default:
      speak(actions[verb].message);
  }
  return GO_CLEAROBJ;
}
