import { destroy } from './actions'
import { display } from './console'
import { messages } from '../variables'
import { isInInventory } from './inventory'
import { stateChange } from './objects'

export const getTheBird = (bird) => {
  if (bird.currentState !== 'birdCaged') {
    if (bird.currentState === 'birdForestUncaged') {
      destroy(bird)
      return messages.birdCrap
    }
    if (!isInInventory('cage')) {
      return messages.cannotCarry
    }
    if (isInInventory('rod')) {
      return messages.birdEvades
    }
    stateChange(bird.name, 'birdCaged')
  // } else {
    // if ((obj == BIRD ||
    //   obj == CAGE) &&
    //   (game.prop[BIRD] == BIRD_CAGED || STASHED(BIRD) == BIRD_CAGED)) {
    //   /* expression maps BIRD to CAGE and CAGE to BIRD */
    //   carry(BIRD + CAGE - obj, game.loc);
  }
}