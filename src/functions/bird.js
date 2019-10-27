import { destroy } from './actions'
import { messages } from '../variables'
import { addObjectToInventory, isObjectInInventory } from './inventory'
import { changeObjectState, getObjectFromLocation } from './objects'

export const getTheBird = (bird) => {
  if (bird.currentState === 'birdForestUncaged') {
    destroy(bird)
    return messages.birdCrap
  } else if (bird.currentState !== 'birdCaged') {
    if (!isObjectInInventory('cage')) return messages.cannotCarry
    if (isObjectInInventory('rod')) return messages.birdEvades
    changeObjectState(bird, 'birdCaged')
    addObjectToInventory('bird')
    return messages.okMan
  }
}

export const cageTheBird = (cage, instruction) => {
  const bird = getObjectFromLocation('bird')
  if (!bird) return messages.doWhat(instruction)

  if (bird && bird.currentState !== 'birdCaged') {
    if (isObjectInInventory('rod')) return messages.birdEvades
    changeObjectState(bird, 'birdCaged')
    addObjectToInventory('bird')
    addObjectToInventory('cage')
    return messages.okMan
  }

  return messages.cannotCarry
}