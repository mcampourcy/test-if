#!/usr/bin/env node
import { actions, directions, messages, settings } from '../variables'
import { display, format, readAndAnswer } from './console'
import { getErrorMessage } from './directions'
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
  const answerIsDirection = directions.find(({ verbs }) => verbs.includes(answer))

  if (answerIsDirection) {
    getErrorMessage(answer)
  } else {
    const action = answer.split(/\s/)
    const instruction = action[0]
    let param = ''
    if (action.length > 1) param = action[1]

    if (actions.listen.includes(instruction)) {
      display(listen())
    } else if(actions.look.includes(instruction)) {
      display(messages.noMoreDetail)
      display(getLocationDescription())
    } else if(actions.carry.includes(instruction)) {
      // carryObject(param)
    } else {
      display(messages.cantApply)
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
