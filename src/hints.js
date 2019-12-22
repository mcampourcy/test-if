import { hints, messages, settings } from './data'
import { getCurrentLocation } from './locations'
import { displayLine } from './console'
import { getObject, getObjectFromCurrentLocation, isInCurrentOrPreviousLocation } from './object'
import { isObjectInInventory } from './inventory'

const yesAnswer = ['y', 'yes']
const noAnswer = ['n', 'no']

export function manageHints() {
  const currentLocation = getCurrentLocation()
  const hint = hints[currentLocation.hints[0]]
  const hinted = settings.hinted.includes(hint.id)
  const grate = getObject('grate')
  const emerald = getObject('emerald')
  const pyramid = getObject('pyramid')
  const keys = getObjectFromCurrentLocation('keys') || isObjectInInventory('keys')
  const bird = getObjectFromCurrentLocation('bird') || isObjectInInventory('bird')
  const maze = isInCurrentOrPreviousLocation('maze') || isObjectInInventory('maze')
  const forest = isInCurrentOrPreviousLocation('forest') || isObjectInInventory('forest')

  if (hint && !hinted && hint.turns >= settings.turns.global) {
    console.input(messages.wantHint, input => {
      const yes = yesAnswer.includes(input.trim())
      const no = noAnswer.includes(input.trim())

      if (!yes && !no) {
        displayLine(messages.pleaseAnswer)
        return manageHints()
      }

      if (noAnswer.includes(input)) return messages.okMan

      if (yesAnswer.includes(input)) {
        displayLine(messages.hintCost(hint.penalty))

        console.input(hint.question, answer => {
          if (noAnswer.includes(input)) return messages.okMan

          if (yesAnswer.includes(answer)) {
            settings.hinted.push(hint.id)

            switch (hint.id) {
              case 'grate':
                if (grate.currentState === 'grateClosed' && !keys) return
                break
              case 'bird':
                if (!bird && !isObjectInInventory('rod')) return
                break
              case 'snake':
                if (!getObjectFromCurrentLocation('snake') && getObjectFromCurrentLocation('bird')) return
                break
              case 'maze':
                if (!maze) {
                  settings.hinted.splice(settings.hinted.indexOf(hint.id, 1))
                  return
                }
                break
              case 'dark':
                if (emerald.isFound && pyramid.isFound) return
                break
              case 'witt':
                break
              case 'urn':
                // if (game.dflag == 0)
                //   break;
                settings.hinted.splice(settings.hinted.indexOf(hint.id, 1))
                return
              case 'forest':
                if (!forest) break
                return
              case 'ogre':
                i = atdwrf(game.loc);
                if (i < 0) {
                  game.hintlc[hint] = 0;
                  return;
                }
                if (HERE(OGRE) && i == 0)
                  break;
                return;
              case 'jade':
                if (game.tally == 1 && game.prop[JADE] < 0)
                  break;
                game.hintlc[hint] = 0;
                return;
              default:
                BUG(HINT_NUMBER_EXCEEDS_GOTO_LIST); // LCOV_EXCL_LINE
            }

            return hint.message
          }
        })
      }
    }
  }
}
