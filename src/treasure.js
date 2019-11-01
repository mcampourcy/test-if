import { getObject } from './object'

export const isTreasureFound = treasure => getObject(treasure).locations[0] !== 'locNowhere'

export const isPreciousGem = id => ['emerald', 'ruby', 'amber', 'sapph'].includes(id)
