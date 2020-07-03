const cPets = require('../pets/commonpets');
const uPets = require('../pets/uncommonpets');
const rPets = require('../pets/rarepets');

const forest = 
    {
        common: ["N/A", cPets.pom, cPets.pixci, cPets.flitter],
        uncommon: ["N/A", uPets.ribonnie, uPets.muna, uPets.stalker],
        rare: ["N/A", rPets.snapRaptor, rPets.babbledog, rPets.snipRaptor]
    };

const plains = 
    {
        common: ["N/A", cPets.pom, cPets.woolie, cPets.cro],
        uncommon: ["N/A", uPets.ribonnie, uPets.omp, uPets.silkyStrider, uPets.ferren],
        rare: ["N/A", rPets.snapRaptor, rPets.stattik, rPets.hanana]
    };

const mountain = 
    {
        common: ["N/A", cPets.pom, cPets.gekki, cPets.bighorn, cPets.ghostfly, cPets.pyrebird],
        uncommon: ["N/A", uPets.ribonnie, uPets.devi, uPets.chewii,],
        rare: ["N/A", rPets.snapRaptor, rPets.kitWyvern, rPets.snakeWyvern]
    };

const coast = 
    {
        common: ["N/A", cPets.pom, cPets.seabun, cPets.rockGuppy],
        uncommon: ["N/A", uPets.ribonnie, uPets.isopaw, uPets.sailfin, ],
        rare: ["N/A", rPets.snapRaptor, rPets.gullWyvern]
    };

module.exports = 
    forest, 
    plains,
    mountain,
    coast;