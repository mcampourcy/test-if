#!/usr/bin/env node
import { actions, directions, messages, settings } from '../variables'
import { carry, fill, inventory, light, listen, unlock } from './actions'
import { consoleInput, display, displayLine, format } from './console'
import { getErrorMessage } from './directions'
import { getLocationDescription, getRoutesFromLocation } from './locations'
import { manageTravel } from './travels'

const yesAnswer = ['y', 'yes']
const noAnswer = ['n', 'no']

export function getInstructions() {
  const { caveNearby, pleaseAnswer, welcomeYou } = messages
  const question = settings.repeat ? '' : format(welcomeYou)
  settings.repeat = false

  consoleInput(question, input => {
    const yes = yesAnswer.includes(input.trim())
    const no = noAnswer.includes(input.trim())

    if (!yes && !no) {
      settings.repeat = true
      displayLine(pleaseAnswer)
      getInstructions()
    }

    if (yes) display(caveNearby)
    if (no) settings.novice = false

    doSomething()
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
  const question = description ? format(getLocationDescription()) : ''

  consoleInput(question, input => {
    const routes = getRoutesFromLocation()
    const answer = input.trim()

    if (settings.repeat) settings.repeat = false

    if (!routes.includes(answer)) {
      manageActions(answer)
      settings.repeat = true
      doSomething(false)
    } else {
      const travels = !Array.isArray(routes) ? routes : answer
      manageTravel(travels)
      doSomething()
    }
  })
}

/**
 * Manage actions !== manage travels
 * This function manage actions verbs, not directions indications
**/
function manageActions(answer) {
  const answerIsDirection = directions.find(({ verbs }) => verbs.includes(answer))

  if (answerIsDirection) {
    getErrorMessage(answer)
  } else {
    const [verb, param] = answer.split(/\s/)
    const action = getAction(verb)

    switch (action.name) {
      case 'carry':
        carry(param, action.name, verb)
        break
      case 'fill':
        fill(param, action.name)
        break
      case 'inventory':
        inventory()
        break
      case 'light':
        light(param, action.name)
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
      default:
        displayLine(messages.cantApply)
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
