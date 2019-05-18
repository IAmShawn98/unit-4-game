$(document).ready(function () {

    // 1.) Set default game stats and call our important DOM elements for later population.

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

    // 2.) Generate a random number.

    // Populate our 'randomNumbz' to the 'randomNumber' display in HTML.
    randomNumber.text(randomNumbz);

    // 3.) When the player clicks on any of the four crystals, increment the 'playerTotalScore'.

    // Crystal Buttons.
    $('button').click(function () {
        // Update our total var to equal our new value.
        playerTotalScore = Number(playerTotalScore) + Number($(this).val());

        // 4.) If the value of the players total score matches the 'randomNumber' displayed, add a win.
        if (randomNumbz === playerTotalScore) {
            wins++;
            $('#winCounter').text(wins);
            playerTotalScore = 0;

            // 4.2 Otherwise, if the value surpasses the limit of the 'randomNumber', add a loss.
        } else if (playerTotalScore > randomNumbz) {
            $('#lossCounter').text(losses);
            losses++;
            playerTotalScore = 0;
        }
        // Populate page with total score.
        $('#totalPlayerScore').text(playerTotalScore);
    });

    // Populates the total from the four crystals.
    $('#totalPlayerScore').text(playerTotalScore);
    playerTotalScore = Number(playerTotalScore) + Number($(this).val());
});