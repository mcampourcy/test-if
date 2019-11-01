#!/usr/bin/env node
import { actions, directions, messages } from './data'
import { display, displayLine } from './console'
import { getErrorMessage } from './directions'
import { getCurrentLocation, getLocationDescription } from './locations'
import { getObject } from './object'
import {
  carry,
  discard,
  extinguish,
  fill,
  inventory,
  light,
  listen,
  lock,
  wave,
} from './userActions'

const getAction = instruction => actions.find(({ verbs }) => verbs && verbs.includes(instruction))

/**
 * Manage user actions
 *
 * Manage actions !== manage travels
 * This function manage actions verbs, not directions indications
 *
 * Correct input form : <verb> <object>
 * <object> <verb>: Irregular form of input, but should be allowed
 *
 * Difference between 'action.name' and 'verb' :
 * 'verb' is the instruction given by the user, action.name is the generic name of 'verb'
 **/
export function manageActions(answer) {
  const answerIsDirection = directions.find(({ verbs }) => verbs.includes(answer))
  const { conditions } = getCurrentLocation()
  const lamp = getObject('lamp')
  const locationTooDark = !conditions.lit && lamp.currentState === 'lampDark'

  if (answerIsDirection) {
    getErrorMessage(answer)
  } else {
    let [verb, param] = answer.split(/\s/)

    // <object> <verb> form
    if (getAction(param) && getObject(verb)) {
      const oldVerb = verb
      verb = param
      param = oldVerb
    }

    const action = getAction(verb)

    if (action) {
      if (action.noaction) {
        displayLine(action.message)
        return
      }

      switch (action.name) {
        case 'carry':
          const carryMessage = locationTooDark ? messages.cantApply : carry(param, action.name, verb)
          displayLine(carryMessage)
          break
        case 'discard':
          const discardMessage = discard(param, action.name, verb)
          displayLine(discardMessage)
          break
        case 'extinguish':
          const extinguishMessage = extinguish(param)
          displayLine(extinguishMessage)
          break
        case 'fill':
          const fillMessage = locationTooDark ? messages.cantApply : fill(param, action.name, verb)
          displayLine(fillMessage)
          break
        case 'inventory':
          const inventoryMessage = inventory()
          display(inventoryMessage)
          break
        case 'light':
          const lightMessage = light(action, param)
          displayLine(lightMessage)
          break
        case 'listen':
          display(listen())
          break
        case 'look':
          displayLine(messages.noMoreDetail)
          display(getLocationDescription(true))
          break
        case 'lock':
        case 'unlock':
          lock(param, action.name)
          break
        case 'wave':
          const waveMessage = wave(param, verb)
          displayLine(waveMessage)
          break
        default:
          displayLine(messages.cantApply)
          break
      }
    } else {
      return displayLine(messages.cantApply)
    }
  }
}
