#!/usr/bin/env node
import chalk from 'chalk'
import figlet from 'figlet'
import { locations, messages, motions, settings } from './variables'
import readline from 'readline'

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

const getLocationDescription = () => {
  const { currentLocation, repeat } = settings
  const { description: { long, short }, conditions } = locations[currentLocation]

  if (conditions.lit) {
    return (short && repeat) ? short : long
  } else {
    return messages.pitchDark
  }
}

const getLocationPossibleDirections = () => {
  const { currentLocation } = settings
  const { travel } = locations[currentLocation]

  // récupère tous les voyages possibles à partir d'un endroit
  const locationTravels = travel.map(({ verbs }) => verbs).flat()
  // récupère le dictionnaire de mots à partir de l'id des voyages
  return  locationTravels.map(name => motions[name]).flat()
}

const answerMotionId = (answer) => {
  let motion
  for (let [key, value] of Object.entries(motions)) {
    if (value && value.includes(answer)) motion = key
  }
  return motion
}

const checkAnswer = (answer) => {
  const { badDirection, cantApply, noInoutHere, nothingHappens, unsureFacing, whichWay } = messages
  const locationDirections = getLocationPossibleDirections()

  if (!locationDirections.includes(answer)) {
    const motion = answerMotionId(answer)

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

  return null
}

const gettingStarted = () => readAndAnswer(`\n\n${getLocationDescription()}`, answer => {
  const errorMessage = checkAnswer(answer)
  if (errorMessage !== null) console.log(errorMessage)
})

const init = () => {
  const { caveNearby, pleaseAnswer, welcomeYou } = messages
  const question = settings.repeat ? '' : welcomeYou
  readAndAnswer(question, (answer) => {
    if (yes_answer.includes(answer)) {
      console.log(`\n${caveNearby}`)
      settings.currentLocation = 'locStart'
      gettingStarted()
    } else if (no_answer.includes(answer)) {
      settings.novice = false
      settings.currentLocation = 'locStart'
      gettingStarted()
    } else {
      console.log(`\n${pleaseAnswer}`)
      settings.repeat = true
      init()
    }
  })
}

export const run = () => {
    // introduction()
    init()
}
