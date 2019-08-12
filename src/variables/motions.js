// // Return the first motion number that has 'word' as one of its words.
// function get_motion_vocab_id(word) {
//     for (let i = 0; i < motions; ++i) {
//         for (let j = 0; j < motions[i].words.n; ++j) {
//             // si le mot 1 a la même taille que le mot 2
//             if (strncasecmp(word, motions[i].words.strs[j], TOKLEN) == 0
//                 // et que sa taille est supérieure à 1
//                 && (strlen(word) > 1
//                     // ou si aucune lettre du mot n'est ignorée
//                     || strchr(ignore, word[0]) == NULL
//                     // ou si c'est pas un oldstyle
//                     || !settings.oldstyle))
//             return (i);
//         }
//     }
//     // If execution reaches here, we didn't find the word.
//     return (WORD_NOT_FOUND);
// }

// motions: Motion words, grouped into synonyms.  The 'oldstyle' attribute, if false, means that single-letter synonyms should be accepted in oldstyle mode; it defaults to true.

export const motions = {
    acros: ['acros'],
    awkwa: ['awkwa'],
    back: ['back', 'retur', 'retre'],
    barre: ['barre'],
    bed: ['bed'],
    bedquilt: ['bedqu'],
    broke: ['broke'],
    build: ['build', 'house'],
    canyo: ['canyo'],
    cave: ['cave'],
    cavern: ['caver'],
    climb: ['climb'],
    cobbl: ['cobbl'],
    crack: ['crack'],
    crawl: ['crawl'],
    cross: ['cross'],
    dark: ['dark'],
    debri: ['debri'],
    depre: ['depre'],
    dome: ['dome'],
    down: ['d', 'downw', 'down', 'desce'],
    downs: ['downs'],
    east: ['east', 'e'],
    enter: ['enter'],
    entra: ['entra'],
    floor: ['floor'],
    fores: ['fores'],
    fork: ['fork'],
    forwa: ['forwa', 'conti', 'onwar'],
    giant: ['giant'],
    gully: ['gully'],
    hall: ['hall'],
    here: null,
    hole: ['hole'],
    inside: ['inwar', 'insid', 'in'],
    jump: ['jump'],
    left: ['left'],
    look: ['l', 'x', 'look', 'exami', 'touch', 'descr'],
    low: ['low'],
    ne: ['ne'],
    north: ['north', 'n'],
    nul: ['null', 'nowhe'],
    nw: ['nw'],
    office: ['main', 'offic'],
    oriental: ['orien'],
    out: ['out', 'outsi', 'exit', 'leave'],
    outdo: ['outdo'],
    over: ['over'],
    passa: ['passa', 'tunne'],
    pit: ['pit'],
    plove: ['plove'],
    plugh: ['plugh'],
    reservoir: ['reser'],
    right: ['right'],
    road: ['road', 'hill'],
    room: ['room'],
    se: ['se'],
    secre: ['secre'],
    shellroom: ['shell'],
    slab: ['slab', 'slabr'],
    slit: ['slit'],
    south: ['south', 's'],
    stair: ['stair'],
    steps: ['steps'],
    strea: ['strea'],
    surfa: ['surfa'],
    sw: ['sw'],
    upstr: ['upstr'],
    upwar: ['upwar', 'up', 'u', 'above', 'ascen'],
    valle: ['valle'],
    view: ['view'],
    wall: ['wall'],
    west: ['west', 'w'],
    xyzzy: ['xyzzy'],
    y2: ['y2'],
}