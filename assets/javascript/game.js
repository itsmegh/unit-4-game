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
            picture: "assets/images/Amethyst.jpg",
            points: (Math.floor(Math.random() * 12) + 1),
        },
        Ammonite: {
            picture: "assets/images/Ammonite.jpg",
            points: (Math.floor(Math.random() * 12) + 1),

        },
        Azurite: {
            picture: "assets/images/Azurite.jpg",
            points: (Math.floor(Math.random() * 12) + 1),

        },
        Bismuth: {
            picture: "assets/images/Bismuth.jpg",
            points: (Math.floor(Math.random() * 12) + 1),

        },
        Calcite: {
            picture: "assets/images/Calcite.jpg",
            points: (Math.floor(Math.random() * 12) + 1),

        },
        Chalcanthite: {
            picture: "assets/images/Chalcanthite.jpg",
            points: (Math.floor(Math.random() * 12) + 1),

        },
        Emerald: {
            picture: "assets/images/Emerald.jpg",
            points: (Math.floor(Math.random() * 12) + 1),

        },
        Malachite: {
            picture: "assets/images/Malachite.jpg",
            points: (Math.floor(Math.random() * 12) + 1),

        },
        Quartz: {
            picture: "assets/images/Quartz.jpg",
            points: (Math.floor(Math.random() * 12) + 1),

        },
        Topaz: {
            picture: "assets/images/Topaz.jpg",
            points: (Math.floor(Math.random() * 12) + 1),

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


//sets the value to match the current total crystal value
$(".crystalValueTotal").text(crystalValueTotal);

$(".crystalValue").html(crystalRandomNumber);

$(".winCounter").text(wins);

$(".lossCounter").text(losses);

//$(".crystal-image").html(crystalsInPlay);


$(".crystal-image").on("click", function() {

var crystalPictureNumber = ($(this).attr(".crystalValue"));
crystalPictureNumber = parseInt(crystalRandomNumber);


// for (var i=0; i<crystalRandomNumber.length; i++) {
//     var imageCrystal = $(".crystal-image");
//     imageCrystal.attr(".crystalValue", crystalRandomNumber[i]);

//     };

var number = $(this).val();
console.log(number);

crystalPictureNumber += number =$(".crystalValueTotal");

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

// $(".crystalValue").html(crystalRandomNumber);
// console.log(crystalRandomNumber);

 //generates random target score value on refresh and puts it on the html page
 document.getElementsByClassName('targetNumberValue').innerHTML = randomTargetOptions(19, 120);
    
 function randomTargetOptions(min, max) {
     targetNumber = (Math.floor(Math.random() * (max - min + 1) ) + min);
 }

 console.log(targetNumber);

    //set the value to match the target number variable
$(".targetNumberValue").html(targetNumber);


//  //generates a random crystal value on refresh
//  document.getElementsByClassName('crystalValue').innerHTML = randomCrystalValues(1, 12);

//  function randomCrystalValues(min, max) { //run a for loop inside this to get 4 random values
//     for(var i=0; i<4; i++) {
//      var crystalRandomNumberSelector = (Math.floor(Math.random() * (max - min + 1)) + min);
//       crystalRandomNumber.push(crystalRandomNumberSelector)
//     }
//   };

//  console.log(crystalRandomNumber);
 setupGame();
 restartGame();
 updateWins();
 updateLosses();


 function setupGame() {
     console.log("setup the game");
     wins = 0;
     losses = 0;
     //console.log(object.entries(crystalGame.crystalsToPick.property));
     //picks a random crystal
     //var objKeys = Object.keys(crystalGame.crystalsToPick.picture);
    //this.crystalsInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

    //need a this function that will put the chosen pictures onto the four cards
    //need a function to assign a random value to each of the picture cards
     
 };

 function restartGame() {
     console.log("restart game")
     //this.crystalsInPlay = null;
    //  this.crystalRandomNumber = [];
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


})
  
   
