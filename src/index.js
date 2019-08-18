#!/usr/bin/env node
import chalk from 'chalk'
import figlet from 'figlet'
import { locations, messages, motions, objects, settings } from './variables'
import readline from 'readline'
import { actions, listen } from './variables/actions'

const yes_answer = ['y', 'yes']
const no_answer = ['n', 'no']

const introduction = () => {
  console.log(
    chalk.green(
      figlet.textSync("Colossal Cave \n Adventure", {
        font: "Doom",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  )
}

const readAndAnswer = (question, callback) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question(`${question} \n\n`, (answer) => {
    rl.close()
    callback(answer)
  })
}

const getObjectsDescription = () => {
  const { currentLocation } = settings
  const { conditions } = locations[currentLocation]
  if (conditions.lit) {
    // TODO : don't display objects that are already in inventory
    const objectsDescription = []
    for (let [key, params] of Object.entries(objects)) {
      const { locations } = params
      if (locations.includes(currentLocation)) {
        if (params.states) {
          objectsDescription.push(Object.values(params.states)[0].description)
        } else {
          objectsDescription.push(params.descriptions[locations.indexOf(currentLocation)])
        }
      }
    }
    return objectsDescription.join('\n\n')
  }
}

const getLocationDescription = () => {
  const { currentLocation, previousLocationBis, repeat } = settings
  const { description: { long, short }, conditions } = locations[currentLocation]
  // The player came here two moves ago
  // e.g. : locStart => locBuilding => locStart
  const turnAround = currentLocation === previousLocationBis

  if (conditions.lit) {
    const objectsDescription = getObjectsDescription()
    if (short && (repeat || turnAround)) {
      return short
    } else {
      return objectsDescription ? `${long}\n\n${objectsDescription}` : long
    }
  } else {
    return messages.pitchDark
  }
}

const getLocationPossibleActions = () => {
  const { currentLocation } = settings
  const { travel } = locations[currentLocation]

  // récupère tous les voyages possibles à partir d'un endroit
  const locationTravels = travel.map(({ verbs }) => verbs).flat()
  // récupère le dictionnaire de mots à partir de l'id des voyages
  return locationTravels.map(name => motions[name]).flat()
}

const getLocationAction = direction => {
  const { currentLocation } = settings
  const { travel } = locations[currentLocation]
  for (let [key, value] of Object.entries(motions)) {
    if (value && value.includes(direction)) {
      return travel.find(({ verbs }) => verbs.includes(key)).action
    }
  }
}

const answerMotionId = answer => {
  let motion
  for (let [key, value] of Object.entries(motions)) {
    if (value && value.includes(answer)) motion = key
  }
  return motion
}

const checkAnswer = answer => {
  const { badDirection, cantApply, noInoutHere, nothingHappens, unsureFacing, whichWay } = messages
  const motion = answerMotionId(answer)
  if (!motion) {
      if (actions.listen.includes(answer)) return listen()
      if (actions.look.includes(answer)) {
        return `\n\n${messages.noMoreDetail}\n\n${getLocationDescription()}`
      }
  }
  switch (motion) {
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

const manageLocationsHistory = newLocation => {
  const { currentLocation, previousLocation } = settings
  settings.previousLocationBis = previousLocation
  settings.previousLocation = currentLocation
  settings.currentLocation = newLocation
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
const goSomewhere = () => {
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

const init = () => {
  const { caveNearby, pleaseAnswer, welcomeYou } = messages
  const question = settings.repeat ? '' : welcomeYou
  readAndAnswer(question, (answer) => {
    if (yes_answer.includes(answer)) {
      console.log(`\n${caveNearby}`)
      goSomewhere()
    } else if (no_answer.includes(answer)) {
      settings.novice = false
      goSomewhere()
    } else {
      console.log(`\n${pleaseAnswer}`)
      settings.repeat = true
      init()
    }
  })
}

export const run = () => {
    introduction()
    init()
}
