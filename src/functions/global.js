#!/usr/bin/env node
import { actions, directions, messages, settings } from '../variables'
import { consoleInput, display, displayLine, format } from './console'
import { getErrorMessage } from './directions'
import { getLocationDescription, getLocationPossibleTravels, getLocationTravel } from './locations'
import { manageLocationsHistory } from './settings'
import { carry, inventory, listen } from './actions'

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
    const action = answer.split(/\s/)
    const instruction = action[0]
    let param = ''
    if (action.length > 1) param = action[1]

    if (isAction(instruction, 'listen')) {
      display(listen())
    } else if (isAction(instruction, 'look')) {
      displayLine(messages.noMoreDetail)
      display(getLocationDescription(true))
    } else if (isAction(instruction, 'inventory')) {
      inventory()
    } else if (isAction(instruction, 'carry')) {
      carry(param, instruction)
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

function isAction(instruction, name) {
  return actions[name].find(a => instruction.includes(a))
}
