var mainQuestions = [
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
        choices: ["number","string","character","boolean"],
        answer: "character"
    },
    {
        question: "Which of the following functions will NOT interact with the user?",
        choices: ["print();","alert();","prompt();","confirm();"],
        answer: "print()",
    },
    {
        question: "Of the following logical operators in JavaScript, which one represents (NOT)?",
        choices: [ "||","&&","!","??"],
        answer: "!",
    },
    {
        question: "Normally, a loop exists when the condition becomes falsy. But we can force the exit at any time with the special ______ directive.",
        choices: ["stop","end","alert","break"],
        answer: "break",
    },
    {
        question: "A ______ statement can replace multiple (if) checks.",
        choices: ["switch","while","for","continue"],
        answer: "switch",
    },
    {
        question: "A variable inside a function is only visible inside that function and is known as a ______ .",
        choices: ["local variable","outer variable","global variable","parameter"],
        answer: "local variable",
    },
    {
        question: "The ______ helps with the process of finding and fixing errors within a script.",
        choices: ["DOM", "console.log()", "debugger", "parameter"],
        answer: "debugger",
    },
    {
        question: " ______ appends new elements to the end of an array, and returns the new length of an array.",
        choices: [ "concat()", "push()",".join","parseInt()"],
        answer: "push()",
    },
    {
        question: " ______ tag is an extension to HTML that can enclose any number of JavaScript",
        choices: ["SCRIPT>", "<BODY>", "<HEAD>", "<TITLE>"],
        answer: "<SCRIPT>",
    },
    {
        question: " Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<scripting>", "<script>", "<javascript>"],
        answer: "<script>",
    },
    {
        question: "Choose the client-side JavaScript object?",
        choices: ["Database", "Cursor", "Client", "FileUpLoad"],
        answer: "FileUpLoad",
    },
    {
        question: "Which of the following is not considered a JavaScript operator?",
        choices: ["new", "this", "delete", "typeof"],
        answer: "this",
    },
    {
        question: "Is it possible to nest functions in JavaScript?",
        choices: ["True", "False"],
        answer: "True",
    },
    {
        question: "In JavaScript, Window.prompt() method return true or false value ?",
        choices: ["True", "False"],
        answer: "False",
    },
    {
        question: "_________ is a wrapped Java array, accessed from within JavaScript code",
        choices: ["JavaArray", "JavaClass", "JavaObject", "JavaPackage"],
        answer: "JavaArray",
    },
    {
        question: "Using _______ statement is how you test for a specific condition.",
        choices: ["Select", "If", "Switch", "For"],
        answer: "If",
    },
]

var startBtn = document.querySelector("#start");
var answerBtn = document.querySelector("#answer-button")
var timerEl = document.querySelector("#timeCounter");
var welcomeEl = document.querySelector("#welcome-view");
var mainEl = document.querySelector("#mainSection");
var footerEl = document.querySelector(".footer")
var correctWrong = document.querySelector("#correctWrong");

var timeChange = 100;
var userScore = 0;
var saveScore = [];

// FUNCTION AND ARRAY TO CREATE UNIQUE RANDOM NUMBER FOR QUESTION ID
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
var ranNumOf = function() {

    let randomIndex = Math.floor(Math.random() * numbersArray.length);
    let randomNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex, 1);
    return randomNumber;
};

//MAIN QUIZ FUNCTION
var startQuiz = function() {

    //Call startTimer function
    startTimer();
    // Erase welcome section
    welcomeEl.remove();
    footerEl.remove();
    // Call showQuestions Function
    showQuestions(ranNumOf());
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
        } else if (timeChange === 0) {
            gameOver()
        }
    }, 1000)
};

// SHOW QUESTION FUNCTION
var showQuestions = function(questionNumber) {

    var selectedAnswers = mainQuestions[questionNumber].choices
    var selectedQuestion = mainQuestions[questionNumber]
    var trueAnswer = mainQuestions[questionNumber].answer
    

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
    divRowClassQ.id = "question" + questionNumber;
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
    answerDiv.className = "col answers-button d-flex flex-column align-items-center mt-4";


    // create button for every answer option 
    selectedAnswers.forEach( function(answer) {
        //console.log(answer)
        var answerBtnEl = document.createElement("button")
        answerBtnEl.id = "answer-button"
        answerBtnEl.className = "btn btn-primary m-2 w-25"
        answerBtnEl.textContent = answer
        answerBtnEl.setAttribute("onclick", "checkCorrect(" + questionNumber + ", '" + answer + "')" )
        answerBtnEl.setAttribute("correctAnswer", selectedQuestion.answer )
        answerDiv.appendChild(answerBtnEl)
    })
};

// FUNCTION TO CHECK SELECTED ANSWER, IT IS CALLED FROM HTML FILE
var checkCorrect = function(questionNumber, questionAnswer) {

    // remove last question 
    var pastQuestion = document.querySelector("#question-view");

    if(questionAnswer === mainQuestions[questionNumber].answer) {
        correctAnswer();
        userScore = userScore + 10;
        console.log("CORRECT ANSWER")
        
    } 
    else {
        wrongAnswer();
        timeChange = timeChange - 10;
        console.log("WRONG ANSWER");
        
    };

    if (numbersArray.length === 0) {
        console.log("GAAAAAME OVERRRR")
        gameOver();
    } else {
        setTimeout(function() {
            pastQuestion.remove(); 
        }, 500);
        setTimeout(function() {
            //console.log(pastQuestion)
            showQuestions(ranNumOf());
        }, 1000);

    }
}

var gameOver = function() {

    var toDelete = document.querySelector("#question-view")
    toDelete.remove();

    var ganmeOverSection = document.createElement("section");
    mainEl.appendChild(ganmeOverSection);
    ganmeOverSection.id = "gameover-view";
    ganmeOverSection.className = "container";

    var gameOverRowClass = document.createElement("div");
    gameOverRowClass.className = "row"
    ganmeOverSection.appendChild(gameOverRowClass);

    var doneDiv = document.createElement("div");
    gameOverRowClass.appendChild(doneDiv);
    doneDiv.className = "col text-center";

    var allDone = document.createElement("h2");
    allDone.className = ("text-decoration-underline")
    allDone.textContent = "All Done!"
    doneDiv.appendChild(allDone);

    var finalScore = document.createElement("p");
    finalScore.id = ("score")
    finalScore.textContent = "Your final score is " + userScore;
    doneDiv.appendChild(finalScore);

    var inputDoneDiv = document.createElement("div");
    gameOverRowClass.appendChild(inputDoneDiv);
    inputDoneDiv.className = "text-center";

    var nameInput = document.createElement("input");
    nameInput.placeholder = "Enter initials";
    nameInput.id = ("name-initials");
    nameInput.type = ("text");
    inputDoneDiv.appendChild(nameInput);

    let submitButton = document.createElement("button");
    submitButton.className = ("btn m-5");
    submitButton.innerHTML = "<span>Submit</span>";
    submitButton.setAttribute("onclick", "storeScore()");
    inputDoneDiv.appendChild(submitButton);
};

var storeScore = function() {

    window.location.href = "highscores.html";
    var obj = {
        name: document.querySelector("input").value,
        score: userScore
    }
    saveScore.push(obj);
    localStorage.setItem("highScore", JSON.stringify(saveScore));
};

function uploadScore() {
    var highScores = localStorage.getItem("highScore");
    if (!highScores) {
        return false;
    }
    highScores = JSON.parse(highScores);
    for (var i = 0; i < highScores.length; i++) {
        var temp = {
            name: highScores[i].name,
            score: highScores[i].score
        }
        saveScore.push(temp);
    }
    saveScore.sort(function(a, b) {
        return b.score - a.score;
    })
};

function showHighScore() {
    var highScoreList = document.querySelector("#highScoreList");

    for (i = 0; i < saveScore.length; i++) {
        let scoreList = document.createElement("li");
        scoreList.className = ("text-start");
        scoreList.textContent = saveScore[i].name + " " + saveScore[i].score;
        highScoreList.appendChild(scoreList);
    }
};

function clearHighScore() {
    localStorage.clear();
    location.reload();
}

var correctAnswer = function() {
    let correct = document.createElement("h2");
    correct.className = "title border-top w-50 d-flex justify-content-center";
    correct.textContent = "Correct!";
    correctWrong.appendChild(correct);
    setTimeout(function() {
        correct.remove();
    }, 1100);
}

var wrongAnswer = function() {
    let wrong = document.createElement("h2");
    wrong.className = "title border-top w-50 d-flex justify-content-center";
    wrong.textContent = "Wrong Answer!";
    correctWrong.appendChild(wrong);
    setTimeout(function() {
        wrong.remove();
    }, 1100);
}

startBtn.addEventListener("click", startQuiz);

uploadScore()