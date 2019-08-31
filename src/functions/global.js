#!/usr/bin/env node
import { actions, directions, messages, settings } from '../variables'
import { consoleInput, display, displayLine, format } from './console'
import { getErrorMessage } from './directions'
import { getLocationDescription, getLocationPossibleTravels, getLocationTravel } from './locations'
import { manageLocationsHistory } from './settings'
import { carry, fill, inventory, light, listen, unlock } from './actions'

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
export function doSomething (description = true) {
  const question = description ? format(getLocationDescription()) : ''
  consoleInput(question, input => {
    const answer = input.trim()
    const locationPossibleTravels = getLocationPossibleTravels()

    if (settings.repeat) settings.repeat = false

    if (!locationPossibleTravels.includes(answer)) {
      manageActions(answer)
      settings.repeat = true
      doSomething(false)
    } else {
      manageTravels(answer)
      doSomething()
    }
  })
}

function manageActions(answer) {
  const answerIsDirection = directions.find(({ verbs }) => verbs.includes(answer))

  if (answerIsDirection) {
    getErrorMessage(answer)
  } else {
    const instruction = answer.split(/\s/)
    const action = isAction(instruction[0])
    let param
    if (action.name.length > 1) param = instruction[1]

    switch (action.name) {
      case 'carry':
        carry(param, action.name, instruction[0])
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

function manageTravels(answer) {
  const travel = getLocationTravel(answer)
  if (travel.name === 'goTo') {
    manageLocationsHistory(travel.description)
  } else if (travel.name === 'speak') {
    settings.repeat = true
    display(messages[travel.description])
  }
}

function isAction(instruction) {
  return actions.find(({ verbs }) => verbs !== null && verbs.includes(instruction))
}

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
