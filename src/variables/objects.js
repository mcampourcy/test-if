export const objects = {
    NO_OBJECT: {
        inventory: null,
        descriptions: null,
    },
    KEYS: {
        words: ['keys', 'key'],
        inventory: 'Set of keys',
        locations: ['LOC_BUILDING'],
        descriptions: ['There are some keys on the ground here.'],
    },
    LAMP: {
        words: ['lamp', 'lante'],
        inventory: 'Brass lantern',
        locations: ['LOC_BUILDING'],
        states: {
            LAMP_DARK: {
                description: 'There is a shiny brass lamp nearby.',
                change: 'Your lamp is now off.',
            },
            LAMP_BRIGHT: {
                description: 'There is a lamp shining nearby.',
                change: 'Your lamp is now on.',
            },
        },
    },
    GRATE: {
        words: ['grate'],
        inventory: '*grate',
        locations: ['LOC_GRATE', 'LOC_BELOWGRATE'],
        immovable: true,
        states: {
            GRATE_CLOSED: {
                description: 'The grate is locked.',
                change: 'The grate is now locked.',
            },
            GRATE_OPEN: {
                description: 'The grate is open.',
                change: 'The grate is now unlocked.',
            },
        },
    },
    CAGE: {
        words: ['cage'],
        inventory: 'Wicker cage',
        locations: ['LOC_COBBLE'],
        descriptions: ['There is a small wicker cage discarded nearby.'],
    },
    ROD: {
        words: ['rod'],
        inventory: 'Black rod',
        locations: ['LOC_DEBRIS'],
        descriptions: ['A three foot black rod with a rusty star on an end lies nearby.'],
    },
    ROD2: {
        words: ['rod'],
        inventory: 'Black rod',
        locations: ['LOC_NOWHERE'],
        descriptions:
            'A three foot black rod with a rusty mark on an end lies nearby.',
    },
    STEPS: {
        words: ['steps'],
        inventory: '*steps',
        locations: ['LOC_PITTOP', 'LOC_MISTHALL'],
        immovable: true,
        states: {
            STEPS_DOWN: {
                description: 'Rough stone steps lead down the pit.',
            },
            STEPS_UP: {
                description: 'Rough stone steps lead up the dome.',
            },
        },
    },
    BIRD: {
        words: ['bird'],
        inventory: 'Little bird in cage',
        locations: ['LOC_BIRD'],
        states: {
            BIRD_UNCAGED: {
                description: 'A cheerful little bird is sitting here singing.',
                // if dragonblood : To your surprise, you can understand the bird\'s chirping; it is singing about the joys of its forest home.
                sound: 'The bird\'s singing is quite melodious.',
            },
            BIRD_CAGED: {
                description: 'There is a little bird in the cage.',
                // if dragonblood : The bird does not seem inclined to sing while in the cage.
                sound: 'The bird does not seem inclined to sing while in the cage.',
            },
            BIRD_FOREST_UNCAGED: {
                description: 'A cheerful little bird is sitting here singing.',
                // if dragonblood : The bird is singing to you in gratitude for your having returned it to its home. In return, it informs you of a magic word which it thinks you may find useful somewhere near the Hall of Mists. The magic word changes frequently, but for now the bird believes it is "%s". You thank the bird for this information, and it flies off into the forest.
                sound: 'It almost seems as though the bird is trying to tell you something.',
            },
        },
    },
    DOOR: {
        words: ['door'],
        inventory: '*rusty door',
        locations: ['LOC_IMMENSE'],
        immovable: true,
        states: {
            DOOR_RUSTED: {
                description: 'The way north is barred by a massive, rusty, iron door.',
                change: 'The hinges are quite thoroughly rusted now and won\'t budge.',
            },
            DOOR_UNRUSTED: {
                description: 'The way north leads through a massive, rusty, iron door.',
                change: 'The oil has freed up the hinges so that the door will now move, although it requires some effort.',
            },
        },
    },
    PILLOW: {
        words: ['pillo', 'velve'],
        inventory: 'Velvet pillow',
        locations: ['LOC_SOFTROOM'],
        descriptions: ['A small velvet pillow lies on the floor.'],
    },
    SNAKE: {
        words: ['snake'],
        inventory: '*snake',
        locations: ['LOC_KINGHALL'],
        immovable: true,
        states: {
            SNAKE_BLOCKS: {
                description: 'A huge green fierce snake bars the way!',
                sound: 'The snake is hissing venomously.',
            },
            SNAKE_CHASED: {
                description: null, // snake chased
                sound: null,
            },
        },
    },
    FISSURE: {
        words: ['fissu'],
        inventory: '*fissure',
        locations: ['LOC_EASTBANK', 'LOC_WESTBANK'],
        immovable: true,
        states: {
            UNBRIDGED: {
                description: null,
                change: 'The crystal bridge has vanished!',
            },
            BRIDGED: {
                description: 'A crystal bridge spans the fissure.',
                change: 'A crystal bridge now spans the fissure.',
            },
        },
    },
    OBJ_13: {
        words: ['table'],
        inventory: '*stone tablet',
        locations: ['LOC_DARKROOM'],
        immovable: true,
        descriptions: ['A massive stone tablet embedded in the wall reads: "Congratulations on bringing light into the dark-room!"'],
        texts: '"Congratulations on bringing light into the dark-room!"',
    },
    CLAM: {
        words: ['clam'],
        inventory: 'Giant clam  >GRUNT!<',
        locations: ['LOC_SHELLROOM'],
        descriptions: ['There is an enormous clam here with its shell tightly closed.'],
        sounds: ['The clam is as tight-mouthed as a, er, clam.'],
    },
    OYSTER: {
        words: ['oyste'],
        inventory: 'Giant oyster  >GROAN!<',
        locations: ['LOC_NOWHERE'],
        descriptions: ['There is an enormous oyster here with its shell tightly closed.', 'Interesting.  There seems to be something written on the underside of\nthe oyster.'],
        sounds: ['Even though it\'s an oyster, the critter\'s as tight-mouthed as a clam.', 'It says the same thing it did before.  Hm, maybe it\'s a pun?'],
    },
    MAGAZINE: {
        words: ['magaz', 'issue', 'spelu', '"spel'],
        inventory: '"Spelunker Today"',
        locations: ['LOC_ANTEROOM'],
        descriptions: ['There are a few recent issues of "Spelunker Today" magazine here.'],
        texts: 'I\'m afraid the magazine is written in dwarvish. But pencilled on one cover you see, "Please leave the magazines at the construction site."',
    },
    DWARF: {
        words: ['dwarf', 'dwarv'],
        inventory: null,
        locations: ['LOC_NOWHERE'],
        immovable: true,
        descriptions: null,
    },
    KNIFE: {
        words: ['knife', 'knive'],
        inventory: null,
        locations: ['LOC_NOWHERE'],
        descriptions: null,
    },
    FOOD: {
        words: ['food', 'ratio'],
        inventory: 'Tasty food',
        locations: ['LOC_BUILDING'],
        descriptions: ['There is food here.'],
    },
    BOTTLE: {
        words: ['bottl', 'jar'],
        inventory: 'Small bottle',
        locations: ['LOC_BUILDING'],
        states: {
            WATER_BOTTLE: {
                description: 'There is a bottle of water here.',
                change: 'Your bottle is now full of water.',
            },
            EMPTY_BOTTLE: {
                description: 'There is an empty bottle here.',
                change: 'The bottle of water is now empty.',
            },
            OIL_BOTTLE: {
                description: 'There is a bottle of oil here.',
                change: 'Your bottle is now full of oil.',
            },
        },
    },
    WATER: {
        words: ['water', 'h2o'],
        inventory: 'Water in the bottle',
        locations: ['LOC_NOWHERE'],
        descriptions: null,
    },
    OIL: {
        words: ['oil'],
        inventory: 'Oil in the bottle',
        locations: ['LOC_NOWHERE'],
        descriptions: null,
    },
    MIRROR: {
        words: ['mirro'],
        inventory: '*mirror',
        locations: ['LOC_MIRRORCANYON'],
        immovable: true,
        states: {
            MIRROR_UNBROKEN: {
                description: null,
                change: null,
            },
            MIRROR_BROKEN: {
                description: null,
                change: 'You strike the mirror a resounding blow, whereupon it shatters into a myriad tiny fragments.',
            },
        },
    },
    PLANT: {
        words: ['plant', 'beans'],
        inventory: '*plant',
        locations: ['LOC_WESTPIT'],
        immovable: true,
        states: {
            PLANT_THIRSTY: {
                description: 'There is a tiny little plant in the pit, murmuring "water, water, ..."',
                change: 'You\'ve over-watered the plant!  It\'s shriveling up!  And now . . .',
                sound: 'The plant continues to ask plaintively for water.',
            },
            PLANT_BELLOWING: {
                description: 'There is a 12-foot-tall beanstalk stretching up out of the pit, bellowing "WATER!! WATER!!"',
                change: 'The plant spurts into furious growth for a few seconds.',
                sound: 'The plant continues to demand water.',
            },
            PLANT_GROWN: {
                description: 'There is a gigantic beanstalk stretching all the way up to the hole.',
                change: 'The plant grows explosively, almost filling the bottom of the pit.',
                sound: 'The plant now maintains a contented silence.',
            },
        },
    },
    PLANT2: {
        words: ['plant'],
        inventory: '*phony plant', // seen in Twopit Room only when tall enough
        locations: ['LOC_WESTEND', 'LOC_EASTEND'],
        immovable: true,
        descriptions: [
            'The top of a 12-foot-tall beanstalk is poking out of the west pit.',
            'There is a huge beanstalk growing out of the west pit up to the hole.',
        ],
    },
    OBJ_26: {
        words: ['stala'],
        inventory: '*stalactite',
        locations: ['LOC_TOPSTALACTITE'],
        immovable: true,
        descriptions: null,
    },
    OBJ_27: {
        words: ['shado', 'figur', 'windo'],
        inventory: '*shadowy figure and/or window',
        locations: ['LOC_WINDOW1', 'LOC_WINDOW2'],
        immovable: true,
        descriptions: ['The shadowy figure seems to be trying to attract your attention.'],
    },
    AXE: {
        words: ['axe'],
        inventory: 'Dwarf\'s axe',
        locations: ['LOC_NOWHERE'],
        AXE_HERE: {
            description: 'There is a little axe here.',
            change: null,
        },
        AXE_LOST: {
            description: 'There is a little axe lying beside the bear.',
            change: 'The axe misses and lands near the bear where you can\'t get at it.',
        },
    },
    OBJ_29: {
        words: ['drawi'],
        inventory: '*cave drawings',
        locations: ['LOC_ORIENTAL'],
        immovable: true,
        descriptions: null,
    },
    OBJ_30: {
        words: ['pirat', 'genie', 'djinn'],
        inventory: '*pirate/genie',
        locations: ['LOC_NOWHERE'],
        immovable: true,
        descriptions: null, // never present
    },
    DRAGON: {
        words: ['drago'],
        inventory: '*dragon',
        locations: ['LOC_SECRET4', 'LOC_SECRET6'],
        immovable: true,
        states: {
            DRAGON_BARS: {
                description: 'A huge green fierce dragon bars the way!',
                change: null,
                sound: 'The dragon\'s ominous hissing does not bode well for you.',
            },
            DRAGON_DEAD: {
                description: 'The blood-specked body of a huge green dead dragon lies to one side.',
                change: 'Congratulations! You have just vanquished a dragon with your bare hands! (Unbelievable, isn\'t it?)',
                sound: 'The dragon is, not surprisingly, silent.',
            },
            DRAGON_BLOODLESS: {
                description: 'The body of a huge green dead dragon is lying off to one side.',
                change: 'Your head buzzes strangely for a moment.',
                sound: 'The dragon is, not surprisingly, silent.',
            },
        },
    },
    CHASM: {
        words: ['chasm'],
        inventory: '*chasm',
        locations: ['LOC_SWCHASM', 'LOC_NECHASM'],
        immovable: true,
        states: {
            TROLL_BRIDGE: {
                description: 'A rickety wooden bridge extends across the chasm, vanishing into the mist. A notice posted on the bridge reads, "Stop! Pay troll!"',
                change: null,
            },
            BRIDGE_WRECKED: {
                description: 'The wreckage of a bridge (and a dead bear) can be seen at the bottom of the chasm.',
                change: 'Just as you reach the other side, the bridge buckles beneath the weight of the bear, which was still following you around. You scrabble desperately for support, but as the bridge collapses you stumble back and fall into the chasm.',
            },
        },
    },
    TROLL: {
        words: ['troll'],
        inventory: '*troll',
        locations: ['LOC_SWCHASM', 'LOC_NECHASM'],
        immovable: true,
        states: {
            TROLL_UNPAID: {
                description: 'A burly troll stands by the bridge and insists you throw him a treasure before you may cross.',
                change: null,
                sound: 'The troll sounds quite adamant in his demand for a treasure.',
            },
            TROLL_PAIDONCE: {
                description: 'The troll steps out from beneath the bridge and blocks your way.',
                change: null,
                sound: 'The troll sounds quite adamant in his demand for a treasure.',
            },
            TROLL_GONE: {
                description: null, // chased away
                change: 'The bear lumbers toward the troll, who lets out a startled shriek and scurries away. The bear soon gives up the pursuit and wanders back.',
                sound: null,
            },
        },
    },
    TROLL2: {
        words: ['troll'],
        inventory: '*phony troll',
        locations: ['LOC_NOWHERE', 'LOC_NOWHERE'],
        immovable: true,
        descriptions: ['The troll is nowhere to be seen.'],
    },
    BEAR: {
        words: ['bear'],
        inventory: null,
        locations: ['LOC_BARRENROOM'],
        immovable: true,
        states: {
            UNTAMED_BEAR: {
                description: 'There is a ferocious cave bear eyeing you from the far end of the room!',
                change: null,
            },
            SITTING_BEAR: {
                description: 'There is a gentle cave bear sitting placidly in one corner.',
                change: 'The bear eagerly wolfs down your food, after which he seems to calm down considerably and even becomes rather friendly.',
            },
            CONTENTED_BEAR: {
                description: null,
                change: null,
            },
            BEAR_DEAD: {
                description: null,
                change: 'The bear lumbers toward the troll, who lets out a startled shriek and scurries away. The bear soon gives up the pursuit and wanders back.',
            },
        },
    },
    MESSAG: {
        words: ['messa'],
        inventory: '*message in second maze',
        locations: ['LOC_NOWHERE'],
        immovable: true,
        descriptions: ['There is a message scrawled in the dust in a flowery script, reading: "This is not the maze where the pirate leaves his treasure chest."'],
        texts: '"This is not the maze where the pirate leaves his treasure chest."',
    },
    VOLCANO: {
        words: ['volca', 'geyse'],
        inventory: '*volcano and/or geyser',
        locations: ['LOC_BREATHTAKING'],
        immovable: true,
        descriptions: null,
    },
    VEND: {
        words: ['machi', 'vendi'],
        inventory: '*vending machine',
        locations: ['LOC_DEADEND13'],
        immovable: true,
        states: {
            VEND_BLOCKS: {
                description: 'There is a massive and somewhat battered vending machine here. The instructions on it read: "Drop coins here to receive fresh batteries."',
                change: 'The vending machine swings back to block the passage.',
                text: '"Drop coins here to receive fresh batteries."',
            },
            VEND_UNBLOCKS: {
                description: 'There is a massive vending machine here, swung back to reveal a southward passage.',
                change: 'As you strike the vending machine, it pivots backward along with a section of wall, revealing a dark passage leading south.',
                text: '"Drop coins here to receive fresh batteries."',
            },
        },
    },
    BATTERY: {
        words: ['batte'],
        inventory: 'Batteries',
        locations: ['LOC_NOWHERE'],
        states: {
            FRESH_BATTERIES: {
                description: 'There are fresh batteries here.',
            },
            DEAD_BATTERIES: {
                description: 'Some worn-out batteries have been discarded nearby.',
            },
        },
    },
    OBJ_40: {
        words: ['carpe', 'moss'],
        inventory: '*carpet and/or moss and/or curtains',
        locations: ['LOC_SOFTROOM'],
        immovable: true,
        descriptions: null,
    },
    OGRE: {
        words: ['ogre'],
        inventory: '*ogre',
        locations: ['LOC_LARGE'],
        immovable: true,
        descriptions: ['A formidable ogre bars the northern exit.'],
        sounds: ['The ogre is apparently the strong, silent type.'],
    },
    URN: {
        words: ['urn'],
        inventory: '*urn',
        locations: ['LOC_CLIFF'],
        immovable: true,
        states: {
            URN_EMPTY: {
                description: 'A small urn is embedded in the rock.',
                changes: 'The urn is empty and will not light.',
            },
            URN_DARK: {
                description: 'A small urn full of oil is embedded in the rock.',
                changes: 'The urn is now dark.',
            },
            URN_LIT: {
                description: 'A small oil flame extrudes from an urn embedded in the rock.',
                changes: 'The urn is now lit.',
            },
        },
    },
    CAVITY: {
        words: ['cavit'],
        inventory: '*cavity',
        locations: ['LOC_NOWHERE'],
        immovable: true,
        states: {
            CAVITY_FULL: {
                description: null, // something in it
            },
            CAVITY_EMPTY: {
                description: 'There is a small urn-shaped cavity in the rock.',
            },
        },
    },
    BLOOD: {
        words: ['blood'],
        inventory: '*blood',
        locations: ['LOC_NOWHERE'],
        immovable: true,
        descriptions: null, // described with dragon
    },
    RESER: {
        words: ['reser'],
        inventory: '*reservoir',
        locations: ['LOC_RESERVOIR', 'LOC_RESNORTH'],
        immovable: true,
        states: {
            WATERS_UNPARTED: {
                description: null,
                changes: 'The waters crash together again.',
            },
            WATERS_PARTED: {
                description: 'The waters have parted to form a narrow path across the reservoir.',
                changes: 'The waters have parted to form a narrow path across the reservoir.',
            },
        },
    },
    OBJ_46: {
        words: ['appen', 'lepor'],
        inventory: 'Leporine appendage',
        locations: ['LOC_FOREST22'],
        descriptions: ['Your keen eye spots a severed leporine appendage lying on the ground.'],
    },
    OBJ_47: {
        words: ['mud'],
        inventory: '*mud',
        locations: ['LOC_DEBRIS'],
        immovable: true,
        descriptions: null,
        texts: '"MAGIC WORD XYZZY"',
    },
    OBJ_48: {
        words: ['note'],
        inventory: '*note',
        locations: ['LOC_NUGGET'],
        immovable: true,
        descriptions: null,
        texts: '"You won\'t get it up the steps"',
    },
    SIGN: {
        words: ['sign'],
        inventory: '*sign',
        locations: ['LOC_ANTEROOM'],
        immovable: true,
        states: {
            INGAME_SIGN: {
                description: null,
                text: 'Cave under construction beyond this point.\n Proceed at own risk.\n [Witt Construction Company]',
            },
            ENDGAME_SIGN: {
                description: null,
                text: '"Treasure Vault. Keys in main office."',
            },
        },
    },
    NUGGET: {
        words: ['gold', 'nugge'],
        inventory: 'Large gold nugget',
        locations: ['LOC_NUGGET'],
        treasure: true,
        descriptions: ['There is a large sparkling nugget of gold here!'],
    },
    OBJ_51: {
        words: ['diamo'],
        inventory: 'Several diamonds',
        locations: ['LOC_WESTBANK'],
        treasure: true,
        descriptions: ['There are diamonds here!'],
    },
    OBJ_52: {
        words: ['silve', 'bars'],
        inventory: 'Bars of silver',
        locations: ['LOC_FLOORHOLE'],
        treasure: true,
        descriptions: ['There are bars of silver here!'],
    },
    OBJ_53: {
        words: ['jewel'],
        inventory: 'Precious jewelry',
        locations: ['LOC_SOUTHSIDE'],
        treasure: true,
        descriptions: ['There is precious jewelry here!'],
    },
    COINS: {
        words: ['coins'],
        inventory: 'Rare coins',
        locations: ['LOC_WESTSIDE'],
        treasure: true,
        descriptions: ['There are many coins here!'],
    },
    CHEST: {
        words: ['chest', 'box', 'treas'],
        inventory: 'Treasure chest',
        locations: ['LOC_NOWHERE'],
        treasure: true,
        descriptions: ['The pirate\'s treasure chest is here!'],
    },
    EGGS: {
        words: ['eggs', 'egg', 'nest'],
        inventory: 'Golden eggs',
        locations: ['LOC_GIANTROOM'],
        treasure: true,
        states: {
            EGGS_HERE: {
                description: 'There is a large nest here, full of golden eggs!',
            },
            EGGS_VANISHED: {
                description: 'The nest of golden eggs has vanished!',
            },
            EGGS_DONE: {
                description: 'Done!',
            },
        },
    },
    TRIDENT: {
        words: ['tride'],
        inventory: 'Jeweled trident',
        locations: ['LOC_WATERFALL'],
        treasure: true,
        descriptions: ['There is a jewel-encrusted trident here!'],
    },
    VASE: {
        words: ['vase', 'ming', 'shard', 'potte'],
        inventory: 'Ming vase',
        locations: ['LOC_ORIENTAL'],
        treasure: true,
        states: {
            VASE_WHOLE: {
                description: 'There is a delicate, precious, ming vase here!',
                changes: 'The vase is now resting, delicately, on a velvet pillow.',
            },
            VASE_DROPPED: {
                description: 'The floor is littered with worthless shards of pottery.',
                changes: 'The ming vase drops with a delicate crash.',
            },
            VASE_BROKEN: {
                description: 'The floor is littered with worthless shards of pottery.',
                changes: 'You have taken the vase and hurled it delicately to the ground.',
            },
        },
    },
    EMERALD: {
        words: ['emera'],
        inventory: 'Egg-sized emerald',
        locations: ['LOC_PLOVER'],
        treasure: true,
        descriptions: ['There is an emerald here the size of a plover\'s egg!', 'There is an emerald resting in a small cavity in the rock!'],
    },
    PYRAMID: {
        words: ['plati', 'pyram'],
        inventory: 'Platinum pyramid',
        locations: ['LOC_DARKROOM'],
        treasure: true,
        descriptions: ['There is a platinum pyramid here, 8 inches on a side!'],
    },
    PEARL: {
        words: ['pearl'],
        inventory: 'Glistening pearl',
        locations: ['LOC_NOWHERE'],
        treasure: true,
        descriptions: ['Off to one side lies a glistening pearl!'],
    },
    RUG: {
        words: ['rug', 'persi'],
        inventory: 'Persian rug',
        locations: ['LOC_SECRET4', 'LOC_SECRET6'],
        immovable: true,
        treasure: true,
        states: {
            RUG_FLOOR: {
                description: 'There is a Persian rug spread out on the floor!',
            },
            RUG_DRAGON: {
                description: 'The dragon is sprawled out on a Persian rug!!',
            },
            RUG_HOVER: {
                description: 'There is a Persian rug here, hovering in mid-air!',
            },
        },
    },
    OBJ_63: {
        words: ['spice'],
        inventory: 'Rare spices',
        locations: ['LOC_BOULDERS2'],
        treasure: true,
        descriptions: ['There are rare spices here!'],
    },
    CHAIN: {
        words: ['chain'],
        inventory: 'Golden chain',
        locations: ['LOC_BARRENROOM'],
        immovable: true,
        treasure: true,
        states: {
            CHAIN_HEAP: {
                description: 'There is a golden chain lying in a heap on the floor!',
            },
            CHAINING_BEAR: {
                description: 'The bear is locked to the wall with a golden chain!',
            },
            CHAIN_FIXED: {
                description: 'There is a golden chain locked to the wall!',
            },
        },
    },
    RUBY: {
        words: ['ruby'],
        inventory: 'Giant ruby',
        locations: ['LOC_STOREROOM'],
        treasure: true,
        descriptions: ['There is an enormous ruby here!', 'There is a ruby resting in a small cavity in the rock!'],
    },
    JADE: {
        words: ['jade', 'neckl'],
        inventory: 'Jade necklace',
        locations: ['LOC_NOWHERE'],
        treasure: true,
        descriptions: ['A precious jade necklace has been dropped here!'],
    },
    AMBER: {
        words: ['amber', 'gemst'],
        inventory: 'Amber gemstone',
        locations: ['LOC_NOWHERE'],
        treasure: true,
        states: {
            AMBER_IN_URN: {
                description: 'There is a rare amber gemstone here!',
            },
            AMBER_IN_ROCK: {
                description: 'There is an amber gemstone resting in a small cavity in the rock!',
            },
        },
    },
    SAPPH: {
        words: ['sapph'],
        inventory: 'Star sapphire',
        locations: ['LOC_LEDGE'],
        treasure: true,
        descriptions: ['A brilliant blue star sapphire is here!', 'There is a star sapphire resting in a small cavity in the rock!'],
    },
    OBJ_69: {
        words: ['ebony', 'statu'],
        inventory: 'Ebony statuette',
        locations: ['LOC_REACHDEAD'],
        treasure: true,
        descriptions: ['There is a richly-carved ebony statuette here!'],
    },
}
