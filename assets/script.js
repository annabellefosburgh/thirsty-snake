//Variables used to reference my html document.
var questionContainer = document.getElementById('question-container');
var startButton = document.getElementById('start-button');
var choicesContainer = document.getElementById('choices-container');
var timerDisplay = document.getElementById('timer');
var introduction = document.getElementById('introduction')
var mainContainer = document.getElementById('main-container');
var endPage = document.getElementById('end-page');
//Other needed variables and array for my questions stored here.
var timer = 60;
var penaltyTime = 15;
var userScore = 0;
var questionIndex = 0;

endPage.style.visibility = 'hidden';
mainContainer.style.visibility = 'hidden';

var questionArray = [{
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
    introduction.style.visibility = 'hidden';
    mainContainer.style.visibility = 'visible';
   beginTimer, showQuestion
}

function showQuestion() {
    // replace the text content of your question container and your choices container
    // with the current question's question value and choices value
    questionContainer.textContent = questionArray[questionIndex]['question'];
    for(var i = 0; i < 4; i++ ){
        var btn = document.createElement('button');
        btn.textContent = yourQuestionArray[questionIndex]['choices'][i];
        btn.setAttribute('class', 'button-choice');
        choicesContainer.append(btn);
    }
}

//Function to grade whether the answer was right or wrong, and add comments accordingly
function compare(event) {
    var userChoice = event.target;
    if (userChoice.matches("correct")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questionArray[questionIndex].correct) {
            score++;
            createDiv.textContent = "Correct!"
            // Correct condition 
        } else {
            // Will apply the 15 second deduction for wrong answers
            timer = timer - penaltyTime;
            createDiv.textContent = "Wrong!"
        }
    }
}

//Creating the end screen that show's your score in the event that you answer all before time runs out
if (questionArray >= questions.length) {
    endPage();
    createDiv.textContent = "End of quiz! Your score is " + userScore;
}

if (timer === 0) {
    endPage();
    createDiv.textContent = "End of quiz! Your score is " + userScore;
}

//The end page will append the main container to close out the quiz
function endPage(){
    mainContainer.style.visibility = 'hidden';
    endPage.style.visibility = 'visible';
}

function beginTimer() {
    var intervalId = setInterval(function () {
        // check first to see what the current value of timer is before doing anthing
        if(timer <= 0) {
           clearInterval(intervalId)
        }
        timer = timer - 1;
        console.log('timer is now', timer);
    }, 1000)
}
timerDisplay.textContent = timer


// add listeners at the very bottom of your JavaScript file
startButton.addEventListener('click', startQuiz);
startButton.addEventListener('click', beginTimer);
choicesContainer.addEventListener('click', gradeUserSelection)