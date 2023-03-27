export const messages = {
    allSilent: 'All is silent.',
    alreadyCarrying: 'You are already carrying it!',
    alreadyDead: 'For crying out loud, the poor thing is already dead!',
    alreadyLocked: 'It was already locked.',
    alreadyUnlocked: 'It was already unlocked.',
    amGame: "I'm game. Would you care to explain how?",
    arentCarrying: "You aren't carrying it!",
    badDirection: 'There is no way to go that direction.',
    bareHandsQuery: 'With what? Your bare hands?',
    bearBlocks:
        'There is no way to get past the bear to unlock the chain, which is probably just as well.',
    bearChained: 'The bear is still chained to the wall.',
    bearConfused: 'The bear is confused; he only wants to be your friend.',
    bearHands: 'With what? Your bare hands? Against *HIS* bear hands??',
    beyondPower: 'It is beyond your power to do that.',
    birdAttacks:
        'The little bird attacks the green snake, and in an astounding flurry drives the snake away.',
    birdBurnt:
        'The little bird attacks the green dragon, and in an astounding flurry gets burnt to a cinder. The ashes blow away.',
    birdCrap:
        'The bird eyes you suspiciously and flutters away. A moment later you feel something wet land on your head, but upon looking up you can see no sign ,of the culprit.',
    birdDead: 'The little bird is now dead. Its body disappears.',
    birdDevoured: 'The snake has now devoured your bird.',
    birdEvades:
        'The bird seemed unafraid at first, but as you approach it becomes disturbed and you cannot catch it.',
    birdPining:
        "It's not hungry (it's merely pinin' for the fjords). Besides, you have no bird seed.",
    bottleFull: 'Your bottle is already full.',
    bridgeGone: 'There is no longer any way across the chasm.',
    briefConfirm:
        'Okay, from now on I\'ll only describe a place in full the first time you come to it. To get the full description, say "look".',
    cageFly: 'The bird flies agitatedly about the cage.',
    cannotCarry: 'You can catch the bird, but you cannot carry it.',
    cannotUnlock: "You can't unlock the keys.",
    cantApply: "I don't know how to apply that word here.",
    cantPour: "You can't pour that.",
    carryLimit:
        "You can't carry anything more. You'll have to drop something first.",
    caveClosed:
        'The sepulchral voice intones, "The cave is now closed." As the echoes fade, there is a blinding flash of light (and a small puff of orange smoke... As your eyes refocus, you look around and find...',
    caveClosing:
        'A sepulchral voice reverberating through the cave, says, "Cave closing soon. All adventurers exit immediately through main office."',
    caveNearby:
        'Somewhere nearby is Colossal Cave, where others have found fortunes in treasure and gold, though it is rumored that some who enter are never seen again. Magic is said to work in the cave. I will be your eyes and hands. Direct me with commands of 1 or 2 words. I should warn you that I look at only the first five letters of each word, so you\'ll have to enter "northeast" as "ne" to distinguish it from "north". \n\nYou can type "help" for some general hints. \nFor information on how to end your adventure, scoring, etc., type "info". \n\nThis program was originally developed by Willie Crowther. Most of the features of the current program were added by Don Woods.',
    chainLocked: 'The chain is now locked.',
    chainUnlocked: 'The chain is now unlocked.',
    clamBlocker:
        "You can't fit this five-foot clam through that little passage!",
    clamOpener: "You don't have anything strong enough to open the clam.",
    clueQuery:
        "Hmmm, this looks like a clue, which means it'll cost you 10 points to read it. Should I go ahead and read it anyway?",
    crossBridge:
        'I respectfully suggest you go across the bridge instead of jumping.',
    deathClosing:
        "It looks as though you're dead. Well, seeing as how it's so close to closing time anyway, I think we'll just call it a day.",
    deepRoots:
        'The plant has exceptionally deep roots and cannot be pulled free.',
    defeatMessage:
        'There is a loud explosion, and a twenty-foot hole appears in the far wall, burying the snakes in the rubble. A river of molten lava pours in through the hole, destroying everything in its path, including you!',
    doWhat: (verb) => `${verb} what?`,
    dontFit: "You don't fit through a two-inch slit!",
    dontKnow: (word) => `Sorry, I don't know the word "${word}".`,
    dontUnderstand: "I'm afraid I don't understand.",
    doughnutHoles: 'I suppose you collect doughnut holes, too?',
    dragonScales: "The axe bounces harmlessly off the dragon's thick scales.",
    dropClam: 'I advise you to put down the clam before opening it. >STRAIN!<',
    dropOyster:
        'I advise you to put down the oyster before opening it. >WRENCH!<',
    dullRumbling: 'The air is filled with a dull rumbling sound.',
    dwarfBlock: 'A little dwarf with a big knife blocks your way.',
    dwarfDodges: 'You attack a little dwarf, but he dodges out of the way.',
    dwarfPack: (number) => `There are ${number} threatening little dwarves in the room with you.`,
    dwarfRan:
        'A little dwarf just walked around a corner, saw you, threw a little axe at you which missed, cursed, and ran away.',
    dwarfSingle: 'There is a threatening little dwarf in the room with you!',
    dwarfSmoke:
        'You killed a little dwarf. The body vanishes in a cloud of greasy black smoke.',
    dwarvesAwaken:
        'The resulting ruckus has awakened the dwarves. There are now several threatening little dwarves in the room with you! Most of them throw knives at you! All of them get you!',
    exitClosed:
        'A mysterious recorded voice groans into life and announces: "This exit is closed. Please leave via main office."',
    feetWet: 'Your feet are now wet.',
    fewDrops: 'There are only a few drops--not enough to carry.',
    fillInvalid: 'There is nothing here with which to fill it.',
    flapArms: 'Though you flap your arms furiously, it is to no avail.',
    followStream:
        "I don't know where the cave is, but hereabouts no stream can run on the surface for long. I would try the stream.",
    forestQuery: null,
    forgotPath:
        'Sorry, but I no longer seem to remember how it was you got here.',
    freeFly: 'The bird flies about agitatedly for a moment.',
    fullUrn: 'The urn is already full of oil.',
    futileCrawl:
        'You have crawled around in some little holes and wound up back in the main passage.',
    garneredPoints: (points, maxPoints, turns) => `You have garnered ${points} out of a possible ${maxPoints} points, using ${turns} turn${
        turns > 1 && 's'
    }.`,
    gemFits: 'The gem fits easily into the cavity.',
    getBatteries:
        "Your lamp is getting dim. You'd best go back for those batteries.",
    getsYou: 'It gets you!',
    goUnneeded:
        'You don\'t have to say "go" every time; just specify a direction or, if it\'s nearby, id the place to which you wish to move.',
    grateNoway: "You can't go through a locked steel grate!",
    groundWet: 'Your bottle is empty and the ground is wet.',
    handPassthrough: "Your hand passes through it as though it weren't there.",
    hintCost: (cost) => `I am prepared to give you a hint, but it will cost you ${cost} point${
        cost > 1 && 's'
    }.`,
    huhMan: 'Huh?',
    killedDwarf: 'You killed a little dwarf.',
    knifeThrown: 'One sharp nasty knife is thrown at you!',
    knivesVanish:
        "The dwarves' knives vanish as they strike the walls of the cave.",
    lampDim:
        "Your lamp is getting dim. You'd best start wrapping this up, unless you can find some fresh batteries. I seem to recall there's a vending machine in the maze. Bring some coins with you.",
    lampOut: 'Your lamp has run out of power.',
    lostAppetite: 'I think I just lost my appetite.',
    loudRoar: 'The roar is quite loud here.',
    missesYou: 'It misses!',
    missingBatteries:
        "Your lamp is getting dim, and you're out of spare batteries. You'd best start wrapping this up.",
    multipleHits: (number) => `${number} of them get you!`,
    murmuringSnoring:
        'You can hear the murmuring of the beanstalks and the snoring of the dwarves.',
    mustDrop:
        "Something you're carrying won't fit through the tunnel with you. You'd best take inventory and drop something.",
    nastyDragon: "The dragon looks rather nasty. You'd best not try to get by.",
    nearby: 'I can only tell you what you see as you move about and manipulate things. I cannot tell you where remote things are.',
    necklaceFly:
        'The bird flies about agitatedly for a moment, then disappears through the crack. It reappears shortly, carrying in its beak a jade necklace, ,which it drops at your feet.',
    needDetail: 'I need more detailed instructions to do that.',
    neededNearby: 'I daresay whatever you want is around here somewhere.',
    nextHigher: (points) => `To achieve the next higher rating, you need ${points} more point${
        points > 1 && 's'
    }.`,
    noCarry: "You're not carrying anything.",
    noContainer: 'You have nothing in which to carry it.',
    noCross: 'There is no way across the fissure.',
    noHigher:
        'To achieve the next higher rating would be a neat trick! Congratulations!!',
    noInoutHere:
        "I don't know in from out here. Use compass points or id something in the general direction you want to go.",
    noKeys: 'You have no keys!',
    noLiquid: 'There is nothing here with which to fill the bottle.',
    noLock: 'It has no lock.',
    noLocksite: 'There is nothing here to which the chain can be locked.',
    noMeaning: 'You are unable to make anything of the splashing noise.',
    noMessage: null,
    noMoreDetail:
        'Sorry, but I am not allowed to give more detail. I will repeat the long description of your location.',
    noSee: (input) => `I see no ${input} here.`,
    noTarget: 'There is nothing here to attack.',
    noneHit: 'None of them hits you!',
    notBright: "(Uh, y'know, that wasn\t very bright.)",
    notConnected: "You can't get there from here.",
    notKnowhow: "I don't know how.",
    notLockable: "I don't know how to lock or unlock such a thing.",
    nothingEdible: "There's nothing here it wants to eat (except perhaps you).",
    nothingHappens: 'Nothing happens.',
    nothingLocked: 'There is nothing here with a lock!',
    nowHolding: 'You are currently holding the following:',
    numericRequired: 'This command requires a numeric argument.',
    offScale: 'You just went off my scale!!',
    ogreDodge:
        'The ogre, who despite his bulk is quite agile, easily dodges your attack. He seems almost amused by your puny effort.',
    ogreFull: "The ogre doesn't appear to be hungry.",
    ogrePanic1:
        'The ogre, distracted by your rush, is struck by the knife. With a blood-curdling yell he turns and bounds after the dwarves, who flee in panic. You are left alone in the room.',
    ogrePanic2:
        'The ogre, distracted by your rush, is struck by the knife. With a blood-curdling yell he turns and bounds after the dwarf, who flees in panic. You are left alone in the room.',
    ogreSnarl: 'The ogre snarls and shoves you back.',
    oilUrn: 'Your bottle is now empty and the urn is full of oil.',
    okMan: 'OK',
    okeyDokey: (word) => `Okay, "${word}".`,
    oneHit: 'One of them gets you!',
    oysterBlocker:
        "You can't fit this five-foot oyster through that little passage!",
    oysterOpener: "You don't have anything strong enough to open the oyster.",
    oysterOpens:
        'The oyster creaks open, revealing nothing but oyster inside. It promptly snaps shut again.',
    pearlFalls:
        'A glistening pearl falls out of the clam and rolls away. Goodness, this must really be an oyster. (I never was very good at identifying bivalves.),Whatever it is, it has now snapped shut again.',
    peculiarNothing: 'Peculiar. Nothing unexpected happens.',
    piratePounces:
        'Out from the shadows behind you pounces a bearded pirate! "Har, har," he chortles, "I\'ll just take all this booty and hide it away with me chest deep in the maze!" He snatches your treasure and vanishes into the gloom.',
    pirateRustles:
        'There are faint rustling noises from the darkness behind you.',
    pirateSpotted:
        'There are faint rustling noises from the darkness behind you. As you turn toward them, the beam of your lamp falls across a bearded pirate. He ,is carrying a large chest. "Shiver me timbers!" he cries, "I\'ve been spotted! I\'d best hie meself off to the maze to hide me chest!" With that, he vanishes into the gloom.',
    pitFall: 'You fell into a pit and broke every bone in your body!',
    pitchDark:
        'It is now pitch dark. If you proceed you will likely fall into a pit.',
    pleaseAnswer: 'Please answer the question.',
    prodDwarf:
        'You prod the nearest dwarf, who wakes up grumpily, takes one look at you, curses, and grabs for his axe.',
    reallyMad:
        "You fool, dwarves eat only coal! Now you've made him *REALLY* mad!!",
    reallyQuit: 'Do you really want to quit now?',
    removeMessage:
        'You sift your fingers through the dust, but succeed only in obliterating the cryptic message.',
    replaceBatteries:
        "Your lamp is getting dim. I'm taking the liberty of replacing the batteries.",
    requiresDynamite: 'Blasting requires dynamite.',
    resumeAbandon:
        'To resume an earlier Adventure, you must abandon the current one.',
    resumeHelp:
        'To resume your Adventure, start a new game and then say "RESUME".',
    ridiculousAttempt: "Don't be ridiculous!",
    rockyTroll:
        'Trolls are close relatives with the rocks and have skin as tough as that of a rhinoceros. The troll fends off your blows effortlessly.',
    rugGoes:
        'You board the Persian rug, which promptly whisks you across the chasm. You have time for a fleeting glimpse of a two thousand foot drop to a mighty ,river; then you find yourself on the other side.',
    rugHovers: 'The rug hovers stubbornly where it is.',
    rugNothing1: 'The rug does not appear inclined to cooperate.',
    rugNothing2:
        'If you mean to use the Persian rug, it does not appear inclined to cooperate.',
    rugReturns: 'The rug ferries you back across the chasm.',
    rugRises: 'The Persian rug stiffens and rises a foot or so off the ground.',
    rugSettles: 'The Persian rug settles gently to the ground.',
    rugWiggles:
        'The Persian rug draped over your shoulder seems to wriggle for a moment, but then subsides.',
    rustyDoor: 'The door is extremely rusty and refuses to open.',
    saysPlugh: 'A hollow voice says "PLUGH".',
    shakingLeaves:
        'The plant indignantly shakes the oil off its leaves and asks, "Water?"',
    shatterVase:
        'The sudden change in temperature has delicately shattered the vase.',
    shellImpervious: 'The shell is very strong and is impervious to attack.',
    snakeWarning:
        "Attacking the snake both doesn't work and is very dangerous.",
    snakesHissing: 'A loud hissing emanates from the snake pit.',
    splatterMessage:
        'There is a loud explosion, and you are suddenly splashed across the walls of the room.',
    startOver: "What's the matter, can\t you read? Now you'd best start over.",
    stillLocked: 'The chain is still locked.',
    suspendWarning:
        'I can suspend your Adventure for you so that you can resume later, but it will cost you 5 points.',
    tameBear: 'You are being followed by a very large, tame bear.',
    thanksDelicious: 'Thank you, it was delicious!',
    thisAcceptable: 'Is this acceptable?',
    thrownKnives: (number) => `${number} of them throw knives at you!`,
    tooFar: 'It is too far up for you to reach.',
    tookLong: "It's a pity you took so long about it.",
    totalRoar: 'The roaring is so loud that it drowns out all other sound.',
    totalScore: (points, maxPoints, turns) => `You scored ${points} out of a possible ${maxPoints}, using ${turns} turn${
        turns > 1 && 's'
    }.`,
    trollBlocks: 'The troll refuses to let you cross.',
    trollReturns:
        'The troll deftly catches the axe, examines it carefully, and tosses it back, declaring, "Good workmanship, but it\'s not valuable enough."',
    trollSatisfied:
        'The troll catches your treasure and scurries away out of sight.',
    trollVices:
        "Gluttony is not one of the troll's vices. Avarice, however, is.",
    twistTurn:
        "Sorry, but the path twisted and turned so much that I can't figure out which way to go to get back.",
    twoWords: 'Please stick to 1and 2-word commands.',
    unhappyBird: 'Oh, leave the poor unhappy bird alone.',
    unsureFacing:
        'I am unsure how you are facing. Use compass points or nearby objects.',
    upstreamDownstream: 'Upstream or downstream?',
    urnGenies:
        'As you rub the urn, there is a flash of light and a genie appears. His aspect is stern as he advises: "One who wouldst traffic in precious stones ,must first learn to recognize the signals thereof." He wrests the urn from the stone, leaving a small cavity. Turning to face you again, he fixes you with a steely eye and intones: "Caution!" Genie and urn vanish in a cloud of amber smoke. The smoke condenses to form a rare amber gemstone, resting in the cavity in the rock.',
    urnNobudge:
        'The urn is far too firmly embedded for your puny strength to budge it.',
    urnNopour: "There's no way to get the oil out of the urn.",
    versionSkew: (saveVersion, programVersion) => `I'm sorry, but that Adventure was begun using Version ${saveVersion} of the save file format, and this program uses Version ${programVersion}. You must find an instance using that other version in order to resume that Adventure.`,
    victoryMessage:
        'There is a loud explosion, and a twenty-foot hole appears in the far wall, burying the dwarves in the rubble. You march through the hole and find yourself in the main office, where a cheering band of friendly elves carry the conquering adventurer off into the sunset.',
    wIsWest: 'If you prefer, simply type w rather than west.',
    wantHint: 'Do you want the hint?',
    waterUrn:
        'You empty the bottle into the urn, which promptly ejects the water with uncanny accuracy, squirting you directly between the eyes.',
    watersCrashing: 'The waters are crashing loudly against the shore.',
    wayBlocked:
        'You have crawled around in some little holes and found your way blocked by a recent cave-in. You are now back in the main passage.',
    wayoutClue:
        'It says, "There is a way out of this place. Do you need any more information to escape? Sorry, but this initial hint is all you get."',
    welcomeYou: 'Welcome to Adventure!!\nWould you like instructions?',
    wellPointless: 'Well, that was remarkably pointless.',
    whatDo: (object) => `What do you want to do with the ${object}?`,
    whereQuery: 'Where?',
    whichWay: 'Which way ?',
    windWhistles: 'The wind whistles coldly past your ears.',
    withoutSuspends:
        "Now let's see you do it without suspending in mid-Adventure.",
    youHaveit: 'I believe what you want is right here with you.',
    youJoking: "You can't be serious!",
}
