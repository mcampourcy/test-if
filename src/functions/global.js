#!/usr/bin/env node
import { actions, messages, settings } from '../variables'
import { readAndAnswer } from './console'
import { getDirectionKeyFromValue, getErrorMessage } from './directions'
import { getLocationDescription, getLocationPossibleTravels, getLocationTravel } from './locations'
import { manageLocationsHistory } from './settings'
import { listen } from './actions'

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
export function doSomething () {
  readAndAnswer(`\n\n${getLocationDescription()}`, answer => {
    const locationPossibleTravels = getLocationPossibleTravels()

    if (settings.repeat) settings.repeat = false

    if (!locationPossibleTravels.includes(answer)) {
      console.log(`\n\n${manageActions(answer)}`)
      settings.repeat = true
    } else {
      const travel = getLocationTravel(answer)
      if (travel.name === 'goTo') {
        manageLocationsHistory(travel.description)
      } else if (travel.name === 'speak') {
        settings.repeat = true
        console.log(`\n\n${messages[travel.description]}`)
      }
    }
    doSomething()
  })
}

function manageActions(answer) {
  const answerIsDirection = getDirectionKeyFromValue(answer)

  if (!answerIsDirection) {
    if (actions.listen.includes(answer)) return listen()
    if (actions.look.includes(answer)) {
      return `\n\n${messages.noMoreDetail}\n\n${getLocationDescription()}`
    }
  }

  getErrorMessage(answer)
}
