// READ.  MAGAZINES IN DWARVISH, MESSAGE WE'VE SEEN, AND . . . OYSTER?
import { format } from '../console.js'
import { actions, messages } from '../data/index.js'
import { getObjectsList } from '../objects.js'
import { getLocationLight } from '../light.js'
import { getObjectByWord } from '../object.js'

export function read(param) {
    if (!param) {
        const objects = getObjectsList()
        let text = ''
        objects.forEach(({ texts }) => {
            if (texts) text += `\n${texts}`
        })

        if (!text.length) return messages.huhMan

        return text
    }

    const object = getObjectByWord(param)

    if (!getLocationLight()) return messages.noSee(param)

    if (!object.texts) return actions.read.message

    return format(object.texts)

    // } else if (command.obj == OYSTER && !game.clshnt && game.closed) {
    //   game.clshnt = yes(arbitrary_messages[CLUE_QUERY], arbitrary_messages[WAYOUT_CLUE], arbitrary_messages[OK_MAN]);
}
