import { getCurrentLocation } from '../locations'

export function arbo() {
  const { id: locId } = getCurrentLocation()
  let text

  if (locId === 'locStart') {
    return `
      |-- move
          |-- road, west, upwar, up
            |-- locHill
          |-- enter, build, inside, east
            |-- locBuilding
          |-- downs, gully, strea, south, down
            |-- locValley
          |-- fores, north
            |-- locForest1
          |-- depre
            |-- locGrate
          |-- ne, nw, sw, se
            |-- error badDirection
          |-- forward, left, right
            |-- error unsureFacing
          |-- outside
            |-- error noInoutHere
          |-- crawl
            |-- error whichWay
      |-- versi
        |-- message
      |-- drink
        |-- message
      |-- fly
        |-- message
      |-- help
        |-- message
      |-- listen
        |-- message
      |-- look
        |-- message
      `
  }

  if (locId === 'locBuilding') {
    return `
      |-- move
          |-- road, west, upwar, up
            |-- locHill
          |-- enter, build, inside, east
            |-- locBuilding
          |-- downs, gully, strea, south, down
            |-- locValley
          |-- fores, north
            |-- locForest1
          |-- depre
            |-- locGrate
          |-- ne, nw, sw, se
            |-- error badDirection
          |-- forward, left, right
            |-- error unsureFacing
          |-- outside
            |-- error noInoutHere
          |-- crawl
            |-- error whichWay
      |-- versi
        |-- message
      |-- drink
        |-- message
      |-- fly
        |-- message
      |-- help
        |-- message
      |-- listen
        |-- message
      |-- look
        |-- message
      `
  }

  return 'Nothing here'
}
