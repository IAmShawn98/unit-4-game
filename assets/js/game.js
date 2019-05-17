// Run when the DOM is ready.
$(document).ready(function () {

    // 1.) Grab our DOM values for later population.

    // Global Variables.
    var wins = 0;
    var losses = 0;
    var playerTotalScore = 0;

    // Random Crystal Values.
    var redCrystalValue = Math.floor(Math.random() * 25) + 1;
    var blueCrystalValue = Math.floor(Math.random() * 12) + 1;
    var yellowCrystalValue = Math.floor(Math.random() * 15) + 1;
    var greenCrystalValue = Math.floor(Math.random() * 20) + 1;


    // DOM Values (For later population).
    
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

    // Generate a random value for each crystal.

    // Red Crstal.
    $("#cRed").on("click", function () {
        $('#totalPlayerScore').text(redCrystalValue);
    });
    // Blue Crystal.
    $("#cBlue").on("click", function () {
        $('#totalPlayerScore').text(blueCrystalValue);
    });
    // Yellow Crystal.
    $("#cYellow").on("click", function () {
        $('#totalPlayerScore').text(yellowCrystalValue);
    });
    // Green Crystal.
    $("#cGreen").on("click", function () {
        $('#totalPlayerScore').text(greenCrystalValue);
    });




    // 4.) If the value of the players total score matches the 'randomNumber' displayed, add a win.
    // 4.2 Otherwise, if the value surpasses the limit of the 'randomNumber', add a loss.





});