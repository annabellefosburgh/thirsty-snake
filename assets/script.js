//Variables used to reference my html document.
var questionContainer = document.getElementById('question-container');
var startButton = document.getElementById('start-button');
var choicesContainer = document.getElementById('choices-container');

//Other needed variables and array for my questions stored here.
var timer = 60;
var userScore = 0;
var questionIndex = 0;

var yourQuestionArray = [{
    question: 'Commonly used data types do NOT include ___.',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    correct: 'alerts'
},
{
    question: 'Arrays in JavaScript can be used to store ___.',
    choices: ['numbers and strings', 'booleans', 'other arrays', 'all of the above'],
    correct: 'all of the above'
},
{
    question: 'The condition in an if/else statement is enclosed in ___.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    correct: 'parentheses'
},
{
    question: 'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['quotations', 'commas', 'curly brackets', 'parentheses'],
    correct: 'quotations'
}
]

function startQuiz() {
   beginTimer, showQuestion
}

function showQuestion() {
    // replace the text content of your question container and your choices container
    // with the current question's question value and choices value
    questionContainer.textContent = yourQuestionArray[questionIndex]['question'];
    for(var i = 0; i < 4; i++ ){
        var btn = document.createElement('button');
        btn.textContent = yourQuestionArray[questionIndex]['choices'][i];
        btn.setAttribute('class', 'button-choice');
        choicesContainer.append(btn);
    }
}

function gradeUserSelection(event) {
    if(event.target.matches('button')) {
        // then you know a button was clicked, great!

    }
}

function getUsernameAndSaveToLocal() {
    // you might clear the contents of your main container
    // maybe show/unhide your form/input element
    // 
}

function beginTimer() {
    var intervalId = setInterval(function () {
        // check first to see what the current value of timer is before doing anthing
        if(timer <= 0) {
            // the quiz should end, regardless of what question the user is on
            // maybe call some function which hides or shows some other container
            // end your interval function here by calling clearInterval(intervalId);
        }
        // what code do you want to run every 1s?
        timer = timer - 1;
        console.log('timer is now', timer);
        // you will display the timer value to your document
        // via some Javascript variable which makes references to your html element
        // i.e. timerContainer.textContent = 'Time left is ' + timer;
    }, 1000)
}

// add listeners at the very bottom of your JavaScript file
startButton.addEventListener('click', startQuiz);
startButton.addEventListener('click', beginTimer);
choicesContainer.addEvenListener('click', gradeUserSelection)