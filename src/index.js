#!/usr/bin/env node
const { displayTitle } = require('./console')
const { getInstructions } = require('./global')

function run() {
  displayTitle()
  getInstructions()
}

module.exports = { run }
