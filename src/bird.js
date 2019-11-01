import { messages } from './data'
import { addObjectToInventory, isObjectInInventory } from './inventory'
import { destroyObject, getObjectFromCurrentLocation, updateObjectState } from './object'

export const getTheBird = (bird) => {
  if (bird.currentState === 'birdForestUncaged') {
    destroyObject(bird)
    return messages.birdCrap
  } else if (bird.currentState !== 'birdCaged') {
    if (!isObjectInInventory('cage')) return messages.cannotCarry
    if (isObjectInInventory('rod')) return messages.birdEvades
    updateObjectState(bird.id, 'birdCaged')
    addObjectToInventory('bird')
    return messages.okMan
  }

  return messages.okMan
}

export const cageTheBird = (cage, instruction) => {
  const bird = getObjectFromCurrentLocation('bird')
  if (!bird) return messages.doWhat(instruction)

  if (bird.currentState !== 'birdCaged' && isObjectInInventory('rod')) return messages.birdEvades

  if (bird.currentState === 'birdCaged') addObjectToInventory('bird')
  addObjectToInventory('cage')
  return messages.okMan
}
