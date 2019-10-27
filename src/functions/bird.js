import { destroy } from './actions'
import { messages } from '../variables'
import { isObjectInInventory } from './inventory'
import { changeObjectState, getObject, getObjectFromLocation } from './objects'

export const getTheBird = (bird) => {
  if (bird.currentState === 'birdForestUncaged') {
    destroy(bird)
    return messages.birdCrap
  } else if (bird.currentState !== 'birdCaged') {
    if (!isObjectInInventory('cage')) return messages.cannotCarry
    if (isObjectInInventory('rod')) return messages.birdEvades
    return changeObjectState(bird.name, 'birdCaged')
  }
}

export const cageTheBird = (cage, instruction) => {
  if (!getObjectFromLocation('bird')) return messages.doWhat(instruction)

  const bird = getObject('bird')

  if (isObjectInInventory('bird') && bird.currentState !== 'birdCaged') {
    if (isObjectInInventory('rod')) return messages.birdEvades
    return changeObjectState(bird.name, 'birdCaged')
  }

  return messages.cannotCarry
}