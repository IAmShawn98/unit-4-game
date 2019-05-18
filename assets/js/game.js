$(document).ready(function () {
    // Set default game stats and call our important DOM elements for later population.

    // Global Variables.

    // Declare Our Game Stats.
    var wins = 0;
    var losses = 1;
    var playerTotalScore = 0;

    // Holds the random number for player to guess.
    var randomNumbz = Math.floor(Math.random() * 120) + 19;

    // DOM Values (For later population).

    // Random Number ID.
    var randomNumber = $("#randomNumber");

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
            // Start new game, clean player status and generate a new number to match.
            playerTotalScore = 0;
            randomNumbz = Math.floor(Math.random() * 120) + 19;
            randomNumber.text(randomNumbz);

            // If the value surpasses the limit of the 'randomNumber', add a loss.
        } else if (playerTotalScore > randomNumbz) {
            // Alert the player of their loss.
            alert("You lost, try again!");
            // Increment the loss counter.
            $('#lossCounter').text(losses);
            losses++;
            // Start new game, clean player status and generate a new number to match.
            playerTotalScore = 0;
            randomNumbz = Math.floor(Math.random() * 120) + 19;
            randomNumber.text(randomNumbz);
        }
        // Populate page with total score.
        $('#totalPlayerScore').text(playerTotalScore);
    });
});