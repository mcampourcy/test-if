import { destroy } from './actions'
import { display } from './console'
import { messages } from '../variables'
import {addObjectToInventory, getObjectFromInventory} from './inventory'
import {changeObjectState, getObjectFromCurrentLocation} from './objects'

export const getTheBird = (object) => {
  const bird = object.name === 'bird' ? object : getObjectFromCurrentLocation('bird')

  if (object.name === 'bird') {
    if (bird.currentState === 'birdForestUncaged') {
      destroy(bird)
      return messages.birdCrap
    } else if (bird.currentState !== 'birdCaged') {
      if (!getObjectFromInventory('cage')) return messages.cannotCarry
      if (getObjectFromInventory('rod')) return messages.birdEvades

      addObjectToInventory(bird.name)
      return changeObjectState(bird.name, 'birdCaged').change
    }
  }
}
