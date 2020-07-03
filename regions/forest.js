const cPets = require('../pets/commonpets');
const uPets = require('../pets/uncommonpets');
const rPets = require('../pets/rarepets');

const forest = 
    {
        common: ["N/A", cPets.pom, cPets.pixci, cPets.flitter],
        uncommon: ["N/A", uPets.ribonnie, uPets.muna, uPets.stalker],
        rare: ["N/A", rPets.snapRaptor, rPets.babbledog, rPets.snipRaptor]
    };

module.exports = forest;