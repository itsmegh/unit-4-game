//Click any button to start the game
//When the game loads, there will be four crystals showing with random values - done!
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
}
        
    var crystalsInPlay = null; //images of crystals
    var crystalRandomNumber = []; // sets the random value of the crystal
    var crystalValueTotal = 0; // the counter, add the clicked crystal values together
    var targetNumber = []; // random number for target number
    var wins = 0; // total wins
    var losses = 0; // total losses
    

    //generates random target score value on refresh and puts it on the html page
    document.getElementsByClassName('targetNumberValue').innerHTML = randomTargetOptions(19, 120);
    
    function randomTargetOptions(min, max) {
        targetNumber = (Math.floor(Math.random() * (max - min + 1) ) + min);
    }

    console.log(targetNumber);

    //generates a random crystal value on refresh
    document.getElementsByClassName('crystalValue').innerHTML = randomCrystalValues(1, 12);

    function randomCrystalValues(min, max) {
        crystalRandomNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
    }

    console.log(crystalRandomNumber);

    //setupGame: function () {
    //    var objKeys = Object.keys(this.crystalsToPick);
    //    this.crystalsInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];
    //}

    // for (var i=0; i<crystalNumberOptions.length; i++) {
    //     var imageCrystal = $(".crystal-image");
    //     imageCrystal.attr(".crystalValue", crystalNumberOptions[i]);
    // }

    $(document).ready(function() {

        $(".crystal-image").on("click", function() {

            // var crystalRandomNumber = ($(this).attr(".crystalValue"));
            // crystalRandomNumber = parseInt(crystalRandomNumber);

            // //crystalValueTotal += crystalRandomNumber;

            // console.log(crystalRandomNumber); // returning a NaN

            if (crystalValueTotal === targetNumber) {
                alert("You win!");
            }

            else if (crystalValueTotal > targetNumber) {
                alert("You lose!");
            }
        })
        //set the value to match the target number variable
        //this will become the formula to allow us to change the HTML to match the value in Javascript
        $(".targetNumberValue").text(targetNumber);
        //sets the value to match the current total crystal value
        $(".crystalValueTotal").text(crystalValueTotal);

    })
    
    

