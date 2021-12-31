//declare variables
var quizEl = document.querySelector("#quiz");
var resultsEl = document.querySelector("#results");
var startEl = document.querySelector("#start");
var choiceEl = document.querySelector("#choice");
var timeEl = document.querySelector("#timeLeft");
var submitEl = document.querySelector("#submit");
var quiz = [];


var questions = [
    {
        question: "Commonly used data types DO NOT include: ",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        correct: "c"
    },
    {
        question: "The condition in an if/else statement is enclosed within _______.",
        answers: {
            a: "quotes",
            b: "curly brackets",
            c: "parentheses",
            d: "square brackets"
        },
        correct: "c"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },
        correct: "d"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: {
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parenthesis"
        },
        correct: "c"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers: {
            a: "Javascript",
            b: "console.log",
            c: "terminal/bash",
            d: "for loops"
        },
        correct: "b"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<js>",
            b: "<script>",
            c: "<javascript>",
            d: "<scripting>"
        },
        correct: "b"
    },
];


//create functions

function createQuiz() {
    var i = 0; //keep index of question number
    var timer = 60;
    var score = 0;
    //create timer and update time every second
    var timerInterval = setInterval(function () {

        timer--;
        timeEl.textContent = "Time Left: " + timer;

        if (timer === 0 || timer <= 0) {
            timer = 0; //if timer is at 5 seconds, and user gets question wrong, timer 
            //can become negative.
            clearInterval(timerInterval);
            getResults(); //end game when timer reaches 0
            //Go display results
        }
    }, 1000);

    function setQuestions() {

        startEl.setAttribute("style", "display:none");
        quizEl.children[0].setAttribute("style", "display:none");
        quizEl.children[1].setAttribute("style", "display:none");

        var question = document.createElement("div");
        question.setAttribute("class", "question");
        choiceEl.appendChild(question);
        question.textContent = questions[i].question;

        //create buttons
        var choiceA = document.createElement("button");
        choiceA.setAttribute("class", "mcButton");
        var choiceB = document.createElement("button");
        choiceB.setAttribute("class", "mcButton");
        var choiceC = document.createElement("button");
        choiceC.setAttribute("class", "mcButton");
        var choiceD = document.createElement("button");
        choiceD.setAttribute("class", "mcButton");

        //append buttons
        choiceEl.appendChild(choiceA);
        choiceEl.appendChild(choiceB);
        choiceEl.appendChild(choiceC);
        choiceEl.appendChild(choiceD);

        //setting text content for buttons
        choiceA.textContent = "1." + questions[i].answers.a;
        choiceB.textContent = `2.${questions[i].answers.b}`;
        choiceC.textContent = "3." + questions[i].answers.c;
        choiceD.textContent = "4." + questions[i].answers.d;

        function displayQ(){
            question.textContent = questions[i].question;
            choiceA.textContent = "1." + questions[i].answers.a;
            choiceB.textContent = `2.${questions[i].answers.b}`;
            choiceC.textContent = "3." + questions[i].answers.c;
            choiceD.textContent = "4." + questions[i].answers.d;
        }

        choiceA.addEventListener("click",function(){
            
            i++;

            //displaying next question
            displayQ();

        })
        choiceB.addEventListener("click",function(){
            i++;
            //displaying next question
            displayQ();
            

        })
        choiceC.addEventListener("click",function(){
            i++;
            //displaying next question
            displayQ();

        })
        choiceD.addEventListener("click",function(){
            i++;

            //displaying next question
            displayQ();

        })

        // }

        // var buttonA = 
        // console.log(choiceA);
        // choiceA.addEventListener("click",function(){
        //     questionIndex++;
        //     console.log(questionIndex);
        // });
        // choiceB.addEventListener("click",function(){
        //     questionIndex++;
        //     console.log(questionIndex);
        // });
        // choiceC.addEventListener("click",function(){
        //     questionIndex++;
        //     console.log(questionIndex);
        // });
        // choiceD.addEventListener("click",function(){
        //     questionIndex++;
        //     console.log(questionIndex);
        // });

        // if (questionIndex == 1) {
        //     for (let j = 1; j < 6; j++) {
        //         choiceEl.children[j].style.display = "none";
        //     }
        // } else if (questionIndex == 2) {

        //     choiceEl.children[0].style.display = "none";
        //     choiceEl.children[1].style.display = "block";

        // }
        // if(document.getElementById(''))
        // document.getElementById("div").addEventListener("click",function(){
        //     questionIndex++;
        //     console.log(questionIndex);
        // })






    }

    function getResults() {

    }

    setQuestions();
    getResults();

}

startEl.addEventListener("click", createQuiz);
// function endQuiz();



