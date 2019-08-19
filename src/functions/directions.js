import { directions, messages } from '../variables'

export function getDirectionKeyFromValue(value) {
  let directionKey
  for (let [key, verbs] of Object.entries(directions)) {
    if (verbs && verbs.includes(value)) directionKey = key
  }
  return directionKey
}

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
