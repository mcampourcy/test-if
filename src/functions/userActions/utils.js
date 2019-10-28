import { actions } from '../../variables'

export const getAction = actionName => actions.find(({ name }) => name === actionName)
