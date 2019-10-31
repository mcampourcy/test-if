import { messages } from './messages'

export const actions = [
  {
    name: 'act_unknown',
    message: messages.huhMan,
    verbs: null,
  },
  {
    name: 'actVersion',
    message: 'There is a puff of orange smoke; within it, fiery runes spell out: "Open Adventure %V http://www.catb.org/esr/open-adventure/"',
    verbs: ['versi'],
    noaction: true,
  },
  {
    name: 'attack',
    message: messages.ridiculousAttempt,
    verbs: ['attac', 'kill', 'fight', 'hit', 'strik', 'slay'],
  },
  {
    name: 'blast',
    message: messages.requiresDynamite,
    verbs: ['blast', 'deton', 'ignit', 'blowu'],
  },
  {
    name: 'break',
    message: messages.beyondPower,
    verbs: ['break', 'shatt', 'smash'],
  },
  {
    name: 'brief',
    message: 'On what?',
    verbs: ['brief'],
  },
  {
    name: 'carry',
    message: messages.alreadyCarrying,
    verbs: ['g', 'carry', 'take', 'keep', 'catch', 'steal', 'captu', 'get', 'tote', 'snarf'],
  },
  {
    name: 'dig',
    message: 'Digging without a shovel is quite impractical. Even with a shovel progress is unlikely.',
    verbs: ['dig', 'excav'],
    noaction: true,
  },
  {
    name: 'drink',
    message: 'You have taken a drink from the stream. The water tastes strongly of minerals, but is not unpleasant. It is extremely cold.',
    verbs: ['drink'],
  },
  {
    // name: 'drop',
    name: 'discard',
    message: messages.arentCarrying,
    verbs: ['drop', 'relea', 'free', 'disca', 'dump', 'discard'],
  },
  {
    name: 'eat',
    message: messages.ridiculousAttempt,
    verbs: ['eat', 'devou'],
  },
  {
    name: 'extinguish',
    message: messages.dontUnderstand,
    verbs: ['extin', 'extinguish', 'off'],
  },
  {
    name: 'fbomb',
    message: 'Watch it!',
    verbs: ['fuck'],
    noaction: true,
  },
  {
    name: 'fee',
    message: messages.notKnowhow,
    verbs: ['fee'],
  },
  {
    name: 'feed',
    message: 'There is nothing here to eat.',
    verbs: ['feed'],
  },
  {
    name: 'fie',
    message: messages.notKnowhow,
    verbs: ['fie'],
  },
  {
    name: 'fill',
    message: 'You can\'t fill that.',
    verbs: ['fill'],
  },
  {
    name: 'find',
    message: messages.nearby,
    verbs: ['find', 'where'],
  },
  {
    name: 'fly',
    message: messages.amGame,
    verbs: ['fly'],
  },
  {
    name: 'foe',
    message: messages.notKnowhow,
    verbs: ['foe'],
  },
  {
    name: 'foo',
    message: messages.notKnowhow,
    verbs: ['foo'],
  },
  {
    name: 'fum',
    message: messages.notKnowhow,
    verbs: ['fum'],
  },
  {
    name: 'go',
    message: messages.whereQuery,
    verbs: ['walk', 'run', 'trave', 'go', 'proce', 'conti', 'explo', 'follo', 'turn'],
  },
  {
    name: 'help',
    message: 'I know of places, actions, and things. Most of my vocabulary describes places and is used to move you there. To move, try words like forest, building, downstream, enter, east, west, north, south, up, or down. I know about a few special objects, like a black rod hidden in the cave. These objects can be manipulated using some of the action verbs that I know. Usually you will need to give both the object and action verbs (in either order), but sometimes I can infer the object from the verb alone. Some objects also imply verbs; in particular, "inventory" implies "take inventory", which causes me to give you a list of what you\'re carrying. Some objects have unexpected effects; the effects are not always desirable! Usually people having trouble moving just need to try a few more verbs. Usually people trying unsuccessfully to manipulate an object are attempting something beyond their (or my!) capabilities and should try a completely different tack. One point often confusing to beginners is that, when there are several ways to go in a certain direction (e.g., if there are several holes in a wall), choosing that direction in effect chooses one of the ways at random; often, though, by specifying the place you want to reach you can guarantee choosing the right path. Also, to speed the game you can sometimes move long distances with a single word. For example, "building" usually gets you to the building from anywhere above ground except when lost in the forest. Also, note that cave passages and forest paths turn a lot, so leaving one place heading north doesn\'t guarantee entering the next from the south. However (another important point), except when you\'ve used a "long distance" word such as "building", there is always a way to go back where you just came from unless I warn you to the contrary, even though the direction that takes you back might not be the reverse of what got you here. Good luck, and have fun!',
    verbs: ['help', '?'],
    noaction: true,
  },
  {
    name: 'info',
    message: 'For a summary of the most recent changes to the game, say "news". If you want to end your adventure early, say "quit". To suspend your adventure such that you can continue later, say "suspend" (or "pause" or "save"). To see how well you\'re doing, say "score". To get full credit for a treasure, you must have left it safely in the building, though you get partial credit just for locating it. You lose points for getting killed, or for quitting, though the former costs you more. There are also points based on how much (if any) of the cave you\'ve managed to explore; in particular, there is a large bonus just for getting in (to distinguish the beginners from the rest of the pack), and there are other ways to determine whether you\'ve been through some of the more harrowing sections. If you think you\'ve found all the treasures, just keep exploring for a while. If nothing interesting happens, you haven\'t found them all yet. If something interesting *DOES* happen (incidentally, there *ARE* ways to hasten things along), it means you\'re getting a bonus and have an opportunity to garner many more points in the Master\'s section. I may occasionally offer hints if you seem to be having trouble. If I do, I\'ll warn you in advance how much it will affect your score to accept the hints. Finally, to save time, you may specify "brief", which tells me never to repeat the full description of a place unless you explicitly ask me to.',
    verbs: ['info', 'infor'],
    noaction: true,
  },
  {
    name: 'invalidmagic',
    message: 'Good try, but that is an old worn-out magic word.',
    verbs: ['sesam', 'opens', 'abra', 'abrac', 'shaza', 'hocus', 'pocus'],
    noaction: true,
  },
  {
    name: 'inventory',
    message: messages.nearby,
    verbs: ['i', 'inven', 'inventory'],
    oldstyle: false,
  },
  {
    name: 'light',
    message: messages.dontUnderstand,
    verbs: ['light', 'on'],
  },
  {
    name: 'listen',
    message: messages.dontUnderstand,
    verbs: ['liste', 'LISTE', 'listen', 'LISTEN'],
  },
  {
    name: 'lock',
    message: messages.notLockable,
    verbs: ['lock', 'close'],
  },
  {
    name: 'look',
    verbs: ['l', 'x', 'look', 'exami', 'touch', 'descr'],
  },
  {
    name: 'lost',
    message: 'I\'m as confused as you are.',
    verbs: ['lost'],
    noaction: true,
  },
  {
    name: 'mist',
    message: 'Mist is a white vapor, usually water, seen from time to time in caverns. It can be found anywhere but is frequently a sign of a deep pit leading down to water.',
    verbs: ['mist'],
    noaction: true,
  },
  {
    name: 'news',
    message: 'Open Adventure is an author-approved open-source release of Version 2.5 with, as yet, no gameplay changes. Version 2.5 was essentially the same as Version II; the cave and the hazards therein are unchanged, and top score is still 430 points. There are a few more hints, especially for some of the more obscure puzzles. There are a few minor bugfixes and cosmetic changes. You can now save a game and resume it at once (formerly you had to wait a while first), but it now costs you a few points each time you save the game. Saved games are now stored in much smaller files than before.',
    verbs: ['news'],
    noaction: true,
  },
  {
    name: 'no',
    message: messages.okMan,
    verbs: ['no'],
    noaction: true,
  },
  {
    name: 'nothing',
    verbs: ['z', 'nothi'],
    oldstyle: false,
  },
  {
    name: 'part',
    message: messages.nothingHappens,
    verbs: ['z\'zzz'],
  },
  {
    name: 'pour',
    message: messages.arentCarrying,
    verbs: ['pour'],
  },
  {
    name: 'quit',
    message: messages.huhMan,
    verbs: ['quit'],
  },
  {
    name: 'read',
    message: messages.dontUnderstand,
    verbs: ['read', 'perus'],
  },
  {
    name: 'resume',
    message: messages.huhMan,
    verbs: ['resum', 'resta'],
  },
  {
    name: 'rub',
    message: 'Rubbing the electric lamp is not particularly rewarding. Anyway, nothing exciting happens.',
    verbs: ['rub'],
  },
  {
    name: 'save',
    message: messages.huhMan,
    verbs: ['suspe', 'pause', 'save'],
  },
  {
    name: 'say',
    verbs: ['say', 'chant', 'sing', 'utter', 'mumbl'],
  },
  {
    name: 'score',
    message: messages.huhMan,
    verbs: ['score'],
  },
  {
    name: 'seed',
    message: 'Seed set to %d',
    verbs: ['seed'],
  },
  {
    name: 'stop',
    message: 'I don\'t know the word "stop". Use "quit" if you want to give up.',
    verbs: ['stop'],
    noaction: true,
  },
  {
    name: 'swim',
    message: messages.notKnowhow,
    verbs: ['swim'],
    noaction: true,
  },
  {
    name: 'tame',
    message: messages.amGame,
    verbs: ['calm', 'placa', 'tame'],
  },
  {
    name: 'thankyou',
    message: 'You\'re quite welcome.',
    verbs: ['thank'],
    noaction: true,
  },
  {
    name: 'throw',
    message: messages.arentCarrying,
    verbs: ['throw', 'toss'],
  },
  {
    name: 'tree',
    message: 'The trees of the forest are large hardwood oak and maple, with an occasional grove of pine or spruce. There is quite a bit of under-wth, largely birch and ash saplings plus nondescript bushes ofious sorts. This time of year visibility is quite restricted by the leaves, but travels is quite easy if you detour around theuce and berry bushes.',
    verbs: ['tree', 'trees'],
    noaction: true,
  },
  {
    name: 'unlock',
    message: messages.notLockable,
    verbs: ['unloc', 'open'],
  },
  {
    name: 'wake',
    message: messages.ridiculousAttempt,
    verbs: ['wake', 'distu'],
  },
  {
    name: 'waste',
    message: 'Game limit is now %d',
    verbs: ['waste'],
  },
  {
    name: 'wave',
    message: messages.nothingHappens,
    verbs: ['wave', 'shake', 'swing'],
  },
  {
    name: 'wizard',
    message: 'Wizards are not to be disturbed by such as you.',
    verbs: ['wizar'],
    noaction: true,
  },
  {
    name: 'yes',
    message: 'Guess again.',
    verbs: ['yes'],
    noaction: true,
  },
]
