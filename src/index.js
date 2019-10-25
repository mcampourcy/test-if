#!/usr/bin/env node
import { displayTitle } from './functions/console'
import { getInstructions } from './functions/global'

export function run() {
  displayTitle()
  getInstructions()
}
