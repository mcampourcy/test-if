const { actions } = require('../data')

const getAction = actionId => actions.find(({ id }) => id === actionId)

module.exports = { getAction }
