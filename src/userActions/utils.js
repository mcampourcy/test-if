import { actions } from '../data/index.js'

export function getAction(actionId) {
    return actions.find(({ id }) => id === actionId)
}
