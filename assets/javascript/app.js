//TITLE SCREEN--------------------------
//global variables
//**RESTART BUTTON ONLY IF YOU HAVE TIME
//-------------------------
var counter = 60;
var start = "";
var timer;
var userGuess = [];
var done = "";
var amountCorrect = 0;
var amaountIncorrect = 0;
var unAnswered = 0;
function timeUp() {
    clearInterval(timer)
    tallyScore();
}
function countDown() {
    counter--;
    $(".timer").html("Timer: " + counter);

    if (counter === 0) {
        timeUp();
    }
}
function tallyScore() {
    //hide the game
    $(".game").hide();
    //show the score 
    //output each answer in userGuess array
    function right() {
        var amountCorrect = 0;
        var amountIncorrect = 0;
        var unAnswered = 0;
        for (var i = 1; i <= 10; i++) {
            var radios = document.getElementsByName("answers" + i);
            for (var j = 0; j < radios.length; j++) {
                var radio = radios[j];
                if (radio.value == "correct" && radio.checked) {
                    amountCorrect++;
                    document.getElementById("right").html(amountCorrect);
                }
                else if (radio.value == "incorrect" && radio.checked) {
                    amountIncorrect++;
                    document.getElementById("wrong").html(amountIncorrect)

                }
            }
            }
        }
    }
    //all correct aswers will be counted and stored in rightAnswer
    $(".score").show();

    //record no answers in none
    //if the done button is pressed, run the score function
    //if the timer runs out, run the score function, done OR
    //score function-------------------------------------------------------------
    //gameDivVisible=false, and run score to show in scoreDivVisible=true
    //contents in rightAnswer will be totaled and printed in div class score
    //wrongAnswer will equal totalQuestions minus rightAnswer and printed to div class score
    //none will be totaled and printed in div class score

    $(document).ready(function () {
        //start on click function
        $(".start").show();
        $(".game").hide();
        $(".score").hide();

        //on click of start button, 
        $("#startBtn").click(function startGame() {
            var counter = 60;
            timer = setInterval(countDown, 1000);
            //hide the the start button & 
            $(".start").hide();
            //show the game 
            $(".game").show();
            $(".timer").html("Timer: " + counter);
            //run the game function
            //game function--------------------------------------------------------------
            //start the timer 
        })

        $("#doneBtn").click(function () {
            tallyScore();
        });
    });