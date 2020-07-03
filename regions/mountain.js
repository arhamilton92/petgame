const cPets = require('../pets/commonpets');
const uPets = require('../pets/uncommonpets');
const rPets = require('../pets/rarepets');

const mountain = 
    {
        common: ["N/A", cPets.pom, cPets.gekki, cPets.bighorn, cPets.ghostfly, cPets.pyrebird],
        uncommon: ["N/A", uPets.ribonnie, uPets.devi, uPets.chewii,],
        rare: ["N/A", rPets.snapRaptor, rPets.kitWyvern, rPets.snakeWyvern]
    };

module.exports = mountain;
