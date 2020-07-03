const cPets = require('../pets/commonpets');
const uPets = require('../pets/uncommonpets');
const rPets = require('../pets/rarepets');

const plains = 
    {
        common: ["N/A", cPets.pom, cPets.woolie, cPets.cro],
        uncommon: ["N/A", uPets.ribonnie, uPets.omp, uPets.silkyStrider, uPets.ferren],
        rare: ["N/A", rPets.snapRaptor, rPets.stattik, rPets.hanana]
    };

module.exports = plains;