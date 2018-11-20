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
    };

// open a new vs code folder -- start over with the pieces 
// need to redeclare the computer guess each time you run the game
// similar to the psychic game 
// want points to be 0 in the array and then a function to set the point value
// this option allows you to randomly choose a crystal too
// one function that gets the random value and the image -- do it once at the beginning
// restart game and rerun the function

//to generate a random number for crystals (wasn't able to get the object to function)
var Amethyst = (Math.floor(Math.random() * 12) + 1);
var Chalcanthite = (Math.floor(Math.random() * 12) + 1);
var Malachite = (Math.floor(Math.random() * 12) + 1);
var Topaz = (Math.floor(Math.random() * 12) + 1); 
//var crystalRandomNumber = []; // sets the random value of the crystal
var crystalValueTotal = 0; // the counter, add the clicked crystal values together
var targetNumber = []; // random number for target number
var wins = 0; // total wins
var losses = 0; // total losses


$(document).ready(function() {

function initialize() {
    crystalValueTotal = 0;
    targetNumber = [];
    
    // for (var i=0; i<crystalsInPlay.length; i++) {
    //     $(".crystalValue").attr(crystalsInPlay);
    // }

    // $(".crystalValue1").html(Malachite);
    // $(".crystalValue2").html(Amethyst);
    // $(".crystalValue3").html(Chalcanthite);
    // $(".crystalValue4").html(Topaz);

    $(".targetNumber").html(targetNumber);
    $(".winCounter").text(wins);
    $(".lossCounter").text(losses);
    $(".crystalValueTotal").text(crystalValueTotal);
}

initialize();

// //sets the value to match the current total crystal value
// $(".crystalValueTotal").text(crystalValueTotal);
// //sets the value for each of the crystal images
// $(".crystalValue").html(crystalsToPick.points);

// $(".winCounter").text(wins);

// $(".lossCounter").text(losses);

//$(".crystal-image").html(crystalsInPlay);






//console.log(this) -- when clicking on the crystal div
//dynamically add a div -- console.log the clicks
//change to array of objects if the current object of objects 

$(".crystalValue1").on("click", function() {
    crystalValueTotal += Malachite;
    $('.crystalValueTotal').text(crystalValueTotal);
    console.log(Malachite);
    winlosses();
});

$(".crystalValue2").on("click", function() {
    crystalValueTotal += Amethyst;
    $('.crystalValueTotal').text(crystalValueTotal);
    console.log(Amethyst);
    winlosses();
});

$(".crystalValue3").on("click", function() {
    crystalValueTotal += Chalcanthite;
    $('.crystalValueTotal').text(crystalValueTotal);
    console.log(Chalcanthite);
    winlosses();
});

$(".crystalValue4").on("click", function() {
    crystalValueTotal += Topaz;
    $('.crystalValueTotal').text(crystalValueTotal);
    console.log(Topaz);
    winlosses();
});

function restartGame() {
    console.log("restart game")
    //this.crystalsInPlay = null;
   //  this.crystalRandomNumber = [];
    $(".crystalValueTotal").empty(); // the counter, add the clicked crystal values together
    $(".targetNumber").empty(); // random number for target number

};

restartGame();

function winlosses() {

    if (crystalValueTotal === targetNumber) {
        alert("You win!");
        wins++;
        restartGame();  
    }
    
    else if (crystalValueTotal > targetNumber) {
        alert("You lose!");
        losses++;
        restartGame();    
    }
};

winlosses();


 //generates random target score value on refresh and puts it on the html page
 document.getElementsByClassName('targetNumberValue').innerHTML = randomTargetOptions(19, 120);
    
 function randomTargetOptions(min, max) {
     targetNumber = (Math.floor(Math.random() * (max - min + 1) ) + min);
 }

 console.log(targetNumber);

    //set the value to match the target number variable
$(".targetNumberValue").html(targetNumber);

});

// for(key in crystalsToPick) {
//     $(".crystalValue") += .attr(points);
//     console.log(points);
// });



// var crystalPictureNumber = ($(this).attr(".crystalValue"));
// //crystalPictureNumber = parseInt(crystalRandomNumber);


// // for (var i=0; i<crystalRandomNumber.length; i++) {
// //     var imageCrystal = $(".crystal-image");
// //     imageCrystal.attr(".crystalValue", crystalRandomNumber[i]);

// //     };

// var number = $(this).val();
// console.log(number);

    //}
//}


// crystalPictureNumber += number =$(".crystalValueTotal");


//});

// $(".crystalValue").html(crystalRandomNumber);
// console.log(crystalRandomNumber);

//  //generates a random crystal value on refresh
//  document.getElementsByClassName('crystalValue').innerHTML = randomCrystalValues(1, 12);

//  function randomCrystalValues(min, max) { //run a for loop inside this to get 4 random values
//     for(var i=0; i<4; i++) {
//      var crystalRandomNumberSelector = (Math.floor(Math.random() * (max - min + 1)) + min);
//       crystalRandomNumber.push(crystalRandomNumberSelector)
//     }
//   };

//  console.log(crystalRandomNumber);
 
//  updateWins();
//  updateLosses();

 

//  function updateWins() {
//      console.log("I win")

//      var win;
//      if (crystalValueTotal != targetNumber) {
//          win = false;
//      } else {
//          win = true;
//          if (win) {
//              this.wins = this.wins + 1;
//              document.querySelector(".winCounter").innerHTML = this.wins;
//              //document.querySelector(".crystal-image").innerHTML = "<img class='crystal-image' src='../unit-4-game/assets/images/.." + this.crystalGame.crystalsToPick[this.crystalsInPlay].picture + "'>";
//              return true;
//          }
//          return false;
//      }

//  };

//  function updateLosses() {
//      console.log("I lose");

//      var lose;
//      if (crystalValueTotal === targetNumber) {
//          lose = true;
//          if (lose) {
//              this.losses = this.losses + 1;
//              document.querySelector(".lossCounter").innerHTML = this.losses;

//          }
//      } else {
//          lose = false;
//      }

//  };



//  function setupGame() {
//      console.log("setup the game");
//      wins = 0;
//      losses = 0;
//      //console.log(object.entries(crystalGame.crystalsToPick.property));
//      //picks a random crystal
//      //var objKeys = Object.keys(crystalGame.crystalsToPick.picture);
//     //this.crystalsInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

//     //need a this function that will put the chosen pictures onto the four cards
//     //need a function to assign a random value to each of the picture cards
     
//  };

  
   
