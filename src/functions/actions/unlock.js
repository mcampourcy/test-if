import { actions, messages } from '../../variables'
import { displayLine } from '../console'
import { isObjectInInventory } from '../inventory'
import { getObjectFromLocation, changeObjectState } from '../objects'

export function unlock(object, verb) {
  const obj = getObjectFromLocation(object)
  const action = actions.find(a => a.name === verb)

  if (obj) {
    switch (obj.name) {
      case 'chain':
        // if (getObjectFromCurrentLocation('keys')) {
        //   return chain(verb);
        // } else {
        //   displayLine(messages.noKeys)
        // }
        break
      case 'grate':
        if (isObjectInInventory('keys')) {
          // if (game.closng) {
          //   displayLine(messages.exitClosed)
          //   if (!game.panic)
          //     game.clock2 = PANICTIME;
          //   game.panic = true;
          // } else {
          const state = changeObjectState(obj, (verb === 'lock') ? 'grateClosed' : 'grateOpen')
          if (state.changes) displayLine(state.changes)
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
  } else {
    displayLine(action.message)
  }
}
