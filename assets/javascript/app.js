//Click any button to start the game
//When the game loads, there will be four crystals showing with random values - 
    //values should be between 1-12
//When the game loads, there will be a random target number - done!
    //value should be between 19-120
//When game loads - if not the first time, have counter update wins/losses from last round

//Game Play
//When player clicks on a crystal, the points will show up in crystal value total
    //all crystal clicks will add together
    //when the score exceeds or meets the target number, the player wins/losses
//Game ends when a player hits the target number or goes above the target number

//New game will reset the target number, crystal values, update win/loss numbers

var crystalsToPick = {

    Amethyst: {
        picture: "assets/images/Amethyst.jpg",
        points: 0,
    },
    Ammonite: {
        picture: "assets/images/Ammonite.jpg",
        points: 0,

    },
    Azurite: {
        picture: "assets/images/Azurite.jpg",
        points: 0,

    },
    Bismuth: {
        picture: "assets/images/Bismuth.jpg",
        points: 0,

    },
    Calcite: {
        picture: "assets/images/Calcite.jpg",
        points: 0,

    },
    Chalcanthite: {
        picture: "assets/images/Chalcanthite.jpg",
        points: 0,

    },
    Emerald: {
        picture: "assets/images/Emerald.jpg",
        points: 0,

    },
    Malachite: {
        picture: "assets/images/Malachite.jpg",
        points: 0,

    },
    Quartz: {
        picture: "assets/images/Quartz.jpg",
        points: 0,

    },
    Topaz: {
        picture: "assets/images/Topaz.jpg",
        points: 0,

    },
};

var crystalValueTotal = 0; // the counter, add the clicked crystal values together
var targetNumber = 0; // random number for target number
var wins = 0; // total wins
var losses = 0; // total losses

//console.log(this) -- when clicking on the crystal div
//dynamically add a div -- console.log the clicks
//change to array of objects if the current object of objects 

$(document).ready(function() {

    var getRandomNum = function(min, max) {
        return (Math.floor(Math.random() * (max-min + 1)) + min);
    };

    var crystalArray = object.keys(crystalsToPick);
    var crystalIndex = Math.floor(Math.random() * crystalArray.length);
    var randomCrystal = crystalArray[crystalIndex];
    var randomImage = crystalsToPick[randomCrystal];

    console.log(randomImage);
    // var getRandomPic = function(crystal) {
        
    // };


});