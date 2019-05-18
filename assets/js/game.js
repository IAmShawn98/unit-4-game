$(document).ready(function () {
    // Set default game stats and call our important DOM elements for later population.

    // Global Variables.



    // Declare Our Game Stats.
    var wins = 1;
    var losses = 1;
    var playerTotalScore = 0;

    // Holds the random number for player to guess.
    var randomNumbz = Math.floor(Math.random() * 120) + 19;

    // Random Number ID.
    var randomNumber = $("#randomNumber");

    var cRedVal = Math.floor(Math.random() * 12) + 1;
    var cBlueVal = Math.floor(Math.random() * 4) + 1;
    var cYellowVal = Math.floor(Math.random() * 8) + 1;
    var cGreenVal = Math.floor(Math.random() * 10) + 1;

    // Randomize the crystal values.
    $("button.cRed").val(cRedVal);
    $("button.cBlue").val(cBlueVal);
    $("button.cYellow").val(cYellowVal);
    $("button.cGreen").val(cGreenVal);

    // Generate a random number.

    // Populate our 'randomNumbz' to the 'randomNumber' display in HTML.
    randomNumber.text(randomNumbz);

    // When the player clicks on any of the four crystals, increment the 'playerTotalScore'.

    // Crystals Click Listener.
    $('button').click(function () {
        // Update our total score  to equal our new value.
        playerTotalScore = Number($(this).val()) + Number(playerTotalScore);

        // If the value of the players total score matches the 'randomNumber' displayed, add a win.
        if (randomNumbz === playerTotalScore) {
            // Alert the player of their victory.
            alert("You Won!!!!!!!");
            // Increment Win Counter.
            $('#winCounter').text(wins);
            wins++;

            // Start new game, re-set player status.
            playerTotalScore = 0;
            randomNumbz = Math.floor(Math.random() * 120) + 19;
            randomNumber.text(randomNumbz);

            // Set New Random Crystal Values.
            var cRedVal = Math.floor(Math.random() * 12) + 1;
            var cBlueVal = Math.floor(Math.random() * 4) + 1;
            var cYellowVal = Math.floor(Math.random() * 8) + 1;
            var cGreenVal = Math.floor(Math.random() * 10) + 1;

            // Populate Re-Randomized Crystals.
            $("button.cRed").val(cRedVal);
            $("button.cBlue").val(cBlueVal);
            $("button.cYellow").val(cYellowVal);
            $("button.cGreen").val(cGreenVal);


            // If the value surpasses the limit of the 'randomNumber', add a loss.
        } else if (playerTotalScore > randomNumbz) {
            // Alert the player of their loss.
            alert("You lost, try again!");
            // Increment the loss counter.
            $('#lossCounter').text(losses);
            losses++;

            // Start new game, re-set player status.
            playerTotalScore = 0;
            randomNumbz = Math.floor(Math.random() * 120) + 19;
            randomNumber.text(randomNumbz);

            // Set New Random Crystal Values.
            var cRedVal = Math.floor(Math.random() * 12) + 1;
            var cBlueVal = Math.floor(Math.random() * 4) + 1;
            var cYellowVal = Math.floor(Math.random() * 8) + 1;
            var cGreenVal = Math.floor(Math.random() * 10) + 1;

            // Populate Re-Randomized Crystals.
            $("button.cRed").val(cRedVal);
            $("button.cBlue").val(cBlueVal);
            $("button.cYellow").val(cYellowVal);
            $("button.cGreen").val(cGreenVal);
        }
        // Populate page with total score.
        $('#totalPlayerScore').text(playerTotalScore);
    });
});

