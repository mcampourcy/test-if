import { actions } from '../data'

export const getAction = actionId => actions.find(({ id }) => id === actionId)
