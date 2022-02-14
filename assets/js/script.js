var mainQuestions = [
    {
        question: "JavaScript programs can be inserted almost anywhere into an HTML document using the ______ tag.",
        choices: ["<code>", "<script>", "<ins>" ,"<template>"],
        answer: "<script>"
    },

    {
        question: "A ______ is a named storage for data.",
        choices: ["variable",
        "message",
        "value",
        "string"],
        answer: "<script>"
    }
]

var startBtn = document.querySelector("#start");
var timerEl = document.querySelector("#timeCounter");
var mainEl = document.querySelector("#mainSection");


// MAIN QUIZ FUNCTION
var startQuiz = function() {

    //Call startTimer function
    startTimer();

    // Erase Button from hero
    startBtn.remove();

    // Call showQuestions Function
    showQuestions();

},

// START TIME FUNCTION
var startTimer = function() {

    // target timer ( 0 ) to change
    timerEl.textContent = timeChange;

    var timeCount = setInterval(function() {
        if(timeChange > 0) {
            timeChange = -1;
            //change html of timer (0)
            timerEl.textContent = timeChange;
        }
    }, 1000)

};
console.log(startTimer)

// SHOW QUESTION FUNCTION
var showQuestions = function() {

};

