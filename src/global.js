#!/usr/bin/env node
import { actions, directions, messages, settings } from './data'
import { carry, discard, fill, inventory, light, listen, unlock, wave } from './userActions'
import { consoleInput, display, displayLine, format } from './console'
import { getErrorMessage } from './directions'
import { getCurrentLocation, getLocationDescription, getRoutesFromLocation } from './locations'
import { getObject } from './object'
import { manageTravel } from './travels'

const yesAnswer = ['y', 'yes']
const noAnswer = ['n', 'no']

export function getInstructions() {
  const { caveNearby, pleaseAnswer, welcomeYou } = messages
  const welcomeQuestion = settings.repeat ? '' : format(welcomeYou)
  settings.repeat = false

  consoleInput(welcomeQuestion, input => {
    const yes = yesAnswer.includes(input.trim())
    const no = noAnswer.includes(input.trim())

    if (!yes && !no) {
      settings.repeat = true
      displayLine(pleaseAnswer)
      return getInstructions()
    }

    if (yes) display(caveNearby)
    if (no) settings.novice = false

    return doSomething()
  })
}

/**
 * Display current location description
 * Get the current location's possible actions
 * Depending the answer :
 * if the answer does not includes any possible actions : display error message depending on the answer
 * if the answer includes possible actions :
 *  if the action is a goTo : manage history to replace the current location by the next one
 *  if the actions is a speak : display the action's description
 * Anyway : repeat all
 */
export function doSomething(description = true) {
  const question = description ? getLocationDescription() : ''

  consoleInput(question, input => {
    const routes = getRoutesFromLocation()
    const answer = input.trim()

    if (settings.repeat) settings.repeat = false

    if (!routes.includes(answer)) {
      manageActions(answer)
      settings.repeat = true
      return doSomething(false)
    } else {
      const travels = !Array.isArray(routes) ? routes : answer
      manageTravel(travels)
      return doSomething()
    }
  })
}

/**
 * Manage actions !== manage travels
 * This function manage actions verbs, not directions indications
**/
function manageActions(answer) {
  const answerIsDirection = directions.find(({ verbs }) => verbs.includes(answer))
  const { conditions } = getCurrentLocation()
  const lamp = getObject('lamp')
  const locationTooDark = !conditions.lit && lamp.currentState === 'lampDark'

  if (answerIsDirection) {
    getErrorMessage(answer)
  } else {
    // Difference between 'action.name' and 'verb' :
    // 'verb' is the instruction given by the user, action.name is the generic name of 'verb'

    const [verb, param] = answer.split(/\s/)
    const action = getAction(verb)

    if (action) {
      if (action.noaction) {
        displayLine(action.message)
        return
      }

      switch (action.name) {
        case 'carry':
          const carryMessage = locationTooDark ? messages.cantApply : carry(param, action.name, verb)
          displayLine(carryMessage)
          break
        case 'discard':
          const discardMessage = discard(param, verb)
          displayLine(discardMessage)
          break
        case 'fill':
          const fillMessage = locationTooDark ? messages.cantApply : discard(param, action.name, verb)
          displayLine(fillMessage)
          break
        case 'inventory':
          inventory()
          break
        case 'light':
          const lightMessage = light(action, param)
          displayLine(lightMessage)
          break
        case 'listen':
          display(listen())
          break
        case 'look':
          displayLine(messages.noMoreDetail)
          display(getLocationDescription(true))
          break
        case 'unlock':
          unlock(param, action.name)
          break
        case 'wave':
          const waveMessage = wave(param, verb)
          displayLine(waveMessage)
          break
        default:
          displayLine(messages.cantApply)
          break
      }
    } else {
      return displayLine(messages.cantApply)
    }
  }
}

const getAction = instruction => actions.find(({ verbs }) => verbs && verbs.includes(instruction))

// void pspeak(vocab_t msg, enum speaktype mode, bool blank, int skip, ...)
// /* Find the skip+1st message from msg and print it.  Modes are:
//  * feel = for inventory, what you can touch
//  * look = the full description for the state the object is in
//  * listen = the sound for the state the object is in
//  * study = text on the object. */
// {
//   va_list ap;
//   va_start(ap, skip);
//   switch (mode) {
//     case touch:
//       vspeak(objects[msg].inventory, blank, ap);
//       break;
//     case look:
//       vspeak(objects[msg].descriptions[skip], blank, ap);
//       break;
//     case hear:
//       vspeak(objects[msg].sounds[skip], blank, ap);
//       break;
//     case study:
//       vspeak(objects[msg].texts[skip], blank, ap);
//       break;
//     case change:
//       vspeak(objects[msg].changes[skip], blank, ap);
//       break;
//   }
//   va_end(ap);
// }
//
// void rspeak(vocab_t i, ...)
// /* Print the i-th "random" message (section 6 of database). */
// {
//   va_list ap;
//   va_start(ap, i);
//   vspeak(arbitrary_messages[i], true, ap);
//   va_end(ap);
// }
