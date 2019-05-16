// Run when the DOM is ready.
$(document).ready(function () {

    // 1.) Grab our DOM values for later population.

    // Global Variables.
    var wins = 0;
    var losses = 0;
    var playerTotalScore = 0;

    // Random Number ID.
    var randomNumber = $("#randomNumber");
    // Win Counter ID.
    var winCounter = $("#winCounter");
    // Loss Counter ID.
    var lossCounter = $("#lossCounter");
    // Player Total Score ID.
    var playerTotalScore = $("#playerTotalScore");

    // 2.) Generate a random number.

    // Set a variable that holds our random values.
    var randomNumbz = Math.floor(Math.random() * 19) + 120;
    // Populate our 'randomNumbz' to the 'randomNumber' display in HTML.
    randomNumber.text(randomNumbz);


    // 3.) When the player clicks on any of the four crystals, increment the 'playerTotalScore'.






    // 4.) If the value of the players total score matches the 'randomNumber' displayed, add a win.
    // 4.2 Otherwise, if the value surpasses the limit of the 'randomNumber', add a loss.





});