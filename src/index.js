#!/usr/bin/env node
import { actions, messages, motions, settings } from './variables'
import { listen } from './functions/actions'
import { displayIntroduction, readAndAnswer } from './functions/console'
import { getLocationAction, getLocationDescription, getLocationPossibleActions } from './functions/locations'
import { manageLocationsHistory } from './functions/settings'

const yes_answer = ['y', 'yes']
const no_answer = ['n', 'no']

export function run() {
  displayIntroduction()
  init()
}

function init() {
  const { caveNearby, pleaseAnswer, welcomeYou } = messages
  const question = settings.repeat ? null : welcomeYou
  settings.repeat = false
  readAndAnswer(question, (answer) => {
    if (yes_answer.includes(answer)) {
      console.log(`\n${caveNearby}`)
      goSomewhere()
    } else if (no_answer.includes(answer)) {
      settings.novice = false
      goSomewhere()
    } else {
      console.log(`\n${pleaseAnswer}\n`)
      settings.repeat = true
      init()
    }
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
function goSomewhere () {
  readAndAnswer(`\n\n${getLocationDescription()}`, answer => {
    const locationDirections = getLocationPossibleActions()
    if (settings.repeat) settings.repeat = false
    if (!locationDirections.includes(answer)) {
      console.log(`\n\n${checkAnswer(answer)}`)
      settings.repeat = true
    } else {
      const locationAction = getLocationAction(answer)
      if (locationAction.name === 'goTo') {
        manageLocationsHistory(locationAction.description)
      } else if (locationAction.name === 'speak') {
        settings.repeat = true
        console.log(`\n\n${messages[locationAction.description]}`)
      }
    }
    goSomewhere()
  })
}

const answerMotionId = answer => {
  let motion
  for (let [key, value] of Object.entries(motions)) {
    if (value && value.includes(answer)) motion = key
  }
  return motion
}

function checkAnswer(answer) {
  const { badDirection, cantApply, noInoutHere, nothingHappens, unsureFacing, whichWay } = messages
  const answerIsDirection = answerMotionId(answer)
  if (!answerIsDirection) {
      if (actions.listen.includes(answer)) return listen()
      if (actions.look.includes(answer)) {
        return `\n\n${messages.noMoreDetail}\n\n${getLocationDescription()}`
      }
  }
  switch (answerIsDirection) {
    case 'east':
    case 'west':
    case 'south':
    case 'north':
    case 'ne':
    case 'nw':
    case 'sw':
    case 'se':
    case 'up':
    case 'down':
      return badDirection
    case 'forward':
    case 'left':
    case 'right':
      return unsureFacing
    case 'outside':
    case 'inside':
      return noInoutHere
    case 'xyzzy':
    case 'plugh':
      return nothingHappens
    case 'crawl':
      return whichWay
    default:
      return cantApply
  }
}
