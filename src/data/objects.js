export const objects = [
    {
        id: 'axe',
        currentState: 'axeHere',
        inventoryName: "Dwarf's axe",
        locations: ['locNowhere'],
        states: [
            {
                id: 'axeHere',
                change: null,
                description: 'There is a little axe here.',
            },
            {
                id: 'axeLost',
                change: "The axe misses and lands near the bear where you can't get at it.",
                description: 'There is a little axe lying beside the bear.',
            },
        ],
        words: ['axe'],
    },
    {
        id: 'battery',
        currentState: 'freshBatteries',
        inventoryName: 'Batteries',
        locations: ['locNowhere'],
        states: [
            {
                id: 'freshBatteries',
                description: 'There are fresh batteries here.',
            },
            {
                id: 'deadBatteries',
                description:
                    'Some worn-out batteries have been discarded nearby.',
            },
        ],
        words: ['batte', 'battery'],
    },
    {
        id: 'bear',
        currentState: 'untamedBear',
        immovable: true,
        inventoryName: null,
        locations: ['locBarrenroom'],
        states: [
            {
                id: 'untamedBear',
                change: null,
                description:
                    'There is a ferocious cave bear eyeing you from the far end of the room!',
            },
            {
                id: 'sittingBear',
                change: 'The bear eagerly wolfs down your food, after which he seems to calm down considerably and even becomes rather friendly.',
                description:
                    'There is a gentle cave bear sitting placidly in one corner.',
            },
            {
                id: 'contentedBear',
                change: null,
                description: null,
            },
            {
                id: 'bearDead',
                change: 'The bear lumbers toward the troll, who lets out a startled shriek and scurries away. The bear soon gives up the pursuit and wanders back.',
                description: null,
            },
        ],
        words: ['bear'],
    },
    {
        id: 'amber',
        currentState: 'amberInUrn',
        inventoryName: 'Amber gemstone',
        locations: ['locNowhere'],
        states: [
            {
                id: 'amberInUrn',
                description: 'There is a rare amber gemstone here!',
            },
            {
                id: 'amberInRock',
                description:
                    'There is an amber gemstone resting in a small cavity in the rock!',
            },
        ],
        treasure: true,
        words: ['amber', 'gemst'],
    },
    {
        id: 'blood',
        descriptions: null, // described with dragon
        immovable: true,
        inventoryName: '*blood',
        locations: ['locNowhere'],
        words: ['blood'],
    },
    {
        id: 'bottle',
        currentState: 'waterBottle',
        inventoryName: 'Small bottle',
        locations: ['locBuilding'],
        states: [
            {
                id: 'waterBottle',
                change: 'Your bottle is now full of water.',
                description: 'There is a bottle of water here.',
            },
            {
                id: 'emptyBottle',
                change: 'The bottle of water is now empty.',
                description: 'There is an empty bottle here.',
            },
            {
                id: 'oilBottle',
                change: 'Your bottle is now full of oil.',
                description: 'There is a bottle of oil here.',
            },
        ],
        words: ['bottl', 'jar', 'bottle', 'water'],
    },
    {
        id: 'bird',
        currentState: 'birdUncaged',
        inventoryName: 'Little bird in cage',
        locations: ['locBird'],
        states: [
            {
                id: 'birdUncaged',
                description: 'A cheerful little bird is sitting here singing.',
                // if dragonblood : To your surprise, you can
                // understand the bird\'s chirping; it is singing about the joys of its forest home.
                sound: "The bird's singing is quite melodious.",
            },
            {
                id: 'birdCaged',
                description: 'There is a little bird in the cage.',
                // if dragonblood : The bird does not seem inclined to sing while in the cage.
                sound: 'The bird does not seem inclined to sing while in the cage.',
            },
            {
                id: 'birdForestUncaged',
                description: 'A cheerful little bird is sitting here singing.',
                // if dragonblood : The bird is singing to you in gratitude for
                // your having returned it to its home. In return, it informs you
                // of a magic word which it thinks you may find useful somewhere
                // near the Hall of Mists. The magic word changes frequently,
                // but for now the bird believes it is "%s". You thank the bird
                // for this information, and it flies off into the forest.
                sound: 'It almost seems as though the bird is trying to tell you something.',
            },
        ],
        words: ['bird'],
    },
    {
        id: 'cage',
        descriptions: ['There is a small wicker cage discarded nearby.'],
        inventoryName: 'Wicker cage',
        locations: ['locCobble'],
        words: ['cage'],
    },
    {
        id: 'chain',
        currentState: 'chainHeap',
        immovable: true,
        inventoryName: 'Golden chain',
        locations: ['locBarrenroom'],
        states: [
            {
                id: 'chainHeap',
                description:
                    'There is a golden chain lying in a heap on the floor!',
            },
            {
                id: 'chainingBear',
                description:
                    'The bear is locked to the wall with a golden chain!',
            },
            {
                id: 'chainFixed',
                description: 'There is a golden chain locked to the wall!',
            },
        ],
        treasure: true,
        words: ['chain'],
    },
    {
        id: 'chest',
        descriptions: ["The pirate's treasure chest is here!"],
        inventoryName: 'Treasure chest',
        locations: ['locNowhere'],
        treasure: true,
        words: ['chest', 'box', 'treas'],
    },
    {
        id: 'clam',
        descriptions: [
            'There is an enormous clam here with its shell tightly closed.',
        ],
        inventoryName: 'Giant clam  >GRUNT!<',
        locations: ['locShellroom'],
        sounds: ['The clam is as tight-mouthed as a, er, clam.'],
        words: ['clam'],
    },
    {
        id: 'cavity',
        currentState: 'cavityFull',
        immovable: true,
        inventoryName: '*cavity',
        locations: ['locNowhere'],
        states: [
            {
                id: 'cavityFull',
                description: null, // something in it
            },
            {
                id: 'cavityEmpty',
                description: 'There is a small urn-shaped cavity in the rock.',
            },
        ],
        words: ['cavit', 'cavity'],
    },
    {
        id: 'coins',
        descriptions: ['There are many coins here!'],
        inventoryName: 'Rare coins',
        locations: ['locWestside'],
        treasure: true,
        words: ['coins'],
    },
    {
        id: 'chasm',
        currentState: 'trollBridge',
        immovable: true,
        inventoryName: '*chasm',
        locations: ['locSwchasm', 'locNechasm'],
        states: [
            {
                id: 'trollBridge',
                change: null,
                description:
                    'A rickety wooden bridge extends across the chasm, vanishing into the mist. A notice posted on the bridge reads, "Stop! Pay troll!"',
            },
            {
                id: 'bridgeWrecked',
                change: 'Just as you reach the other side, the bridge buckles beneath the weight of the bear, which was still following you around. You scrabble desperately for support, but as the bridge collapses you stumble back and fall into the chasm.',
                description:
                    'The wreckage of a bridge (and a dead bear) can be seen at the bottom of the chasm.',
            },
        ],
        words: ['chasm'],
    },
    {
        id: 'door',
        currentState: 'doorRusted',
        immovable: true,
        inventoryName: '*rusty door',
        locations: ['locImmense'],
        states: [
            {
                id: 'doorRusted',
                change: "The hinges are quite thoroughly rusted now and won't budge.",
                description:
                    'The way north is barred by a massive, rusty, iron door.',
            },
            {
                id: 'doorUnrusted',
                change: 'The oil has freed up the hinges so that the door will now move, although it requires some effort.',
                description:
                    'The way north leads through a massive, rusty, iron door.',
            },
        ],
        words: ['door'],
    },
    {
        id: 'dwarf',
        descriptions: null,
        immovable: true,
        inventoryName: null,
        locations: ['locNowhere'],
        words: ['dwarf', 'dwarv', 'dwarves'],
    },
    {
        id: 'eggs',
        currentState: 'eggsHere',
        inventoryName: 'Golden eggs',
        locations: ['locGiantroom'],
        states: [
            {
                id: 'eggsHere',
                description: 'There is a large nest here, full of golden eggs!',
            },
            {
                id: 'eggsVanished',
                description: 'The nest of golden eggs has vanished!',
            },
            {
                id: 'eggsDone',
                description: 'Done!',
            },
        ],
        treasure: true,
        words: ['eggs', 'egg', 'nest'],
    },
    {
        id: 'emerald',
        descriptions: [
            "There is an emerald here the size of a plover's egg!",
            'There is an emerald resting in a small cavity in the rock!',
        ],
        inventoryName: 'Egg-sized emerald',
        locations: ['locPlover'],
        treasure: true,
        words: ['emera', 'emerald'],
    },
    {
        id: 'dragon',
        currentState: 'dragonBars',
        immovable: true,
        inventoryName: '*dragon',
        locations: ['locSecret4', 'locSecret6'],
        states: [
            {
                id: 'dragonBars',
                change: null,
                description: 'A huge green fierce dragon bars the way!',
                sound: "The dragon's ominous hissing does not bode well for you.",
            },
            {
                id: 'dragonDead',
                change: "Congratulations! You have just vanquished a dragon with your bare hands! (Unbelievable, isn't it?)",
                description:
                    'The blood-specked body of a huge green dead dragon lies to one side.',
                sound: 'The dragon is, not surprisingly, silent.',
            },
            {
                id: 'dragonBloodless',
                change: 'Your head buzzes strangely for a moment.',
                description:
                    'The body of a huge green dead dragon is lying off to one side.',
                sound: 'The dragon is, not surprisingly, silent.',
            },
        ],
        words: ['drago', 'dragon'],
    },
    {
        id: 'food',
        descriptions: ['There is food here.'],
        inventoryName: 'Tasty food',
        locations: ['locBuilding'],
        words: ['food', 'ratio'],
    },
    {
        id: 'jade',
        descriptions: ['A precious jade necklace has been dropped here!'],
        inventoryName: 'Jade necklace',
        locations: ['locNowhere'],
        treasure: true,
        words: ['jade', 'neckl', 'necklace'],
    },
    {
        id: 'keys',
        descriptions: ['There are some keys on the ground here.'],
        inventoryName: 'Set of keys',
        locations: ['locBuilding'],
        words: ['keys', 'key'],
    },
    {
        id: 'fissure',
        currentState: 'unbridged',
        immovable: true,
        inventoryName: '*fissure',
        locations: ['locEastbank', 'locWestbank'],
        states: [
            {
                id: 'unbridged',
                change: 'The crystal bridge has vanished!',
                description: null,
            },
            {
                id: 'bridged',
                change: 'A crystal bridge now spans the fissure.',
                description: 'A crystal bridge spans the fissure.',
            },
        ],
        words: ['fissu', 'fissure'],
    },
    {
        id: 'knife',
        descriptions: null,
        inventoryName: null,
        locations: ['locNowhere'],
        words: ['knife', 'knive'],
    },
    {
        id: 'grate',
        currentState: 'grateClosed',
        immovable: true,
        inventoryName: '*grate',
        locations: ['locGrate', 'locBelowgrate'],
        states: [
            {
                id: 'grateClosed',
                change: 'The grate is now locked.',
                description: 'The grate is locked.',
            },
            {
                id: 'grateOpen',
                change: 'The grate is now unlocked.',
                description: 'The grate is open.',
            },
        ],
        words: ['grate'],
    },
    {
        id: 'magazine',
        descriptions: [
            'There are a few recent issues of "Spelunker Today" magazine here.',
        ],
        inventoryName: '"Spelunker Today"',
        locations: ['locAnteroom'],
        texts: 'I\'m afraid the magazine is written in dwarvish. But pencilled on one cover you see, "Please leave the magazines at the construction site."',
        words: ['magaz', 'issue', 'spelu', 'spel', 'magazine'],
    },
    {
        id: 'message',
        descriptions: [
            'There is a message scrawled in the dust in a flowery script, reading: "This is not the maze where the pirate leaves his treasure chest."',
        ],
        immovable: true,
        inventoryName: '*message in second maze',
        locations: ['locNowhere'],
        texts: '"This is not the maze where the pirate leaves his treasure chest."',
        words: ['messa', 'message'],
    },
    {
        id: 'nugget',
        descriptions: ['There is a large sparkling nugget of gold here!'],
        inventoryName: 'Large gold nugget',
        locations: ['locNugget'],
        treasure: true,
        words: ['gold', 'nugge', 'nugget'],
    },
    {
        id: 'lamp',
        currentState: 'lampDark',
        inventoryName: 'Brass lantern',
        states: [
            {
                id: 'lampDark',
                change: 'Your lamp is now off.',
                description: 'There is a shiny brass lamp nearby.',
            },
            {
                id: 'lampBright',
                change: 'Your lamp is now on.',
                description: 'There is a lamp shining nearby.',
            },
        ],
        locations: ['locBuilding'],
        words: ['lamp', 'lante'],
    },
    {
        id: 'obj13',
        descriptions: [
            'A massive stone tablet embedded in the wall reads: "Congratulations on bringing light into the dark-room!"',
        ],
        immovable: true,
        inventoryName: '*stone tablet',
        locations: ['locDarkroom'],
        texts: '"Congratulations on bringing light into the dark-room!"',
        words: ['table'],
    },
    {
        id: 'obj26',
        descriptions: null,
        immovable: true,
        inventoryName: '*stalactite',
        locations: ['locTopstalactite'],
        words: ['stala'],
    },
    {
        id: 'mirror',
        currentState: 'mirrorUnbroken',
        immovable: true,
        inventoryName: '*mirror',
        locations: ['locMirrorcanyon'],
        states: [
            {
                id: 'mirrorUnbroken',
                change: null,
                description: null,
            },
            {
                id: 'mirrorBroken',
                change: 'You strike the mirror a resounding blow, whereupon it shatters into a myriad tiny fragments.',
                description: null,
            },
        ],
        words: ['mirro', 'mirror'],
    },
    {
        id: 'obj27',
        descriptions: [
            'The shadowy figure seems to be trying to attract your attention.',
        ],
        immovable: true,
        inventoryName: '*shadowy figure and/or window',
        locations: ['locWindow1', 'locWindow2'],
        words: ['shado', 'figur', 'windo'],
    },
    {
        id: 'obj29',
        descriptions: null,
        immovable: true,
        inventoryName: '*cave drawings',
        locations: ['locOriental'],
        words: ['drawi'],
    },
    {
        id: 'obj30',
        descriptions: null, // never present
        immovable: true,
        inventoryName: '*pirate/genie',
        locations: ['locNowhere'],
        words: ['pirat', 'genie', 'djinn'],
    },
    {
        id: 'obj40',
        descriptions: null,
        immovable: true,
        inventoryName: '*carpet and/or moss and/or curtains',
        locations: ['locSoftroom'],
        words: ['carpe', 'moss'],
    },
    {
        id: 'appendage',
        descriptions: [
            'Your keen eye spots a severed leporine appendage lying on the ground.',
        ],
        inventoryName: 'Leporine appendage',
        locations: ['locForest22'],
        words: ['appen', 'lepor', 'appendage'],
    },
    {
        id: 'obj47',
        descriptions: null,
        immovable: true,
        inventoryName: '*mud',
        locations: ['locDebris'],
        texts: '"MAGIC WORD XYZZY"',
        words: ['mud'],
    },
    {
        id: 'note',
        descriptions: null,
        immovable: true,
        inventoryName: '*note',
        locations: ['locNugget'],
        texts: '"You won\'t get it up the steps"',
        words: ['note'],
    },
    {
        id: 'diamonds',
        descriptions: ['There are diamonds here!'],
        inventoryName: 'Several diamonds',
        locations: ['locWestbank'],
        treasure: true,
        words: ['diamo', 'diamonds'],
    },
    {
        id: 'obj52',
        descriptions: ['There are bars of silver here!'],
        inventoryName: 'Bars of silver',
        locations: ['locFloorhole'],
        treasure: true,
        words: ['silve', 'bars', 'silver'],
    },
    {
        id: 'obj53',
        descriptions: ['There is precious jewelry here!'],
        inventoryName: 'Precious jewelry',
        locations: ['locSouthside'],
        treasure: true,
        words: ['jewel', 'jewelry'],
    },
    {
        id: 'obj63',
        descriptions: ['There are rare spices here!'],
        inventoryName: 'Rare spices',
        locations: ['locBoulders2'],
        treasure: true,
        words: ['spice'],
    },
    {
        id: 'obj69',
        descriptions: ['There is a richly-carved ebony statuette here!'],
        inventoryName: 'Ebony statuette',
        locations: ['locReachdead'],
        treasure: true,
        words: ['ebony', 'statu'],
    },
    {
        id: 'ogre',
        descriptions: ['A formidable ogre bars the northern exit.'],
        immovable: true,
        inventoryName: '*ogre',
        locations: ['locLarge'],
        sounds: ['The ogre is apparently the strong, silent type.'],
        words: ['ogre'],
    },
    {
        id: 'oil',
        descriptions: null,
        inventoryName: 'Oil in the bottle',
        locations: ['locNowhere'],
        words: ['oil'],
    },
    {
        id: 'oyster',
        descriptions: [
            'There is an enormous oyster here with its shell tightly closed.',
            'Interesting.  There seems to be something written on the underside of\nthe oyster.',
        ],
        inventoryName: 'Giant oyster  >GROAN!<',
        locations: ['locNowhere'],
        sounds: [
            "Even though it's an oyster, the critter's as tight-mouthed as a clam.",
            "It says the same thing it did before.  Hm, maybe it's a pun?",
        ],
        words: ['oyste', 'oyster'],
    },
    {
        id: 'pearl',
        descriptions: ['Off to one side lies a glistening pearl!'],
        inventoryName: 'Glistening pearl',
        locations: ['locNowhere'],
        treasure: true,
        words: ['pearl'],
    },
    {
        id: 'pillow',
        descriptions: ['A small velvet pillow lies on the floor.'],
        inventoryName: 'Velvet pillow',
        locations: ['locSoftroom'],
        words: ['pillo', 'velve', 'pillow'],
    },
    {
        id: 'plant2',
        descriptions: [
            'The top of a 12-foot-tall beanstalk is poking out of the west pit.',
            'There is a huge beanstalk growing out of the west pit up to the hole.',
        ],
        immovable: true,
        inventoryName: '*phony plant', // seen in Twopit Room only when tall enough
        locations: ['locWestend', 'locEastend'],
        words: ['plant'],
    },
    {
        id: 'pyramid',
        descriptions: ['There is a platinum pyramid here, 8 inches on a side!'],
        inventoryName: 'Platinum pyramid',
        locations: ['locDarkroom'],
        treasure: true,
        words: ['plati', 'pyram', 'pyramid'],
    },
    {
        id: 'rod',
        descriptions: [
            'A three foot black rod with a rusty star on an end lies nearby.',
        ],
        inventoryName: 'Black rod',
        locations: ['locDebris'],
        words: ['rod'],
    },
    {
        id: 'plant',
        currentState: 'plantThirsty',
        immovable: true,
        inventoryName: '*plant',
        locations: ['locWestpit'],
        states: [
            {
                id: 'plantThirsty',
                change: "You've over-watered the plant!  It's shriveling up!  And now . . .",
                description:
                    'There is a tiny little plant in the pit, murmuring "water, water, ..."',
                sound: 'The plant continues to ask plaintively for water.',
            },
            {
                id: 'plantBellowing',
                change: 'The plant spurts into furious growth for a few seconds.',
                description:
                    'There is a 12-foot-tall beanstalk stretching up out of the pit, bellowing "WATER!! WATER!!"',
                sound: 'The plant continues to demand water.',
            },
            {
                id: 'plantGrown',
                change: 'The plant grows explosively, almost filling the bottom of the pit.',
                description:
                    'There is a gigantic beanstalk stretching all the way up to the hole.',
                sound: 'The plant now maintains a contented silence.',
            },
        ],
        words: ['plant', 'beans'],
    },
    {
        id: 'rod2',
        descriptions: [
            'A three foot black rod with a rusty mark on an end lies nearby.',
        ],
        inventoryName: 'Black rod',
        locations: ['locNowhere'],
        words: ['rod'],
    },
    {
        id: 'ruby',
        descriptions: [
            'There is an enormous ruby here!',
            'There is a ruby resting in a small cavity in the rock!',
        ],
        inventoryName: 'Giant ruby',
        locations: ['locStoreroom'],
        treasure: true,
        words: ['ruby'],
    },
    {
        id: 'reser',
        currentState: 'watersUnparted',
        immovable: true,
        inventoryName: '*reservoir',
        locations: ['locReservoir', 'locResnorth'],
        states: [
            {
                id: 'watersUnparted',
                change: 'The waters crash together again.',
                description: null,
            },
            {
                id: 'watersParted',
                change: 'The waters have parted to form a narrow path across the reservoir.',
                description:
                    'The waters have parted to form a narrow path across the reservoir.',
            },
        ],
        words: ['reser'],
    },
    {
        id: 'rug',
        currentState: 'rugFloor',
        immovable: true,
        inventoryName: 'Persian rug',
        locations: ['locSecret4', 'locSecret6'],
        states: [
            {
                id: 'rugFloor',
                description: 'There is a Persian rug spread out on the floor!',
            },
            {
                id: 'rugDragon',
                description: 'The dragon is sprawled out on a Persian rug!!',
            },
            {
                id: 'rugHover',
                description:
                    'There is a Persian rug here, hovering in mid-air!',
            },
        ],
        treasure: true,
        words: ['rug', 'persi'],
    },
    {
        id: 'sapph',
        descriptions: [
            'A brilliant blue star sapphire is here!',
            'There is a star sapphire resting in a small cavity in the rock!',
        ],
        inventoryName: 'Star sapphire',
        locations: ['locLedge'],
        treasure: true,
        words: ['sapph'],
    },
    {
        id: 'sign',
        currentState: 'ingameSign',
        inventoryName: '*sign',
        immovable: true,
        locations: ['locAnteroom'],
        states: [
            {
                id: 'ingameSign',
                description: null,
                text: 'Cave under construction beyond this point.\n Proceed at own risk.\n [Witt Construction Company]',
            },
            {
                id: 'endgameSign',
                description: null,
                text: '"Treasure Vault. Keys in main office."',
            },
        ],
        words: ['sign'],
    },
    {
        id: 'snake',
        currentState: 'snakeBlocks',
        immovable: true,
        inventoryName: '*snake',
        locations: ['locKinghall'],
        states: [
            {
                id: 'snakeBlocks',
                description: 'A huge green fierce snake bars the way!',
                sound: 'The snake is hissing venomously.',
            },
            {
                id: 'snakeChased',
                description: null, // snake chased
                sound: null,
            },
        ],
        words: ['snake'],
    },
    {
        id: 'steps',
        currentState: 'stepsDown',
        immovable: true,
        inventoryName: '*steps',
        locations: ['locPittop', 'locMisthall'],
        states: [
            {
                id: 'stepsDown',
                description: 'Rough stone steps lead down the pit.',
            },
            {
                id: 'stepsUp',
                description: 'Rough stone steps lead up the dome.',
            },
        ],
        words: ['steps'],
    },
    {
        id: 'trident',
        descriptions: ['There is a jewel-encrusted trident here!'],
        inventoryName: 'Jeweled trident',
        locations: ['locWaterfall'],
        treasure: true,
        words: ['tride', 'trident'],
    },
    {
        id: 'troll2',
        descriptions: ['The troll is nowhere to be seen.'],
        immovable: true,
        inventoryName: '*phony troll',
        locations: ['locNowhere'],
        words: ['troll'],
    },
    {
        id: 'urn',
        currentState: 'urnEmpty',
        inventoryName: '*urn',
        immovable: true,
        locations: ['locCliff'],
        states: [
            {
                id: 'urnEmpty',
                change: 'The urn is empty and will not light.',
                description: 'A small urn is embedded in the rock.',
            },
            {
                id: 'urnDark',
                change: 'The urn is now dark.',
                description: 'A small urn full of oil is embedded in the rock.',
            },
            {
                id: 'urnBright',
                change: 'The urn is now lit.',
                description:
                    'A small oil flame extrudes from an urn embedded in the rock.',
            },
        ],
        words: ['urn'],
    },
    {
        id: 'vase',
        currentState: 'vaseWhole',
        inventoryName: 'Ming vase',
        locations: ['locOriental'],
        treasure: true,
        states: [
            {
                id: 'vaseWhole',
                change: 'The vase is now resting, delicately, on a velvet pillow.',
                description: 'There is a delicate, precious, ming vase here!',
            },
            {
                id: 'vaseDropped',
                change: 'The ming vase drops with a delicate crash.',
                description:
                    'The floor is littered with worthless shards of pottery.',
            },
            {
                id: 'vaseBroken',
                change: 'You have taken the vase and hurled it delicately to the ground.',
                description:
                    'The floor is littered with worthless shards of pottery.',
            },
        ],
        words: ['vase', 'ming', 'shard', 'potte'],
    },
    {
        id: 'troll',
        currentState: 'trollUnpaid',
        immovable: true,
        inventoryName: '*troll',
        locations: ['locSwchasm', 'locNechasm'],
        states: [
            {
                id: 'trollUnpaid',
                change: null,
                description:
                    'A burly troll stands by the bridge and insists you throw him a treasure before you may cross.',
                sound: 'The troll sounds quite adamant in his demand for a treasure.',
            },
            {
                id: 'trollPaidonce',
                change: null,
                description:
                    'The troll steps out from beneath the bridge and blocks your way.',
                sound: 'The troll sounds quite adamant in his demand for a treasure.',
            },
            {
                id: 'trollGone',
                change: 'The bear lumbers toward the troll, who lets out a startled shriek and scurries away. The bear soon gives up the pursuit and wanders back.',
                description: null, // chased away
                sound: null,
            },
        ],
        words: ['troll'],
    },
    {
        id: 'vend',
        currentState: 'vendBlocks',
        inventoryName: '*vending machine',
        immovable: true,
        locations: ['locDeadend13'],
        states: [
            {
                id: 'vendBlocks',
                change: 'The vending machine swings back to block the passage.',
                description:
                    'There is a massive and somewhat battered vending machine here. The instructions on it read: "Drop coins here to receive fresh batteries."',
                text: '"Drop coins here to receive fresh batteries."',
            },
            {
                id: 'vendUnblocks',
                change: 'As you strike the vending machine, it pivots backward along with a section of wall, revealing a dark passage leading south.',
                description:
                    'There is a massive vending machine here, swung back to reveal a southward passage.',
                text: '"Drop coins here to receive fresh batteries."',
            },
        ],
        words: ['machi', 'vendi', 'machine', 'vending', 'vend'],
    },
    {
        id: 'volcano',
        descriptions: null,
        immovable: true,
        inventoryName: '*volcano and/or geyser',
        locations: ['locBreathtaking'],
        words: ['volca', 'geyse', 'volcano'],
    },
    {
        id: 'water',
        descriptions: null,
        inventoryName: 'Water in the bottle',
        locations: ['locNowhere'],
        words: ['water', 'h2o'],
    },
]
