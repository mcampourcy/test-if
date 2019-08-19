#!/usr/bin/env node
import { actions, messages, settings } from '../variables'
import { display, format, readAndAnswer } from './console'
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
  readAndAnswer(format(getLocationDescription()), answer => {
    const locationPossibleTravels = getLocationPossibleTravels()

    if (settings.repeat) settings.repeat = false

    if (!locationPossibleTravels.includes(answer)) {
      manageActions(answer)
      settings.repeat = true
    } else {
      manageTravels(answer)
    }
    doSomething()
  })
}

function manageActions(answer) {
  const answerIsDirection = getDirectionKeyFromValue(answer)

  if (answerIsDirection) {
    getErrorMessage(answer)
  } else {
    switch (answer) {
      case actions.listen.includes(answer):
        display(listen())
        break
      case actions.look.includes(answer):
        display(messages.noMoreDetail)
        display(getLocationDescription())
        break
      case actions.carry.includes(answer):
        display(listen())
        break
      default:
        display(messages.cantApply)
        break
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
