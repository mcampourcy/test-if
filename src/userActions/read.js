const { format } = require('../console')
const { actions, messages } = require('../data')

// READ.  MAGAZINES IN DWARVISH, MESSAGE WE'VE SEEN, AND . . . OYSTER?
const { getObjectsList } = require('../objects')
const { isLocationLight } = require('../light')
const { getObjectByWord } = require('../object')

const read = (param) => {
  if (!param) {
    const objects = getObjectsList()
    let text = ''
    objects.map(({ texts }) => {
      if (texts) text += `\n${texts}`
    })

    if (!text.length) return messages.huhMan

    return text
  }

  const object = getObjectByWord(param)

  if (!isLocationLight()) return messages.noSee(param)

  if (!object.texts) return actions['read'].message

  return format(object.texts)

  // } else if (command.obj == OYSTER && !game.clshnt && game.closed) {
  //   game.clshnt = yes(arbitrary_messages[CLUE_QUERY], arbitrary_messages[WAYOUT_CLUE], arbitrary_messages[OK_MAN]);
}

module.exports = { read }
