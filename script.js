//declare variables
var quizEl = document.querySelector("#quiz");
var resultsEl = document.querySelector("#results");
var startEl = document.querySelector("#start");
var choiceEl = document.querySelector("#choice")
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

function createQuiz(){
        //create timer and update time every second
        var timerInterval = setInterval(function() {
        
            timer--;
            timeEl.textContent = "Time Left: " + timer;
    
            if(timer === 0 || timer <=0){
                timer = 0; //if timer is at 5 seconds, and user gets question wrong, timer 
                //can become negative.
                clearInterval(timerInterval);
                endGame(); //end game when timer reaches 0
                //Go display results
            }
        }, 1000);

    function displayQuestions(){

        startEl.setAttribute("style","display:none");
        quizEl.children[0].setAttribute("style","display:none");
        quizEl.children[1].setAttribute("style","display:none");
        //create buttons and append
    
        for(let i = 0 ; i < questions.length ; i++){
    
            var currentQ = questions[i].question;
            var question = document.createElement("div");
            question.setAttribute("class","question");
            choiceEl.appendChild(question);
            question.textContent = currentQ;
    
            var choiceA = document.createElement("button");
            var choiceB = document.createElement("button");
            var choiceC = document.createElement("button");
            var choiceD = document.createElement("button");
    
            choiceEl.appendChild(choiceA);
            choiceEl.appendChild(choiceB);
            choiceEl.appendChild(choiceC);
            choiceEl.appendChild(choiceD);
    
    
            choiceA.textContent = "1." + questions[i].answers.a;
            choiceB.textContent = `2.${questions[i].answers.b}`;
            choiceC.textContent = "3." +  questions[i].answers.c;
            choiceD.textContent = "4." +  questions[i].answers.d;
        }
    
    
    
    }

    function getResults(){

    }

    displayQuestions();
    getResults();

}

startEl.addEventListener("click",createQuiz);
// function endQuiz();



