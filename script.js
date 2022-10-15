var timerEl = document.querySelector(".timer");
var player = document.querySelector(".player");
var highscore = document.querySelector(".highscore");
var start = document.querySelector("#start-btn");
var scoreEl = document.querySelector(".score");
var questionCard =document.querySelector(".questions-card");
var questionEl = document.querySelector("#question");
var answerBtnEl = document.querySelector("#answerBtn");
let shuffledQuestions, currentQuestionIndex;
var score = 0;
var questionIndex = 0;
var question = [
    {
        question: "What is Javascript?",
        answer: [ 
            {text: "a coffee shop", correct: false},
            {text: "programming language", correct: true},
            {text: "a cult religeon", correct: false},
            {text: "a web extention", correct: false}
        ] 
    },
    {
        question: "What type of language is Javascript?",
        answer: [
            {text: "Object-Oriented", corret:false},
            {text: "Object-Based", correct: true}, 
            {text: "Assembly-language", correct: false},
            {text: "High-level", correct: false}
        ]
    },
    {
        question: "Commenly used data types DO NOT include __",
        answer: [
            {text: "booleans", correct: false },
            {text: "numbers", correct: false},
            {text: "string", correct: false},
            {text: "alerts", correct: true}
        ]
    }
];

renderLastScore();

start.addEventListener("click", timer);
start.addEventListener("click", startGame);
answerBtnEl.addEventListener("click", function(e) {
    if (e.target.className === 'btn') {
        selectAnswer(e)
    }  
})

var time= 20;

function timer(){

    var timeInterval = setInterval(function(){

        if (time > 1) {
            timerEl.textContent = 'Timer: ' + time;
            time--; 
        } else if (time === 1) {
            timerEl.textContent = 'Timer: ' + time;
            time--;
        } else {
            timerEl.textContent = 'Times up';
            clearInterval(timeInterval);
            highScore();
        }
        return;
    }, 1000);
}

function startGame() {
    
    start.classList.add('hide');
    shuffledQuestions = question.sort(() => Math.random()- .5)
    questionCard.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    if (questionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[questionIndex])
    } else {
        questionCard.classList.add('hide');
        start.classList.remove('hide');
        time = 0;
    }
}

function showQuestion(question) {
    answerBtnEl.innerHTML = '';
    //This calls the question from array and dynamicly sets the quiz//
    questionEl.innerHTML = question.question;
    //This goes through and creates buttons for each answer//
    question.answer.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        answerBtnEl.appendChild(button);
    })    
}