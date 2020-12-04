'use strict'

const { actions } = require('../data')

/* Fly.  Snide remarks unless hovering rug is here. */
function fly(actionId) {
  return actions.find(({ id }) => id === actionId).message
}

module.exports = { fly }

// static phase_codes_t fly(verb_t verb, obj_t obj)
// {
//   if (obj == INTRANSITIVE) {
//     if (!HERE(RUG)) {
//       rspeak(FLAP_ARMS);
//       return GO_CLEAROBJ;
//     }
//     if (game.prop[RUG] != RUG_HOVER) {
//       rspeak(RUG_NOTHING2);
//       return GO_CLEAROBJ;
//     }
//     obj = RUG;
//   }
//
//   if (obj != RUG) {
//     speak(actions[verb].message);
//     return GO_CLEAROBJ;
//   }
//   if (game.prop[RUG] != RUG_HOVER) {
//     rspeak(RUG_NOTHING1);
//     return GO_CLEAROBJ;
//   }
//   game.oldlc2 = game.oldloc;
//   game.oldloc = game.loc;
//
//   if (game.prop[SAPPH] == STATE_NOTFOUND) {
//     game.newloc = game.place[SAPPH];
//     rspeak(RUG_GOES);
//   } else {
//     game.newloc = LOC_CLIFF;
//     rspeak(RUG_RETURNS);
//   }
//   return GO_TERMINATE;
// }
