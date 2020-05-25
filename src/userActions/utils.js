const { actions } = require('../data')

function getAction(actionId) {
  return actions.find(({ id }) => id === actionId)
}

module.exports = { getAction }
