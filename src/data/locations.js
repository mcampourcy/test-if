'use strict'

// locations: They have attributes as follows...
//      long:         Long description, always shown on first encounter.
//      short:        Short description. If none, use long description.
//      conditions:   A dictionary of attributes
//        - lit       Light
//        - oily      If fluid flag is on: true for oil, false for water
//        - fluid     Liquid asset
//        - noarrr    Pirate doesn't go here unless following player
//        - noback    Cannot use "back" to move away
//        - hcave     Trying to get into cave
//        - hbird     Trying to catch bird
//        - hsnake    Trying to deal with snake
//        - hmaze     Lost in maze
//        - hdark     Pondering dark room
//        - hwitt     At Witt's End
//        - hcliff    Cliff with urn
//        - hwoods    Lost in forest
//        - hogre     Trying to deal with ogre
//        - hjade     Found all treasures except jade
//      hints:        A list of yaml references to hints that may be available at
//                    this location. (This is why locations has to follow hints.)
//      sound:        Label for a location sound.
//      loud:         If true, object sounds are drowned out at this location.
//      travels:       A list of movement rules. They're applied in the order
//                    they appear. For a rule to fire, (1) the movement command
//                    must be a synonym for one of its verbs, and (2) the
//                    condition, if present, must evaluate to true. In that case
//                    the action fires. The action may be a goTo (move to
//                    a idd location) a speak (utter a idd message), or
//                    a special (branch to special case in movement code).
//                    The conditional may be one of the following:
//                      [pct, N]       Roll a die, n% chance of success
//                      [carry, obj]   Must be carrying idd object
//                      [with, obj]    Must be carrying or in room with
//                      [not, obj N]   Property of idd obj must not be N.
//                                     N may be numeric or a state label.
//                      [nodwarves]    Dwarves must skip this rule.

const locations = [
  {
    id: 'locNowhere',
    conditions: {},
    description: {
      long: null,
      short: null,
    },
    travels: [],
  },
  {
    id: 'locAlcove',
    conditions: { deep: true },
    description: {
      long: 'You are in an alcove. A small nw path seems to widen after a short distance. An extremely tight tunnel leads east. It looks like a very tight squeeze. An eerie light can be seen at the other end.',
      short: 'You\'re in alcove.',
    },
    hints: ['dark'],
    travels: [
      { verbs: ['nw', 'cavern'], action: { id: 'goTo', description: 'locMisty' } },
      { verbs: ['east', 'passa'], action: { id: 'special', description: 1 } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locPlover' } },
    ],
  },
  {
    id: 'locAlike1',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locMistwest' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locAlike1' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locAlike2' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locAlike4' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locAlike11' } },
    ],
  },
  {
    id: 'locAlike2',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['west'], action: { id: 'goTo', description: 'locAlike1' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locAlike3' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locAlike4' } },
    ],
  },
  {
    id: 'locAlike3',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locAlike2' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locDeadend3' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locAlike6' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locDeadend9' } },
    ],
  },
  {
    id: 'locAlike4',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['west'], action: { id: 'goTo', description: 'locAlike1' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locAlike2' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locDeadend1' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locDeadend2' } },
      { verbs: ['upwar', 'down'], action: { id: 'goTo', description: 'locAlike14' } },
    ],
  },
  {
    id: 'locAlike5',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locAlike6' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locAlike7' } },
    ],
  },
  {
    id: 'locAlike6',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locAlike3' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locAlike5' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locAlike7' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locAlike8' } },
    ],
  },
  {
    id: 'locAlike7',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['west'], action: { id: 'goTo', description: 'locAlike5' } },
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locAlike6' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locAlike8' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locAlike9' } },
    ],
  },
  {
    id: 'locAlike8',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['west'], action: { id: 'goTo', description: 'locAlike6' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locAlike7' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locAlike8' } },
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locAlike9' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locAlike10' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locDeadend11' } },
    ],
  },
  {
    id: 'locAlike9',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['west'], action: { id: 'goTo', description: 'locAlike7' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locAlike8' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locDeadend4' } },
    ],
  },
  {
    id: 'locAlike10',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['west'], action: { id: 'goTo', description: 'locAlike8' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locAlike10' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locDeadend5' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locPitbrink' } },
    ],
  },
  {
    id: 'locAlike11',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['north'], action: { id: 'goTo', description: 'locAlike1' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locAlike11' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locAlike11' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locDeadend8' } },
    ],
  },
  {
    id: 'locAlike12',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['north'], action: { id: 'goTo', description: 'locAlike1' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locAlike11' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locAlike11' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locDeadend8' } },
    ],
  },
  {
    id: 'locAlike13',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    travels: [
      { verbs: ['north'], action: { id: 'goTo', description: 'locPitbrink' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locAlike12' } },
      { verbs: ['nw'], action: { id: 'goTo', description: 'locDeadend12' } },
    ],
  },
  {
    id: 'locAlike14',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of twisty little passages, all alike.',
      short: null,
    },
    travels: [
      { verbs: ['north'], action: { id: 'goTo', description: 'locPitbrink' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locAlike12' } },
      { verbs: ['nw'], action: { id: 'goTo', description: 'locDeadend12' } },
    ],
  },
  {
    id: 'locAnteroom',
    conditions: { deep: true },
    description: {
      long: 'You are in an anteroom leading to a large passage to the east. Small passages go west and up. The remnants of recent digging are evident. A sign in midair here says "Cave under construction beyond this point. Proceed at own risk. [Witt Construction Company]"',
      short: 'You\'re in anteroom.',
    },
    travels: [
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locComplex' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locBedquilt' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locWittsend' } },
    ],
  },
  {
    id: 'locArched',
    conditions: { deep: true },
    description: {
      long: 'You are in an arched hall. A coral passage once continued up and east from here, but is now blocked by debris. The air smells of sea water.',
      short: 'You\'re in arched hall.',
    },
    travels: [
      { verbs: ['down', 'shell', 'out'], action: { id: 'goTo', description: 'locShellroom' } },
    ],
  },
  {
    id: 'locAwkward',
    conditions: {},
    description: {
      long: 'You are in an awkward sloping east/west canyon.',
      short: null,
    },
    travels: [
      {
        verbs: ['depre'],
        action: {
          id: 'goTo',
          description: 'locGrate',
          condition: {
            type: 'object',
            object: 'grate',
            state: 'grateOpen',
          },
          conditionFailed: { id: 'speak', description: 'grateNoway' },
        },
      },
      { verbs: ['entra'], action: { id: 'goTo', description: 'locBelowgrate' } },
      { verbs: ['down', 'east', 'debri'], action: { id: 'goTo', description: 'locDebris' } },
      { verbs: ['inside', 'upwar', 'west'], action: { id: 'goTo', description: 'locBird' } },
      { verbs: ['pit'], action: { id: 'goTo', description: 'locPittop' } },
    ],
  },
  {
    id: 'locBaddirection',
    conditions: { deep: true },
    description: {
      long: 'There is no way to go that direction.',
      short: null,
    },
    travels: [{ verbs: ['pit'], action: { id: 'goTo', description: 'locDeadend13' } }],
  },
  {
    id: 'locBarrenfront',
    conditions: { noarr: true, deep: true },
    description: {
      long: 'You are standing at the entrance to a large, barren room. A notice above the entrance reads: "Caution! Bear in room!"',
      short: 'You\'re in front of Barren Room.',
    },
    travels: [
      { verbs: ['west', 'upwar'], action: { id: 'goTo', description: 'locLimestone' } },
      { verbs: ['fork'], action: { id: 'goTo', description: 'locFork' } },
      {
        verbs: ['east', 'inside', 'barre', 'enter'],
        action: { id: 'goTo', description: 'locBarrenroom' },
      },
      { verbs: ['view'], action: { id: 'goTo', description: 'locBreathtaking' } },
    ],
  },
  {
    id: 'locBarrenroom',
    conditions: { noarr: true, deep: true },
    description: {
      long: 'You are inside a barren room. The center of the room is completely empty except for some dust. Marks in the dust lead away toward the far end of the room. The only exit is the way you came in.',
      short: 'You\'re in Barren Room.',
    },
    travels: [
      { verbs: ['west', 'out'], action: { id: 'goTo', description: 'locBarrenfront' } },
      { verbs: ['fork'], action: { id: 'goTo', description: 'locFork' } },
      { verbs: ['view'], action: { id: 'goTo', description: 'locBreathtaking' } },
    ],
  },
  {
    id: 'locBedquilt',
    conditions: { deep: true },
    description: {
      long: 'You are in Bedquilt, a long east/west passage with holes everywhere. To explore at random select north, south, up, or down.',
      short: 'You\'re in Bedquilt.',
    },
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locComplex' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locSwisscheese' } },
      {
        verbs: ['south'],
        action: {
          id: 'speak',
          description: 'futileCrawl',
          // condition: [pct, 65],
        },
      },
      { verbs: ['slab'], action: { id: 'goTo', description: 'locSlab' } },
      // { verbs: ['upwar], cond: [pct, 60],
      // action: { id: 'speak', description: ''futileCrawl'' } },
      // { verbs: ['upwar], cond: [pct, 70], action: { id: 'goTo', description: 'locSecret2' } },
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locDusty' } },
      // { verbs: ['north], cond: [pct, 50],
      // action: { id: 'speak', description: ''futileCrawl'' } },
      // { verbs: ['north], cond: [pct, 75], action: { id: 'goTo', description: 'locLowroom' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locThreejunction' } },
      {
        verbs: ['down'],
        action: {
          id: 'speak',
          description: 'futileCrawl',
          // condition: [pct, 65],
          conditionFailed: { id: 'goTo', description: 'locAnteroom' },
        },
      },
    ],
  },
  {
    id: 'locBelowgrate',
    conditions: { lit: true },
    description: {
      long: 'You are in a small chamber beneath a 3x3 steel grate to the surface. A low crawl over cobbles leads inward to the west.',
      short: 'You\'re below the grate.',
    },
    travels: [
      {
        verbs: ['out'],
        action: {
          id: 'goTo',
          description: 'locGrate',
          condition: {
            type: 'object',
            object: 'grate',
            state: 'grateOpen',
          },
          conditionFailed: { id: 'speak', description: 'grateNoway' },
        },
      },
      {
        verbs: ['crawl', 'cobbl', 'inside', 'west'],
        action: { id: 'goTo', description: 'locCobble' },
      },
      { verbs: ['pit'], action: { id: 'goTo', description: 'locPittop' } },
      { verbs: ['debri'], action: { id: 'goTo', description: 'locDebris' } },
    ],
  },
  {
    id: 'locBird',
    conditions: {},
    description: {
      long: 'You are in a splendid chamber thirty feet high. The walls are frozen rivers of orange stone. An awkward canyon and a good passage exit from east and west sides of the chamber.',
      short: 'You\'re in bird chamber.',
    },
    hints: ['bird'],
    travels: [
      {
        verbs: ['depre'],
        action: {
          id: 'goTo',
          description: 'locGrate',
          condition: {
            type: 'object',
            object: 'grate',
            state: 'grateOpen',
          },
          conditionFailed: { id: 'speak', description: 'grateNoway' },
        },
      },
      { verbs: ['entra'], action: { id: 'goTo', description: 'locBelowgrate' } },
      { verbs: ['debri'], action: { id: 'goTo', description: 'locDebris' } },
      { verbs: ['canyo', 'east'], action: { id: 'goTo', description: 'locAwkward' } },
      { verbs: ['passa', 'pit', 'west'], action: { id: 'goTo', description: 'locPittop' } },
    ],
  },
  {
    id: 'locBoulders1',
    conditions: { deep: true },
    description: {
      long: 'The canyon runs into a mass of boulders -- dead end.',
      short: null,
    },
    travels: [
      { verbs: ['south'], action: { id: 'goTo', description: 'locTall' } },
    ],
  },
  {
    id: 'locBoulders2',
    conditions: { noarr: true, deep: true },
    description: {
      long: 'You are in a small chamber filled with large boulders. The walls are very warm, causing the air in the room to be almost stifling from the heat. The only exit is a crawl heading west, through which is coming a low rumbling.',
      short: 'You\'re in Chamber of Boulders.',
    },
    sound: 'dullRumbling',
    travels: [
      { verbs: ['west', 'out', 'crawl'], action: { id: 'goTo', description: 'locWarmwalls' } },
      { verbs: ['fork'], action: { id: 'goTo', description: 'locFork' } },
      { verbs: ['view'], action: { id: 'goTo', description: 'locBreathtaking' } },
    ],
  },
  {
    id: 'locBreathtaking',
    conditions: { noarr: true, lit: true, deep: true },
    description: {
      long: 'You are on the edge of a breath-taking view. Far below you is an active volcano, from which great gouts of molten lava come surging out, cascading back down into the depths. The glowing rock fills the farthest reaches of the cavern with a blood-red glare, giving everything an eerie, macabre appearance. The air is filled with flickering sparks of ash and a heavy smell of brimstone. The walls are hot to the touch, and the thundering of the volcano drowns out all other sounds. Embedded in the jagged roof far overhead are myriad twisted formations composed of pure white alabaster, which scatter the murky light into sinister apparitions upon the walls. To one side is a deep gorge, filled with a bizarre chaos of tortured rock which seems to have been crafted by the devil himself. An immense river of fire crashes out from the depths of the volcano, burns its way through the gorge, and plummets into a bottomless pit far off to your left. To the right, an immense geyser of blistering steam erupts continuously from a barren island in the center of a sulfurous lake, which bubbles ominously. The far right wall is aflame with an incandescence of its own, which lends an additional infernal splendor to the already hellish scene. A dark, foreboding passage exits to the south.',
      short: 'You\'re at breath-taking view.',
    },
    hints: ['jade'],
    sound: 'totalRoar',
    loud: true,
    travels: [
      { verbs: ['south', 'passa', 'out'], action: { id: 'goTo', description: 'locWarmwalls' } },
      { verbs: ['fork'], action: { id: 'goTo', description: 'locFork' } },
      { verbs: ['down'], action: { id: 'speak', description: 'ridiculousAttempt' } },
      { verbs: ['jump'], action: { id: 'goTo', description: 'locGruesome' } },
    ],
  },
  {
    id: 'locBroken',
    conditions: { deep: true },
    description: {
      long: 'You are in a dirty broken passage. To the east is a crawl. To the west is a large passage. Above you is a hole to another passage.',
      short: 'You\'re in dirty passage.',
    },
    travels: [
      { verbs: ['east', 'crawl'], action: { id: 'goTo', description: 'locSmallpitbrink' } },
      { verbs: ['upwar', 'hole'], action: { id: 'goTo', description: 'locFloorhole' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locDusty' } },
      { verbs: ['bedquilt'], action: { id: 'goTo', description: 'locBedquilt' } },
    ],
  },
  {
    id: 'locBuilding',
    conditions: { fluid: true, above: true, lit: true },
    description: {
      long: 'You are inside a building, a well house for a large spring.',
      short: 'You\'re inside building.',
    },
    sound: 'streamGurgles',
    travels: [
      {
        verbs: ['out', 'outdo', 'west'],
        action: { id: 'goTo', description: 'locStart' },
      },
      { verbs: ['xyzzy'], action: { id: 'goTo', description: 'locFoof1' } },
      { verbs: ['plugh'], action: { id: 'goTo', description: 'locFoof3' } },
      { verbs: ['downs', 'strea'], action: { id: 'goTo', description: 'locSewer' } },
    ],
  },
  {
    id: 'locBuilding1',
    conditions: { deep: true },
    description: {
      long: '',
      short: null,
    },
    travels: [
      {
        verbs: [],
        action: {
          id: 'goTo',
          description: 'locNoclimb',
          condition: {
            type: 'object',
            object: 'plant',
            // state: 'plantThirsty',
            // state: 'plantGrown',
          },
          conditionFailed: { id: 'goTo', description: 'locPlanttop' },
        },
      },
    ],
  },
  {
    id: 'locCavein',
    conditions: { deep: true },
    description: {
      long: 'The passage here is blocked by a recent cave-in.',
      short: null,
    },
    travels: [
      { verbs: ['south', 'giant', 'out'], action: { id: 'goTo', description: 'locGiantroom' } },
    ],
  },
  {
    id: 'locCliff',
    conditions: { above: true, noback: true, lit: true },
    description: {
      long: 'The forest thins out here to reveal a steep cliff. There is no way down, but a small ledge can be seen to the west across the chasm.',
      short: 'You\'re at cliff.',
    },
    hints: ['urn'],
    travels: [
      { verbs: ['south', 'fores'], action: { id: 'goTo', description: 'locForest17' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locForest19' } },
      { verbs: ['jump'], action: { id: 'goTo', description: 'locNomake' } },
    ],
  },
  {
    id: 'locClifface',
    conditions: { deep: true },
    description: {
      long: 'You are climbing along a nearly vertical cliff.',
      short: null,
    },
    travels: [
      { verbs: ['down'], action: { id: 'goTo', description: 'locCliffbase' } },
      {
        verbs: ['upwar'],
        action: {
          id: 'goTo',
          description: 'locClifftop',
          condition: {
            type: 'carry',
            object: 'obj46',
          },
          conditionFailed: { id: 'goTo', description: 'locFootslip' },
        },
      },
    ],
  },
  {
    id: 'locCliffbase',
    conditions: { deep: true },
    description: {
      long: 'You are at the base of a nearly vertical cliff. There are some slim footholds which would enable you to climb up, but it looks extremely dangerous. Here at the base of the cliff lie the remains of several earlier adventurers who apparently failed to make it.',
      short: 'You\'re at base of cliff.',
    },
    travels: [
      { verbs: ['down', 'se'], action: { id: 'goTo', description: 'locSteep' } },
      { verbs: ['upwar', 'climb'], action: { id: 'goTo', description: 'locClifface' } },
    ],
  },
  {
    id: 'locCliffledge',
    conditions: { deep: true },
    description: {
      long: 'You are on a small ledge at the top of a nearly vertical cliff. There is a low crawl leading off to the northeast.',
      short: 'You\'re at top of cliff.',
    },
    travels: [
      { verbs: ['climb', 'down'], action: { id: 'goTo', description: 'locClifface' } },
      { verbs: ['ne', 'crawl'], action: { id: 'goTo', description: 'locReachdead' } },
    ],
  },
  {
    id: 'locClifftop',
    conditions: { deep: true },
    description: {
      long: 'Just as you reach the top, your foot slips on a loose rock and you make one last desperate grab. Your luck holds, as does your grip. With an enormous heave, you lift yourself to the ledge above.',
      short: null,
    },
    travels: [{ verbs: [], action: { id: 'goTo', description: 'locCliffledge' } }],
  },
  {
    id: 'locClimbstalk',
    conditions: { deep: true },
    description: {
      long: 'You clamber up the plant and scurry through the hole at the top.',
      short: null,
    },
    travels: [{ verbs: [], action: { id: 'goTo', description: 'locNarrow' } }],
  },
  {
    id: 'locCobble',
    conditions: { lit: true },
    description: {
      long: 'You are crawling over cobbles in a low passage. There is a dim light at the east end of the passage.',
      short: 'You\'re in cobble crawl.',
    },
    travels: [
      { verbs: ['out', 'surfa', 'east'], action: { id: 'goTo', description: 'locBelowgrate' } },
      {
        verbs: ['inside', 'dark', 'west', 'debri'],
        action: { id: 'goTo', description: 'locDebris' },
      },
      { verbs: ['pit'], action: { id: 'goTo', description: 'locPittop' } },
      { verbs: ['out', 'surfa', 'east'], action: ['goTo', 'locBelowgrate'] },
    ],
  },
  {
    id: 'locComplex',
    conditions: { deep: true },
    description: {
      long: 'You are at a complex junction. A low hands and knees passage from the north joins a higher crawl from the east to make a walking passage going west. There is also a large room above. The air is damp here.',
      short: 'You\'re at complex junction.',
    },
    hints: ['jade'],
    sound: 'windWhistles',
    travels: [
      { verbs: ['upwar', 'climb', 'room'], action: { id: 'goTo', description: 'locDusty' } },
      { verbs: ['west', 'bedquilt'], action: { id: 'goTo', description: 'locBedquilt' } },
      { verbs: ['north', 'shell'], action: { id: 'goTo', description: 'locShellroom' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locAnteroom' } },
    ],
  },
  {
    id: 'locCorridor',
    conditions: { noarr: true, deep: true },
    description: {
      long: 'You\'re in a long east/west corridor. A faint rumbling noise can be heard in the distance.',
      short: 'You\'re in corridor.',
    },
    sound: 'dullRumbling',
    travels: [
      { verbs: ['west'], action: { id: 'goTo', description: 'locNechasm' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locFork' } },
      { verbs: ['view'], action: { id: 'goTo', description: 'locBreathtaking' } },
      { verbs: ['barre'], action: { id: 'goTo', description: 'locBarrenfront' } },
    ],
  },
  {
    id: 'locCrack',
    conditions: { deep: true },
    description: {
      long: 'The crack is far too small for you to follow. At its widest it is barely wide enough to admit your foot.',
      short: null,
    },
    travels: [{ verbs: [], action: { id: 'goTo', description: 'locPittop' } }],
  },
  {
    id: 'locCrossover',
    conditions: { deep: true },
    description: {
      long: 'You are at a crossover of a high n/s passage and a low e/w one.',
      short: null,
    },
    travels: [
      { verbs: ['west'], action: { id: 'goTo', description: 'locLongeast' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locDeadend7' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locWestside' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locLongwest' } },
    ],
  },
  {
    id: 'locDarkroom',
    conditions: { deep: true },
    description: {
      long: 'You\'re in the dark-room. A corridor leading south is the only exit.',
      short: 'You\'re in dark-room.',
    },
    hints: ['dark'],
    travels: [{
      verbs: ['south', 'plove', 'out'],
      action: { id: 'goTo', description: 'locPlover' },
    }],
  },
  {
    id: 'locCuldesac',
    conditions: { deep: true },
    description: {
      long: 'You are in a cul-de-sac about eight feet across.',
      short: null,
    },
    travels: [
      { verbs: ['upwar', 'out'], action: { id: 'goTo', description: 'locSloping1' } },
      { verbs: ['shell'], action: { id: 'goTo', description: 'locShellroom' } },
    ],
  },
  {
    id: 'locDeadcrawl',
    conditions: { deep: true },
    description: {
      long: 'Dead end crawl.',
      short: null,
    },
    travels: [
      { verbs: ['south', 'crawl', 'out'], action: { id: 'goTo', description: 'locLowroom' } },
    ],
  },
  {
    id: 'locDeadend1',
    conditions: { deep: true, noarrr: true },
    description: {
      long: 'Dead end',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['west', 'out'], action: { id: 'goTo', description: 'locAlike4' } },
    ],
  },
  {
    id: 'locDeadend2',
    conditions: { deep: true, noarrr: true },
    description: {
      long: 'Dead end',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['east', 'out'], action: { id: 'goTo', description: 'locAlike4' } },
    ],
  },
  {
    id: 'locDeadend3',
    conditions: { deep: true, noarrr: true },
    description: {
      long: 'Dead end',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['upwar', 'out'], action: { id: 'goTo', description: 'locAlike3' } },
    ],
  },
  {
    id: 'locDeadend4',
    conditions: { deep: true, noarrr: true },
    description: {
      long: 'Dead end',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['west', 'out'], action: { id: 'goTo', description: 'locAlike9' } },
    ],
  },
  {
    id: 'locDeadend5',
    conditions: { deep: true, noarrr: true },
    description: {
      long: 'Dead end',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['upwar', 'out'], action: { id: 'goTo', description: 'locAlike10' } },
    ],
  },
  {
    id: 'locDeadend6',
    conditions: { deep: true, noarrr: true },
    description: {
      long: 'Dead end',
      short: null,
    },
    travels: [
      { verbs: ['east', 'out'], action: { id: 'goTo', description: 'locPitbrink' } },
    ],
  },
  {
    id: 'locDeadend7',
    conditions: { deep: true },
    description: {
      long: 'Dead end',
      short: null,
    },
    travels: [
      { verbs: ['south', 'out'], action: { id: 'goTo', description: 'locCrossover' } },
    ],
  },
  {
    id: 'locDeadend8',
    conditions: { deep: true },
    description: {
      long: 'Dead end',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['west', 'out'], action: { id: 'goTo', description: 'locAlike11' } },
    ],
  },
  {
    id: 'locDeadend9',
    conditions: { deep: true, noarrr: true },
    description: {
      long: 'Dead end',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['south', 'out'], action: { id: 'goTo', description: 'locAlike3' } },
    ],
  },
  {
    id: 'locDeadend10',
    conditions: { deep: true, noarrr: true },
    description: {
      long: 'Dead end',
      short: null,
    },
    travels: [
      { verbs: ['east', 'out'], action: { id: 'goTo', description: 'locAlike12' } },
    ],
  },
  {
    id: 'locDeadend11',
    conditions: { deep: true, noarrr: true },
    description: {
      long: 'Dead end',
      short: null,
    },
    hints: ['maze'],
    travels: [
      { verbs: ['upwar', 'out'], action: { id: 'goTo', description: 'locAlike8' } },
    ],
  },
  {
    id: 'locDeadend12',
    conditions: { deep: true },
    description: {
      long: 'Dead end',
      short: null,
    },
    travels: [
      { verbs: ['se'], action: { id: 'goTo', description: 'locAlike13' } },
    ],
  },
  {
    id: 'locDeadend13',
    conditions: { deep: true },
    description: {
      long: 'Dead end',
      short: null,
    },
    travels: [
      { verbs: ['north', 'out'], action: { id: 'goTo', description: 'locDifferent2' } },
      {
        verbs: ['south'],
        action: {
          id: 'goTo',
          description: 'locRoughhewn',
          condition: {
            type: 'object',
            object: 'vend',
            state: 'vendUnblocks',
          },
          conditionFailed: { id: 'goTo', description: 'locBaddirection' },
        },
      },
    ],
  },
  {
    id: 'locDebris',
    conditions: {},
    description: {
      long: 'You are in a debris room filled with stuff washed in from the surface. A low wide passage with cobbles becomes plugged with mud and debris here, but an awkward canyon leads upward and west. In the mud someone has scrawled, "magic word xyzzy".',
      short: 'You\'re in debris room.',
    },
    travels: [
      {
        verbs: ['depre'],
        action: {
          id: 'goTo',
          description: 'locGrate',
          condition: {
            type: 'object',
            object: 'grate',
            state: 'grateOpen',
          },
          conditionFailed: { id: 'speak', description: 'grateNoway' },
        },
      },
      { verbs: ['entra'], action: { id: 'goTo', description: 'locBelowgrate' } },
      {
        verbs: ['crawl', 'cobbl', 'passa', 'low', 'east'],
        action: { id: 'goTo', description: 'locCobble' },
      },
      {
        verbs: ['canyo', 'inside', 'upwar', 'west'],
        action: { id: 'goTo', description: 'locAwkward' },
      },
      { verbs: ['xyzzy'], action: { id: 'goTo', description: 'locFoof2' } },
      { verbs: ['pit'], action: { id: 'goTo', description: 'locPittop' } },
    ],
  },
  {
    id: 'locDifferent1',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of twisty little passages, all different.',
      short: null,
    },
    travels: [
      { verbs: ['south'], action: { id: 'goTo', description: 'locDifferent3' } },
      { verbs: ['sw'], action: { id: 'goTo', description: 'locDifferent4' } },
      { verbs: ['ne'], action: { id: 'goTo', description: 'locDifferent5' } },
      { verbs: ['se'], action: { id: 'goTo', description: 'locDifferent6' } },
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locDifferent7' } },
      { verbs: ['nw'], action: { id: 'goTo', description: 'locDifferent8' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locDifferent9' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locDifferent10' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locDifferent11' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locLongwest' } },
    ],
  },
  {
    id: 'locDifferent2',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a little maze of twisting passages, all different.',
      short: null,
    },
    travels: [
      { verbs: ['sw'], action: { id: 'goTo', description: 'locDifferent3' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locDifferent4' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locDifferent5' } },
      { verbs: ['nw'], action: { id: 'goTo', description: 'locDifferent6' } },
      { verbs: ['se'], action: { id: 'goTo', description: 'locDifferent7' } },
      { verbs: ['ne'], action: { id: 'goTo', description: 'locDifferent8' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locDifferent9' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locDifferent10' } },
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locDifferent11' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locDeadend13' } },
    ],
  },
  {
    id: 'locDifferent3',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of twisting little passages, all different.',
      short: null,
    },
    travels: [
      { verbs: ['west'], action: { id: 'goTo', description: 'locDifferent1' } },
      { verbs: ['se'], action: { id: 'goTo', description: 'locDifferent4' } },
      { verbs: ['nw'], action: { id: 'goTo', description: 'locDifferent5' } },
      { verbs: ['sw'], action: { id: 'goTo', description: 'locDifferent6' } },
      { verbs: ['ne'], action: { id: 'goTo', description: 'locDifferent7' } },
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locDifferent8' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locDifferent9' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locDifferent10' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locDifferent11' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    id: 'locDifferent4',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a little maze of twisty passages, all different.',
      short: null,
    },
    travels: [
      { verbs: ['nw'], action: { id: 'goTo', description: 'locDifferent1' } },
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locDifferent3' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locDifferent5' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locDifferent6' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locDifferent7' } },
      { verbs: ['sw'], action: { id: 'goTo', description: 'locDifferent8' } },
      { verbs: ['ne'], action: { id: 'goTo', description: 'locDifferent9' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locDifferent10' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locDifferent11' } },
      { verbs: ['se'], action: { id: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    id: 'locDifferent5',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a twisting maze of little passages, all different.',
      short: null,
    },
    travels: [
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locDifferent1' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locDifferent3' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locDifferent4' } },
      { verbs: ['ne'], action: { id: 'goTo', description: 'locDifferent6' } },
      { verbs: ['sw'], action: { id: 'goTo', description: 'locDifferent7' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locDifferent8' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locDifferent9' } },
      { verbs: ['nw'], action: { id: 'goTo', description: 'locDifferent10' } },
      { verbs: ['se'], action: { id: 'goTo', description: 'locDifferent11' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    id: 'locDifferent6',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a twisting little maze of passages, all different.',
      short: null,
    },
    travels: [
      { verbs: ['ne'], action: { id: 'goTo', description: 'locDifferent1' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locDifferent3' } },
      { verbs: ['nw'], action: { id: 'goTo', description: 'locDifferent4' } },
      { verbs: ['se'], action: { id: 'goTo', description: 'locDifferent5' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locDifferent7' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locDifferent8' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locDifferent9' } },
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locDifferent10' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locDifferent11' } },
      { verbs: ['sw'], action: { id: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    id: 'locDifferent7',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a twisty little maze of passages, all different.',
      short: null,
    },
    travels: [
      { verbs: ['north'], action: { id: 'goTo', description: 'locDifferent1' } },
      { verbs: ['se'], action: { id: 'goTo', description: 'locDifferent3' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locDifferent4' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locDifferent5' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locDifferent6' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locDifferent8' } },
      { verbs: ['sw'], action: { id: 'goTo', description: 'locDifferent9' } },
      { verbs: ['ne'], action: { id: 'goTo', description: 'locDifferent10' } },
      { verbs: ['nw'], action: { id: 'goTo', description: 'locDifferent11' } },
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    id: 'locDifferent8',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a twisty maze of little passages, all different.',
      short: null,
    },
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locDifferent1' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locDifferent3' } },
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locDifferent4' } },
      { verbs: ['sw'], action: { id: 'goTo', description: 'locDifferent5' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locDifferent6' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locDifferent7' } },
      { verbs: ['nw'], action: { id: 'goTo', description: 'locDifferent9' } },
      { verbs: ['se'], action: { id: 'goTo', description: 'locDifferent10' } },
      { verbs: ['ne'], action: { id: 'goTo', description: 'locDifferent11' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    id: 'locDifferent9',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a little twisty maze of passages, all different.',
      short: null,
    },
    travels: [
      { verbs: ['se'], action: { id: 'goTo', description: 'locDifferent1' } },
      { verbs: ['ne'], action: { id: 'goTo', description: 'locDifferent3' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locDifferent4' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locDifferent5' } },
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locDifferent6' } },
      { verbs: ['nw'], action: { id: 'goTo', description: 'locDifferent7' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locDifferent8' } },
      { verbs: ['sw'], action: { id: 'goTo', description: 'locDifferent10' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locDifferent11' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    id: 'locDifferent10',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of little twisting passages, all different.',
      short: null,
    },
    travels: [
      { verbs: ['down'], action: { id: 'goTo', description: 'locDifferent1' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locDifferent3' } },
      { verbs: ['ne'], action: { id: 'goTo', description: 'locDifferent4' } },
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locDifferent5' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locDifferent6' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locDifferent7' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locDifferent8' } },
      { verbs: ['se'], action: { id: 'goTo', description: 'locDifferent9' } },
      { verbs: ['sw'], action: { id: 'goTo', description: 'locDifferent11' } },
      { verbs: ['nw'], action: { id: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    id: 'locDifferent11',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are in a maze of little twisty passages, all different.',
      short: null,
    },
    travels: [
      { verbs: ['sw'], action: { id: 'goTo', description: 'locDifferent1' } },
      { verbs: ['nw'], action: { id: 'goTo', description: 'locDifferent3' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locDifferent4' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locDifferent5' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locDifferent6' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locDifferent7' } },
      { verbs: ['se'], action: { id: 'goTo', description: 'locDifferent8' } },
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locDifferent9' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locDifferent10' } },
      { verbs: ['ne'], action: { id: 'goTo', description: 'locDifferent2' } },
    ],
  },
  {
    id: 'locDome',
    conditions: { deep: true },
    description: {
      long: 'The dome is unclimbable.',
      short: null,
    },
    travels: [{ verbs: [], action: { id: 'goTo', description: 'locMisthall' } }],
  },
  {
    id: 'locDusty',
    conditions: { deep: true },
    description: {
      long: 'You are in a large room full of dusty rocks. There is a big hole in the floor. There are cracks everywhere, and a passage leading east.',
      short: 'You\'re in dusty rock room.',
    },
    travels: [
      { verbs: ['east', 'passa'], action: { id: 'goTo', description: 'locBroken' } },
      { verbs: ['down', 'hole', 'floor'], action: { id: 'goTo', description: 'locComplex' } },
      { verbs: ['bedquilt'], action: { id: 'goTo', description: 'locBedquilt' } },
    ],
  },
  {
    id: 'locEastbank',
    conditions: { deep: true },
    description: {
      long: 'You are on the east bank of a fissure slicing clear across the hall. The mist is quite thick here, and the fissure is too wide to jump.',
      short: 'You\'re on east bank of fissure.',
    },
    travels: [
      { verbs: ['hall', 'east'], action: { id: 'goTo', description: 'locMisthall' } },
      { verbs: ['jump'], action: { id: 'speak', description: 'crossBridge' } },
      {
        verbs: ['forwa'],
        action: {
          id: 'goTo',
          description: 'locWestbank',
          condition: {
            type: 'object',
            object: 'fissure',
            state: 'bridged',
          },
          conditionFailed: { id: 'goTo', description: 'locNomake' },
        },
      },
      {
        verbs: ['over', 'acros', 'west', 'cross'],
        action: {
          id: 'goTo',
          description: 'locWestbank',
          condition: {
            type: 'object',
            object: 'fissure',
            state: 'bridged',
          },
          conditionFailed: { id: 'speak', description: 'noCross' },
        },
      },
    ],
  },
  {
    id: 'locEastend',
    conditions: { deep: true },
    description: {
      long: 'You are at the east end of the Twopit Room. The floor here is littered with thin rock slabs, which make it easy to descend the pits. There is a path here bypassing the pits to connect passages from east and west. There are holes all over, but the only big one is on the wall directly over the west pit where you can\'t get to it.',
      short: 'You\'re at east end of Twopit Room.',
    },
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locSwisscheese' } },
      { verbs: ['west', 'acros'], action: { id: 'goTo', description: 'locWestend' } },
      { verbs: ['down', 'pit'], action: { id: 'goTo', description: 'locEastpit' } },
    ],
  },
  {
    id: 'locEastpit',
    conditions: { fluid: true, deep: true, oily: true },
    description: {
      long: 'You are at the bottom of the eastern pit in the Twopit Room. There is a small pool of oil in one corner of the pit.',
      short: 'You\'re in east pit.',
    },
    travels: [
      { verbs: ['upwar', 'out'], action: { id: 'goTo', description: 'locEastend' } },
    ],
  },
  {
    id: 'locFloorhole',
    conditions: { deep: true },
    description: {
      long: 'You are in a low n/s passage at a hole in the floor. The hole goes down to an e/w passage.',
      short: 'You\'re in n/s passage above e/w passage.',
    },
    travels: [
      { verbs: ['hall', 'out', 'south'], action: { id: 'goTo', description: 'locKinghall' } },
      { verbs: ['north', 'y2'], action: { id: 'goTo', description: 'locY2' } },
      { verbs: ['down', 'hole'], action: { id: 'goTo', description: 'locBroken' } },
    ],
  },
  {
    id: 'locFoof1',
    conditions: {},
    description: {
      long: '>>Foof!<<',
      short: null,
    },
    travels: [{ verbs: [], action: { id: 'goTo', description: 'locDebris' } }],
  },
  {
    id: 'locFoof2',
    conditions: { above: true },
    description: {
      long: '>>Foof!<<',
      short: null,
    },
    travels: [{ verbs: [], action: { id: 'goTo', description: 'locBuilding' } }],
  },
  {
    id: 'locFoof3',
    conditions: { deep: true },
    description: {
      long: '>>Foof!<<',
      short: null,
    },
    travels: [{ verbs: [], action: { id: 'goTo', description: 'locY2' } }],
  },
  {
    id: 'locFoof4',
    conditions: { above: true },
    description: {
      long: '>>Foof!<<',
      short: null,
    },
    travels: [{ verbs: [], action: { id: 'goTo', description: 'locBuilding' } }],
  },
  {
    id: 'locFoof5',
    conditions: { deep: true },
    description: {
      long: '>>Foof!<<',
      short: null,
    },
    travels: [{ verbs: [], action: { id: 'goTo', description: 'locPlover' } }],
  },
  {
    id: 'locFoof6',
    conditions: { deep: true },
    description: {
      long: '>>Foof!<<',
      short: null,
    },
    travels: [{ verbs: [], action: { id: 'goTo', description: 'locY2' } }],
  },
  {
    id: 'locFootslip',
    conditions: { deep: true },
    description: {
      long: 'Just as you reach the top, your foot slips on a loose rock and you tumble several hundred feet to join the other unlucky adventurers.',
      short: null,
    },
    travels: [
      { verbs: [], action: { id: 'goTo', description: 'locNowhere' } },
    ],
  },
  {
    id: 'locForest1',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locStart' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest13' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locForest2' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest3' } },
    ],
  },
  {
    id: 'locForest2',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locForest1' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest19' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locForest3' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest18' } },
    ],
  },
  {
    id: 'locForest3',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east', 'west'], action: { id: 'goTo', description: 'locForest4' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locForest2' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest1' } },
    ],
  },
  {
    id: 'locForest4',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east', 'north'], action: { id: 'goTo', description: 'locForest3' } },
      { verbs: ['west', 'south'], action: { id: 'goTo', description: 'locForest5' } },
    ],
  },
  {
    id: 'locForest5',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east', 'north'], action: { id: 'goTo', description: 'locForest4' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest7' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest6' } },
    ],
  },
  {
    id: 'locForest6',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locForest5' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest7' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locValley' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locSlit' } },
    ],
  },
  {
    id: 'locForest7',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locForest5' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest6' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locGrate' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest8' } },
    ],
  },
  {
    id: 'locForest8',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locForest9' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest11' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locForest22' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest7' } },
    ],
  },
  {
    id: 'locForest9',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locForest11' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest8' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locForest10' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locGrate' } },
    ],
  },
  {
    id: 'locForest10',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locSlit' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest11' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locForest9' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locGrate' } },
    ],
  },
  {
    id: 'locForest11',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locForest10' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest8' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locForest22' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest9' } },
    ],
  },
  {
    id: 'locForest12',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locForest13' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest14' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locForest22' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locValley' } },
    ],
  },
  {
    id: 'locForest13',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locForest1' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest12' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locForest20' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locHill' } },
    ],
  },
  {
    id: 'locForest14',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locRoadend' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest16' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locForest15' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest12' } },
    ],
  },
  {
    id: 'locForest15',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locForest16' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest22' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locRoadend' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest14' } },
    ],
  },
  {
    id: 'locForest16',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east', 'north'], action: { id: 'goTo', description: 'locForest17' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest14' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest15' } },
    ],
  },
  {
    id: 'locForest17',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locForest18' } },
      { verbs: ['west', 'south'], action: { id: 'goTo', description: 'locForest16' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locCliff' } },
    ],
  },
  {
    id: 'locForest18',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locForest19' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest17' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locForest2' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest21' } },
    ],
  },
  {
    id: 'locForest19',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locForest2' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest18' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locCliff' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest20' } },
    ],
  },
  {
    id: 'locForest20',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locHill' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest21' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locForest19' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest13' } },
    ],
  },
  {
    id: 'locForest21',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locForest20' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locRoadend' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locForest18' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest21' } },
    ],
  },
  {
    id: 'locForest22',
    conditions: { forest: true, noback: true, lit: true },
    description: {
      long: 'You are wandering aimlessly through the forest.',
      short: null,
    },
    hints: ['forest'],
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locForest8' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest11' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locForest15' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest12' } },
    ],
  },
  {
    id: 'locFork',
    conditions: { noarr: true, deep: true },
    description: {
      long: 'The path forks here. The left fork leads northeast. A dull rumbling seems to get louder in that direction. The right fork leads southeast down a gentle slope. The main corridor enters from the west.',
      short: 'You\'re at fork in path.',
    },
    sound: 'dullRumbling',
    travels: [
      { verbs: ['west'], action: { id: 'goTo', description: 'locCorridor' } },
      { verbs: ['ne', 'left'], action: { id: 'goTo', description: 'locWarmwalls' } },
      { verbs: ['se', 'right', 'down'], action: { id: 'goTo', description: 'locLimestone' } },
      { verbs: ['view'], action: { id: 'goTo', description: 'locBreathtaking' } },
      { verbs: ['barre'], action: { id: 'goTo', description: 'locBarrenfront' } },
    ],
  },
  {
    id: 'locGiantroom',
    conditions: { deep: true },
    description: {
      long: 'You are in the Giant Room. The ceiling here is too high up for your lamp to show it. Cavernous passages lead east, north, and south. On the west wall is scrawled the inscription, "fee fie foe foo" [sic].',
      short: 'You\'re in Giant Room.',
    },
    travels: [
      { verbs: ['south'], action: { id: 'goTo', description: 'locNarrow' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locCavein' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locImmense' } },
    ],
  },
  {
    id: 'locGrate',
    conditions: { above: true, lit: true },
    description: {
      long: 'You are in a 20-foot depression floored with bare dirt. Set into the dirt is a strong steel grate mounted in concrete. A dry streambed leads into the depression.',
      short: 'You\'re outside grate.',
    },
    hints: ['grate', 'jade'],
    travels: [
      { verbs: ['east', 'fores'], action: { id: 'goTo', description: 'locForest7' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest10' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest9' } },
      { verbs: ['build'], action: { id: 'goTo', description: 'locStart' } },
      {
        verbs: ['upstr', 'gully', 'north'],
        action: { id: 'goTo', description: 'locSlit' },
      },
      {
        verbs: ['enter', 'inside', 'down'],
        action: {
          id: 'goTo',
          description: 'locBelowgrate',
          condition: {
            type: 'object',
            object: 'grate',
            state: 'grateOpen',
          },
          conditionFailed: { id: 'speak', description: 'grateNoway' },
        },
      },
    ],
  },
  {
    id: 'locGruesome',
    conditions: { deep: true },
    description: {
      long: 'There is now one more gruesome aspect to the spectacular vista.',
      short: null,
    },
    travels: [{ verbs: [], action: { id: 'goTo', description: 'locNowhere' } }],
  },
  {
    id: 'locHill',
    conditions: { above: true, lit: true },
    description: {
      long: 'You have walked up a hill, still in the forest. The road slopes back down the other side of the hill. There is a building in the distance.',
      short: 'You\'re at hill in road.',
    },
    travels: [
      { verbs: ['build', 'east'], action: { id: 'goTo', description: 'locStart' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locRoadend' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locForest20' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locForest13' } },
      { verbs: ['down'], action: { id: 'speak', description: 'whichWay' } },
    ],
  },
  {
    id: 'locImmense',
    conditions: { deep: true },
    description: {
      long: 'You are at one end of an immense north/south passage.',
      short: null,
    },
    sound: 'windWhistles',
    travels: [
      { verbs: ['south', 'giant', 'passa'], action: { id: 'goTO', description: 'locGiantroom' } },
      {
        verbs: ['north', 'enter', 'caver'],
        action: {
          id: 'goTo',
          description: 'locWaterfall',
          condition: {
            type: 'object',
            object: 'door',
            state: 'doorUnrusted',
          },
          conditionFailed: { id: 'speak', description: 'rustyDoor' },
        },
      },
    ],
  },
  {
    id: 'locIncline',
    conditions: { deep: true },
    description: {
      long: 'You are at the top of a steep incline above a large room. You could climb down here, but you would not be able to climb up. There is a passage leading back to the north.',
      short: 'You\'re at steep incline above large room.',
    },
    travels: [
      {
        verbs: ['north', 'cavern', 'passa'],
        action: { id: 'goTo', description: 'locWaterfall' },
      },
      { verbs: ['down', 'climb'], action: { id: 'goTo', description: 'locLowroom' } },
    ],
  },
  {
    id: 'locJumble',
    conditions: { deep: true },
    description: {
      long: 'You are in a jumble of rock, with cracks everywhere.',
      short: null,
    },
    travels: [
      { verbs: ['down', 'y2'], action: { id: 'goTo', description: 'locY2' } },
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locMisthall' } },
    ],
  },
  {
    id: 'locKinghall',
    conditions: { deep: true },
    description: {
      long: 'You are in the Hall of the Mountain King, with passages off in all directions.',
      short: 'You\'re in Hall of Mt King.',
    },
    hints: ['snake'],
    travels: [
      { verbs: ['stair', 'upwar', 'east'], action: { id: 'goTo', description: 'locMisthall' } },
      {
        verbs: ['north', 'right'],
        action: {
          id: 'goTo',
          description: 'locFloorhole',
          condition: {
            type: 'object',
            object: 'snake',
            state: 'snakeChased',
          },
          conditionFailed: { id: 'goTo', description: 'locSnakeblock' },
        },
      },
      {
        verbs: ['south', 'left'],
        action: {
          id: 'goTo',
          description: 'locSouthside',
          condition: {
            type: 'object',
            object: 'snake',
            state: 'snakeChased',
          },
          conditionFailed: { id: 'goTo', description: 'locSnakeblock' },
        },
      },
      {
        verbs: ['west', 'forwa'],
        action: {
          id: 'goTo',
          description: 'locWestside',
          condition: {
            type: 'object',
            object: 'snake',
            state: 'snakeChased',
          },
          conditionFailed: { id: 'goTo', description: 'locSnakeblock' },
        },
      },
      {
        verbs: ['sw'],
        action: {
          id: 'goTo',
          description: 'locSecret3',
          // condition: [pct, 35],
          conditionFailed: { id: 'goTo', description: 'locSnakeblock' },
        },
      },
      {
        verbs: ['sw'],
        action: {
          id: 'goTo',
          description: 'locSnakeblock',
          // condition: ["with", snake],
          conditionFailed: { id: 'goTo', description: 'locSnakeblock' },
        },
      },
      { verbs: ['secre'], action: { id: 'goTo', description: 'locSecret3' } },
    ],
  },
  {
    id: 'locLarge',
    conditions: { deep: true },
    description: {
      long: 'You are in a large chamber with passages to the west and north.',
      short: null,
    },
    hints: ['ogre'],
    travels: [
      { verbs: ['west'], action: { id: 'goTo', description: 'locSecret3' } },
      {
        verbs: ['north'],
        action: {
          id: 'goTo',
          description: 'locStoreroom',
          // condition: [with, ogre],
          conditionFailed: { id: 'speak', description: 'ogreSnarl' },
        },
      },
    ],
  },
  {
    id: 'locLedge',
    conditions: { above: true, lit: true },
    description: {
      long: 'You are on a small ledge on one face of a sheer cliff. There are no paths away from the ledge. Across the chasm is a small clearing surrounded by forest.',
      short: 'You\'re on ledge.',
    },
    travels: [
      { verbs: ['jump'], action: { id: 'goTo', description: 'locNomake' } },
    ],
  },
  {
    id: 'locLimestone',
    conditions: { noarr: true, deep: true },
    description: {
      long: 'You are walking along a gently sloping north/south passage lined with oddly shaped limestone formations.',
      short: 'You\'re in limestone passage.',
    },
    travels: [
      { verbs: ['north', 'upwar', 'fork'], action: { id: 'goTo', description: 'locFork' } },
      {
        verbs: ['south', 'down', 'barre'],
        action: { id: 'goTo', description: 'locBarrenfront' },
      },
      { verbs: ['view'], action: { id: 'goTo', description: 'locBreathtaking' } },
    ],
  },
  {
    id: 'locLongeast',
    conditions: { deep: true },
    description: {
      long: 'You are at the east end of a very long hall apparently without side chambers. To the east a low wide crawl slants up. To the north a round two foot hole slants down.',
      short: 'You\'re at east end of long hall.',
    },
    travels: [
      { verbs: ['east', 'upwar', 'crawl'], action: { id: 'goTo', description: 'locMistwest' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locLongwest' } },
      { verbs: ['north', 'down', 'hole'], action: { id: 'goTo', description: 'locCrossover' } },
    ],
  },
  {
    id: 'locLongwest',
    conditions: { deep: true },
    description: {
      long: 'You are at the west end of a very long featureless hall. The hall joins up with a narrow north/south passage.',
      short: 'You\'re at west end of long hall.',
    },
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locLongeast' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locCrossover' } },
      {
        verbs: ['south'],
        action: {
          id: 'goTo',
          description: 'locDifferent1',
          // condition: [nodwarves],
        },
      },
    ],
  },
  {
    id: 'locLowroom',
    conditions: { deep: true },
    description: {
      long: 'You are in a large low room. Crawls lead north, se, and sw.',
      short: 'You\'re in large low room.',
    },
    travels: [
      { verbs: ['bedquilt'], action: { id: 'goTo', description: 'locBedquilt' } },
      { verbs: ['sw'], action: { id: 'goTo', description: 'locWinding' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locDeadcrawl' } },
      { verbs: ['se', 'oriental'], action: { id: 'goTo', description: 'locOriental' } },
    ],
  },
  {
    id: 'locMirrorcanyon',
    conditions: { deep: true },
    description: {
      long: 'You are in a north/south canyon about 25 feet across. The floor is covered by white mist seeping in from the north. The walls extend upward for well over 100 feet. Suspended from some unseen point far above you, an enormous two-sided mirror is hanging parallel to and midway between the canyon walls. (The mirror is obviously provided for the use of the dwarves who, as you know, are extremely vain.) A small window can be seen in either wall, some fifty feet up.',
      short: 'You\'re in Mirror Canyon.',
    },
    hints: ['jade'],
    sound: 'windWhistles',
    travels: [
      { verbs: ['south'], action: { id: 'goTo', description: 'locSecret1' } },
      { verbs: ['north', 'reservoir'], action: { id: 'goTo', description: 'locReservoir' } },
    ],
  },
  {
    id: 'locMisthall',
    conditions: { deep: true },
    description: {
      long: 'You are at one end of a vast hall stretching forward out of sight to the west. There are openings to either side. Nearby, a wide stone staircase leads downward. The hall is filled with wisps of white mist swaying to and fro almost as if alive. A cold wind blows up the staircase. There is a passage at the top of a dome behind you.',
      short: 'You\'re in Hall of Mists.',
    },
    hints: ['jade'],
    sound: 'windWhistles',
    travels: [
      { verbs: ['left', 'south'], action: { id: 'goTo', description: 'locNugget' } },
      { verbs: ['forwa', 'hall', 'west'], action: { id: 'goTo', description: 'locEastbank' } },
      { verbs: ['stair', 'down', 'north'], action: { id: 'goTo', description: 'locKinghall' } },
      {
        verbs: ['upwar', 'pit', 'steps', 'dome', 'passa', 'east'],
        action: {
          id: 'goTo',
          description: 'locDome',
          condition: {
            type: 'carry',
            object: 'nugget',
          },
          conditionFailed: { id: 'goTo', description: 'locPittop' },
        },
      },
      { verbs: ['y2'], action: { id: 'goTo', description: 'locJumble' } },
    ],
  },
  {
    id: 'locMistwest',
    conditions: { deep: true },
    description: {
      long: 'You are at the west end of the Hall of Mists. A low wide crawl continues west and another goes north. To the south is a little passage 6 feet off the floor.',
      short: 'You\'re at west end of Hall of Mists.',
    },
    travels: [
      {
        verbs: ['south', 'upwar', 'passa', 'climb'],
        action: { id: 'goTo', description: 'locAlike1' },
      },
      { verbs: ['east'], action: { id: 'goTo', description: 'locWestbank' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locParallel2' } },
      { verbs: ['west', 'crawl'], action: { id: 'goTo', description: 'locLongeast' } },
    ],
  },
  {
    id: 'locMisty',
    conditions: { deep: true },
    description: {
      long: 'You are following a wide path around the outer edge of a large cavern. Far below, through a heavy white mist, strange splashing noises can be heard. The mist rises up through a fissure in the ceiling. The path exits to the south and west.',
      short: 'You\'re in misty cavern.',
    },
    sound: 'noMeaning',
    travels: [
      { verbs: ['south', 'oriental'], action: { id: 'goTo', description: 'locOriental' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locAlcove' } },
    ],
  },
  {
    id: 'locNarrow',
    conditions: { deep: true },
    description: {
      long: 'You are in a long, narrow corridor stretching out of sight to the west. At the eastern end is a hole through which you can see a profusion of leaves.',
      short: 'You\'re in narrow corridor.',
    },
    travels: [
      { verbs: ['down', 'climb', 'east'], action: { id: 'goTo', description: 'locWestpit' } },
      { verbs: ['jump'], action: { id: 'goTo', description: 'locNeckbroke' } },
      { verbs: ['west', 'giant'], action: { id: 'goTo', description: 'locGiantroom' } },
    ],
  },
  {
    id: 'locNe',
    conditions: { deep: true, lit: true },
    description: {
      long: 'You are at the northeast end of an immense room, even larger than the Giant Room. It appears to be a repository for the "Adventure" program. Massive torches far overhead bathe the room with smoky yellow light. Scattered about you can be seen a pile of bottles (all of them empty), a nursery of young beanstalks murmuring quietly, a bed of oysters, a bundle of black rods with rusty stars on their ends, and a collection of brass lanterns. Off to one side a great many dwarves are sleeping on the floor, snoring loudly. A notice nearby reads: "Do not disturb the dwarves!" An immense mirror is hanging against one wall, and stretches to the other end of the room, where various other sundry objects can be glimpsed dimly in the distance.',
      short: 'You\'re at ne end.',
    },
    sound: 'murmuringSnoring',
    travels: [
      { verbs: ['sw'], action: { id: 'goTo', description: 'locSw' } },
    ],
  },
  {
    id: 'locNeckbroke',
    conditions: { deep: true },
    description: {
      long: 'You are at the bottom of the pit with a broken neck.',
      short: null,
    },
    travels: [{ verbs: [], action: { id: 'goTo', description: 'locNowhere' } }],
  },
  {
    id: 'locNechasm',
    conditions: { noarr: true, deep: true },
    description: {
      long: 'You are on the far side of the chasm. A ne path leads away from the chasm on this side.',
      short: 'You\'re on ne side of chasm.',
    },
    travels: [
      { verbs: ['NE'], action: { id: 'goTo', description: 'locCorridor' } },
      {
        verbs: ['over', 'acros', 'cross', 'sw'],
        action: {
          id: 'speak',
          description: 'trollBlocks',
          // condition: [with, troll],
          conditionFailed: { id: 'special', description: 3 },
        },
      },
      { verbs: ['jump'], action: { id: 'speak', description: 'crossBridge' } },
      { verbs: ['fork'], action: { id: 'goTo', description: 'locFork' } },
      { verbs: ['view'], action: { id: 'goTo', description: 'locBreathtaking' } },
      { verbs: ['barre'], action: { id: 'goTo', description: 'locBarrenfront' } },
    ],
  },
  {
    id: 'locNoclimb',
    conditions: { deep: true },
    description: {
      long: 'There is nothing here to climb. Use "up" or "out" to leave the pit.',
      short: null,
    },
    travels: [{ verbs: [], action: { id: 'goTo', description: 'locWestpit' } }],
  },
  {
    id: 'locNomake',
    conditions: { deep: true },
    description: {
      long: 'You didn\'t make it.',
      short: null,
    },
    travels: [{ verbs: [], action: { id: 'goTo', description: 'locNowhere' } }],
  },
  {
    id: 'locNugget',
    conditions: { deep: true },
    description: {
      long: 'This is a low room with a crude note on the wall. The note says, "You won\'t get it up the steps".',
      short: 'You\'re in nugget-of-gold room.',
    },
    travels: [{
      verbs: ['hall', 'out', 'north'],
      action: { id: 'goTo', description: 'locMisthall' },
    }],
  },
  {
    id: 'locOriental',
    conditions: { deep: true },
    description: {
      long: 'This is the Oriental Room. Ancient oriental cave drawings cover the walls. A gently sloping passage leads upward to the north, another passage leads se, and a hands and knees crawl leads west.',
      short: 'You\'re in Oriental Room.',
    },
    travels: [
      { verbs: ['se'], action: { id: 'goTo', description: 'locSwisscheese' } },
      { verbs: ['west', 'crawl'], action: { id: 'goTo', description: 'locLowroom' } },
      { verbs: ['upwar', 'north', 'cavern'], action: { id: 'goTo', description: 'locMisty' } },
    ],
  },
  {
    id: 'locParallel1',
    conditions: { deep: true },
    description: {
      long: 'You have crawled through a very low wide passage parallel to and north of the Hall of Mists.',
      short: null,
    },
    travels: [
      { verbs: ['se'], action: { id: 'goTo', description: 'locMistwest' } },
    ],
  },
  {
    id: 'locParallel2',
    conditions: { deep: true },
    description: {
      long: 'You have crawled through a very low wide passage parallel to and north of the Hall of Mists.',
      short: null,
    },
    travels: [
      { verbs: [], action: { id: 'goTo', description: 'locWestbank' } },
    ],
  },
  {
    id: 'locPitbrink',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are on the brink of a thirty foot pit with a massive orange column down one wall. You could climb down here but you could not get back up. The maze continues at this level.',
      short: 'You\'re at brink of pit.',
    },
    travels: [
      { verbs: ['down', 'climb'], action: { id: 'goTo', description: 'locBird' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locAlike10' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locDeadend6' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locAlike12' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locAlike13' } },
    ],
  },
  {
    id: 'locPittop',
    conditions: {},
    description: {
      long: 'At your feet is a small pit breathing traces of white mist. An east passage ends here except for a small crack leading on.',
      short: 'You\'re at top of small pit.',
    },
    travels: [
      {
        verbs: ['depre'],
        action: {
          id: 'goTo',
          description: 'locGrate',
          condition: {
            type: 'object',
            object: 'grate',
            state: 'grateOpen',
          },
          conditionFailed: { id: 'speak', description: 'grateNoway' },
        },
      },
      { verbs: ['entra'], action: { id: 'goTo', description: 'locBelowgrate' } },
      { verbs: ['debri'], action: { id: 'goTo', description: 'locDebris' } },
      { verbs: ['passa', 'east'], action: { id: 'goTo', description: 'locBird' } },
      {
        verbs: ['down', 'pit', 'steps'],
        action: {
          id: 'goTo',
          description: 'locNeckbroke',
          condition: {
            type: 'carry',
            object: 'nugget',
          },
          conditionFailed: { id: 'goTo', description: 'locMisthall' },
        },
      },
      { verbs: ['crack', 'west'], action: { id: 'goTo', description: 'locCrack' } },
    ],
  },
  {
    id: 'locPlanttop',
    conditions: { deep: true },
    description: {
      long: 'You have climbed up the plant and out of the pit.',
      short: null,
    },
    travels: [{ verbs: [], action: { id: 'goTo', description: 'locWestend' } }],
  },
  {
    id: 'locPlover',
    conditions: { deep: true, lit: true },
    description: {
      long: 'You\'re in a small chamber lit by an eerie green light. An extremely narrow tunnel exits to the west. A dark corridor leads ne.',
      short: 'You\'re in Plover Room.',
    },
    hints: ['dark'],
    travels: [
      { verbs: ['west', 'passa', 'out'], action: { id: 'special', description: 1 } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locAlcove' } },
      {
        verbs: ['plove'],
        action: {
          id: 'special',
          description: 2,
          condition: {
            type: 'carry',
            object: 'emerald',
          },
          conditionFailed: { id: 'speak', description: 'locFoof6' },
        },
      },
      { verbs: ['ne', 'dark'], action: { id: 'goTo', description: 'locDarkroom' } },
    ],
  },
  {
    id: 'locReachdead',
    conditions: { deep: true },
    description: {
      long: 'You have reached a dead end.',
      short: null,
    },
    travels: [
      { verbs: ['sw', 'out', 'crawl'], action: { id: 'goTo', description: 'locCliffledge' } },
    ],
  },
  {
    id: 'locResbottom',
    conditions: { fluid: true, deep: true },
    description: {
      long: 'You are walking across the bottom of the reservoir. Walls of water rear up on either side. The roar of the water cascading past is nearly deafening, and the mist is so thick you can barely see.',
      short: 'You\'re at bottom of reservoir.',
    },
    sound: 'totalRoar',
    loud: true,
    travels: [
      { verbs: ['north'], action: { id: 'goTo', description: 'locResnorth' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locReservoir' } },
    ],
  },
  {
    id: 'locResnorth',
    conditions: { fluid: true, deep: true },
    description: {
      long: 'You are at the northern edge of the reservoir. A northwest passage leads sharply up from here.',
      short: 'You\'re north of reservoir.',
    },
    sound: 'watersCrashing',
    travels: [
      {
        verbs: ['south', 'acros', 'cross'],
        action: {
          id: 'speak',
          description: 'badDirection',
          condition: {
            type: 'object',
            object: 'reser',
            state: 'watersUnparted',
          },
          conditionFailed: { id: 'speak', description: 'locResbottom' },
        },
      },
      { verbs: ['nw', 'upwar', 'out'], action: { id: 'goTo', description: 'locTreacherous' } },
    ],
  },
  {
    id: 'locReservoir',
    conditions: { fluid: true, deep: true },
    description: {
      long: 'You are at the edge of a large underground reservoir. An opaque cloud of white mist fills the room and rises rapidly upward. The lake is fed by a stream, which tumbles out of a hole in the wall about 10 feet overhead and splashes noisily into the water somewhere within the mist. There is a passage going back toward the south.',
      short: 'You\'re at reservoir.',
    },
    sound: 'streamSplashes',
    travels: [
      { verbs: ['south', 'out'], action: { id: 'goTo', description: 'locMirrorcanyon' } },
      {
        verbs: ['north', 'acros', 'cross'],
        action: {
          id: 'speak',
          description: 'badDirection',
          condition: {
            type: 'object',
            object: 'reser',
            state: 'watersUnparted',
          },
          conditionFailed: { id: 'speak', description: 'locResbottom' },
        },
      },
    ],
  },
  {
    id: 'locRoadend',
    conditions: { above: true, lit: true },
    description: {
      long: 'The road, which approaches from the east, ends here amid the trees.',
      short: 'You\'re at end of road.',
    },
    travels: [
      { verbs: ['road', 'east', 'upwar'], action: { id: 'goTo', description: 'locHill' } },
      { verbs: ['build'], action: { id: 'goTo', description: 'locStart' } },
      { verbs: ['south', 'fores'], action: { id: 'goTo', description: 'locForest14' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest15' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locForest21' } },
    ],
  },
  {
    id: 'locRoughhewn',
    conditions: { deep: true },
    description: {
      long: 'You are in a long, rough-hewn, north/south corridor.',
      short: null,
    },
    travels: [
      { verbs: ['north'], action: { id: 'goTo', description: 'locDeadend13' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locLarge' } },
    ],
  },
  {
    id: 'locSecret1',
    conditions: { deep: true },
    description: {
      long: 'You are in a secret n/s canyon above a large room.',
      short: null,
    },
    travels: [
      { verbs: ['down', 'slab'], action: { id: 'goTo', description: 'locSlab' } },
      {
        verbs: ['south'],
        action: {
          id: 'goTo',
          description: 'locSecret5',
          // condition: {
          //   type: 'object',
          //   object: 'dragon',
          //   state: 'dragonDead',
          //   state: 'dragonBloodless',
          // },
          // condition: [not, dragon, dragonBars],
          conditionFailed: { id: 'goTo', description: 'locSecret4' },
        },
      },
      { verbs: ['north'], action: { id: 'goTo', description: 'locMirrorcanyon' } },
      { verbs: ['reservoir'], action: { id: 'goTo', description: 'locReservoir' } },
    ],
  },
  {
    id: 'locSecret2',
    conditions: { deep: true },
    description: {
      long: 'You are in a secret n/s canyon above a sizable passage.',
      short: null,
    },
    travels: [
      { verbs: ['north'], action: { id: 'goTo', description: 'locThreejunction' } },
      { verbs: ['down', 'passa'], action: { id: 'goTo', description: 'locBedquilt' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locTopstalactite' } },

    ],
  },
  {
    id: 'locSecret3',
    conditions: { deep: true },
    description: {
      long: 'You are in a secret canyon which here runs e/w. It crosses over a very tight canyon 15 feet below. If you go down you may not be able to get back up.',
      short: 'You\'re in secret e/w canyon above tight canyon.',
    },
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locKinghall' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locSecret5' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locSecret6' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locWideplace' } },
    ],
  },
  // Following three rooms are where the dragon lives. The code has a
  // wired-in assumption that the dragon corpse goes to locSecret5,
  {
    id: 'locSecret4',
    conditions: { deep: true },
    description: {
      long: 'You are in a secret canyon which exits to the north and east.',
      short: null,
    },
    travels: [
      { verbs: ['north', 'out'], action: { id: 'goTo', description: 'locSecret1' } },
      { verbs: ['east', 'forwa'], action: { id: 'speak', description: 'nastyDragon' } },
    ],
  },
  {
    id: 'locSecret5',
    conditions: { deep: true },
    description: {
      long: 'You are in a secret canyon which exits to the north and east.',
      short: null,
    },
    travels: [
      { verbs: ['north'], action: { id: 'goTo', description: 'locSecret1' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locSecret3' } },
    ],
  },
  {
    id: 'locSecret6',
    conditions: { deep: true },
    description: {
      long: 'You are in a secret canyon which exits to the north and east.',
      short: null,
    },
    travels: [
      { verbs: ['north', 'out'], action: { id: 'goTo', description: 'locSecret3' } },
      { verbs: ['east', 'forwa'], action: { id: 'speak', description: 'nastyDragon' } },
    ],
  },
  {
    id: 'locSewer',
    conditions: { deep: true },
    description: {
      long: 'The stream flows out through a pair of 1 foot diameter sewer pipes. It would be advisable to use the exit.',
      short: null,
    },
    travels: [
      { verbs: [], action: { id: 'goTo', description: 'locBuilding' } },
    ],
  },
  {
    id: 'locShellroom',
    conditions: { deep: true },
    description: {
      long: 'You\'re in a large room carved out of sedimentary rock. The floor and walls are littered with bits of shells embedded in the stone. A shallow passage proceeds downward, and a somewhat steeper one leads up. A low hands and knees passage enters from the south.',
      short: 'You\'re in Shell Room.',
    },
    travels: [
      { verbs: ['upwar', 'hall'], action: { id: 'goTo', description: 'locArched' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locSloping1' } },
      {
        verbs: ['south'],
        condition: {
          type: 'carry',
          object: 'clam',
        },
        action: { id: 'speak', description: 'clamBlocker' },
      },
      // { verbs: ['south'], condition: [carry, oyster],
      // action: { id: 'speak', description: 'oysterBlocker' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locComplex' } },
    ],
  },
  {
    id: 'locSlab',
    conditions: { deep: true },
    description: {
      long: 'You are in a large low circular chamber whose floor is an immense slab fallen from the ceiling (Slab Room). East and west there once were large passages, but they are now filled with boulders. Low small passages go north and south, and the south one quickly bends west around the boulders.',
      short: 'You\'re in Slab Room.',
    },
    travels: [
      { verbs: ['south'], action: { id: 'goTo', description: 'locWestend' } },
      { verbs: ['upwar', 'climb'], action: { id: 'goTo', description: 'locSecret1' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locBedquilt' } },
    ],
  },
  {
    id: 'locSlit',
    conditions: { fluid: true, above: true, lit: true },
    description: {
      long: 'At your feet all the water of the stream splashes into a 2-inch slit in the rock. Downstream the streambed is bare rock.',
      short: 'You\'re at slit in streambed.',
    },
    sound: 'streamGurgles',
    travels: [
      { verbs: ['build'], action: { id: 'goTo', description: 'locStart' } },
      { verbs: ['upstr', 'north'], action: { id: 'goTo', description: 'locValley' } },
      { verbs: ['east', 'fores', 'upwar'], action: { id: 'goTo', description: 'locForest6' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest10' } },
      {
        verbs: ['downs', 'bed', 'south', 'depre'],
        action: { id: 'goTo', description: 'locGrate' },
      },
      {
        verbs: ['slit', 'strea', 'down', 'inside', 'enter'],
        action: { id: 'speak', description: 'dontFit' },
      },
    ],
  },
  {
    id: 'locSloping1',
    conditions: { deep: true },
    description: {
      long: 'You are in a long sloping corridor with ragged sharp walls.',
      short: null,
    },
    travels: [
      { verbs: ['upwar', 'shell'], action: { id: 'goTo', description: 'locShellroom' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locCuldesac' } },
    ],
  },
  {
    id: 'locSmallpit',
    conditions: { fluid: true, deep: true },
    description: {
      long: 'You are in the bottom of a small pit with a little stream, which enters and exits through tiny slits.',
      short: 'You\'re at bottom of pit with stream.',
    },
    sound: 'streamGurgles',
    travels: [
      {
        verbs: ['climb', 'upwar', 'out'],
        action: { id: 'goTo', description: 'locSmallpitbrink' },
      },
      {
        verbs: ['slit', 'strea', 'down', 'upstr', 'downs', 'enter', 'inside'],
        action: { id: 'speak', description: 'dontFit' },
      },
    ],
  },
  {
    id: 'locSmallpitbrink',
    conditions: { deep: true },
    description: {
      long: 'You are on the brink of a small clean climbable pit. A crawl leads west.',
      short: 'You\'re at brink of small pit.',
    },
    travels: [
      { verbs: ['west', 'crawl'], action: { id: 'goTo', description: 'locBroken' } },
      { verbs: ['down', 'pit', 'climb'], action: { id: 'goTo', description: 'locSmallpit' } },
    ],
  },
  {
    id: 'locSnakeblock',
    conditions: { deep: true },
    description: {
      long: 'You can\'t get by the snake.',
      short: null,
    },
    travels: [{ verbs: [], action: { id: 'goTo', description: 'locKinghall' } }],
  },
  {
    id: 'locSoftroom',
    conditions: { deep: true },
    description: {
      long: 'You are in the Soft Room. The walls are covered with heavy curtains, the floor with a thick pile carpet. Moss covers the ceiling.',
      short: 'You\'re in Soft Room.',
    },
    travels: [
      { verbs: ['west', 'out'], action: { id: 'goTo', description: 'locSwisscheese' } },
    ],
  },
  {
    id: 'locSouthside',
    conditions: { deep: true },
    description: {
      long: 'You are in the south side chamber.',
      short: null,
    },
    travels: [{
      verbs: ['hall', 'out', 'north'],
      action: { id: 'goTo', description: 'locKinghall' },
    }],
  },
  {
    id: 'locStart',
    conditions: { fluid: true, above: true, lit: true },
    description: {
      long: 'You are standing at the end of a road before a small brick building. Around you is a forest. A small stream flows out of the building and down a gully.',
      short: 'You\'re in front of building.',
    },
    sound: 'streamGurgles',
    travels: [
      {
        verbs: ['road', 'west', 'upwar'],
        action: { id: 'goTo', description: 'locHill' },
      },
      {
        verbs: ['enter', 'build', 'inside', 'east'],
        action: { id: 'goTo', description: 'locBuilding' },
      },
      {
        verbs: ['downs', 'gully', 'strea', 'south', 'down'],
        action: { id: 'goTo', description: 'locValley' },
      },
      { verbs: ['fores', 'north'], action: { id: 'goTo', description: 'locForest1' } },
      { verbs: ['depre'], action: { id: 'goTo', description: 'locGrate' } },
    ],
  },
  {
    id: 'locSteep',
    conditions: { deep: true },
    description: {
      long: 'You are on a very steep incline, which widens at it goes upward.',
      short: null,
    },
    travels: [
      { verbs: ['down', 'se'], action: { id: 'goTo', description: 'locTreacherous' } },
      { verbs: ['upwar', 'nw'], action: { id: 'goTo', description: 'locCliffbase' } },
    ],
  },
  {
    id: 'locStoreroom',
    conditions: { deep: true },
    description: {
      long: 'You are in the ogre\'s storeroom. The only exit is to the south.',
      short: null,
    },
    travels: [
      { verbs: ['south', 'out'], action: { id: 'goTo', description: 'locLarge' } },
    ],
  },
  {
    id: 'locSw',
    conditions: { deep: true, lit: true },
    description: {
      long: 'You are at the southwest end of the repository. To one side is a pit full of fierce green snakes. On the other side is a row of small wicker cages, each of which contains a little sulking bird. In one corner is a bundle of black rods with rusty marks on their ends. A large number of velvet pillows are scattered about on the floor. A vast mirror stretches off to the northeast. At your feet is a large steel grate, next to which is a sign that reads, "Treasure Vault. Keys in main office."',
      short: 'You\'re at sw end.',
    },
    sound: 'snakesHissing',
    travels: [
      { verbs: ['ne'], action: { id: 'goTo', description: 'locNe' } },
      { verbs: ['down'], action: { id: 'speak', description: 'grateNoway' } },
    ],
  },
  {
    id: 'locSwchasm',
    conditions: { deep: true },
    description: {
      long: 'You are on one side of a large, deep chasm. A heavy white mist rising up from below obscures all view of the far side. A sw path leads away from the chasm into a winding corridor.',
      short: 'You\'re on sw side of chasm.',
    },
    travels: [
      { verbs: ['sw'], action: { id: 'goTo', description: 'locWinding' } },
      // { verbs: ['over, 'acros', 'cross, 'ne'],
      // condition: [with, troll], action: { id: 'speak', description: 'trollBlocks' } },
      {
        verbs: ['over'],
        condition: {
          type: 'object',
          object: 'chasm',
          state: 'bridgeWrecked',
          conditionFailed: { id: 'special', description: 3 },
        },
        action: { id: 'speak', description: 'bridgeGone' },
      },
      {
        verbs: ['jump'],
        action: {
          id: 'goTo',
          description: 'locNomake',
          condition: {
            type: 'object',
            object: 'chasm',
            state: 'bridgeWrecked',
            conditionFailed: { id: 'speak', description: 'crossBridge' },
          },
        },
      },
    ],
  },
  {
    id: 'locSwisscheese',
    conditions: { deep: true },
    description: {
      long: 'You are in a room whose walls resemble Swiss cheese. Obvious passages go west, east, ne, and nw. Part of the room is occupied by a large bedrock block.',
      short: 'You\'re in Swiss Cheese Room.',
    },
    travels: [
      { verbs: ['ne'], action: { id: 'goTo', description: 'locBedquilt' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locEastend' } },
      {
        verbs: ['south'],
        action: {
          id: 'speak',
          description: 'futileCrawl',
          // condition: [pct, 80],
        },
      },
      { verbs: ['canyo'], action: { id: 'goTo', description: 'locTall' } },
      { verbs: ['east'], action: { id: 'goTo', description: 'locSoftroom' } },
      {
        verbs: ['nw'],
        action: {
          id: 'speak',
          description: 'futileCrawl',
          // condition: [pct, 50],
        },
      },
      { verbs: ['oriental'], action: { id: 'goTo', description: 'locOriental' } },
    ],
  },
  {
    id: 'locTall',
    conditions: { deep: true },
    description: {
      long: 'You are in a tall e/w canyon. A low tight crawl goes 3 feet north and seems to open up.',
      short: null,
    },
    travels: [
      { verbs: ['east'], action: { id: 'goTo', description: 'locWideplace' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locBoulders1' } },
      { verbs: ['north', 'crawl'], action: { id: 'goTo', description: 'locSwisscheese' } },
    ],
  },
  {
    id: 'locThreejunction',
    conditions: { deep: true },
    description: {
      long: 'You are in a secret canyon at a junction of three canyons, bearing north, south, and se. The north one is as tall as the other two combined.',
      short: 'You\'re at junction of three secret canyons.',
    },
    travels: [
      { verbs: ['se'], action: { id: 'goTo', description: 'locBedquilt' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locSecret2' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locWindow2' } },
    ],
  },
  {
    id: 'locTightplace',
    conditions: { deep: true },
    description: {
      long: 'The canyon here becomes too tight to go further south.',
      short: null,
    },
    travels: [
      { verbs: ['north'], action: { id: 'goTo', description: 'locWideplace' } },
    ],
  },
  {
    id: 'locTopstalactite',
    conditions: { deep: true },
    description: {
      long: 'A large stalactite extends from the roof and almost reaches the floor below. You could climb down it, and jump from it to the floor, but having done so you would be unable to reach it to climb back up.',
      short: 'You\'re at top of stalactite.',
    },
    travels: [
      { verbs: ['north'], action: { id: 'goTo', description: 'locSecret2' } },
      // { verbs: ['down', 'jump', 'climb'],
      // condition: [pct, 40], action: { id: 'goTo', description: 'locAlike6' } },
      // { verbs: ['down'], condition: [pct, 50],
      // action: { id: 'goTo', description: 'locAlike9' } },
      { verbs: ['down'], action: { id: 'goTo', description: 'locAlike4' } },
    ],
  },
  {
    id: 'locTreacherous',
    conditions: { deep: true },
    description: {
      long: 'You are scrambling along a treacherously steep, rocky passage.',
      short: null,
    },
    travels: [
      { verbs: ['upwar', 'nw'], action: { id: 'goTo', description: 'locSteep' } },
      { verbs: ['down', 'se'], action: { id: 'goTo', description: 'locResnorth' } },
    ],
  },
  {
    id: 'locValley',
    conditions: { fluid: true, above: true, lit: true },
    description: {
      long: 'You are in a valley in the forest beside a stream tumbling along a rocky bed.',
      short: 'You\'re in valley.',
    },
    sound: 'streamGurgles',
    travels: [
      {
        verbs: ['upstr', 'build', 'north'],
        action: { id: 'goTo', description: 'locStart' },
      },
      { verbs: ['east', 'fores'], action: { id: 'goTo', description: 'locForest6' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locForest12' } },
      {
        verbs: ['downs', 'south', 'down'],
        action: { id: 'goTo', description: 'locSlit' },
      },
      { verbs: ['depre'], action: { id: 'goTo', description: 'locGrate' } },
      { verbs: ['strea'], action: { id: 'speak', description: 'upstreamDownstream' } },
    ],
  },
  {
    id: 'locWarmwalls',
    conditions: { noarr: true, deep: true },
    description: {
      long: 'The walls are quite warm here. From the north can be heard a steady roar, so loud that the entire cave seems to be trembling. Another passage leads south, and a low crawl goes east.',
      short: 'You\'re at junction with warm walls.',
    },
    sound: 'loudRoar',
    travels: [
      { verbs: ['south', 'fork'], action: { id: 'goTo', description: 'locFork' } },
      { verbs: ['north', 'view'], action: { id: 'goTo', description: 'locBreathtaking' } },
      { verbs: ['east', 'crawl'], action: { id: 'goTo', description: 'locBoulders2' } },
    ],
  },
  {
    id: 'locWaterfall',
    conditions: { fluid: true, deep: true },
    description: {
      long: 'You are in a magnificent cavern with a rushing stream, which cascades over a sparkling waterfall into a roaring whirlpool which disappears through a hole in the floor. Passages exit to the south and west.',
      short: 'You\'re in cavern with waterfall.',
    },
    sound: 'streamSplashes',
    travels: [
      { verbs: ['south', 'out'], action: { id: 'goTo', description: 'locImmense' } },
      { verbs: ['giant'], action: { id: 'goTo', description: 'locGiantroom' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locIncline' } },
    ],
  },
  {
    id: 'locWestbank',
    conditions: { deep: true },
    description: {
      long: 'You are on the west side of the fissure in the Hall of Mists.',
      short: 'You\'re on west bank of fissure.',
    },
    travels: [
      { verbs: ['stair', 'upwar'], action: { id: 'goTo', description: 'locMisthall' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locParallel1' } },
      { verbs: ['jump'], action: { id: 'speak', description: 'crossBridge' } },
      { verbs: ['acros', 'cross'], action: { id: 'speak', description: 'noCross' } },
      {
        verbs: ['forwa'],
        action: {
          id: 'goTo',
          description: 'locMistwest',
          condition: {
            type: 'object',
            object: 'fissure',
            state: 'bridged',
          },
          conditionFailed: { id: 'goTo', description: 'locNomake' },
        },
      },
      {
        verbs: ['over', 'east'],
        action: {
          id: 'goTo',
          description: 'locEastbank',
          condition: {
            type: 'object',
            object: 'fissure',
            state: 'bridged',
          },
          conditionFailed: { id: 'speak', description: 'noCross' },
        },
      },
      {
        verbs: ['west'],
        action: {
          id: 'goTo',
          description: 'locMistwest',
          condition: {
            type: 'object',
            object: 'fissure',
            state: 'bridged',
          },
          conditionFailed: { id: 'speak', description: 'noCross' },
        },
      },
    ],
  },
  {
    id: 'locWestend',
    conditions: { deep: true },
    description: {
      long: 'You are at the west end of the Twopit Room. There is a large hole in the wall above the pit at this end of the room.',
      short: 'You\'re at west end of Twopit Room.',
    },
    travels: [
      { verbs: ['east', 'acros'], action: { id: 'goTo', description: 'locEastend' } },
      { verbs: ['west', 'slab'], action: { id: 'goTo', description: 'locSlab' } },
      { verbs: ['down', 'pit'], action: { id: 'goTo', description: 'locWestpit' } },
      { verbs: ['hole'], action: { id: 'speak', description: 'tooFar' } },
    ],
  },
  {
    id: 'locWestpit',
    conditions: { deep: true },
    description: {
      long: 'You are at the bottom of the western pit in the Twopit Room. There is a large hole in the wall about 25 feet above you.',
      short: 'You\'re in west pit.',
    },
    travels: [
      { verbs: ['upwar', 'out'], action: { id: 'goTo', description: 'locWestend' } },
      {
        verbs: ['climb'],
        action: {
          id: 'goTo',
          description: 'locBuilding1',
          condition: {
            type: 'object',
            object: 'plant',
            // state: 'plantThirsty',
            // state: 'plantGrown',
          },
          conditionFailed: { id: 'goTo', description: 'locClimbstalk' },
        },
      },
    ],
  },
  {
    id: 'locWestside',
    conditions: { deep: true },
    description: {
      long: 'You are in the west side chamber of the Hall of the Mountain King. \nA passage continues west and up here.',
      short: 'You\'re in the west side chamber.',
    },
    travels: [
      { verbs: ['hall', 'out', 'east'], action: { id: 'goTo', description: 'locKinghall' } },
      { verbs: ['west', 'upwar'], action: { id: 'goTo', description: 'locCrossover' } },
    ],
  },
  {
    id: 'locWideplace',
    conditions: { deep: true },
    description: {
      long: 'You are at a wide place in a very tight n/s canyon.',
      short: null,
    },
    travels: [
      { verbs: ['south'], action: { id: 'goTo', description: 'locTightplace' } },
      { verbs: ['north'], action: { id: 'goTo', description: 'locTall' } },
    ],
  },
  {
    id: 'locWinding',
    conditions: { deep: true },
    description: {
      long: 'You are in a long winding corridor sloping out of sight in both directions.',
      short: 'You\'re in sloping corridor.',
    },
    travels: [
      { verbs: ['down'], action: { id: 'goTo', description: 'locLowroom' } },
      { verbs: ['upwar'], action: { id: 'goTo', description: 'locSwchasm' } },
    ],
  },
  {
    id: 'locWindow1',
    conditions: { deep: true },
    description: {
      long: 'You\'re at a low window overlooking a huge pit, which extends up out of sight. A floor is indistinctly visible over 50 feet below. Traces of white mist cover the floor of the pit, becoming thicker to the right. \nMarks in the dust around the window would seem to indicate that someone has been here recently. Directly across the pit from you and 25 feet away there is a similar window looking into a lighted room. A shadowy figure can be seen there peering back at you.',
      short: 'You\'re at window on pit.',
    },
    travels: [
      { verbs: ['east', 'y2'], action: { id: 'goTo', description: 'locY2' } },
      { verbs: ['jump'], action: { id: 'goTo', description: 'locNeckbroke' } },
    ],
  },
  {
    id: 'locWindow2',
    conditions: { deep: true },
    description: {
      long: 'You\'re at a low window overlooking a huge pit, which extends up out of sight. A floor is indistinctly visible over 50 feet below. Traces of white mist cover the floor of the pit, becoming thicker to the left. \nMarks in the dust around the window would seem to indicate that someone has been here recently. Directly across the pit from you and 25 feet away there is a similar window looking into a lighted room. A shadowy figure can be seen there peering back at you.',
      short: 'You\'re at window on pit.',
    },
    travels: [
      { verbs: ['west'], action: { id: 'goTo', description: 'locThreejunction' } },
      { verbs: ['jump'], action: { id: 'goTo', description: 'locNeckbroke' } },
    ],
  },
  {
    id: 'locWittsend',
    conditions: { deep: true, noback: true },
    description: {
      long: 'You are at Witt\'s End. Passages lead off in *all* directions.',
      short: 'You\'re at Witt\'s End.',
    },
    hints: ['witt'],
    travels: [
      {
        // conditions: [pct, 95],
        verbs: ['east', 'north', 'south', 'ne', 'se', 'sw', 'nw', 'upwar', 'down'],
        action: { id: 'speak', description: 'futileCrawl' },
      },
      { verbs: ['east'], action: { id: 'goTo', description: 'locAnteroom' } },
      { verbs: ['west'], action: { id: 'speak', description: 'wayBlocked' } },
    ],
  },
  {
    id: 'locY2',
    conditions: { deep: true },
    description: {
      long: 'You are in a large room, with a passage to the south, a passage to the west, and a wall of broken rock to the east. There is a large "y2" on a rock in the room\'s center.',
      short: 'You\'re at "y2".',
    },
    travels: [
      { verbs: ['plugh'], action: { id: 'goTo', description: 'locFoof4' } },
      { verbs: ['south'], action: { id: 'goTo', description: 'locFloorhole' } },
      { verbs: ['east', 'wall', 'broke'], action: { id: 'goTo', description: 'locJumble' } },
      { verbs: ['west'], action: { id: 'goTo', description: 'locWindow1' } },
      {
        verbs: ['plove'],
        action: {
          id: 'special',
          description: 2,
          condition: {
            type: 'carry',
            object: 'emerald',
          },
          conditionFailed: { id: 'goTo', description: 'locFoof5' },
        },
      },
    ],
  },
]

module.exports = { locations }
