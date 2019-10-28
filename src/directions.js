import { messages } from './data'
import { display } from './console'

export function getErrorMessage(answer) {
  const { badDirection, cantApply, noInoutHere, nothingHappens, unsureFacing, whichWay } = messages

  switch (answer) {
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
      display(badDirection)
      break
    case 'forward':
    case 'left':
    case 'right':
      display(unsureFacing)
      break
    case 'outside':
    case 'inside':
      display(noInoutHere)
      break
    case 'xyzzy':
    case 'plugh':
      display(nothingHappens)
      break
    case 'crawl':
      display(whichWay)
      break
    default:
      display(cantApply)
      break
  }
}
