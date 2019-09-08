//TITLE SCREEN--------------------------
//global variables
//**RESTART BUTTON ONLY IF YOU HAVE TIME
//-------------------------
var start = "";
var time = "";
var userGuess = "";
var none = "";
var done = "";
var rightAnswer = "";
var wrongAnswer = "";
var score = "";
var totalQuestions = 10;
gameDivVisible = true;
scoreDivVisible = true;
$(document).ready(function () {
    //start on click function
    $(".start").show();
    $(".game").hide();
    $(".score").hide();

    $("#startBtn").click(function startGame() {
        $(".start").hide();
        $(".game").show();
        //on click of start button, 
        //hide the the start button & 
        //run the game function
        //game function--------------------------------------------------------------
        //show the game divgameDivVisible=true
        //start the timer 
    })
    $("#doneBtn").click(function tallyScore() {
        //output each answer in userGuess array
        $(".game").hide();
        $(".score").show();
        //all correct aswers will be counted and stored in rightAnswer
        //record no answers in none
    
//if the done button is pressed, run the score function
//if the timer runs out, run the score function, done OR
//score function-------------------------------------------------------------
//gameDivVisible=false, and run score to show in scoreDivVisible=true
//contents in rightAnswer will be totaled and printed in div class score
//wrongAnswer will equal totalQuestions minus rightAnswer and printed to div class score
//none will be totaled and printed in div class score
})

});




