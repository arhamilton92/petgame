const cPets = require('../pets/commonpets');
const uPets = require('../pets/uncommonpets');
const rPets = require('../pets/rarepets');

const coast = 
    {
        common: ["N/A", cPets.pom, cPets.seabun, cPets.rockGuppy],
        uncommon: ["N/A", uPets.ribonnie, uPets.isopaw, uPets.sailfin, ],
        rare: ["N/A", rPets.snapRaptor, rPets.gullWyvern]
    };

module.exports = coast;