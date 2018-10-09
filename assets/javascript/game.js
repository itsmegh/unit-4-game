//Click any button to start the game
//When the game loads, there will be four crystals showing with random values
    //values should be between 1-12
//When the game loads, there will be a random target number 
    //value should be between 19-120
//When game loads - if not the first time, have counter update wins/losses from last round

//Game Play
//When player clicks on a crystal, the points will show up in crystal value total
    //all crystal clicks will add together
    //when the score exceeds or meets the target number, the player wins/losses
//Game ends when a player hits the target number or goes above the target number

//New game will reset the target number, crystal values, update win/loss numbers

var CrystalGame = {

    crystalsToPick: {
        Amethyst: {
            picture: "Amethyst.jpg",
        },
        Ammonite: {
            picture: "Ammonite.jpg",
        },
        Azurite: {
            picture: "Azurite.jpg",
        },
        Bismuth: {
            picture: "Bismuth.jpg",
        },
        Calcite: {
            picture: "Calcite.jpg",
        },
        Chalcanthite: {
            picture: "Chalcanthite.jpg",
        },
        Emerald: {
            picture: "Emerald.jpg",
        },
        Malachite: {
            picture: "Malachite.jpg",
        },
        Quartz: {
            picture: "Quartz.jpg",
        },
        Topaz: {
            picture: "Topaz.jpg",
        },
    },


    crystalsInPlay: null, //images of crystals
    crystalValue: 0, // sets the value of the crystal
    crystalValueTotal: 0, // add the clicked crystal values together
    targetNumberValue: 0, // random number for target number
    wins: 0, // total wins
    losses: 0, // total losses

    setupGame: function () {
        var objKeys = Object.keys(this.crystalsToPick);
        this.crystalsInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

    }
}