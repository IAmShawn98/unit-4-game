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
        // Update our total score  to equal our new value.
        playerTotalScore = Number($(this).val()) + Number(playerTotalScore);

        // 4.) If the value of the players total score matches the 'randomNumber' displayed, add a win.
        if (randomNumbz === playerTotalScore) {
            wins++;
            $('#winCounter').text(wins);
            alert("You Won!!!!!!!");
            playerTotalScore = 0;
            randomNumbz = Math.floor(Math.random() * 120) + 19;

        // 4.2 Otherwise, if the value surpasses the limit of the 'randomNumber', add a loss.
        } else if (playerTotalScore > randomNumbz) {
            $('#lossCounter').text(losses);
            alert("You lost, try again!");
            losses++;
            playerTotalScore = 0;
            randomNumbz = Math.floor(Math.random() * 120) + 19;
        }
        // Populate page with total score.
        $('#totalPlayerScore').text(playerTotalScore);
    });
});