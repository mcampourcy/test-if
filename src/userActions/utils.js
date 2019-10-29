import { actions } from '../data'

export const getAction = actionName => actions.find(({ name }) => name === actionName)
