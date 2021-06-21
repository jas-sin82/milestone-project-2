// all the main variables and id´s

const startButton = document.getElementById("btn-start-quiz");
const questionBox = document.getElementById("question-box");
const quitQuiz = document.getElementById("quit-quiz");
const nextQuestion = document.getElementById("next-question");

// adding addEventfunction (when the start button clicked)

startButton.addEventListener("click", function () {
    questionBox.setAttribute("class", "question-containers");
    $(".main-container").hide();
})

// adding addEventfunction (when the quit button clicked)

quitQuiz.addEventListener("click", function () {
    questionBox.classList.remove("question-containers");
    questionBox.setAttribute("class", "quit-class");
    $(".main-container").show();

})

// Array of Questions and Answers.

let questions = [{
        number: 1,
        question: "Which of the following is a greenhouse gas?",
        answers: ["CO2", "CO4", "Vapor Water", "Above All"],
        correctAnswer: "Above All",
    },
    {
        number: 2,
        question: "Which of these countries emits the most carbon dioxide?",
        answers: ["China",
            "USA",
            "UK",
            "Russia"
        ],
        correctAnswer: "China",
    },
    {
        number: 3,
        question: "Which has been the hottest year on record ?",
        answers: ["2016",
            "2020",
            "All of the above",
            "None of the above"
        ],
        correctAnswer: "All of the above",
    },
    {
        number: 4,
        question: "which of the following sectors emits largest % of greenhouse gas?",
        answers: ["Transportation",
            "Buildings",
            "Industry",
            "Electricity and heat production"
        ],
        correctAnswer: "Electricity and heat production",
    },
    {
        number: 5,
        question: "How much have sea levels risen in the past 100 years?",
        answers: ["7 inches", "2 inches", "5 inches", "16 inches"],
        correctAnswer: "7 inches",
    },
    {
        number: 6,
        question: "How could global warming affect polar regions?",
        answers: ["It will make them warmer",
            "It will make them colder",
            "It won't affect them",
            "None"
        ],
        correctAnswer: "It will make them warmer",
    },
    {
        number: 7,
        question: "What is solar radiation?",
        answers: ["Energy from the sun",
            "Energy from within the Earth",
            "Energy from the wind",
            "All of the above"
        ],
        correctAnswer: "Energy from within the Earth",
    },
    {
        number: 8,
        question: "How long does CO2 remain in the atmosphere?",
        answers: ["up to 200 years",
            "up tp 5 years",
            "up to 100 years",
            "All of the above"
        ],
        correctAnswer: "up to 200 years",
    },

]


// function to getting all the questions and answer options from array .

const questionContent = document.getElementById("question");
var answerContent = document.getElementById("answer");

function allQuestion(event) {
    let createTag = document.createElement("p").innerHTML = questions[event].number + ")" + " " + questions[event].question;
    questionContent.innerHTML = createTag;
    let answerOption = `<div class="answer-option">` + `<p>` + questions[event].answers[0] + `</P></div>` +
        `<div class="answer-option">` + `<p>` + questions[event].answers[1] + `</P></div>` +
        `<div class="answer-option"> ` + `<p>` + questions[event].answers[2] + `</P></div>` +
        `<div class="answer-option" >` + `<p>` + questions[event].answers[3] + `</P></div>`;
    answerContent.innerHTML = answerOption;

}






// select answer option if the answer is correct do x and if the answer is incorrect do y.

function selectedAnswers() {

}









// getting  score of correct answer and increment in to correct Answers element.

function incrementScore() {

}






// Getting score of incorrect answer and increment in to incorrect Answers element.

function incrementWrongAnswer() {

}



// next button function to click to go to next question.






// This section belongs to result box which will show user scores and beneath score one button which will lead user back to Home page.


function quizFinalResult() {


}