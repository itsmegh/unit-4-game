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

$(document).ready(function() {

    var getRandomNum = function(min, max) {
        return (Math.floor(Math.random() * (max-min + 1)) + min);
    };

    var crystalsToPick = [

        {Amazonite: {
            crystal: "Amazonite",
            picture: "assets/images/Amazonite.jpg",
            points: getRandomNum(1, 12)
        }},
        {Amethyst: {
            crystal: "Amethyst",
            picture: "assets/images/Amethyst.jpg",
            points: getRandomNum(1, 12)
        }},
        {Ammonite: {
            crystal: "Ammonite",
            picture: "assets/images/Ammonite.jpg",
            points: getRandomNum(1, 12)
        }},
        {Azurite: {
            crystal: "Azurite",
            picture: "assets/images/Azurite.jpg",
            points: getRandomNum(1, 12)
        }},
        {Bismuth: {
            crystal: "Bismuth",
            picture: "assets/images/Bismuth.jpg",
            points: getRandomNum(1, 12)
        }},
        {Calcite: {
            crystal: "Calcite",
            picture: "assets/images/Calcite.jpg",
            points: getRandomNum(1, 12)
        }},
        {Chalcanthite: {
            crystal: "Chalcanthite",
            picture: "assets/images/Chalcanthite.jpg",
            points: getRandomNum(1, 12)
        }},
        {Emerald: {
            crystal: "Emerald",
            picture: "assets/images/Emerald.jpg",
            points: getRandomNum(1, 12)
        }},
        {Malachite: {
            crystal: "Malachite",
            picture: "assets/images/Malachite.jpg",
            points: getRandomNum(1, 12)
        }},
        {Opal: {
            crystal: "Opal",
            picture: "assets/images/Opal.jpg",
            points: getRandomNum(1, 12)
        }},
        {Rhodonchrosite: {
            crystal: "Rhodochrosite",
            picture: "assets/images/Rhodochrosite.jpg",
            points: getRandomNum(1, 12)
        }},
        {Sulfur: {
            crystal: "Sulfur",
            picture: "assets/images/Sulfur.jpg",
            points: getRandomNum(1, 12)
        }},
        {Topaz: {
            crystal: "Topaz",
            picture: "assets/images/Topaz.jpg",
            points: getRandomNum(1, 12)
        }},
        {Tourmaline: {
            crystal: "Tourmaline",
            picture: "assets/images/Tourmaline.jpg",
            points: getRandomNum(1, 12)
        }},
        {Wulfenite: {
            crystal: "Wulfenite",
            picture: "assets/images/Wulfenite.jpg",
            points: getRandomNum(1, 12)
        }},
    ];

    var crystalValueTotal = 0; // the counter, add the clicked crystal values together
    var targetNumber = 0; // random number for target number
    var wins = 0; // total wins
    var losses = 0; // total losses

    //shuffle through the array of crystals
    var shuffle = function(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    shuffle(crystalsToPick);

    //pick 4 crystals for the game, give each a point value and put on the page
    function crystalPick() {

        for (var i = 0; i < 4; i++) {
            for (var key in crystalsToPick[i]) {
                var crystalObj = crystalsToPick[i][key];
                var crystalValue = (crystalsToPick[i][key].points);

                console.log(crystalsToPick[i][key].points);
        
                var crystalCard = $("<div>")
                    .addClass("card")
                    .addClass("crystal-card")
                    .attr("style", "width: 18rem")
                    .attr("points", crystalValue)
                    .click(function() {
                        //console.log(this);
                        console.log("points", $(this).attr("points"));//
                        var valueToAdd = $(this).attr("points");
                        valueToAdd = parseInt(valueToAdd);
                        crystalValueTotal += valueToAdd;
                        console.log(crystalValueTotal);
                        $(".crystalValueTotal").html(crystalValueTotal);
                        winlosses();
                    });
                
                var crystalImage = $("<img>")
                    .addClass("card-img-top")
                    .addClass("crystal-image")
                    .attr("src", crystalObj.picture)
                    .attr("alt", "crystal image");
                
                var crystalBody = $("<div>")
                    .addClass("card-body");
                
                var crystalText = $("<p>")
                    .addClass("card-text")
                    .text(crystalObj.crystal);
        
                $("#crystalSection").append(crystalCard);
                crystalCard.append(crystalImage);
                crystalCard.append(crystalBody);
                crystalBody.append(crystalText);
            }
        }
    };

    //code for the initial game start and resets
    var startGame = function() {
        $(".alert").hide();
        crystalPick();
        //reset the current score
        crystalValueTotal = 0;

        $(".crystalValueTotal").html(crystalValueTotal);

        //assign the random target number to a number between 19 and 120
        targetNumber = getRandomNum(19, 120);
        $(".targetNumberValue").html(targetNumber);
    }
    startGame();

    //code to restart game and put new crystals on the page
    var restartGame = function() {
        $(".alert").hide();
        $("#crystalSection").empty();
        shuffle(crystalsToPick);
        //reshuffle array to get new crystals and numbers
        startGame();
        
    };

    //determine win or loss and change the game counter
    function winlosses() {
        if (crystalValueTotal === targetNumber) {
            alert("Rock on! You win!")
            wins++;
            $(".winCounter").text(wins);
            restartGame();
        }
        
        else if (crystalValueTotal > targetNumber) {
            alert("Don't hit rock bottom. Try again?")
            losses++;
            $(".lossCounter").text(losses);
            restartGame();
        }
    };

});