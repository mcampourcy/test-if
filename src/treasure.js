import { getObject } from './object'

export const isTreasureFound = (treasure) => getObject(treasure).locations[0] !== 'locNowhere'

export const isPreciousGem = name => ['emerald', 'ruby', 'amber', 'sapph'].includes(name)
