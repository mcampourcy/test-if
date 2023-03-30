import { getObjectById } from './object.js'

export function isTreasureFound(treasure) {
    return getObjectById(treasure).locations[0] !== 'locNowhere'
}

export function isPreciousGem(id) {
    return ['emerald', 'ruby', 'amber', 'sapph'].includes(id)
}
