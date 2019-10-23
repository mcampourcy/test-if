// locations: They have attributes as follows...
//      long:         Long description, always shown on first encounter.
//      short:        Short description. If none, use long description.
//      conditions:   A dictionary of attributes
//        lit		Light
//        oily		If fluid flag is on: true for oil, false for water
//        fluid		Liquid asset
//        noarrr		Pirate doesn't go here unless following player
//        noback		Cannot use "back" to move away
//        hcave		Trying to get into cave
//        hbird		Trying to catch bird
//        hsnake		Trying to deal with snake
//        hmaze		Lost in maze
//        hdark		Pondering dark room
//        hwitt		At Witt's End
//        hcliff		Cliff with urn
//        hwoods		Lost in forest
//        hogre		Trying to deal with ogre
//        hjade		Found all treasures except jade
//      hints:        A list of yaml references to hints that may be available at
//                    this location. (This is why locations has to follow hints.)
//      sound:        Label for a location sound.
//      loud:         If true, object sounds are drowned out at this location.
//      travel:       A list of movement rules.  They're applied in the order
//                    they appear.  For a rule to fire, (1) the movement command
//                    must be a synonym for one of its verbs, and (2) the
//                    condition, if present, must evaluate to true. In that case
//                    the action fires.  The action may be a goTo (move to
//                    a named location) a speak (utter a named message), or
//                    a special (branch to special case in movement code).
//                    The conditional may be one of the following:
//                      [pct, N]       Roll a die, n% chance of success
//                      [carry, obj]   Must be carrying named object
//                      [with, obj]    Must be carrying or in room with
//                      [not, obj N]   Property of named obj must not be N.
//                                     N may be numeric or a state label.
//                      [nodwarves]    Dwarves must skip this rule.

export const locations = [
  {
    name: 'locNowhere',
    description: {
      long: null,
      short: null,
    },
    conditions: {},
    travel: [],
  },
  {
    name: 'locAlcove',
    description: {
      long: 'You are in an alcove. A small nw path seems to widen after a short distance. An extremely tight tunnel leads east. It looks like a very tight squeeze. An eerie light can be seen at the other end.',
      short: 'You\'re in alcove.',
    },
    conditions: { deep: true },
    hints: ['dark'],
    travel: [
      { verbs: ['nw', 'cavern'], action: { name: 'goTo', description: 'locMisty' } },
      { verbs: ['east', 'passa'], action: { name: 'special', description: 1 } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locPlover' } },
    ],
  },
  {
    name: 'locAlike1',
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    hints: ['maze'],
    travel: [
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locMistwest' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locAlike1' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locAlike2' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locAlike4' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locAlike11' } },
    ],
  },
  {
    name: 'locAlike2',
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    hints: ['maze'],
    travel: [
      { verbs: ['west'], action: { name: 'goTo', description: 'locAlike1' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locAlike3' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locAlike4' } },
    ],
  },
  {
    name: 'locAlike3',
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    hints: ['maze'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locAlike2' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locDeadend3' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locAlike6' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locDeadend9' } },
    ],
  },
  {
    name: 'locAlike4',
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    hints: ['maze'],
    travel: [
      { verbs: ['west'], action: { name: 'goTo', description: 'locAlike1' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locAlike2' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locDeadend1' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locDeadend2' } },
      { verbs: ['upwar', 'down'], action: { name: 'goTo', description: 'locAlike14' } },
    ],
  },
  {
    name: 'locAlike5',
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    hints: ['maze'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locAlike6' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locAlike7' } },
    ],
  },
  {
    name: 'locAlike6',
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    hints: ['maze'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locAlike3' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locAlike5' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locAlike7' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locAlike8' } },
    ],
  },
  {
    name: 'locAlike7',
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    hints: ['maze'],
    travel: [
      { verbs: ['west'], action: { name: 'goTo', description: 'locAlike5' } },
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locAlike6' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locAlike8' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locAlike9' } },
    ],
  },
  {
    name: 'locAlike8',
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    hints: ['maze'],
    travel: [
      { verbs: ['west'], action: { name: 'goTo', description: 'locAlike6' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locAlike7' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locAlike8' } },
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locAlike9' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locAlike10' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locDeadend11' } },
    ],
  },
  {
    name: 'locAlike9',
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    hints: ['maze'],
    travel: [
      { verbs: ['west'], action: { name: 'goTo', description: 'locAlike7' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locAlike8' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locDeadend4' } },
    ],
  },
  {
    name: 'locAlike10',
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    hints: ['maze'],
    travel: [
      { verbs: ['west'], action: { name: 'goTo', description: 'locAlike8' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locAlike10' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locDeadend5' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locPitbrink' } },
    ],
  },
  {
    name: 'locAlike11',
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    hints: ['maze'],
    travel: [
      { verbs: ['north'], action: { name: 'goTo', description: 'locAlike1' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locAlike11' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locAlike11' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locDeadend8' } },
    ],
  },
  {
    name: 'locAlike12',
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    hints: ['maze'],
    travel: [
      { verbs: ['north'], action: { name: 'goTo', description: 'locAlike1' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locAlike11' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locAlike11' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locDeadend8' } },
    ],
  },
  {
    name: 'locAlike13',
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    travel: [
      { verbs: ['north'], action: { name: 'goTo', description: 'locPitbrink' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locAlike12' } },
      { verbs: ['nw'], action: { name: 'goTo', description: 'locDeadend12' } },
    ],
  },
  {
    name: 'locAlike14',
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    travel: [
      { verbs: ['north'], action: { name: 'goTo', description: 'locPitbrink' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locAlike12' } },
      { verbs: ['nw'], action: { name: 'goTo', description: 'locDeadend12' } },
    ],
  },
  {
    name: 'locAnteroom',
    description: {
      long: 'You are in an anteroom leading to a large passage to the east. Small passages go west and up. The remnants of recent digging are evident. A sign in midair here says "Cave under construction beyond this point. Proceed at own risk. [Witt Construction Company]"',
      short: 'You\'re in anteroom.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locComplex' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locBedquilt' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locWittsend' } },
    ],
  },
  {
    name: 'locArched',
    description: {
      long: 'You are in an arched hall. A coral passage once continued up and east from here, but is now blocked by debris. The air smells of sea water.',
      short: 'You\'re in arched hall.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['down', 'shell', 'out'], action: { name: 'goTo', description: 'locShellroom' } },
    ],
  },
  {
    name: 'locAwkward',
    description: {
      long: 'You are in an awkward sloping east/west canyon.',
      short: null,
    },
    conditions: {},
    travel: [
      {
        verbs: ['depre'],
        action: {
          name: 'goTo',
          description: 'locGrate',
          condition: {
            type: 'object',
            object: 'grate',
            state: 'grateOpen',
          },
          conditionFailed: { name: 'speak', description: 'grateNoway' },
        },
      },
      { verbs: ['entra'], action: { name: 'goTo', description: 'locBelowgrate' } },
      { verbs: ['down', 'east', 'debri'], action: { name: 'goTo', description: 'locDebris' } },
      { verbs: ['inside', 'upwar', 'west'], action: { name: 'goTo', description: 'locBird' } },
      { verbs: ['pit'], action: { name: 'goTo', description: 'locPittop' } },
    ],
  },
  {
    name: 'locBaddirection',
    description: {
      long: 'There is no way to go that direction.',
      short: null,
    },
    conditions: { deep: true },
    travel: [{ verbs: ['pit'], action: { name: 'goTo', description: 'locDeadend13' } }],
  },
  {
    name: 'locBarrenfront',
    description: {
      long: 'You are standing at the entrance to a large, barren room. A notice above the entrance reads: "Caution! Bear in room!"',
      short: 'You\'re in front of Barren Room.',
    },
    conditions: { noarr: true, deep: true },
    travel: [
      { verbs: ['west', 'upwar'], action: { name: 'goTo', description: 'locLimestone' } },
      { verbs: ['fork'], action: { name: 'goTo', description: 'locFork' } },
      {
        verbs: ['east', 'inside', 'barre', 'enter'],
        action: { name: 'goTo', description: 'locBarrenroom' },
      },
      { verbs: ['view'], action: { name: 'goTo', description: 'locBreathtaking' } },
    ],
  },
  {
    name: 'locBarrenroom',
    description: {
      long: 'You are inside a barren room. The center of the room is completely empty except for some dust. Marks in the dust lead away toward the far end of the room. The only exit is the way you came in.',
      short: 'You\'re in Barren Room.',
    },
    conditions: { noarr: true, deep: true },
    travel: [
      { verbs: ['west', 'out'], action: { name: 'goTo', description: 'locBarrenfront' } },
      { verbs: ['fork'], action: { name: 'goTo', description: 'locFork' } },
      { verbs: ['view'], action: { name: 'goTo', description: 'locBreathtaking' } },
    ],
  },
  {
    name: 'locBedquilt',
    description: {
      long: 'You are in Bedquilt, a long east/west passage with holes everywhere. To explore at random select north, south, up, or down.',
      short: 'You\'re in Bedquilt.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locComplex' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locSwisscheese' } },
      {
        verbs: ['south'],
        action: {
          name: 'speak',
          description: 'futileCrawl',
          // condition: [pct, 65],
        },
      },
      { verbs: ['slab'], action: { name: 'goTo', description: 'locSlab' } },
      // { verbs: ['upwar], cond: [pct, 60], action: { name: 'speak', description: ''futileCrawl'' } },
      // { verbs: ['upwar], cond: [pct, 70], action: { name: 'goTo', description: 'locSecret2' } },
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locDusty' } },
      // { verbs: ['north], cond: [pct, 50], action: { name: 'speak', description: ''futileCrawl'' } },
      // { verbs: ['north], cond: [pct, 75], action: { name: 'goTo', description: 'locLowroom' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locThreejunction' } },
      {
        verbs: ['down'],
        action: {
          name: 'speak',
          description: 'futileCrawl',
          // condition: [pct, 65],
          conditionFailed: { name: 'goTo', description: 'locAnteroom' },
        },
      },
    ],
  },
  {
    name: 'locBelowgrate',
    description: {
      long: 'You are in a small chamber beneath a 3x3 steel grate to the surface. A low crawl over cobbles leads inward to the west.',
      short: 'You\'re below the grate.',
    },
    conditions: { lit: true },
    travel: [
      {
        verbs: ['out'],
        action: {
          name: 'goTo',
          description: 'locGrate',
          condition: {
            type: 'object',
            object: 'grate',
            state: 'grateOpen',
          },
          conditionFailed: { name: 'speak', description: 'grateNoway' },
        },
      },
      {
        verbs: ['crawl', 'cobbl', 'inside', 'west'],
        action: { name: 'goTo', description: 'locCobble' },
      },
      { verbs: ['pit'], action: { name: 'goTo', description: 'locPittop' } },
      { verbs: ['debri'], action: { name: 'goTo', description: 'locDebris' } },
    ],
  },
  {
    name: 'locBird',
    description: {
      long: 'You are in a splendid chamber thirty feet high. The walls are frozen rivers of orange stone. An awkward canyon and a good passage exit from east and west sides of the chamber.',
      short: 'You\'re in bird chamber.',
    },
    conditions: {},
    hints: ['bird'],
    travel: [
      {
        verbs: ['depre'],
        action: {
          name: 'goTo',
          description: 'locGrate',
          condition: {
            type: 'object',
            object: 'grate',
            state: 'grateOpen',
          },
          conditionFailed: { name: 'speak', description: 'grateNoway' },
        },
      },
      { verbs: ['entra'], action: { name: 'goTo', description: 'locBelowgrate' } },
      { verbs: ['debri'], action: { name: 'goTo', description: 'locDebris' } },
      { verbs: ['canyo', 'east'], action: { name: 'goTo', description: 'locAwkward' } },
      { verbs: ['passa', 'pit', 'west'], action: { name: 'goTo', description: 'locPittop' } },
    ],
  },
  {
    name: 'locBoulders1',
    description: {
      long: 'The canyon runs into a mass of boulders -- dead end.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['south'], action: { name: 'goTo', description: 'locTall' } },
    ],
  },
  {
    name: 'locBoulders2',
    description: {
      long: 'You are in a small chamber filled with large boulders. The walls are very warm, causing the air in the room to be almost stifling from the heat. The only exit is a crawl heading west, through which is coming a low rumbling.',
      short: 'You\'re in Chamber of Boulders.',
    },
    conditions: { noarr: true, deep: true },
    sound: 'dullRumbling',
    travel: [
      { verbs: ['west', 'out', 'crawl'], action: { name: 'goTo', description: 'locWarmwalls' } },
      { verbs: ['fork'], action: { name: 'goTo', description: 'locFork' } },
      { verbs: ['view'], action: { name: 'goTo', description: 'locBreathtaking' } },
    ],
  },
  {
    name: 'locBreathtaking',
    description: {
      long: 'You are on the edge of a breath-taking view. Far below you is an active volcano, from which great gouts of molten lava come surging out, cascading back down into the depths. The glowing rock fills the farthest reaches of the cavern with a blood-red glare, giving everything an eerie, macabre appearance. The air is filled with flickering sparks of ash and a heavy smell of brimstone. The walls are hot to the touch, and the thundering of the volcano drowns out all other sounds. Embedded in the jagged roof far overhead are myriad twisted formations composed of pure white alabaster, which scatter the murky light into sinister apparitions upon the walls. To one side is a deep gorge, filled with a bizarre chaos of tortured rock which seems to have been crafted by the devil himself. An immense river of fire crashes out from the depths of the volcano, burns its way through the gorge, and plummets into a bottomless pit far off to your left. To the right, an immense geyser of blistering steam erupts continuously from a barren island in the center of a sulfurous lake, which bubbles ominously. The far right wall is aflame with an incandescence of its own, which lends an additional infernal splendor to the already hellish scene. A dark, foreboding passage exits to the south.',
      short: 'You\'re at breath-taking view.',
    },
    conditions: { noarr: true, lit: true, deep: true },
    hints: ['jade'],
    sound: 'totalRoar',
    loud: true,
    travel: [
      { verbs: ['south', 'passa', 'out'], action: { name: 'goTo', description: 'locWarmwalls' } },
      { verbs: ['fork'], action: { name: 'goTo', description: 'locFork' } },
      { verbs: ['down'], action: { name: 'speak', description: 'ridiculousAttempt' } },
      { verbs: ['jump'], action: { name: 'goTo', description: 'locGruesome' } },
    ],
  },
  {
    name: 'locBroken',
    description: {
      long: 'You are in a dirty broken passage. To the east is a crawl. To the west is a large passage.  Above you is a hole to another passage.',
      short: 'You\'re in dirty passage.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['east', 'crawl'], action: { name: 'goTo', description: 'locSmallpitbrink' } },
      { verbs: ['upwar', 'hole'], action: { name: 'goTo', description: 'locFloorhole' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locDusty' } },
      { verbs: ['bedquilt'], action: { name: 'goTo', description: 'locBedquilt' } },
    ],
  },
  {
    name: 'locBuilding',
    description: {
      long: 'You are inside a building, a well house for a large spring.',
      short: 'You\'re inside building.',
    },
    conditions: { fluid: true, above: true, lit: true },
    sound: 'streamGurgles',
    travel: [
      {
        verbs: ['out', 'outdo', 'west'],
        action: { name: 'goTo', description: 'locStart' },
      },
      { verbs: ['xyzzy'], action: { name: 'goTo', description: 'locFoof1' } },
      { verbs: ['plugh'], action: { name: 'goTo', description: 'locFoof3' } },
      { verbs: ['downs', 'strea'], action: { name: 'goTo', description: 'locSewer' } },
    ],
  },
  {
    name: 'locBuilding1',
    description: {
      long: '',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      {
        verbs: [],
        action: {
          name: 'goTo',
          description: 'locNoclimb',
          condition: {
            type: 'object',
            object: 'plant',
            // state: 'plantThirsty',
            // state: 'plantGrown',
          },
          conditionFailed: { name: 'goTo', description: 'locPlanttop' },
        },
      },
    ],
  },
  {
    name: 'locCavein',
    description: {
      long: 'The passage here is blocked by a recent cave-in.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['south', 'giant', 'out'], action: { name: 'goTo', description: 'locGiantroom' } },
    ],
  },
  {
    name: 'locCliff',
    description: {
      long: 'The forest thins out here to reveal a steep cliff.  There is no way down, but a small ledge can be seen to the west across the chasm.',
      short: 'You\'re at cliff.',
    },
    conditions: { above: true, noback: true, lit: true },
    hints: ['urn'],
    travel: [
      { verbs: ['south', 'fores'], action: { name: 'goTo', description: 'locForest17' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locForest19' } },
      { verbs: ['jump'], action: { name: 'goTo', description: 'locNomake' } },
    ],
  },
  {
    name: 'locClifface',
    description: {
      long: 'You are climbing along a nearly vertical cliff.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['down'], action: { name: 'goTo', description: 'locCliffbase' } },
      {
        verbs: ['upwar'],
        action: {
          name: 'goTo',
          description: 'locClifftop',
          condition: {
            type: 'carry',
            object: 'obj46',
          },
          conditionFailed: { name: 'goTo', description: 'locFootslip' },
        },
      },
    ],
  },
  {
    name: 'locCliffbase',
    description: {
      long: 'You are at the base of a nearly vertical cliff. There are some slim footholds which would enable you to climb up, but it looks extremely dangerous. Here at the base of the cliff lie the remains of several earlier adventurers who apparently failed to make it.',
      short: 'You\'re at base of cliff.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['down', 'se'], action: { name: 'goTo', description: 'locSteep' } },
      { verbs: ['upwar', 'climb'], action: { name: 'goTo', description: 'locClifface' } },
    ],
  },
  {
    name: 'locCliffledge',
    description: {
      long: 'You are on a small ledge at the top of a nearly vertical cliff. There is a low crawl leading off to the northeast.',
      short: 'You\'re at top of cliff.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['climb', 'down'], action: { name: 'goTo', description: 'locClifface' } },
      { verbs: ['ne', 'crawl'], action: { name: 'goTo', description: 'locReachdead' } },
    ],
  },
  {
    name: 'locClifftop',
    description: {
      long: 'Just as you reach the top, your foot slips on a loose rock and you make one last desperate grab. Your luck holds, as does your grip. With an enormous heave, you lift yourself to the ledge above.',
      short: null,
    },
    conditions: { deep: true },
    travel: [{ verbs: [], action: { name: 'goTo', description: 'locCliffledge' } }],
  },
  {
    name: 'locClimbstalk',
    description: {
      long: 'You clamber up the plant and scurry through the hole at the top.',
      short: null,
    },
    conditions: { deep: true },
    travel: [{ verbs: [], action: { name: 'goTo', description: 'locNarrow' } }],
  },
  {
    name: 'locCobble',
    description: {
      long: 'You are crawling over cobbles in a low passage.  There is a dim light at the east end of the passage.',
      short: 'You\'re in cobble crawl.',
    },
    conditions: { lit: true },
    travel: [
      { verbs: ['out', 'surfa', 'east'], action: { name: 'goTo', description: 'locBelowgrate' } },
      {
        verbs: ['inside', 'dark', 'west', 'debri'],
        action: { name: 'goTo', description: 'locDebris' },
      },
      { verbs: ['pit'], action: { name: 'goTo', description: 'locPittop' } },
      { verbs: ['out', 'surfa', 'east'], action: ['goTo', 'locBelowgrate'] },
    ],
  },
  {
    name: 'locComplex',
    description: {
      long: 'You are at a complex junction. A low hands and knees passage from the north joins a higher crawl from the east to make a walking passage going west. There is also a large room above. The air is damp here.',
      short: 'You\'re at complex junction.',
    },
    conditions: { deep: true },
    hints: ['jade'],
    sound: 'windWhistles',
    travel: [
      { verbs: ['upwar', 'climb', 'room'], action: { name: 'goTo', description: 'locDusty' } },
      { verbs: ['west', 'bedquilt'], action: { name: 'goTo', description: 'locBedquilt' } },
      { verbs: ['north', 'shell'], action: { name: 'goTo', description: 'locShellroom' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locAnteroom' } },
    ],
  },
  {
    name: 'locCorridor',
    description: {
      long: 'You\'re in a long east/west corridor. A faint rumbling noise can be heard in the distance.',
      short: 'You\'re in corridor.',
    },
    conditions: { noarr: true, deep: true },
    sound: 'dullRumbling',
    travel: [
      { verbs: ['west'], action: { name: 'goTo', description: 'locNechasm' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locFork' } },
      { verbs: ['view'], action: { name: 'goTo', description: 'locBreathtaking' } },
      { verbs: ['barre'], action: { name: 'goTo', description: 'locBarrenfront' } },
    ],
  },
  {
    name: 'locCrack',
    description: {
      long: 'The crack is far too small for you to follow.  At its widest it is barely wide enough to admit your foot.',
      short: null,
    },
    conditions: { deep: true },
    travel: [{ verbs: [], action: { name: 'goTo', description: 'locPittop' } }],
  },
  {
    name: 'locCrossover',
    description: {
      long: 'You are at a crossover of a high n/s passage and a low e/w one.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['west'], action: { name: 'goTo', description: 'locLongeast' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locDeadend7' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locWestside' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locLongwest' } },
    ],
  },
  {
    name: 'locDarkroom',
    description: {
      long: 'You\'re in the dark-room. A corridor leading south is the only exit.',
      short: 'You\'re in dark-room.',
    },
    conditions: { deep: true },
    hints: ['dark'],
    travel: [{
      verbs: ['south', 'plove', 'out'],
      action: { name: 'goTo', description: 'locPlover' },
    }],
  },
  {
    name: 'locCuldesac',
    description: {
      long: 'You are in a cul-de-sac about eight feet across.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['upwar', 'out'], action: { name: 'goTo', description: 'locSloping1' } },
      { verbs: ['shell'], action: { name: 'goTo', description: 'locShellroom' } },
    ],
  },
  {
    name: 'locDeadcrawl',
    description: {
      long: 'Dead end crawl.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['south', 'crawl', 'out'], action: { name: 'goTo', description: 'locLowroom' } },
    ],
  },
  {
    name: 'locDeadend1',
    description: {
      long: 'Dead end',
      short: null,
    },
    conditions: { deep: true, noarrr: true },
    hints: ['maze'],
    travel: [
      { verbs: ['west', 'out'], action: { name: 'goTo', description: 'locAlike4' } },
    ],
  },
  {
    name: 'locDeadend2',
    description: {
      long: 'Dead end',
      short: null,
    },
    conditions: { deep: true, noarrr: true },
    hints: ['maze'],
    travel: [
      { verbs: ['east', 'out'], action: { name: 'goTo', description: 'locAlike4' } },
    ],
  },
  {
    name: 'locDeadend3',
    description: {
      long: 'Dead end',
      short: null,
    },
    conditions: { deep: true, noarrr: true },
    hints: ['maze'],
    travel: [
      { verbs: ['upwar', 'out'], action: { name: 'goTo', description: 'locAlike3' } },
    ],
  },
  {
    name: 'locDeadend4',
    description: {
      long: 'Dead end',
      short: null,
    },
    conditions: { deep: true, noarrr: true },
    hints: ['maze'],
    travel: [
      { verbs: ['west', 'out'], action: { name: 'goTo', description: 'locAlike9' } },
    ],
  },
  {
    name: 'locDeadend5',
    description: {
      long: 'Dead end',
      short: null,
    },
    conditions: { deep: true, noarrr: true },
    hints: ['maze'],
    travel: [
      { verbs: ['upwar', 'out'], action: { name: 'goTo', description: 'locAlike10' } },
    ],
  },
  {
    name: 'locDeadend6',
    description: {
      long: 'Dead end',
      short: null,
    },
    conditions: { deep: true, noarrr: true },
    travel: [
      { verbs: ['east', 'out'], action: { name: 'goTo', description: 'locPitbrink' } },
    ],
  },
  {
    name: 'locDeadend7',
    description: {
      long: 'Dead end',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['south', 'out'], action: { name: 'goTo', description: 'locCrossover' } },
    ],
  },
  {
    name: 'locDeadend8',
    description: {
      long: 'Dead end',
      short: null,
    },
    conditions: { deep: true },
    hints: ['maze'],
    travel: [
      { verbs: ['west', 'out'], action: { name: 'goTo', description: 'locAlike11' } },
    ],
  },
  {
    name: 'locDeadend9',
    description: {
      long: 'Dead end',
      short: null,
    },
    conditions: { deep: true, noarrr: true },
    hints: ['maze'],
    travel: [
      { verbs: ['south', 'out'], action: { name: 'goTo', description: 'locAlike3' } },
    ],
  },
  {
    name: 'locDeadend10',
    description: {
      long: 'Dead end',
      short: null,
    },
    conditions: { deep: true, noarrr: true },
    travel: [
      { verbs: ['east', 'out'], action: { name: 'goTo', description: 'locAlike12' } },
    ],
  },
  {
    name: 'locDeadend11',
    description: {
      long: 'Dead end',
      short: null,
    },
    conditions: { deep: true, noarrr: true },
    hints: ['maze'],
    travel: [
      { verbs: ['upwar', 'out'], action: { name: 'goTo', description: 'locAlike8' } },
    ],
  },
  {
    name: 'locDeadend12',
    description: {
      long: 'Dead end',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['se'], action: { name: 'goTo', description: 'locAlike13' } },
    ],
  },
  {
    name: 'locDeadend13',
    description: {
      long: 'Dead end',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['north', 'out'], action: { name: 'goTo', description: 'locDifferent2' } },
      {
        verbs: ['south'],
        action: {
          name: 'goTo',
          description: 'locRoughhewn',
          condition: {
            type: 'object',
            object: 'vend',
            state: 'vendUnblocks',
          },
          conditionFailed: { name: 'goTo', description: 'locBaddirection' },
        },
      },
    ],
  },
  {
    name: 'locDebris',
    description: {
      long: 'You are in a debris room filled with stuff washed in from the surface. A low wide passage with cobbles becomes plugged with mud and debris here, but an awkward canyon leads upward and west. In the mud someone has scrawled, "magic word xyzzy".',
      short: 'You\'re in debris room.',
    },
    conditions: {},
    travel: [
      {
        verbs: ['depre'],
        action: {
          name: 'goTo',
          description: 'locGrate',
          condition: {
            type: 'object',
            object: 'grate',
            state: 'grateOpen',
          },
          conditionFailed: { name: 'speak', description: 'grateNoway' },
        },
      },
      { verbs: ['entra'], action: { name: 'goTo', description: 'locBelowgrate' } },
      {
        verbs: ['crawl', 'cobbl', 'passa', 'low', 'east'],
        action: { name: 'goTo', description: 'locCobble' },
      },
      {
        verbs: ['canyo', 'inside', 'upwar', 'west'],
        action: { name: 'goTo', description: 'locAwkward' },
      },
      { verbs: ['xyzzy'], action: { name: 'goTo', description: 'locFoof2' } },
      { verbs: ['pit'], action: { name: 'goTo', description: 'locPittop' } },
    ],
  },
  {
    name: 'locDifferent1',
    description: {
      long: 'You are in a maze of twisty little passages, all different.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    travel: [
      { verbs: ['south'], action: { name: 'goTo', description: 'locDifferent3' } },
      { verbs: ['sw'], action: { name: 'goTo', description: 'locDifferent4' } },
      { verbs: ['ne'], action: { name: 'goTo', description: 'locDifferent5' } },
      { verbs: ['se'], action: { name: 'goTo', description: 'locDifferent6' } },
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locDifferent7' } },
      { verbs: ['nw'], action: { name: 'goTo', description: 'locDifferent8' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locDifferent9' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locDifferent10' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locDifferent11' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locLongwest' } },
    ],
  },
  {
    name: 'locDifferent2',
    description: {
      long: 'You are in a little maze of twisting passages, all different.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    travel: [
      { verbs: ['sw'], action: { name: 'goTo', description: 'locDifferent3' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locDifferent4' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locDifferent5' } },
      { verbs: ['nw'], action: { name: 'goTo', description: 'locDifferent6' } },
      { verbs: ['se'], action: { name: 'goTo', description: 'locDifferent7' } },
      { verbs: ['ne'], action: { name: 'goTo', description: 'locDifferent8' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locDifferent9' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locDifferent10' } },
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locDifferent11' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locDeadend13' } },
    ],
  },
  {
    name: 'locDifferent3',
    description: {
      long: 'You are in a maze of twisting little passages, all different.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    travel: [
      { verbs: ['west'], action: { name: 'goTo', description: 'locDifferent1' } },
      { verbs: ['se'], action: { name: 'goTo', description: 'locDifferent4' } },
      { verbs: ['nw'], action: { name: 'goTo', description: 'locDifferent5' } },
      { verbs: ['sw'], action: { name: 'goTo', description: 'locDifferent6' } },
      { verbs: ['ne'], action: { name: 'goTo', description: 'locDifferent7' } },
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locDifferent8' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locDifferent9' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locDifferent10' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locDifferent11' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    name: 'locDifferent4',
    description: {
      long: 'You are in a little maze of twisty passages, all different.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    travel: [
      { verbs: ['nw'], action: { name: 'goTo', description: 'locDifferent1' } },
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locDifferent3' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locDifferent5' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locDifferent6' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locDifferent7' } },
      { verbs: ['sw'], action: { name: 'goTo', description: 'locDifferent8' } },
      { verbs: ['ne'], action: { name: 'goTo', description: 'locDifferent9' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locDifferent10' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locDifferent11' } },
      { verbs: ['se'], action: { name: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    name: 'locDifferent5',
    description: {
      long: 'You are in a twisting maze of little passages, all different.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    travel: [
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locDifferent1' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locDifferent3' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locDifferent4' } },
      { verbs: ['ne'], action: { name: 'goTo', description: 'locDifferent6' } },
      { verbs: ['sw'], action: { name: 'goTo', description: 'locDifferent7' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locDifferent8' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locDifferent9' } },
      { verbs: ['nw'], action: { name: 'goTo', description: 'locDifferent10' } },
      { verbs: ['se'], action: { name: 'goTo', description: 'locDifferent11' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    name: 'locDifferent6',
    description: {
      long: 'You are in a twisting little maze of passages, all different.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    travel: [
      { verbs: ['ne'], action: { name: 'goTo', description: 'locDifferent1' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locDifferent3' } },
      { verbs: ['nw'], action: { name: 'goTo', description: 'locDifferent4' } },
      { verbs: ['se'], action: { name: 'goTo', description: 'locDifferent5' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locDifferent7' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locDifferent8' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locDifferent9' } },
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locDifferent10' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locDifferent11' } },
      { verbs: ['sw'], action: { name: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    name: 'locDifferent7',
    description: {
      long: 'You are in a twisty little maze of passages, all different.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    travel: [
      { verbs: ['north'], action: { name: 'goTo', description: 'locDifferent1' } },
      { verbs: ['se'], action: { name: 'goTo', description: 'locDifferent3' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locDifferent4' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locDifferent5' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locDifferent6' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locDifferent8' } },
      { verbs: ['sw'], action: { name: 'goTo', description: 'locDifferent9' } },
      { verbs: ['ne'], action: { name: 'goTo', description: 'locDifferent10' } },
      { verbs: ['nw'], action: { name: 'goTo', description: 'locDifferent11' } },
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    name: 'locDifferent8',
    description: {
      long: 'You are in a twisty maze of little passages, all different.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locDifferent1' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locDifferent3' } },
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locDifferent4' } },
      { verbs: ['sw'], action: { name: 'goTo', description: 'locDifferent5' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locDifferent6' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locDifferent7' } },
      { verbs: ['nw'], action: { name: 'goTo', description: 'locDifferent9' } },
      { verbs: ['se'], action: { name: 'goTo', description: 'locDifferent10' } },
      { verbs: ['ne'], action: { name: 'goTo', description: 'locDifferent11' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    name: 'locDifferent9',
    description: {
      long: 'You are in a little twisty maze of passages, all different.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    travel: [
      { verbs: ['se'], action: { name: 'goTo', description: 'locDifferent1' } },
      { verbs: ['ne'], action: { name: 'goTo', description: 'locDifferent3' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locDifferent4' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locDifferent5' } },
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locDifferent6' } },
      { verbs: ['nw'], action: { name: 'goTo', description: 'locDifferent7' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locDifferent8' } },
      { verbs: ['sw'], action: { name: 'goTo', description: 'locDifferent10' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locDifferent11' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    name: 'locDifferent10',
    description: {
      long: 'You are in a maze of little twisting passages, all different.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    travel: [
      { verbs: ['down'], action: { name: 'goTo', description: 'locDifferent1' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locDifferent3' } },
      { verbs: ['ne'], action: { name: 'goTo', description: 'locDifferent4' } },
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locDifferent5' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locDifferent6' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locDifferent7' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locDifferent8' } },
      { verbs: ['se'], action: { name: 'goTo', description: 'locDifferent9' } },
      { verbs: ['sw'], action: { name: 'goTo', description: 'locDifferent11' } },
      { verbs: ['nw'], action: { name: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    name: 'locDifferent11',
    description: {
      long: 'You are in a maze of little twisty passages, all different.',
      short: null,
    },
    conditions: { deep: true, noback: true },
    travel: [
      { verbs: ['sw'], action: { name: 'goTo', description: 'locDifferent1' } },
      { verbs: ['nw'], action: { name: 'goTo', description: 'locDifferent3' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locDifferent4' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locDifferent5' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locDifferent6' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locDifferent7' } },
      { verbs: ['se'], action: { name: 'goTo', description: 'locDifferent8' } },
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locDifferent9' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locDifferent10' } },
      { verbs: ['ne'], action: { name: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    name: 'locDome',
    description: {
      long: 'The dome is unclimbable.',
      short: null,
    },
    conditions: { deep: true },
    travel: [{ verbs: [], action: { name: 'goTo', description: 'locMisthall' } }],
  },
  {
    name: 'locDusty',
    description: {
      long: 'You are in a large room full of dusty rocks. There is a big hole in the floor. There are cracks everywhere, and a passage leading east.',
      short: 'You\'re in dusty rock room.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['east', 'passa'], action: { name: 'goTo', description: 'locBroken' } },
      { verbs: ['down', 'hole', 'floor'], action: { name: 'goTo', description: 'locComplex' } },
      { verbs: ['bedquilt'], action: { name: 'goTo', description: 'locBedquilt' } },
    ],
  },
  {
    name: 'locEastbank',
    description: {
      long: 'You are on the east bank of a fissure slicing clear across the hall. The mist is quite thick here, and the fissure is too wide to jump.',
      short: 'You\'re on east bank of fissure.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['hall', 'east'], action: { name: 'goTo', description: 'locMisthall' } },
      {
        verbs: ['jump'],
        action: {
          name: 'speak',
          description: 'crossBridge',
          condition: {
            type: 'object',
            object: 'fissure',
            state: 'bridged',
          },
        },
      },
      {
        verbs: ['forwa'],
        action: {
          name: 'goTo',
          description: 'locNomake',
          condition: {
            type: 'object',
            object: 'fissure',
            state: 'bridged',
          },
        },
      },
      {
        verbs: ['over', 'acros', 'west', 'cross'],
        action: {
          name: 'speak',
          description: 'noCross',
          condition: {
            type: 'object',
            object: 'fissure',
            state: 'unbridged',
          },
        },
      },
      { verbs: ['over'], action: { name: 'goTo', description: 'locWestbank' } },
    ],
  },
  {
    name: 'locEastend',
    description: {
      long: 'You are at the east end of the Twopit Room. The floor here is littered with thin rock slabs, which make it easy to descend the pits. There is a path here bypassing the pits to connect passages from east and west. There are holes all over, but the only big one is on the wall directly over the west pit where you can\'t get to it.',
      short: 'You\'re at east end of Twopit Room.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locSwisscheese' } },
      { verbs: ['west', 'acros'], action: { name: 'goTo', description: 'locWestend' } },
      { verbs: ['down', 'pit'], action: { name: 'goTo', description: 'locEastpit' } },
    ],
  },
  {
    name: 'locEastpit',
    description: {
      long: 'You are at the bottom of the eastern pit in the Twopit Room. There is a small pool of oil in one corner of the pit.',
      short: 'You\'re in east pit.',
    },
    conditions: { fluid: true, deep: true, oily: true },
    travel: [
      { verbs: ['upwar', 'out'], action: { name: 'goTo', description: 'locEastend' } },
    ],
  },
  {
    name: 'locFloorhole',
    description: {
      long: 'You are in a low n/s passage at a hole in the floor. The hole goes down to an e/w passage.',
      short: 'You\'re in n/s passage above e/w passage.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['hall', 'out', 'south'], action: { name: 'goTo', description: 'locKinghall' } },
      { verbs: ['north', 'Y2'], action: { name: 'goTo', description: 'locY2' } },
      { verbs: ['down', 'hole'], action: { name: 'goTo', description: 'locBroken' } },
    ],
  },
  {
    name: 'locFoof1',
    description: {
      long: '>>Foof!<<',
      short: null,
    },
    conditions: {},
    travel: [{ verbs: [], action: { name: 'goTo', description: 'locDebris' } }],
  },
  {
    name: 'locFoof2',
    description: {
      long: '>>Foof!<<',
      short: null,
    },
    conditions: { above: true },
    travel: [{ verbs: [], action: { name: 'goTo', description: 'locBuilding' } }],
  },
  {
    name: 'locFoof3',
    description: {
      long: '>>Foof!<<',
      short: null,
    },
    conditions: { deep: true },
    travel: [{ verbs: [], action: { name: 'goTo', description: 'locY2' } }],
  },
  {
    name: 'locFoof4',
    description: {
      long: '>>Foof!<<',
      short: null,
    },
    conditions: { above: true },
    travel: [{ verbs: [], action: { name: 'goTo', description: 'locBuilding' } }],
  },
  {
    name: 'locFoof5',
    description: {
      long: '>>Foof!<<',
      short: null,
    },
    conditions: { deep: true },
    travel: [{ verbs: [], action: { name: 'goTo', description: 'locPlover' } }],
  },
  {
    name: 'locFoof6',
    description: {
      long: '>>Foof!<<',
      short: null,
    },
    conditions: { deep: true },
    travel: [{ verbs: [], action: { name: 'goTo', description: 'locY2' } }],
  },
  {
    name: 'locFootslip',
    description: {
      long: 'Just as you reach the top, your foot slips on a loose rock and you tumble several hundred feet to join the other unlucky adventurers.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: [], action: { name: 'goTo', description: 'locNowhere' } },
    ],
  },
  {
    name: 'locForest1',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locStart' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest13' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locForest2' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest3' } },
    ],
  },
  {
    name: 'locForest2',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locForest1' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest19' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locForest3' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest18' } },
    ],
  },
  {
    name: 'locForest3',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east', 'west'], action: { name: 'goTo', description: 'locForest4' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locForest2' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest1' } },
    ],
  },
  {
    name: 'locForest4',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east', 'north'], action: { name: 'goTo', description: 'locForest3' } },
      { verbs: ['west', 'south'], action: { name: 'goTo', description: 'locForest5' } },
    ],
  },
  {
    name: 'locForest5',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east', 'north'], action: { name: 'goTo', description: 'locForest4' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest7' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest6' } },
    ],
  },
  {
    name: 'locForest6',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locForest5' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest7' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locValley' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locSlit' } },
    ],
  },
  {
    name: 'locForest7',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locForest5' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest6' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locGrate' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest8' } },
    ],
  },
  {
    name: 'locForest8',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locForest9' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest11' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locForest22' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest7' } },
    ],
  },
  {
    name: 'locForest9',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locForest11' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest8' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locForest10' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locGrate' } },
    ],
  },
  {
    name: 'locForest10',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locSlit' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest11' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locForest9' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locGrate' } },
    ],
  },
  {
    name: 'locForest11',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locForest10' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest8' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locForest22' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest9' } },
    ],
  },
  {
    name: 'locForest12',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locForest13' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest14' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locForest22' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locValley' } },
    ],
  },
  {
    name: 'locForest13',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locForest1' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest12' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locForest20' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locHill' } },
    ],
  },
  {
    name: 'locForest14',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locRoadend' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest16' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locForest15' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest12' } },
    ],
  },
  {
    name: 'locForest15',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locForest16' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest22' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locRoadend' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest14' } },
    ],
  },
  {
    name: 'locForest16',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east', 'north'], action: { name: 'goTo', description: 'locForest17' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest14' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest15' } },
    ],
  },
  {
    name: 'locForest17',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locForest18' } },
      { verbs: ['west', 'south'], action: { name: 'goTo', description: 'locForest16' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locCliff' } },
    ],
  },
  {
    name: 'locForest18',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locForest19' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest17' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locForest2' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest21' } },
    ],
  },
  {
    name: 'locForest19',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locForest2' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest18' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locCliff' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest20' } },
    ],
  },
  {
    name: 'locForest20',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locHill' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest21' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locForest19' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest13' } },
    ],
  },
  {
    name: 'locForest21',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locForest20' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locRoadend' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locForest18' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest21' } },
    ],
  },
  {
    name: 'locForest22',
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    conditions: { forest: true, noback: true, lit: true },
    hints: ['forest'],
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locForest8' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest11' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locForest15' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest12' } },
    ],
  },
  {
    name: 'locFork',
    description: {
      long: 'The path forks here. The left fork leads northeast. A dull rumbling seems to get louder in that direction. The right fork leads southeast down a gentle slope. The main corridor enters from the west.',
      short: 'You\'re at fork in path.',
    },
    conditions: { noarr: true, deep: true },
    sound: 'dullRumbling',
    travel: [
      { verbs: ['west'], action: { name: 'goTo', description: 'locCorridor' } },
      { verbs: ['ne', 'left'], action: { name: 'goTo', description: 'locWarmwalls' } },
      { verbs: ['se', 'right', 'down'], action: { name: 'goTo', description: 'locLimestone' } },
      { verbs: ['view'], action: { name: 'goTo', description: 'locBreathtaking' } },
      { verbs: ['barre'], action: { name: 'goTo', description: 'locBarrenfront' } },
    ],
  },
  {
    name: 'locGiantroom',
    description: {
      long: 'You are in the Giant Room. The ceiling here is too high up for your lamp to show it. Cavernous passages lead east, north, and south. On the west wall is scrawled the inscription, "fee fie foe foo" [sic].',
      short: 'You\'re in Giant Room.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['south'], action: { name: 'goTo', description: 'locNarrow' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locCavein' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locImmense' } },
    ],
  },
  {
    name: 'locGrate',
    description: {
      long: 'You are in a 20-foot depression floored with bare dirt.  Set into the dirt is a strong steel grate mounted in concrete.  A dry streambed leads into the depression.',
      short: 'You\'re outside grate.',
    },
    conditions: { above: true, lit: true },
    hints: ['grate', 'jade'],
    travel: [
      { verbs: ['east', 'fores'], action: { name: 'goTo', description: 'locForest7' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest10' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest9' } },
      { verbs: ['build'], action: { name: 'goTo', description: 'locStart' } },
      {
        verbs: ['upstr', 'gully', 'north'],
        action: { name: 'goTo', description: 'locSlit' },
      },
      {
        verbs: ['enter', 'inside', 'down'],
        action: {
          name: 'goTo',
          description: 'locBelowgrate',
          condition: {
            type: 'object',
            object: 'grate',
            state: 'grateOpen',
          },
          conditionFailed: { name: 'speak', description: 'grateNoway' },
        },
      },
    ],
  },
  {
    name: 'locGruesome',
    description: {
      long: 'There is now one more gruesome aspect to the spectacular vista.',
      short: null,
    },
    conditions: { deep: true },
    travel: [{ verbs: [], action: { name: 'goTo', description: 'locNowhere' } }],
  },
  {
    name: 'locHill',
    description: {
      long: 'You have walked up a hill, still in the forest.  The road slopes back down the other side of the hill.  There is a building in the distance.',
      short: 'You\'re at hill in road.',
    },
    conditions: { above: true, lit: true },
    travel: [
      { verbs: ['build', 'east'], action: { name: 'goTo', description: 'locStart' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locRoadend' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locForest20' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locForest13' } },
      { verbs: ['down'], action: { name: 'speak', description: 'whichWay' } },
    ],
  },
  {
    name: 'locImmense',
    description: {
      long: 'You are at one end of an immense north/south passage.',
      short: null,
    },
    conditions: { deep: true },
    sound: 'windWhistles',
    travel: [
      { verbs: ['south', 'giant', 'passa'], action: { name: 'goTO', description: 'locGiantroom' } },
      {
        verbs: ['north', 'enter', 'caver'],
        action: {
          name: 'goTo',
          description: 'locWaterfall',
          condition: {
            type: 'object',
            object: 'door',
            state: 'doorUnrusted',
          },
          conditionFailed: { name: 'speak', description: 'rustyDoor' },
        },
      },
    ],
  },
  {
    name: 'locIncline',
    description: {
      long: 'You are at the top of a steep incline above a large room. You could climb down here, but you would not be able to climb up. There is a passage leading back to the north.',
      short: 'You\'re at steep incline above large room.',
    },
    conditions: { deep: true },
    travel: [
      {
        verbs: ['north', 'cavern', 'passa'],
        action: { name: 'goTo', description: 'locWaterfall' },
      },
      { verbs: ['down', 'climb'], action: { name: 'goTo', description: 'locLowroom' } },
    ],
  },
  {
    name: 'locJumble',
    description: {
      long: 'You are in a jumble of rock, with cracks everywhere.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['down', 'Y2'], action: { name: 'goTo', description: 'locY2' } },
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locMisthall' } },
    ],
  },
  {
    name: 'locKinghall',
    description: {
      long: 'You are in the Hall of the Mountain King, with passages off in all directions.',
      short: 'You\'re in Hall of Mt King.',
    },
    conditions: { deep: true },
    hints: ['snake'],
    travel: [
      { verbs: ['stair', 'upwar', 'east'], action: { name: 'goTo', description: 'locMisthall' } },
      {
        verbs: ['north', 'right'],
        action: {
          name: 'goTo',
          description: 'locFloorhole',
          condition: {
            type: 'object',
            object: 'snake',
            state: 'snakeChased',
          },
          conditionFailed: { name: 'goTo', description: 'locSnakeblock' },
        },
      },
      {
        verbs: ['south', 'left'],
        action: {
          name: 'goTo',
          description: 'locSouthside',
          condition: {
            type: 'object',
            object: 'snake',
            state: 'snakeChased',
          },
          conditionFailed: { name: 'goTo', description: 'locSnakeblock' },
        },
      },
      {
        verbs: ['west', 'forwa'],
        action: {
          name: 'goTo',
          description: 'locWestside',
          condition: {
            type: 'object',
            object: 'snake',
            state: 'snakeChased',
          },
          conditionFailed: { name: 'goTo', description: 'locSnakeblock' },
        },
      },
      {
        verbs: ['sw'],
        action: {
          name: 'goTo',
          description: 'locSecret3',
          // condition: [pct, 35],
          conditionFailed: { name: 'goTo', description: 'locSnakeblock' },
        },
      },
      {
        verbs: ['sw'],
        action: {
          name: 'goTo',
          description: 'locSnakeblock',
          // condition: ["with", snake],
          conditionFailed: { name: 'goTo', description: 'locSnakeblock' },
        },
      },
      { verbs: ['secre'], action: { name: 'goTo', description: 'locSecret3' } },
    ],
  },
  {
    name: 'locLarge',
    description: {
      long: 'You are in a large chamber with passages to the west and north.',
      short: null,
    },
    conditions: { deep: true },
    hints: ['ogre'],
    travel: [
      { verbs: ['west'], action: { name: 'goTo', description: 'locSecret3' } },
      {
        verbs: ['north'],
        action: {
          name: 'goTo',
          description: 'locStoreroom',
          // condition: [with, ogre],
          conditionFailed: { name: 'speak', description: 'ogreSnarl' },
        },
      },
    ],
  },
  {
    name: 'locLedge',
    description: {
      long: 'You are on a small ledge on one face of a sheer cliff.  There are no paths away from the ledge.  Across the chasm is a small clearing surrounded by forest.',
      short: 'You\'re on ledge.',
    },
    conditions: { above: true, lit: true },
    travel: [
      { verbs: ['jump'], action: { name: 'goTo', description: 'locNomake' } },
    ],
  },
  {
    name: 'locLimestone',
    description: {
      long: 'You are walking along a gently sloping north/south passage lined with oddly shaped limestone formations.',
      short: 'You\'re in limestone passage.',
    },
    conditions: { noarr: true, deep: true },
    travel: [
      { verbs: ['north', 'upwar', 'fork'], action: { name: 'goTo', description: 'locFork' } },
      {
        verbs: ['south', 'down', 'barre'],
        action: { name: 'goTo', description: 'locBarrenfront' },
      },
      { verbs: ['view'], action: { name: 'goTo', description: 'locBreathtaking' } },
    ],
  },
  {
    name: 'locLongeast',
    description: {
      long: 'You are at the east end of a very long hall apparently without side chambers. To the east a low wide crawl slants up. To the north a round two foot hole slants down.',
      short: 'You\'re at east end of long hall.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['east', 'upwar', 'crawl'], action: { name: 'goTo', description: 'locMistwest' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locLongwest' } },
      { verbs: ['north', 'down', 'hole'], action: { name: 'goTo', description: 'locCrossover' } },
    ],
  },
  {
    name: 'locLongwest',
    description: {
      long: 'You are at the west end of a very long featureless hall. The hall joins up with a narrow north/south passage.',
      short: 'You\'re at west end of long hall.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locLongeast' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locCrossover' } },
      {
        verbs: ['south'],
        action: {
          name: 'goTo',
          description: 'locDifferent1',
          // condition: [nodwarves],
        },
      },
    ],
  },
  {
    name: 'locLowroom',
    description: {
      long: 'You are in a large low room.  Crawls lead north, se, and sw.',
      short: 'You\'re in large low room.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['bedquilt'], action: { name: 'goTo', description: 'locBedquilt' } },
      { verbs: ['sw'], action: { name: 'goTo', description: 'locWinding' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locDeadcrawl' } },
      { verbs: ['se', 'oriental'], action: { name: 'goTo', description: 'locOriental' } },
    ],
  },
  {
    name: 'locMirrorcanyon',
    description: {
      long: 'You are in a north/south canyon about 25 feet across. The floor is covered by white mist seeping in from the north. The walls extend upward for well over 100 feet. Suspended from some unseen point far above you, an enormous two-sided mirror is hanging parallel to and midway between the canyon walls. (The mirror is obviously provided for the use of the dwarves who, as you know, are extremely vain.) A small window can be seen in either wall, some fifty feet up.',
      short: 'You\'re in Mirror Canyon.',
    },
    conditions: { deep: true },
    hints: ['jade'],
    sound: 'windWhistles',
    travel: [
      { verbs: ['south'], action: { name: 'goTo', description: 'locSecret1' } },
      { verbs: ['north', 'reservoir'], action: { name: 'goTo', description: 'locReservoir' } },
    ],
  },
  {
    name: 'locMisthall',
    description: {
      long: 'You are at one end of a vast hall stretching forward out of sight to the west. There are openings to either side. Nearby, a wide stone staircase leads downward. The hall is filled with wisps of white mist swaying to and fro almost as if alive. A cold wind blows up the staircase. There is a passage at the top of a dome behind you.',
      short: 'You\'re in Hall of Mists.',
    },
    conditions: { deep: true },
    hints: ['jade'],
    sound: 'windWhistles',
    travel: [
      { verbs: ['left', 'south'], action: { name: 'goTo', description: 'locNugget' } },
      { verbs: ['forwa', 'hall', 'west'], action: { name: 'goTo', description: 'locEastbank' } },
      { verbs: ['stair', 'down', 'north'], action: { name: 'goTo', description: 'locKinghall' } },
      {
        verbs: ['upwar', 'pit', 'steps', 'dome', 'passa', 'east'],
        action: {
          name: 'goTo',
          description: 'locDome',
          condition: {
            type: 'carry',
            object: 'nugget',
          },
          conditionFailed: { name: 'goTo', description: 'locPittop' },
        },
      },
      { verbs: ['Y2'], action: { name: 'goTo', description: 'locJumble' } },
    ],
  },
  {
    name: 'locMistwest',
    description: {
      long: 'You are at the west end of the Hall of Mists. A low wide crawl continues west and another goes north. To the south is a little passage 6 feet off the floor.',
      short: 'You\'re at west end of Hall of Mists.',
    },
    conditions: { deep: true },
    travel: [
      {
        verbs: ['south', 'upwar', 'passa', 'climb'],
        action: { name: 'goTo', description: 'locAlike1' },
      },
      { verbs: ['east'], action: { name: 'goTo', description: 'locWestbank' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locParallel2' } },
      { verbs: ['west', 'crawl'], action: { name: 'goTo', description: 'locLongeast' } },
    ],
  },
  {
    name: 'locMisty',
    description: {
      long: 'You are following a wide path around the outer edge of a large cavern. Far below, through a heavy white mist, strange splashing noises can be heard. The mist rises up through a fissure in the ceiling. The path exits to the south and west.',
      short: 'You\'re in misty cavern.',
    },
    conditions: { deep: true },
    sound: 'noMeaning',
    travel: [
      { verbs: ['south', 'oriental'], action: { name: 'goTo', description: 'locOriental' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locAlcove' } },
    ],
  },
  {
    name: 'locNarrow',
    description: {
      long: 'You are in a long, narrow corridor stretching out of sight to the west. At the eastern end is a hole through which you can see a profusion of leaves.',
      short: 'You\'re in narrow corridor.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['down', 'climb', 'east'], action: { name: 'goTo', description: 'locWestpit' } },
      { verbs: ['jump'], action: { name: 'goTo', description: 'locNeckbroke' } },
      { verbs: ['west', 'giant'], action: { name: 'goTo', description: 'locGiantroom' } },
    ],
  },
  {
    name: 'locNe',
    description: {
      long: 'You are at the northeast end of an immense room, even larger than the Giant Room. It appears to be a repository for the "Adventure" program. Massive torches far overhead bathe the room with smoky yellow light. Scattered about you can be seen a pile of bottles (all of them empty), a nursery of young beanstalks murmuring quietly, a bed of oysters, a bundle of black rods with rusty stars on their ends, and a collection of brass lanterns. Off to one side a great many dwarves are sleeping on the floor, snoring loudly. A notice nearby reads: "Do not disturb the dwarves!" An immense mirror is hanging against one wall, and stretches to the other end of the room, where various other sundry objects can be glimpsed dimly in the distance.',
      short: 'You\'re at ne end.',
    },
    conditions: { deep: true, lit: true },
    sound: 'murmuringSnoring',
    travel: [
      { verbs: ['sw'], action: { name: 'goTo', description: 'locSw' } },
    ],
  },
  {
    name: 'locNeckbroke',
    description: {
      long: 'You are at the bottom of the pit with a broken neck.',
      short: null,
    },
    conditions: { deep: true },
    travel: [{ verbs: [], action: { name: 'goTo', description: 'locNowhere' } }],
  },
  {
    name: 'locNechasm',
    description: {
      long: 'You are on the far side of the chasm. A ne path leads away from the chasm on this side.',
      short: 'You\'re on ne side of chasm.',
    },
    conditions: { noarr: true, deep: true },
    travel: [
      { verbs: ['NE'], action: { name: 'goTo', description: 'locCorridor' } },
      {
        verbs: ['over', 'acros', 'cross', 'sw'],
        action: {
          name: 'speak',
          description: 'trollBlocks',
          // condition: [with, troll],
          conditionFailed: { name: 'special', description: 3 },
        },
      },
      { verbs: ['jump'], action: { name: 'speak', description: 'crossBridge' } },
      { verbs: ['fork'], action: { name: 'goTo', description: 'locFork' } },
      { verbs: ['view'], action: { name: 'goTo', description: 'locBreathtaking' } },
      { verbs: ['barre'], action: { name: 'goTo', description: 'locBarrenfront' } },
    ],
  },
  {
    name: 'locNoclimb',
    description: {
      long: 'There is nothing here to climb.  Use "up" or "out" to leave the pit.',
      short: null,
    },
    conditions: { deep: true },
    travel: [{ verbs: [], action: { name: 'goTo', description: 'locWestpit' } }],
  },
  {
    name: 'locNomake',
    description: {
      long: 'You didn\'t make it.',
      short: null,
    },
    conditions: { deep: true },
    travel: [{ verbs: [], action: { name: 'goTo', description: 'locNowhere' } }],
  },
  {
    name: 'locNugget',
    description: {
      long: 'This is a low room with a crude note on the wall. The note says, "You won\'t get it up the steps".',
      short: 'You\'re in nugget-of-gold room.',
    },
    conditions: { deep: true },
    travel: [{
      verbs: ['hall', 'out', 'north'],
      action: { name: 'goTo', description: 'locMisthall' },
    }],
  },
  {
    name: 'locOriental',
    description: {
      long: 'This is the Oriental Room. Ancient oriental cave drawings cover the walls. A gently sloping passage leads upward to the north, another passage leads se, and a hands and knees crawl leads west.',
      short: 'You\'re in Oriental Room.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['se'], action: { name: 'goTo', description: 'locSwisscheese' } },
      { verbs: ['west', 'crawl'], action: { name: 'goTo', description: 'locLowroom' } },
      { verbs: ['upwar', 'north', 'cavern'], action: { name: 'goTo', description: 'locMisty' } },
    ],
  },
  {
    name: 'locParallel1',
    description: {
      long: 'You have crawled through a very low wide passage parallel to and north of the Hall of Mists.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['se'], action: { name: 'goTo', description: 'locMistwest' } },
    ],
  },
  {
    name: 'locParallel2',
    description: {
      long: 'You have crawled through a very low wide passage parallel to and north of the Hall of Mists.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: [], action: { name: 'goTo', description: 'locWestbank' } },
    ],
  },
  {
    name: 'locPitbrink',
    description: {
      long: 'You are on the brink of a thirty foot pit with a massive orange column down one wall. You could climb down here but you could not get back up. The maze continues at this level.',
      short: 'You\'re at brink of pit.',
    },
    conditions: { deep: true, noback: true },
    travel: [
      { verbs: ['down', 'climb'], action: { name: 'goTo', description: 'locBird' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locAlike10' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locDeadend6' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locAlike12' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locAlike13' } },
    ],
  },
  {
    name: 'locPittop',
    description: {
      long: 'At your feet is a small pit breathing traces of white mist. An east passage ends here except for a small crack leading on.',
      short: 'You\'re at top of small pit.',
    },
    conditions: {},
    travel: [
      {
        verbs: ['depre'],
        action: {
          name: 'goTo',
          description: 'locGrate',
          condition: {
            type: 'object',
            object: 'grate',
            state: 'grateOpen',
          },
          conditionFailed: { name: 'speak', description: 'grateNoway' },
        },
      },
      { verbs: ['entra'], action: { name: 'goTo', description: 'locBelowgrate' } },
      { verbs: ['debri'], action: { name: 'goTo', description: 'locDebris' } },
      { verbs: ['passa', 'east'], action: { name: 'goTo', description: 'locBird' } },
      {
        verbs: ['down', 'pit', 'steps'],
        action: {
          name: 'goTo',
          description: 'locNeckbroke',
          condition: {
            type: 'carry',
            object: 'nugget',
          },
          conditionFailed: { name: 'goTo', description: 'locMisthall' },
        },
      },
      { verbs: ['crack', 'west'], action: { name: 'goTo', description: 'locCrack' } },
    ],
  },
  {
    name: 'locPlanttop',
    description: {
      long: 'You have climbed up the plant and out of the pit.',
      short: null,
    },
    conditions: { deep: true },
    travel: [{ verbs: [], action: { name: 'goTo', description: 'locWestend' } }],
  },
  {
    name: 'locPlover',
    description: {
      long: 'You\'re in a small chamber lit by an eerie green light. An extremely narrow tunnel exits to the west. A dark corridor leads ne.',
      short: 'You\'re in Plover Room.',
    },
    conditions: { deep: true, lit: true },
    hints: ['dark'],
    travel: [
      { verbs: ['west', 'passa', 'out'], action: { name: 'special', description: 1 } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locAlcove' } },
      {
        verbs: ['plove'],
        action: {
          name: 'special',
          description: 2,
          condition: {
            type: 'carry',
            object: 'emerald',
          },
          conditionFailed: { name: 'speak', description: 'locFoof6' },
        },
      },
      { verbs: ['ne', 'dark'], action: { name: 'goTo', description: 'locDarkroom' } },
    ],
  },
  {
    name: 'locReachdead',
    description: {
      long: 'You have reached a dead end.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['sw', 'out', 'crawl'], action: { name: 'goTo', description: 'locCliffledge' } },
    ],
  },
  {
    name: 'locResbottom',
    description: {
      long: 'You are walking across the bottom of the reservoir. Walls of water rear up on either side. The roar of the water cascading past is nearly deafening, and the mist is so thick you can barely see.',
      short: 'You\'re at bottom of reservoir.',
    },
    conditions: { fluid: true, deep: true },
    sound: 'totalRoar',
    loud: true,
    travel: [
      { verbs: ['north'], action: { name: 'goTo', description: 'locResnorth' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locReservoir' } },
    ],
  },
  {
    name: 'locResnorth',
    description: {
      long: 'You are at the northern edge of the reservoir. A northwest passage leads sharply up from here.',
      short: 'You\'re north of reservoir.',
    },
    conditions: { fluid: true, deep: true },
    sound: 'watersCrashing',
    travel: [
      {
        verbs: ['south', 'acros', 'cross'],
        action: {
          name: 'speak',
          description: 'badDirection',
          condition: {
            type: 'object',
            object: 'reser',
            state: 'watersUnparted',
          },
          conditionFailed: { name: 'speak', description: 'locResbottom' },
        },
      },
      { verbs: ['nw', 'upwar', 'out'], action: { name: 'goTo', description: 'locTreacherous' } },
    ],
  },
  {
    name: 'locReservoir',
    description: {
      long: 'You are at the edge of a large underground reservoir. An opaque cloud of white mist fills the room and rises rapidly upward. The lake is fed by a stream, which tumbles out of a hole in the wall about 10 feet overhead and splashes noisily into the water somewhere within the mist. There is a passage going back toward the south.',
      short: 'You\'re at reservoir.',
    },
    conditions: { fluid: true, deep: true },
    sound: 'streamSplashes',
    travel: [
      { verbs: ['south', 'out'], action: { name: 'goTo', description: 'locMirrorcanyon' } },
      {
        verbs: ['north', 'acros', 'cross'],
        action: {
          name: 'speak',
          description: 'badDirection',
          condition: {
            type: 'object',
            object: 'reser',
            state: 'watersUnparted',
          },
          conditionFailed: { name: 'speak', description: 'locResbottom' },
        },
      },
    ],
  },
  {
    name: 'locRoadend',
    description: {
      long: 'The road, which approaches from the east, ends here amid the trees.',
      short: 'You\'re at end of road.',
    },
    conditions: { above: true, lit: true },
    travel: [
      { verbs: ['road', 'east', 'upwar'], action: { name: 'goTo', description: 'locHill' } },
      { verbs: ['build'], action: { name: 'goTo', description: 'locStart' } },
      { verbs: ['south', 'fores'], action: { name: 'goTo', description: 'locForest14' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest15' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locForest21' } },
    ],
  },
  {
    name: 'locRoughhewn',
    description: {
      long: 'You are in a long, rough-hewn, north/south corridor.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['north'], action: { name: 'goTo', description: 'locDeadend13' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locLarge' } },
    ],
  },
  {
    name: 'locSecret1',
    description: {
      long: 'You are in a secret n/s canyon above a large room.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['down', 'slab'], action: { name: 'goTo', description: 'locSlab' } },
      {
        verbs: ['south'],
        action: {
          name: 'goTo',
          description: 'locSecret5',
          // condition: {
          //   type: 'object',
          //   object: 'dragon',
          //   state: 'dragonDead',
          //   state: 'dragonBloodless',
          // },
          // condition: [not, dragon, dragonBars],
          conditionFailed: { name: 'goTo', description: 'locSecret4' },
        },
      },
      { verbs: ['north'], action: { name: 'goTo', description: 'locMirrorcanyon' } },
      { verbs: ['reservoir'], action: { name: 'goTo', description: 'locReservoir' } },
    ],
  },
  {
    name: 'locSecret2',
    description: {
      long: 'You are in a secret n/s canyon above a sizable passage.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['north'], action: { name: 'goTo', description: 'locThreejunction' } },
      { verbs: ['down', 'passa'], action: { name: 'goTo', description: 'locBedquilt' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locTopstalactite' } },

    ],
  },
  {
    name: 'locSecret3',
    description: {
      long: 'You are in a secret canyon which here runs e/w. It crosses over a very tight canyon 15 feet below. If you go down you may not be able to get back up.',
      short: 'You\'re in secret e/w canyon above tight canyon.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locKinghall' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locSecret5' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locSecret6' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locWideplace' } },
    ],
  },
  // Following three rooms are where the dragon lives.  The code has a
  // wired-in assumption that the dragon corpse goes to locSecret5,
  {
    name: 'locSecret4',
    description: {
      long: 'You are in a secret canyon which exits to the north and east.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['north', 'out'], action: { name: 'goTo', description: 'locSecret1' } },
      { verbs: ['east', 'forwa'], action: { name: 'speak', description: 'nastyDragon' } },
    ],
  },
  {
    name: 'locSecret5',
    description: {
      long: 'You are in a secret canyon which exits to the north and east.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['north'], action: { name: 'goTo', description: 'locSecret1' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locSecret3' } },
    ],
  },
  {
    name: 'locSecret6',
    description: {
      long: 'You are in a secret canyon which exits to the north and east.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['north', 'out'], action: { name: 'goTo', description: 'locSecret3' } },
      { verbs: ['east', 'forwa'], action: { name: 'speak', description: 'nastyDragon' } },
    ],
  },
  {
    name: 'locSewer',
    description: {
      long: 'The stream flows out through a pair of 1 foot diameter sewer pipes. It would be advisable to use the exit.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: [], action: { name: 'goTo', description: 'locBuilding' } },
    ],
  },
  {
    name: 'locShellroom',
    description: {
      long: 'You\'re in a large room carved out of sedimentary rock. The floor and walls are littered with bits of shells embedded in the stone. A shallow passage proceeds downward, and a somewhat steeper one leads up. A low hands and knees passage enters from the south.',
      short: 'You\'re in Shell Room.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['upwar', 'hall'], action: { name: 'goTo', description: 'locArched' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locSloping1' } },
      {
        verbs: ['south'],
        condition: {
          type: 'carry',
          object: 'clam',
        },
        action: { name: 'speak', description: 'clamBlocker' }
      },
      // { verbs: ['south'], condition: [carry, oyster], action: { name: 'speak', description: 'oysterBlocker' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locComplex' } },
    ],
  },
  {
    name: 'locSlab',
    description: {
      long: 'You are in a large low circular chamber whose floor is an immense slab fallen from the ceiling (Slab Room). East and west there once were large passages, but they are now filled with boulders. Low small passages go north and south, and the south one quickly bends west around the boulders.',
      short: 'You\'re in Slab Room.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['south'], action: { name: 'goTo', description: 'locWestend' } },
      { verbs: ['upwar', 'climb'], action: { name: 'goTo', description: 'locSecret1' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locBedquilt' } },
    ],
  },
  {
    name: 'locSlit',
    description: {
      long: 'At your feet all the water of the stream splashes into a 2-inch slit in the rock. Downstream the streambed is bare rock.',
      short: 'You\'re at slit in streambed.',
    },
    conditions: { fluid: true, above: true, lit: true },
    sound: 'streamGurgles',
    travel: [
      { verbs: ['build'], action: { name: 'goTo', description: 'locStart' } },
      { verbs: ['upstr', 'north'], action: { name: 'goTo', description: 'locValley' } },
      { verbs: ['east', 'fores', 'upwar'], action: { name: 'goTo', description: 'locForest6' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest10' } },
      {
        verbs: ['downs', 'bed', 'south', 'depre'],
        action: { name: 'goTo', description: 'locGrate' },
      },
      {
        verbs: ['slit', 'strea', 'down', 'inside', 'enter'],
        action: { name: 'speak', description: 'dontFit' },
      },
    ],
  },
  {
    name: 'locSloping1',
    description: {
      long: 'You are in a long sloping corridor with ragged sharp walls.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['upwar', 'shell'], action: { name: 'goTo', description: 'locShellroom' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locCuldesac' } },
    ],
  },
  {
    name: 'locSmallpit',
    description: {
      long: 'You are in the bottom of a small pit with a little stream, which enters and exits through tiny slits.',
      short: 'You\'re at bottom of pit with stream.',
    },
    conditions: { fluid: true, deep: true },
    sound: 'streamGurgles',
    travel: [
      {
        verbs: ['climb', 'upwar', 'out'],
        action: { name: 'goTo', description: 'locSmallpitbrink' },
      },
      {
        verbs: ['slit', 'strea', 'down', 'upstr', 'downs', 'enter', 'inside'],
        action: { name: 'speak', description: 'dontFit' },
      },
    ],
  },
  {
    name: 'locSmallpitbrink',
    description: {
      long: 'You are on the brink of a small clean climbable pit. A crawl leads west.',
      short: 'You\'re at brink of small pit.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['west', 'crawl'], action: { name: 'goTo', description: 'locBroken' } },
      { verbs: ['down', 'pit', 'climb'], action: { name: 'goTo', description: 'locSmallpit' } },
    ],
  },
  {
    name: 'locSnakeblock',
    description: {
      long: 'You can\'t get by the snake.',
      short: null,
    },
    conditions: { deep: true },
    travel: [{ verbs: [], action: { name: 'goTo', description: 'locKinghall' } }],
  },
  {
    name: 'locSoftroom',
    description: {
      long: 'You are in the Soft Room. The walls are covered with heavy curtains, the floor with a thick pile carpet. Moss covers the ceiling.',
      short: 'You\'re in Soft Room.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['west', 'out'], action: { name: 'goTo', description: 'locSwisscheese' } },
    ],
  },
  {
    name: 'locSouthside',
    description: {
      long: 'You are in the south side chamber.',
      short: null,
    },
    conditions: { deep: true },
    travel: [{
      verbs: ['hall', 'out', 'north'],
      action: { name: 'goTo', description: 'locKinghall' },
    }],
  },
  {
    name: 'locStart',
    description: {
      long: 'You are standing at the end of a road before a small brick building. Around you is a forest.  A small stream flows out of the building and down a gully.',
      short: 'You\'re in front of building.',
    },
    conditions: { fluid: true, above: true, lit: true },
    sound: 'streamGurgles',
    travel: [
      {
        verbs: ['road', 'west', 'upwar'],
        action: { name: 'goTo', description: 'locHill' },
      },
      {
        verbs: ['enter', 'build', 'inside', 'east'],
        action: { name: 'goTo', description: 'locBuilding' },
      },
      {
        verbs: ['downs', 'gully', 'strea', 'south', 'down'],
        action: { name: 'goTo', description: 'locValley' },
      },
      { verbs: ['fores', 'north'], action: { name: 'goTo', description: 'locForest1' } },
      { verbs: ['depre'], action: { name: 'goTo', description: 'locGrate' } },
    ],
  },
  {
    name: 'locSteep',
    description: {
      long: 'You are on a very steep incline, which widens at it goes upward.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['down', 'se'], action: { name: 'goTo', description: 'locTreacherous' } },
      { verbs: ['upwar', 'nw'], action: { name: 'goTo', description: 'locCliffbase' } },
    ],
  },
  {
    name: 'locStoreroom',
    description: {
      long: 'You are in the ogre\'s storeroom.  The only exit is to the south.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['south', 'out'], action: { name: 'goTo', description: 'locLarge' } },
    ],
  },
  {
    name: 'locSw',
    description: {
      long: 'You are at the southwest end of the repository. To one side is a pit full of fierce green snakes. On the other side is a row of small wicker cages, each of which contains a little sulking bird. In one corner is a bundle of black rods with rusty marks on their ends. A large number of velvet pillows are scattered about on the floor. A vast mirror stretches off to the northeast. At your feet is a large steel grate, next to which is a sign that reads, "Treasure Vault. Keys in main office."',
      short: 'You\'re at sw end.',
    },
    conditions: { deep: true, lit: true },
    sound: 'snakesHissing',
    travel: [
      { verbs: ['ne'], action: { name: 'goTo', description: 'locNe' } },
      { verbs: ['down'], action: { name: 'speak', description: 'grateNoway' } },
    ],
  },
  {
    name: 'locSwchasm',
    description: {
      long: 'You are on one side of a large, deep chasm. A heavy white mist rising up from below obscures all view of the far side. A sw path leads away from the chasm into a winding corridor.',
      short: 'You\'re on sw side of chasm.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['sw'], action: { name: 'goTo', description: 'locWinding' } },
      // { verbs: ['over, 'acros', 'cross, 'ne'], condition: [with, troll], action: { name: 'speak', description: 'trollBlocks' } },
      {
        verbs: ['over'],
        condition: {
          type: 'object',
          object: 'chasm',
          state: 'bridgeWrecked',
          conditionFailed: { name: 'special', description: 3 },
        },
        action: { name: 'speak', description: 'bridgeGone' } ,
      },
      {
        verbs: ['jump'],
        action: {
          name: 'goTo',
          description: 'locNomake',
          condition: {
            type: 'object',
            object: 'chasm',
            state: 'bridgeWrecked',
            conditionFailed: { name: 'speak', description: 'crossBridge' },
          },
        },
      },
    ],
  },
  {
    name: 'locSwisscheese',
    description: {
      long: 'You are in a room whose walls resemble Swiss cheese. Obvious passages go west, east, ne, and nw. Part of the room is occupied by a large bedrock block.',
      short: 'You\'re in Swiss Cheese Room.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['ne'], action: { name: 'goTo', description: 'locBedquilt' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locEastend' } },
      {
        verbs: ['south'],
        action: {
          name: 'speak',
          description: 'futileCrawl',
          // condition: [pct, 80],
        },
      },
      { verbs: ['canyo'], action: { name: 'goTo', description: 'locTall' } },
      { verbs: ['east'], action: { name: 'goTo', description: 'locSoftroom' } },
      {
        verbs: ['nw'],
        action: {
          name: 'speak',
          description: 'futileCrawl',
          // condition: [pct, 50],
        },
      },
      { verbs: ['oriental'], action: { name: 'goTo', description: 'locOriental' } },
    ],
  },
  {
    name: 'locTall',
    description: {
      long: 'You are in a tall e/w canyon. A low tight crawl goes 3 feet north and seems to open up.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['east'], action: { name: 'goTo', description: 'locWideplace' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locBoulders1' } },
      { verbs: ['north', 'crawl'], action: { name: 'goTo', description: 'locSwisscheese' } },
    ],
  },
  {
    name: 'locThreejunction',
    description: {
      long: 'You are in a secret canyon at a junction of three canyons, bearing north, south, and se. The north one is as tall as the other two combined.',
      short: 'You\'re at junction of three secret canyons.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['se'], action: { name: 'goTo', description: 'locBedquilt' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locSecret2' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locWindow2' } },
    ],
  },
  {
    name: 'locTightplace',
    description: {
      long: 'The canyon here becomes too tight to go further south.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['north'], action: { name: 'goTo', description: 'locWideplace' } },
    ],
  },
  {
    name: 'locTopstalactite',
    description: {
      long: 'A large stalactite extends from the roof and almost reaches the floor below. You could climb down it, and jump from it to the floor, but having done so you would be unable to reach it to climb back up.',
      short: 'You\'re at top of stalactite.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['north'], action: { name: 'goTo', description: 'locSecret2' } },
      // { verbs: ['down', 'jump', 'climb'], condition: [pct, 40], action: { name: 'goTo', description: 'locAlike6' } },
      // { verbs: ['down'], condition: [pct, 50], action: { name: 'goTo', description: 'locAlike9' } },
      { verbs: ['down'], action: { name: 'goTo', description: 'locAlike4' } },
    ],
  },
  {
    name: 'locTreacherous',
    description: {
      long: 'You are scrambling along a treacherously steep, rocky passage.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['upwar', 'nw'], action: { name: 'goTo', description: 'locSteep' } },
      { verbs: ['down', 'se'], action: { name: 'goTo', description: 'locResnorth' } },
    ],
  },
  {
    name: 'locValley',
    description: {
      long: 'You are in a valley in the forest beside a stream tumbling along a rocky bed.',
      short: 'You\'re in valley.',
    },
    conditions: { fluid: true, above: true, lit: true },
    sound: 'streamGurgles',
    travel: [
      {
        verbs: ['upstr', 'build', 'north'],
        action: { name: 'goTo', description: 'locStart' },
      },
      { verbs: ['east', 'fores'], action: { name: 'goTo', description: 'locForest6' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locForest12' } },
      {
        verbs: ['downs', 'south', 'down'],
        action: { name: 'goTo', description: 'locSlit' },
      },
      { verbs: ['depre'], action: { name: 'goTo', description: 'locGrate' } },
      { verbs: ['strea'], action: { name: 'speak', description: 'upstreamDownstream' } },
    ],
  },
  {
    name: 'locWarmwalls',
    description: {
      long: 'The walls are quite warm here. From the north can be heard a steady roar, so loud that the entire cave seems to be trembling. Another passage leads south, and a low crawl goes east.',
      short: 'You\'re at junction with warm walls.',
    },
    conditions: { noarr: true, deep: true },
    sound: 'loudRoar',
    travel: [
      { verbs: ['south', 'fork'], action: { name: 'goTo', description: 'locFork' } },
      { verbs: ['north', 'view'], action: { name: 'goTo', description: 'locBreathtaking' } },
      { verbs: ['east', 'crawl'], action: { name: 'goTo', description: 'locBoulders2' } },
    ],
  },
  {
    name: 'locWaterfall',
    description: {
      long: 'You are in a magnificent cavern with a rushing stream, which cascades over a sparkling waterfall into a roaring whirlpool which disappears through a hole in the floor. Passages exit to the south and west.',
      short: 'You\'re in cavern with waterfall.',
    },
    conditions: { fluid: true, deep: true },
    sound: 'streamSplashes',
    travel: [
      { verbs: ['south', 'out'], action: { name: 'goTo', description: 'locImmense' } },
      { verbs: ['giant'], action: { name: 'goTo', description: 'locGiantroom' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locIncline' } },
    ],
  },
  {
    name: 'locWestbank',
    description: {
      long: 'You are on the west side of the fissure in the Hall of Mists.',
      short: 'You\'re on west bank of fissure.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['stair', 'upwar', 'east'], action: { name: 'goTo', description: 'locMisthall' } },
      {
        verbs: ['jump'],
        action: {
          name: 'speak',
          description: 'crossBridge',
          condition: {
            type: 'object',
            object: 'fissure',
            state: 'bridged',
          },
        },
      },
      {
        verbs: ['forwa'],
        action: {
          name: 'goTo',
          description: 'locNomake',
          condition: {
            type: 'object',
            object: 'fissure',
            state: 'bridged',
          },
        },
      },
      {
        verbs: ['over', 'acros', 'west', 'cross'],
        action: {
          name: 'speak',
          description: 'noCross',
          condition: {
            type: 'object',
            object: 'fissure',
            state: 'unbridged',
          },
        },
      },
      { verbs: ['over'], action: { name: 'goTo', description: 'locEastbank' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locParallel1' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locMistwest' } },
    ],
  },
  {
    name: 'locWestend',
    description: {
      long: 'You are at the west end of the Twopit Room. There is a large hole in the wall above the pit at this end of the room.',
      short: 'You\'re at west end of Twopit Room.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['east', 'acros'], action: { name: 'goTo', description: 'locEastend' } },
      { verbs: ['west', 'slab'], action: { name: 'goTo', description: 'locSlab' } },
      { verbs: ['down', 'pit'], action: { name: 'goTo', description: 'locWestpit' } },
      { verbs: ['hole'], action: { name: 'speak', description: 'tooFar' } },
    ],
  },
  {
    name: 'locWestpit',
    description: {
      long: 'You are at the bottom of the western pit in the Twopit Room. There is a large hole in the wall about 25 feet above you.',
      short: 'You\'re in west pit.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['upwar', 'out'], action: { name: 'goTo', description: 'locWestend' } },
      {
        verbs: ['climb'],
        action: {
          name: 'goTo',
          description: 'locBuilding1',
          condition: {
            type: 'object',
            object: 'plant',
            // state: 'plantThirsty',
            // state: 'plantGrown',
          },
          conditionFailed: { name: 'goTo', description: 'locClimbstalk' },
        },
      },
    ],
  },
  {
    name: 'locWestside',
    description: {
      long: 'You are in the west side chamber of the Hall of the Mountain King. \nA passage continues west and up here.',
      short: 'You\'re in the west side chamber.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['hall', 'out', 'east'], action: { name: 'goTo', description: 'locKinghall' } },
      { verbs: ['west', 'upwar'], action: { name: 'goTo', description: 'locCrossover' } },
    ],
  },
  {
    name: 'locWideplace',
    description: {
      long: 'You are at a wide place in a very tight n/s canyon.',
      short: null,
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['south'], action: { name: 'goTo', description: 'locTightplace' } },
      { verbs: ['north'], action: { name: 'goTo', description: 'locTall' } },
    ],
  },
  {
    name: 'locWinding',
    description: {
      long: 'You are in a long winding corridor sloping out of sight in both directions.',
      short: 'You\'re in sloping corridor.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['down'], action: { name: 'goTo', description: 'locLowroom' } },
      { verbs: ['upwar'], action: { name: 'goTo', description: 'locSwchasm' } },
    ],
  },
  {
    name: 'locWindow1',
    description: {
      long: 'You\'re at a low window overlooking a huge pit, which extends up out of sight. A floor is indistinctly visible over 50 feet below. Traces of white mist cover the floor of the pit, becoming thicker to the right. \nMarks in the dust around the window would seem to indicate that someone has been here recently. Directly across the pit from you and 25 feet away there is a similar window looking into a lighted room. A shadowy figure can be seen there peering back at you.',
      short: 'You\'re at window on pit.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['east', 'Y2'], action: { name: 'goTo', description: 'locY2' } },
      { verbs: ['jump'], action: { name: 'goTo', description: 'locNeckbroke' } },
    ],
  },
  {
    name: 'locWindow2',
    description: {
      long: 'You\'re at a low window overlooking a huge pit, which extends up out of sight. A floor is indistinctly visible over 50 feet below. Traces of white mist cover the floor of the pit, becoming thicker to the left. \nMarks in the dust around the window would seem to indicate that someone has been here recently. Directly across the pit from you and 25 feet away there is a similar window looking into a lighted room. A shadowy figure can be seen there peering back at you.',
      short: 'You\'re at window on pit.',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['west'], action: { name: 'goTo', description: 'locThreejunction' } },
      { verbs: ['jump'], action: { name: 'goTo', description: 'locNeckbroke' } },
    ],
  },
  {
    name: 'locWittsend',
    description: {
      long: 'You are at Witt\'s End. Passages lead off in *all* directions.',
      short: 'You\'re at Witt\s End.',
    },
    conditions: { deep: true, noback: true },
    hints: ['witt'],
    travel: [
      {
        verbs: ['east', 'north', 'south', 'ne', 'se', 'sw', 'nw', 'upwar', 'down'],
        // conditions: [pct, 95],
        action: { name: 'speak', description: 'futileCrawl' },
      },
      { verbs: ['east'], action: { name: 'goTo', description: 'locAnteroom' } },
      { verbs: ['west'], action: { name: 'speak', description: 'wayBlocked' } },
    ],
  },
  {
    name: 'locY2',
    description: {
      long: 'You are in a large room, with a passage to the south, a passage to the west, and a wall of broken rock to the east.  There is a large "Y2" on a rock in the room\'s center.',
      short: 'You\'re at "Y2".',
    },
    conditions: { deep: true },
    travel: [
      { verbs: ['plugh'], action: { name: 'goTo', description: 'locFoof4' } },
      { verbs: ['south'], action: { name: 'goTo', description: 'locFloorhole' } },
      { verbs: ['east', 'wall', 'broke'], action: { name: 'goTo', description: 'locJumble' } },
      { verbs: ['west'], action: { name: 'goTo', description: 'locWindow1' } },
      {
        verbs: ['plove'],
        action: {
          name: 'special',
          description: 2,
          condition: {
            type: 'carry',
            object: 'emerald',
          },
          conditionFailed: { name: 'goTo', description: 'locFoof5' },
        },
      },
    ],
  },
]
