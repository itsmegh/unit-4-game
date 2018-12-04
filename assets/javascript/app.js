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
        {Quartz: {
            crystal: "Quartz",
            picture: "assets/images/Quartz.jpg",
            points: getRandomNum(1, 12)
        }},
        {Topaz: {
            crystal: "Topaz",
            picture: "assets/images/Topaz.jpg",
            points: getRandomNum(1, 12)
        }},
    ];

    var crystalValueTotal = 0; // the counter, add the clicked crystal values together
    var targetNumber = 0; // random number for target number
    var wins = 0; // total wins
    var losses = 0; // total losses

    var shuffle = function(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
        //console.log(crystalsToPick);
    };

    shuffle(crystalsToPick);

    // every time created a crystal -- cyrstal counter = 0
    //if less than 4 
    // then run code to randomly select a crystal object and create html element for the object
    // cyrstalCounter++
    //else for enough crystals and get it to stop making crystals
    //return false
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
                        console.log($(this).attr("points"));
                        var crystalValue = $(crystalCard).attr("points");
                        crystalValue = parseInt(crystalValue);
                        crystalValueTotal += crystalValue;
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

    var startGame = function() {
        crystalPick();
        //reset the current score
        crystalValueTotal = 0;

        $(".crystalValueTotal").html(crystalValueTotal);

        //assign the random target number to a number between 19 and 120
        targetNumber = getRandomNum(19, 120);
        $(".targetNumberValue").html(targetNumber);
    }

    startGame();

    //update that crystal value total with the point value of the crystal that was clicked



    function winlosses() {

        if (crystalValueTotal === targetNumber) {
            alert("You win!");
            wins++;
        }
        
        else if (crystalValueTotal > targetNumber) {
            alert("You lose!");
            losses++;
        }
    };






});