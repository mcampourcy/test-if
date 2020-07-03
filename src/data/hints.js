'use strict'

const hints = {
  grate: {
    id: 'CAVE',
    hint: 'The grate is very solid and has a hardened steel lock. You cannot enter without a key, and there are no keys nearby. I would recommend looking elsewhere for the keys.',
    number: 1,
    penalty: 2,
    question: 'Are you trying to get into the cave?',
    turns: 4,
  },
  bird: {
    id: 'BIRD',
    hint: 'Something about you seems to be frightening the bird. Perhaps you might figure out what it is.',
    number: 2,
    penalty: 2,
    question: 'Are you trying to catch the bird?',
    turns: 5,
  },
  snake: {
    id: 'SNAKE',
    hint: 'You can\'t kill the snake, or drive it away, or avoid it, or anything like that. There is a way to get by, but you don\'t have the necessary resources right now.',
    number: 3,
    penalty: 2,
    question: 'Are you trying to somehow deal with the snake?',
    turns: 8,
  },
  maze: {
    id: 'MAZE',
    hint: 'You can make the passages look less alike by dropping things.',
    number: 4,
    penalty: 4,
    question: 'Do you need help getting out of the maze?',
    turns: 75,
  },
  dark: {
    id: 'DARK',
    hint: 'There is a way to explore that region without having to worry about falling into a pit. None of the objects available is immediately useful in discovering the secret.',
    number: 5,
    penalty: 5,
    question: 'Are you trying to explore beyond the plover room?',
    turns: 25,
  },
  witt: {
    id: 'WITT',
    hint: 'Don\'t go west.',
    number: 6,
    penalty: 3,
    question: 'Do you need help getting out of here?',
    turns: 20,
  },
  urn: {
    id: 'CLIFF',
    hint: 'This section is quite advanced. Find the cave first.',
    number: 7,
    penalty: 2,
    question: 'Are you wondering what to do here?',
    turns: 8,
  },
  forest: {
    id: 'WOODS',
    hint: 'Go east ten times. If that doesn\'t get you out, then go south, then west twice, then south.',
    number: 8,
    penalty: 2,
    question: 'Would you like to be shown out of the forest?',
    turns: 25,
  },
  ogre: {
    id: 'OGRE',
    hint: 'There is nothing the presence of which will prevent you from defeating him; thus it can\'t hurt to fetch everything you possibly can.',
    number: 9,
    penalty: 4,
    question: 'Do you need help dealing with the ogre?',
    turns: 10,
  },
  jade: {
    id: 'JADE',
    hint: 'Once you\'ve found all the other treasures, it is no longer possible to locate the one you\'re now missing.',
    number: 10,
    penalty: 4,
    question: 'You\'re missing only one other treasure. Do you need help finding it?',
    turns: 1,
  },
}

module.exports = { hints }
