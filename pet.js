//VARIABLES
const inquirer = require("inquirer");

const forest = require('./regions/forest');
const mountain = require('./regions/mountain');
const plains = require('./regions/plains');
const coast = require('./regions/coast');

let region = "";

let foundPet = "";
let num = "";
let shiny = false;

const whereToSearch = [
    {
        type: "list",
        name: "region",
        message: "What region do you want to search?",
        choices: [
            "Forest", new inquirer.Separator(),
            "Plains", new inquirer.Separator(),
            "Mountain", new inquirer.Separator(),
            "Coast"
        ]
    }
]

//FUNCTION DEFINITIONS


init = () => {
    inquirer.prompt(whereToSearch)
    .then((response) => {
        console.log("----------------------")
        if (response.region == "Forest") {
            region = forest;
            console.log("Searching the forest")
        }
        if (response.region == "Plains") {
            region = plains;
            console.log("Searching the plains")
        }
        if (response.region == "Mountain") {
            console.log("Searching the mountains")
            region = mountain;
        }
        if (response.region == "Coast") {
            V=console.log("Searching the coast")
            region = coast;
        }

        findPetSpecies(region)
    })
}

findPetSpecies = (region) => {
    console.log("----------------------")
    console.log("...")
    console.log("Pet found!")
    console.log("----------------------")
    //FIND RARITY
    num = Math.floor(Math.random() * 100) + 1;
        if (num >= 90) { 
            num = Math.floor(Math.random() * (region.rare.length -1)) + 1;
            foundPet = region.rare[num];
            console.log("rare pet!")
        }
        else if (num >= 70) { 
            num = Math.floor(Math.random() * (region.uncommon.length -1)) + 1;
            foundPet = region.uncommon[num];
            console.log("uncommon pet!")
        }else {
            num = Math.floor(Math.random() * (region.common.length -1)) + 1;
            foundPet = region.common[num];
            console.log("common pet!")
        }
    //FIND COLOR
    findPetColor(foundPet);
}

isShiny = () => {
    shiny = false;
    num = Math.floor(Math.random() * 100) + 1;
    if (num <= 10) {
        console.log("Wow!! A shiny pet!")
        shiny = true;
    }
}

findPetColor = (foundPet) => {
    isShiny();
    if (shiny === true) {
        num = Math.floor(Math.random() * foundPet.shinies) + 1;
        console.log(`You found a shiny ${foundPet.name}! it's ID is s${num}${foundPet.ID}`)
    }
    else {
        num = Math.floor(Math.random() * foundPet.variants) + 1;
        console.log(`You found a ${foundPet.name}! it's ID is ${foundPet.rarity}${num}${foundPet.ID}`);
    }
}

console.log("")
console.log("")

init();