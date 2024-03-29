import { messages, settings } from './data/index.js'
import { manageActions } from './actions.js'
import {
    consoleInput, displayText, displayLine, format,
} from './console.js'
import { getLocationDescription, getRoutesFromLocation } from './locations.js'
import { manageTravel } from './travels.js'

const yesAnswer = ['y', 'yes']
const noAnswer = ['n', 'no']

export function getInstructions() {
    const { caveNearby, pleaseAnswer, welcomeYou } = messages
    const welcomeQuestion = settings.repeat ? '' : format(welcomeYou)
    settings.repeat = false

    consoleInput(welcomeQuestion, (input) => {
        const yes = yesAnswer.includes(input.trim())
        const no = noAnswer.includes(input.trim())

        if (!yes && !no) {
            settings.repeat = true
            displayLine(pleaseAnswer)
            return getInstructions()
        }

        if (yes) displayText(caveNearby)
        if (no) settings.novice = false

        return doSomething()
    })
}

/**
 * Display current location description
 * Get the current location's possible actions
 * Depending the answer :
 * if the answer does not includes any possible actions:
 * display error message depending on the answer
 * if the answer includes possible actions :
 *  if the action is a goTo : manage history to replace the current location by the next one
 *  if the actions is a speak : display the action's description
 * Anyway : repeat all
 */
function doSomething(description = true) {
    const locationDescription = getLocationDescription()
    const question = description ? format(locationDescription) : ''

    consoleInput(question, (input) => {
        const routes = getRoutesFromLocation()
        const answer = input.trim()

        if (settings.repeat) settings.repeat = false
        if (!routes.includes(answer)) {
            displayLine(manageActions(answer))
            settings.repeat = true
            return doSomething(false)
        }

        const travels = Array.isArray(routes) ? answer : routes
        manageTravel(travels)
        return doSomething()
    })
}

// true N% of the time (N integer from 0 to 100)
export function pct(number = 0) {
    return Math.random() < number / 100
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
