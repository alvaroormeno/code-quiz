var mainQuestions = [
    {
        question: "JavaScript programs can be inserted almost anywhere into an HTML document using the ______ tag.",
        choices: ["<code>", "<script>","<ins>"],
        answer: "<script>"
    },

    {
        question: "A ______ is a named storage for data.",
        choices: ["variable",
        "message",
        "value",
        "string"],
        answer: "<script>"
    },
    {
        question: "Variables declared using ______ cannot be reassigned.",
        choices: [
            "var",
            "let",
            "have",
            "const"
        ],
        answer: "const"
    },
    {
        question: "Which of the following is NOT a data type in JavaScript?",
        choices: [
            "number",
            "string",
            "character",
            "boolean"
        ],
        answer: "character"
    },
    {
        question: "Which of the following functions will NOT interact with the user?",
        choices: [
            "print();",
            "alert();",
            "prompt();",
            "confirm();"
        ],
        answer: "print()",
    },
    {
        question: "Of the following logical operators in JavaScript, which one represents (NOT)?",
        choices: [
            "||",
            "&&",
            "!",
            "??"
        ],
        answer: "!",
    },
    {
        question: "Normally, a loop exists when the condition becomes falsy. But we can force the exit at any time with the special ______ directive.",
        choices: [
            "stop",
            "end",
            "alert",
            "break"
        ],
        answer: "break",
    },
    {
        question: "A ______ statement can replace multiple (if) checks.",
        choices: [
            "switch",
            "while",
            "for",
            "continue"
        ],
        answer: "switch",
    },
    {
        question: "A variable inside a function is only visible inside that function and is known as a ______ .",
        choices: [
            "local variable",
            "outer variable",
            "global variable",
            "parameter"
        ],
        answer: "local variable",
    },
    {
        question: "The ______ helps with the process of finding and fixing errors within a script.",
        choices: [
            "DOM",
            "console.log()",
            "debugger",
            "parameter"
        ],
        answer: "debugger",
    },
    {
        question: " ______ appends new elements to the end of an array, and returns the new length of an array.",
        choices: [
            "concat()",
            "push()",
            ".join",
            "parseInt()"
        ],
        answer: "push()",
    },
]

var startBtn = document.querySelector("#start");
var answerBtn = document.querySelector("#answer-button")
var timerEl = document.querySelector("#timeCounter");
var welcomeEl = document.querySelector("#welcome-view");
var mainEl = document.querySelector("#mainSection");

var timeChange = 100;






    






//MAIN QUIZ FUNCTION
var startQuiz = function() {

    //Call startTimer function
    startTimer();

    // Erase Button from hero
    welcomeEl.remove();

    // let value3 = Math.floor(Math.random() * 10);

    let numbersArray = [1,2,3,4,5,6,7,8,9,10]

    function getRandomNumber(min, max) {
        let totalEle = max - min + 1;
        let result = Math.floor(Math.random() * totalEle) + min;
        return result;
    }
    let randomIndex = getRandomNumber(0, numbersArray.length - 1);
    let randomNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex, 1);

    


    
    





    // Call showQuestions Function
    showQuestions(randomNumber);

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

var selectedAnswers = mainQuestions[questionNumber].choices
    var selectedQuestion = mainQuestions[questionNumber]
    
// SHOW QUESTION FUNCTION
var showQuestions = function(questionNumber) {

    
    

    // variable that creates <section> element to display Question
    var questionSection = document.createElement("section");
    // append questionSection element to <main> element in html
    mainEl.appendChild(questionSection);
    // give new appended <section> an Id to pair with question
    questionSection.id = "question-view";
    // give new appended <section> classes
    questionSection.className = "container";

    var divRowClassQ = document.createElement("div");
    divRowClassQ.className = "row"
    questionSection.appendChild(divRowClassQ);

    var questionDiv = document.createElement('div');
    questionDiv.className = "col text-center";
    // append html that includes question from mainQuestions variable
    questionDiv.innerHTML = "<h2>" + selectedQuestion.question + "</h2>"; 
    divRowClassQ.appendChild(questionDiv);






    

    // variable that creates <div> element to display answer buttons
    var divRowClassA = document.createElement("div");
    // append answerSection element to <main> element in html
    questionSection.appendChild(divRowClassA);
    // give new appended <section> classes
    divRowClassA.className = "row"

    var answerDiv = document.createElement("div");
    divRowClassA.appendChild(answerDiv);
    answerDiv.className = "col text-center";

    // for (var i = 0; i < mainQuestions.length; i++) {
    //     var answerBtnEl = document.createElement("button");
    //     answerBtnEl.textContent = mainQuestions[questionNumber]
    //     answerDiv.appendChild.answerBtnEl

    // }

    // for( prop in mainQuestions[questionNumber].choices) {
    //     var answerBtnEl = document.createElement("button");
    //     answerBtnEl.textContent = mainQuestions[questionNumber].choices
    // }

    selectedAnswers.forEach( function(answer) {
        console.log(answer)
        var answerBtnEl = document.createElement("button")
        answerBtnEl.id = "answer-button"
        answerBtnEl.className = "btn btn-primary"
        answerBtnEl.textContent = answer
        answerBtnEl.setAttribute("correctAnswer", selectedQuestion.answer )
        answerDiv.appendChild(answerBtnEl)
        // answerBtnEl.textContent = selectedAnswers[1]
        
    })


}

var checkCorrect = function(question, correctAnswer) {



}









startBtn.addEventListener("click", startQuiz);
answerBtn.addEventListener("click", checkCorrect())

