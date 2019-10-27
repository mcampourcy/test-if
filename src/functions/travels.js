import { getTravel } from './locations'
import { manageLocationsHistory } from './settings'
import { messages, settings } from '../variables'
import { display } from './console'
import { getObject, getObjectFromInventory } from './objects'

export function manageTravel(answer) {
  const travel = getTravel(answer)
  if (travel.name === 'goTo') {
    if (travel.condition) {
      manageTravelConditions(travel)
    } else {
      manageLocationsHistory(travel.description)
    }
  } else if (travel.name === 'speak') {
    settings.repeat = true
    display(messages[travel.description])
  }
}

function manageTravelConditions(travels) {
  const { condition } = travels
  if (condition.type === 'object') {
    const { currentState } = getObject(condition.object)
    if (currentState !== condition.state) {
      travelConditionFailed(travels.conditionFailed)
    } else {
      manageLocationsHistory(travels.description)
    }
  } else if (condition.type === 'carry') {
    if (!getObjectFromInventory(condition.object)) {
      travelConditionFailed(travels.conditionFailed)
    }
  }
}

function travelConditionFailed(conditionFailed) {
  if (conditionFailed.name === 'goTo') {
    manageLocationsHistory(conditionFailed.description)
  }
  if (conditionFailed.name === 'speak') {
    settings.repeat = true
    display(messages[conditionFailed.description])
  }
}
