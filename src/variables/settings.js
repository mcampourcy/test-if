/* The current loc is saved in "previousLocation" in case the player wants to retreat.
The current previousLocation is saved in previousLocationBis, in case the player dies.
(if he/she does, previousLocation will be what killed him/her, so we need previousLocationBis, which is the last safe place) */

export const settings = {
    currentLocation: 'locStart',
    previousLocation: 'locNowhere',
    previousLocationBis: 'locNowhere',
    novice: true,
    repeat: false,
}
