'use strict'

const { carry } = require('./carry')
const { discard } = require('./discard')
const { extinguish } = require('./extinguish')
const { fill } = require('./fill')
const { inventory } = require('./inventory')
const { light } = require('./light')
const { listen } = require('./listen')
const { lock } = require('./lock')
const { read } = require('./read')
const { wave } = require('./wave')

module.exports = {
  carry,
  discard,
  extinguish,
  fill,
  inventory,
  light,
  listen,
  lock,
  read,
  wave,
}
