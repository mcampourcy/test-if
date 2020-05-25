const { getObjectById } = require('./object')

const isTreasureFound = treasure => getObjectById(treasure).locations[0] !== 'locNowhere'

const isPreciousGem = id => ['emerald', 'ruby', 'amber', 'sapph'].includes(id)

module.exports = { isTreasureFound, isPreciousGem }
