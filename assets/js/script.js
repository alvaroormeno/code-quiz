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

var timeChange = 100;


//MAIN QUIZ FUNCTION
var startQuiz = function() {

    //Call startTimer function
    startTimer();

    // Erase Button from hero
    startBtn.remove();

    // Call showQuestions Function
    showQuestions();

};


// START TIME FUNCTION
var startTimer = function() {

    // target timer ( 0 ) to change
    timerEl.textContent = timeChange;

    var timeCount = setInterval(function() {
        if(timeChange > 0) {
            timeChange = timeChange -1;
            //change html of timer (0)
            timerEl.textContent = timeChange;
        }
    }, 1000)
    console.log(timeChange)
    console.log('hi');

};


// SHOW QUESTION FUNCTION
var showQuestions = function(questionNumber) {

    // variable that creates <section> element to display Question
    var questionSection = document.createElement("section");
    // append questionSection element to <main> element in html
    mainEl.appendChild(questionSection);
    // give new appended <section> an Id to pair with question
    questionSection.id = "questionNumber";
    // give new appended <section> classes
    questionSection.className = "container"

    // variable that creates <section> element to display answer buttons
    var answerSection = document.createElement("section");
    // append answerSection element to <main> element in html
    mainEl.appendChild(answerSection);
    


};

startBtn.addEventListener("click", startQuiz);