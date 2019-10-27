export const objects = [
  {
    name: 'amber',
    words: ['amber', 'gemst'],
    inventory: 'Amber gemstone',
    locations: ['locNowhere'],
    treasure: true,
    state: 'amberInUrn',
    states: [
      {
        name: 'amberInUrn',
        description: 'There is a rare amber gemstone here!',
      },
      {
        name: 'amberInRock',
        description: 'There is an amber gemstone resting in a small cavity in the rock!',
      },
    ],
  },
  {
    name: 'axe',
    words: ['axe'],
    inventory: 'Dwarf\'s axe',
    locations: ['locNowhere'],
    state: 'axeHere',
    states: [
      {
        name: 'axeHere',
        description: 'There is a little axe here.',
        change: null,
      },
      {
        name: 'axeLost',
        description: 'There is a little axe lying beside the bear.',
        change: 'The axe misses and lands near the bear where you can\'t get at it.',
      },
    ],
  },
  {
    name: 'battery',
    words: ['batte'],
    inventory: 'Batteries',
    locations: ['locNowhere'],
    state: 'freshBatteries',
    states: [
      {
        name: 'freshBatteries',
        description: 'There are fresh batteries here.',
      },
      {
        name: 'deadBatteries',
        description: 'Some worn-out batteries have been discarded nearby.',
      },
    ],
  },
  {
    name: 'bear',
    words: ['bear'],
    inventory: null,
    locations: ['locBarrenroom'],
    immovable: true,
    state: 'untamedBear',
    states: [
      {
        name: 'untamedBear',
        description: 'There is a ferocious cave bear eyeing you from the far end of the room!',
        change: null,
      },
      {
        name: 'sittingBear',
        description: 'There is a gentle cave bear sitting placidly in one corner.',
        change: 'The bear eagerly wolfs down your food, after which he seems to calm down considerably and even becomes rather friendly.',
      },
      {
        name: 'contentedBear',
        description: null,
        change: null,
      },
      {
        name: 'bearDead',
        description: null,
        change: 'The bear lumbers toward the troll, who lets out a startled shriek and scurries away. The bear soon gives up the pursuit and wanders back.',
      },
    ],
  },
  {
    name: 'bird',
    words: ['bird'],
    inventory: 'Little bird in cage',
    locations: ['locBird'],
    state: 'birdUncaged',
    states: [
      {
        name: 'birdUncaged',
        description: 'A cheerful little bird is sitting here singing.',
        // if dragonblood : To your surprise, you can understand the bird\'s chirping; it is singing about the joys of its forest home.
        sound: 'The bird\'s singing is quite melodious.',
      },
      {
        name: 'birdCaged',
        description: 'There is a little bird in the cage.',
        // if dragonblood : The bird does not seem inclined to sing while in the cage.
        sound: 'The bird does not seem inclined to sing while in the cage.',
      },
      {
        name: 'birdForestUncaged',
        description: 'A cheerful little bird is sitting here singing.',
        // if dragonblood : The bird is singing to you in gratitude for your having returned it to its home. In return, it informs you of a magic word which it thinks you may find useful somewhere near the Hall of Mists. The magic word changes frequently, but for now the bird believes it is "%s". You thank the bird for this information, and it flies off into the forest.
        sound: 'It almost seems as though the bird is trying to tell you something.',
      },
    ],
  },
  {
    name: 'blood',
    words: ['blood'],
    inventory: '*blood',
    locations: ['locNowhere'],
    immovable: true,
    descriptions: null, // described with dragon
  },
  {
    name: 'bottle',
    words: ['bottl', 'jar', 'bottle', 'water'],
    inventory: 'Small bottle',
    locations: ['locBuilding'],
    state: 'waterBottle',
    states: [
      {
        name: 'waterBottle',
        description: 'There is a bottle of water here.',
        change: 'Your bottle is now full of water.',
      },
      {
        name: 'emptyBottle',
        description: 'There is an empty bottle here.',
        change: 'The bottle of water is now empty.',
      },
      {
        name: 'oilBottle',
        description: 'There is a bottle of oil here.',
        change: 'Your bottle is now full of oil.',
      },
    ],
  },
  {
    name: 'cage',
    words: ['cage'],
    inventory: 'Wicker cage',
    locations: ['locCobble'],
    descriptions: ['There is a small wicker cage discarded nearby.'],
  },
  {
    name: 'cavity',
    words: ['cavit'],
    inventory: '*cavity',
    locations: ['locNowhere'],
    immovable: true,
    state: 'cavityFull',
    states: [
      {
        name: 'cavityFull',
        description: null, // something in it
      },
      {
        name: 'cavityEmpty',
        description: 'There is a small urn-shaped cavity in the rock.',
      },
    ],
  },
  {
    name: 'chain',
    words: ['chain'],
    inventory: 'Golden chain',
    locations: ['locBarrenroom'],
    immovable: true,
    treasure: true,
    state: 'chainHeap',
    states: [
      {
        name: 'chainHeap',
        description: 'There is a golden chain lying in a heap on the floor!',
      },
      {
        name: 'chainingBear',
        description: 'The bear is locked to the wall with a golden chain!',
      },
      {
        name: 'chainFixed',
        description: 'There is a golden chain locked to the wall!',
      },
    ],
  },
  {
    name: 'chasm',
    words: ['chasm'],
    inventory: '*chasm',
    locations: ['locSwchasm', 'locNechasm'],
    immovable: true,
    state: 'trollBridge',
    states: [
      {
        name: 'trollBridge',
        description: 'A rickety wooden bridge extends across the chasm, vanishing into the mist. A notice posted on the bridge reads, "Stop! Pay troll!"',
        change: null,
      },
      {
        name: 'bridgeWrecked',
        description: 'The wreckage of a bridge (and a dead bear) can be seen at the bottom of the chasm.',
        change: 'Just as you reach the other side, the bridge buckles beneath the weight of the bear, which was still following you around. You scrabble desperately for support, but as the bridge collapses you stumble back and fall into the chasm.',
      },
    ],
  },
  {
    name: 'chest',
    words: ['chest', 'box', 'treas'],
    inventory: 'Treasure chest',
    locations: ['locNowhere'],
    treasure: true,
    descriptions: ['The pirate\'s treasure chest is here!'],
  },
  {
    name: 'clam',
    words: ['clam'],
    inventory: 'Giant clam  >GRUNT!<',
    locations: ['locShellroom'],
    descriptions: ['There is an enormous clam here with its shell tightly closed.'],
    sounds: ['The clam is as tight-mouthed as a, er, clam.'],
  },
  {
    name: 'coins',
    words: ['coins'],
    inventory: 'Rare coins',
    locations: ['locWestside'],
    treasure: true,
    descriptions: ['There are many coins here!'],
  },
  {
    name: 'door',
    words: ['door'],
    inventory: '*rusty door',
    locations: ['locImmense'],
    immovable: true,
    state: 'doorRusted',
    states: [
      {
        name: 'doorRusted',
        description: 'The way north is barred by a massive, rusty, iron door.',
        change: 'The hinges are quite thoroughly rusted now and won\'t budge.',
      },
      {
        name: 'doorUnrusted',
        description: 'The way north leads through a massive, rusty, iron door.',
        change: 'The oil has freed up the hinges so that the door will now move, although it requires some effort.',
      },
    ],
  },
  {
    name: 'dragon',
    words: ['drago'],
    inventory: '*dragon',
    locations: ['locSecret4', 'locSecret6'],
    immovable: true,
    state: 'dragonBars',
    states: [
      {
        name: 'dragonBars',
        description: 'A huge green fierce dragon bars the way!',
        change: null,
        sound: 'The dragon\'s ominous hissing does not bode well for you.',
      },
      {
        name: 'dragonDead',
        description: 'The blood-specked body of a huge green dead dragon lies to one side.',
        change: 'Congratulations! You have just vanquished a dragon with your bare hands! (Unbelievable, isn\'t it?)',
        sound: 'The dragon is, not surprisingly, silent.',
      },
      {
        name: 'dragonBloodless',
        description: 'The body of a huge green dead dragon is lying off to one side.',
        change: 'Your head buzzes strangely for a moment.',
        sound: 'The dragon is, not surprisingly, silent.',
      },
    ],
  },
  {
    name: 'dwarf',
    words: ['dwarf', 'dwarv'],
    inventory: null,
    locations: ['locNowhere'],
    immovable: true,
    descriptions: null,
  },
  {
    name: 'eggs',
    words: ['eggs', 'egg', 'nest'],
    inventory: 'Golden eggs',
    locations: ['locGiantroom'],
    treasure: true,
    state: 'eggsHere',
    states: [
      {
        name: 'eggsHere',
        description: 'There is a large nest here, full of golden eggs!',
      },
      {
        name: 'eggsVanished',
        description: 'The nest of golden eggs has vanished!',
      },
      {
        name: 'eggsDone',
        description: 'Done!',
      },
    ],
  },
  {
    name: 'emerald',
    words: ['emera'],
    inventory: 'Egg-sized emerald',
    locations: ['locPlover'],
    treasure: true,
    descriptions: ['There is an emerald here the size of a plover\'s egg!', 'There is an emerald resting in a small cavity in the rock!'],
  },
  {
    name: 'fissure',
    words: ['fissu'],
    inventory: '*fissure',
    locations: ['locEastbank', 'locWestbank'],
    immovable: true,
    state: 'unbridged',
    states: [
      {
        name: 'unbridged',
        description: null,
        change: 'The crystal bridge has vanished!',
      },
      {
        name: 'bridged',
        description: 'A crystal bridge spans the fissure.',
        change: 'A crystal bridge now spans the fissure.',
      },
    ],
  },
  {
    name: 'food',
    words: ['food', 'ratio'],
    inventory: 'Tasty food',
    locations: ['locBuilding'],
    descriptions: ['There is food here.'],
  },
  {
    name: 'grate',
    words: ['grate'],
    inventory: '*grate',
    locations: ['locGrate', 'locBelowgrate'],
    immovable: true,
    state: 'grateClosed',
    states: [
      {
        name: 'grateClosed',
        description: 'The grate is locked.',
        change: 'The grate is now locked.',
      },
      {
        name: 'grateOpen',
        description: 'The grate is open.',
        change: 'The grate is now unlocked.',
      },
    ],
  },
  {
    name: 'jade',
    words: ['jade', 'neckl'],
    inventory: 'Jade necklace',
    locations: ['locNowhere'],
    treasure: true,
    descriptions: ['A precious jade necklace has been dropped here!'],
  },
  {
    name: 'keys',
    words: ['keys', 'key'],
    inventory: 'Set of keys',
    locations: ['locBuilding'],
    descriptions: ['There are some keys on the ground here.'],
  },
  {
    name: 'knife',
    words: ['knife', 'knive'],
    inventory: null,
    locations: ['locNowhere'],
    descriptions: null,
  },
  {
    name: 'lamp',
    words: ['lamp', 'lante'],
    inventory: 'Brass lantern',
    locations: ['locBuilding'],
    state: 'lampDark',
    states: [
      {
        name: 'lampDark',
        description: 'There is a shiny brass lamp nearby.',
        change: 'Your lamp is now off.',
      },
      {
        name: 'lampBright',
        description: 'There is a lamp shining nearby.',
        change: 'Your lamp is now on.',
      },
    ],
  },
  {
    name: 'magazine',
    words: ['magaz', 'issue', 'spelu', '"spel'],
    inventory: '"Spelunker Today"',
    locations: ['locAnteroom'],
    descriptions: ['There are a few recent issues of "Spelunker Today" magazine here.'],
    texts: 'I\'m afraid the magazine is written in dwarvish. But pencilled on one cover you see, "Please leave the magazines at the construction site."',
  },
  {
    name: 'messag',
    words: ['messa'],
    inventory: '*message in second maze',
    locations: ['locNowhere'],
    immovable: true,
    descriptions: ['There is a message scrawled in the dust in a flowery script, reading: "This is not the maze where the pirate leaves his treasure chest."'],
    texts: '"This is not the maze where the pirate leaves his treasure chest."',
  },
  {
    name: 'mirror',
    words: ['mirro'],
    inventory: '*mirror',
    locations: ['locMirrorcanyon'],
    immovable: true,
    state: 'mirrorUnbroken',
    states: [
      {
        name: 'mirrorUnbroken',
        description: null,
        change: null,
      },
      {
        name: 'mirrorBroken',
        description: null,
        change: 'You strike the mirror a resounding blow, whereupon it shatters into a myriad tiny fragments.',
      },
    ],
  },
  {
    name: 'nugget',
    words: ['gold', 'nugge'],
    inventory: 'Large gold nugget',
    locations: ['locNugget'],
    treasure: true,
    descriptions: ['There is a large sparkling nugget of gold here!'],
  },
  {
    name: 'obj13',
    words: ['table'],
    inventory: '*stone tablet',
    locations: ['locDarkroom'],
    immovable: true,
    descriptions: ['A massive stone tablet embedded in the wall reads: "Congratulations on bringing light into the dark-room!"'],
    texts: '"Congratulations on bringing light into the dark-room!"',
  },
  {
    name: 'obj26',
    words: ['stala'],
    inventory: '*stalactite',
    locations: ['locTopstalactite'],
    immovable: true,
    descriptions: null,
  },
  {
    name: 'obj27',
    words: ['shado', 'figur', 'windo'],
    inventory: '*shadowy figure and/or window',
    locations: ['locWindow1', 'locWindow2'],
    immovable: true,
    descriptions: ['The shadowy figure seems to be trying to attract your attention.'],
  },
  {
    name: 'obj29',
    words: ['drawi'],
    inventory: '*cave drawings',
    locations: ['locOriental'],
    immovable: true,
    descriptions: null,
  },
  {
    name: 'obj30',
    words: ['pirat', 'genie', 'djinn'],
    inventory: '*pirate/genie',
    locations: ['locNowhere'],
    immovable: true,
    descriptions: null, // never present
  },
  {
    name: 'obj40',
    words: ['carpe', 'moss'],
    inventory: '*carpet and/or moss and/or curtains',
    locations: ['locSoftroom'],
    immovable: true,
    descriptions: null,
  },
  {
    name: 'obj46',
    words: ['appen', 'lepor'],
    inventory: 'Leporine appendage',
    locations: ['locForest22'],
    descriptions: ['Your keen eye spots a severed leporine appendage lying on the ground.'],
  },
  {
    name: 'obj47',
    words: ['mud'],
    inventory: '*mud',
    locations: ['locDebris'],
    immovable: true,
    descriptions: null,
    texts: '"MAGIC WORD XYZZY"',
  },
  {
    name: 'obj48',
    words: ['note'],
    inventory: '*note',
    locations: ['locNugget'],
    immovable: true,
    descriptions: null,
    texts: '"You won\'t get it up the steps"',
  },
  {
    name: 'obj51',
    words: ['diamo'],
    inventory: 'Several diamonds',
    locations: ['locWestbank'],
    treasure: true,
    descriptions: ['There are diamonds here!'],
  },
  {
    name: 'obj52',
    words: ['silve', 'bars'],
    inventory: 'Bars of silver',
    locations: ['locFloorhole'],
    treasure: true,
    descriptions: ['There are bars of silver here!'],
  },
  {
    name: 'obj53',
    words: ['jewel'],
    inventory: 'Precious jewelry',
    locations: ['locSouthside'],
    treasure: true,
    descriptions: ['There is precious jewelry here!'],
  },
  {
    name: 'obj63',
    words: ['spice'],
    inventory: 'Rare spices',
    locations: ['locBoulders2'],
    treasure: true,
    descriptions: ['There are rare spices here!'],
  },
  {
    name: 'obj69',
    words: ['ebony', 'statu'],
    inventory: 'Ebony statuette',
    locations: ['locReachdead'],
    treasure: true,
    descriptions: ['There is a richly-carved ebony statuette here!'],
  },
  {
    name: 'ogre',
    words: ['ogre'],
    inventory: '*ogre',
    locations: ['locLarge'],
    immovable: true,
    descriptions: ['A formidable ogre bars the northern exit.'],
    sounds: ['The ogre is apparently the strong, silent type.'],
  },
  {
    name: 'oil',
    words: ['oil'],
    inventory: 'Oil in the bottle',
    locations: ['locNowhere'],
    descriptions: null,
  },
  {
    name: 'oyster',
    words: ['oyste'],
    inventory: 'Giant oyster  >GROAN!<',
    locations: ['locNowhere'],
    descriptions: ['There is an enormous oyster here with its shell tightly closed.', 'Interesting.  There seems to be something written on the underside of\nthe oyster.'],
    sounds: ['Even though it\'s an oyster, the critter\'s as tight-mouthed as a clam.', 'It says the same thing it did before.  Hm, maybe it\'s a pun?'],
  },
  {
    name: 'pearl',
    words: ['pearl'],
    inventory: 'Glistening pearl',
    locations: ['locNowhere'],
    treasure: true,
    descriptions: ['Off to one side lies a glistening pearl!'],
  },
  {
    name: 'pillow',
    words: ['pillo', 'velve'],
    inventory: 'Velvet pillow',
    locations: ['locSoftroom'],
    descriptions: ['A small velvet pillow lies on the floor.'],
  },
  {
    name: 'plant',
    words: ['plant', 'beans'],
    inventory: '*plant',
    locations: ['locWestpit'],
    immovable: true,
    state: 'plantThirsty',
    states: [
      {
        name: 'plantThirsty',
        description: 'There is a tiny little plant in the pit, murmuring "water, water, ..."',
        change: 'You\'ve over-watered the plant!  It\'s shriveling up!  And now . . .',
        sound: 'The plant continues to ask plaintively for water.',
      },
      {
        name: 'plantBellowing',
        description: 'There is a 12-foot-tall beanstalk stretching up out of the pit, bellowing "WATER!! WATER!!"',
        change: 'The plant spurts into furious growth for a few seconds.',
        sound: 'The plant continues to demand water.',
      },
      {
        name: 'plantGrown',
        description: 'There is a gigantic beanstalk stretching all the way up to the hole.',
        change: 'The plant grows explosively, almost filling the bottom of the pit.',
        sound: 'The plant now maintains a contented silence.',
      },
    ],
  },
  {
    name: 'plant2',
    words: ['plant'],
    inventory: '*phony plant', // seen in Twopit Room only when tall enough
    locations: ['locWestend', 'locEastend'],
    immovable: true,
    descriptions: [
      'The top of a 12-foot-tall beanstalk is poking out of the west pit.',
      'There is a huge beanstalk growing out of the west pit up to the hole.',
    ],
  },
  {
    name: 'pyramid',
    words: ['plati', 'pyram'],
    inventory: 'Platinum pyramid',
    locations: ['locDarkroom'],
    treasure: true,
    descriptions: ['There is a platinum pyramid here, 8 inches on a side!'],
  },
  {
    name: 'reser',
    words: ['reser'],
    inventory: '*reservoir',
    locations: ['locReservoir', 'locResnorth'],
    immovable: true,
    state: 'watersUnparted',
    states: [
      {
        name: 'watersUnparted',
        description: null,
        changes: 'The waters crash together again.',
      },
      {
        name: 'watersParted',
        description: 'The waters have parted to form a narrow path across the reservoir.',
        changes: 'The waters have parted to form a narrow path across the reservoir.',
      },
    ],
  },
  {
    name: 'rod',
    words: ['rod'],
    inventory: 'Black rod',
    locations: ['locDebris'],
    descriptions: ['A three foot black rod with a rusty star on an end lies nearby.'],
  },
  {
    name: 'rod2',
    words: ['rod'],
    inventory: 'Black rod',
    locations: ['locNowhere'],
    descriptions:
      'A three foot black rod with a rusty mark on an end lies nearby.',
  },
  {
    name: 'ruby',
    words: ['ruby'],
    inventory: 'Giant ruby',
    locations: ['locStoreroom'],
    treasure: true,
    descriptions: ['There is an enormous ruby here!', 'There is a ruby resting in a small cavity in the rock!'],
  },
  {
    name: 'rug',
    words: ['rug', 'persi'],
    inventory: 'Persian rug',
    locations: ['locSecret4', 'locSecret6'],
    immovable: true,
    treasure: true,
    state: 'rugFloor',
    states: [
      {
        name: 'rugFloor',
        description: 'There is a Persian rug spread out on the floor!',
      },
      {
        name: 'rugDragon',
        description: 'The dragon is sprawled out on a Persian rug!!',
      },
      {
        name: 'rugHover',
        description: 'There is a Persian rug here, hovering in mid-air!',
      },
    ],
  },
  {
    name: 'sapph',
    words: ['sapph'],
    inventory: 'Star sapphire',
    locations: ['locLedge'],
    treasure: true,
    descriptions: ['A brilliant blue star sapphire is here!', 'There is a star sapphire resting in a small cavity in the rock!'],
  },
  {
    name: 'sign',
    words: ['sign'],
    inventory: '*sign',
    locations: ['locAnteroom'],
    immovable: true,
    state: 'ingameSign',
    states: [
      {
        name: 'ingameSign',
        description: null,
        text: 'Cave under construction beyond this point.\n Proceed at own risk.\n [Witt Construction Company]',
      },
      {
        name: 'endgameSign',
        description: null,
        text: '"Treasure Vault. Keys in main office."',
      },
    ],
  },
  {
    name: 'snake',
    words: ['snake'],
    inventory: '*snake',
    locations: ['locKinghall'],
    immovable: true,
    state: 'snakeBlocks',
    states: [
      {
        name: 'snakeBlocks',
        description: 'A huge green fierce snake bars the way!',
        sound: 'The snake is hissing venomously.',
      },
      {
        name: 'snakeChased',
        description: null, // snake chased
        sound: null,
      },
    ],
  },
  {
    name: 'steps',
    words: ['steps'],
    inventory: '*steps',
    locations: ['locPittop', 'locMisthall'],
    immovable: true,
    state: 'stepsDown',
    states: [
      {
        name: 'stepsDown',
        description: 'Rough stone steps lead down the pit.',
      },
      {
        name: 'stepsUp',
        description: 'Rough stone steps lead up the dome.',
      },
    ],
  },
  {
    name: 'trident',
    words: ['tride'],
    inventory: 'Jeweled trident',
    locations: ['locWaterfall'],
    treasure: true,
    descriptions: ['There is a jewel-encrusted trident here!'],
  },
  {
    name: 'troll',
    words: ['troll'],
    inventory: '*troll',
    locations: ['locSwchasm', 'locNechasm'],
    immovable: true,
    state: 'trollUnpaid',
    states: [
      {
        name: 'trollUnpaid',
        description: 'A burly troll stands by the bridge and insists you throw him a treasure before you may cross.',
        change: null,
        sound: 'The troll sounds quite adamant in his demand for a treasure.',
      },
      {
        name: 'trollPaidonce',
        description: 'The troll steps out from beneath the bridge and blocks your way.',
        change: null,
        sound: 'The troll sounds quite adamant in his demand for a treasure.',
      },
      {
        name: 'trollGone',
        description: null, // chased away
        change: 'The bear lumbers toward the troll, who lets out a startled shriek and scurries away. The bear soon gives up the pursuit and wanders back.',
        sound: null,
      },
    ],
  },
  {
    name: 'troll2',
    words: ['troll'],
    inventory: '*phony troll',
    locations: ['locNowhere'],
    immovable: true,
    descriptions: ['The troll is nowhere to be seen.'],
  },
  {
    name: 'urn',
    words: ['urn'],
    inventory: '*urn',
    locations: ['locCliff'],
    immovable: true,
    state: 'urnEmpty',
    states: [
      {
        name: 'urnEmpty',
        description: 'A small urn is embedded in the rock.',
        changes: 'The urn is empty and will not light.',
      },
      {
        name: 'urnDark',
        description: 'A small urn full of oil is embedded in the rock.',
        changes: 'The urn is now dark.',
      },
      {
        name: 'urnLit',
        description: 'A small oil flame extrudes from an urn embedded in the rock.',
        changes: 'The urn is now lit.',
      },
    ],
  },
  {
    name: 'vase',
    words: ['vase', 'ming', 'shard', 'potte'],
    inventory: 'Ming vase',
    locations: ['locOriental'],
    treasure: true,
    state: 'vaseWhole',
    states: [
      {
        name: 'vaseWhole',
        description: 'There is a delicate, precious, ming vase here!',
        changes: 'The vase is now resting, delicately, on a velvet pillow.',
      },
      {
        name: 'vaseDropped',
        description: 'The floor is littered with worthless shards of pottery.',
        changes: 'The ming vase drops with a delicate crash.',
      },
      {
        name: 'vaseBroken',
        description: 'The floor is littered with worthless shards of pottery.',
        changes: 'You have taken the vase and hurled it delicately to the ground.',
      },
    ],
  },
  {
    name: 'vend',
    words: ['machi', 'vendi'],
    inventory: '*vending machine',
    locations: ['locDeadend13'],
    immovable: true,
    state: 'vendBlocks',
    states: [
      {
        name: 'vendBlocks',
        description: 'There is a massive and somewhat battered vending machine here. The instructions on it read: "Drop coins here to receive fresh batteries."',
        change: 'The vending machine swings back to block the passage.',
        text: '"Drop coins here to receive fresh batteries."',
      },
      {
        name: 'vendUnblocks',
        description: 'There is a massive vending machine here, swung back to reveal a southward passage.',
        change: 'As you strike the vending machine, it pivots backward along with a section of wall, revealing a dark passage leading south.',
        text: '"Drop coins here to receive fresh batteries."',
      },
    ],
  },
  {
    name: 'volcano',
    words: ['volca', 'geyse'],
    inventory: '*volcano and/or geyser',
    locations: ['locBreathtaking'],
    immovable: true,
    descriptions: null,
  },
  {
    name: 'water',
    words: ['water', 'h2o'],
    inventory: 'Water in the bottle',
    locations: ['locNowhere'],
    descriptions: null,
  },
]
