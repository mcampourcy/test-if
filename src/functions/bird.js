import { destroy } from './actions'
import { display } from './console'
import { messages } from '../variables'
import { getObjectFromInventory } from './inventory'
import { changeObjectState } from './objects'

export const getTheBird = (bird) => {
  if (bird.currentState === 'birdForestUncaged') {
    destroy(bird)
    return messages.birdCrap
  } else if (bird.currentState !== 'birdCaged') {
    if (!getObjectFromInventory('cage')) return messages.cannotCarry
    if (getObjectFromInventory('rod')) return messages.birdEvades
    return changeObjectState(bird.name, 'birdCaged')
  // } else {
    // if ((obj == BIRD ||
    //   obj == CAGE) &&
    //   (game.prop[BIRD] == BIRD_CAGED || STASHED(BIRD) == BIRD_CAGED)) {
    //   /* expression maps BIRD to CAGE and CAGE to BIRD */
    //   carry(BIRD + CAGE - obj, game.loc);
  }
}