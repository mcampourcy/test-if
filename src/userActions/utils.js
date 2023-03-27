import { actions } from '../data'

export function getAction(actionId) {
    return actions.find(({ id }) => id === actionId)
}
