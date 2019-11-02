import { getObjectById } from './object'

export const isTreasureFound = treasure => getObjectById(treasure).locations[0] !== 'locNowhere'

export const isPreciousGem = id => ['emerald', 'ruby', 'amber', 'sapph'].includes(id)
