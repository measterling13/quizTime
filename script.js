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