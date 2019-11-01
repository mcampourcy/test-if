import { actions } from '../data'

export const getAction = actionid => actions.find(({ id }) => id === actionid)
