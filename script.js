"use strict";
//VARIABLES
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//FUNCTIONS
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

//CCLICK EVENTS

//check number
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    //when there is no input
    if (!guess) {
        displayMessage("No number");

        //when player wins
    } else if (guess === secretNumber) {
        displayMessage("Correct Number");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
        //when number is different
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "Too high" : "Too low");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("You have lost the game");
            document.querySelector(".score").textContent = 0;
        }
    }
});

//resetting game
document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor =
        "rgba(28, 70, 161, 0.919)";
    document.querySelector(".number").textContent = "?";
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
});
