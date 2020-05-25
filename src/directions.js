const { messages } = require('./data')

function getErrorMessage(answer) {
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
      return messages.badDirection
    case 'forward':
    case 'left':
    case 'right':
      return messages.unsureFacing
    case 'outside':
    case 'inside':
      return messages.noInoutHere
    case 'xyzzy':
    case 'plugh':
      return messages.nothingHappens
    case 'crawl':
      return messages.whichWay
    default:
      return messages.cantApply
  }
}

module.exports = { getErrorMessage }
