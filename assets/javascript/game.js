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

var crystalGame = {

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

var crystalsInPlay = [crystalGame.crystalsToPick]; //images of crystals
var crystalRandomNumber = []; // sets the random value of the crystal
var crystalValueTotal = 0; // the counter, add the clicked crystal values together
var targetNumber = []; // random number for target number
var wins = 0; // total wins
var losses = 0; // total losses

$(document).ready(function() {

    //set the value to match the target number variable
//this will become the formula to allow us to change the HTML to match the value in Javascript
$(".targetNumberValue").html(targetNumber);
//sets the value to match the current total crystal value
$(".crystalValueTotal").text(crystalValueTotal);

$(".crystalValue").html(crystalRandomNumber);

$(".winCounter").text(wins);

$(".lossCounter").text(losses);

//$(".crystal-image").html(crystalsInPlay);


$(".crystal-image").on("click", function() {

var crystalPictureNumber = ($(this).attr(".crystalValue"));
crystalPictureNumber = parseInt(crystalRandomNumber);


for (var i=0; i<crystalRandomNumber.length; i++) {
    var imageCrystal = $(".crystal-image");
    imageCrystal.attr(".crystalValue", crystalRandomNumber[i]);
    console.log(crystalRandomNumber); // working

    };

if (crystalValueTotal === targetNumber) {
    alert("You win!");

    if (this.updateWins() === true) {
        this.restartGame();  
    }
}

else if (crystalValueTotal > targetNumber) {
    alert("You lose!");

    if (this.updateLosses() === true) {
        this.restartGame();
    }
    
}
});



})
  
    //generates random target score value on refresh and puts it on the html page
    document.getElementsByClassName('targetNumberValue').innerHTML = randomTargetOptions(19, 120);
    
    function randomTargetOptions(min, max) {
        targetNumber = (Math.floor(Math.random() * (max - min + 1) ) + min);
    }

    console.log(targetNumber);

    //generates a random crystal value on refresh
    document.getElementsByClassName('crystalValue').innerHTML = randomCrystalValues(1, 12);

    function randomCrystalValues(min, max) { //run a for loop inside this to get 4 random values
        crystalRandomNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
        //for(var i=0; i<4; i++) {

        //}

    }

    console.log(crystalRandomNumber);
    setupGame();
    restartGame();
    updateWins();
    updateLosses();


    function setupGame() {
        console.log("setup the game");
        //console.log(object.entries(crystalGame.crystalsToPick.property));
        //picks a random crystal
        //var objKeys = Object.keys(crystalGame.crystalsToPick.picture);
       //this.crystalsInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

       //need a this function that will put the chosen pictures onto the four cards
       //need a function to assign a random value to each of the picture cards
        
    };

    function restartGame() {
        console.log("restart game")
        this.crystalsInPlay = null;
        this.crystalRandomNumber = [];
        this.crystalValueTotal = 0; // the counter, add the clicked crystal values together
        this.targetNumber = []; // random number for target number
    
    };

    function updateWins() {
        console.log("I win")

        var win;
        if (crystalValueTotal != targetNumber) {
            win = false;
        } else {
            win = true;
            if (win) {
                this.wins = this.wins + 1;
                document.querySelector(".winCounter").innerHTML = this.wins;
                //document.querySelector(".crystal-image").innerHTML = "<img class='crystal-image' src='../unit-4-game/assets/images/.." + this.crystalGame.crystalsToPick[this.crystalsInPlay].picture + "'>";
                return true;

            }
            return false;
        }

    };

    function updateLosses() {
        console.log("I lose");
        
        var lose;
        if (crystalValueTotal === targetNumber) {
            lose = true;
            if (lose) {
                this.losses = this.losses + 1;
                document.querySelector(".lossCounter").innerHTML = this.losses;

            }
        } else {
            lose = false;
        }

    };
