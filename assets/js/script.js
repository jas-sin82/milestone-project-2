//  the main variables and id´s of home page and quiz box

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
const selectedAnswer = document.getElementsByClassName("answer-option");

function allQuestion(event) {
    let createTag = document.createElement("p").innerHTML = questions[event].number + ")" + " " + questions[event].question;
    questionContent.innerHTML = createTag;
    let answerOption = `<div class="answer-option">` + `<p>` + questions[event].answers[0] + `</P></div>` +
        `<div class="answer-option">` + `<p>` + questions[event].answers[1] + `</P></div>` +
        `<div class="answer-option"> ` + `<p>` + questions[event].answers[2] + `</P></div>` +
        `<div class="answer-option" >` + `<p>` + questions[event].answers[3] + `</P></div>`;
    answerContent.innerHTML = answerOption;

    for (let x = 0; x < selectedAnswer.length; x++) {
        selectedAnswer[x].setAttribute("onclick", "selectedAnswers(this)");
    }
}

allQuestion(0);
let currentQuestion = 0;
let totalScoreAchieved = 0;


// select answer option if the answer is correct do x and if the answer is incorrect do y.

function selectedAnswers(correctAnswer) {
    let userAnswer = correctAnswer.innerText;
    let rightAnswer = questions[currentQuestion].correctAnswer;
    let allAnswers = answerContent.children.length;
    if (userAnswer === rightAnswer) {
        totalScoreAchieved += 1;
        // if the user answer is correct green color background  will pop up inside the answer box.
        correctAnswer.classList.add("green");

    } else {
        // if the user answer is incorrect red color background  will pop up inside the answer box.
        correctAnswer.classList.add("red");

        //if the user answer is incorrect ! correct answer will  automatically pop up with green highlight.
        for (let x = 0; x < allAnswers; x++) {
            if (answerContent.children[x].innerText === rightAnswer) {
                answerContent.children[x].classList.add("green");
            }

        }

    }

    // user can click just one answer ! once user clicked,the rest of the answers will unable to click.
    for (let x = 0; x < allAnswers; x++) {
        answerContent.children[x].classList.add("unable-answer");
    }

}

// next button function to click to go to next question.

const nextButton = document.getElementById("next-question");

nextButton.addEventListener("click", function () {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        allQuestion(currentQuestion);
    } else {
        console.log("successfully loaded");
        quizFinalResult();
    }

});

// This section belongs to result box which will show user scores and beneath score one button which will lead user back to Home page.

const restartQuiz = document.getElementById("restart-quiz");
const restartButton = document.getElementById("restart-button");

function quizFinalResult() {
    questionBox.classList.remove("question-containers");
    questionBox.setAttribute("class", "quit-class");
    restartQuiz.setAttribute("class", "restart_quiz");
    let finalScore = document.getElementById("score-card");
    if (totalScoreAchieved > 6) {
        finalScore.innerHTML =
            `<span>` + `Excellent You are rock ! <br> Please share your knowledge with <br> others to save our planet <br> <span>` + totalScoreAchieved + `</span> out of <span>` + questions.length + `</span> !</span>`;
    } else if (totalScoreAchieved > 4) {
        finalScore.innerHTML =
            `<span>` + `Congratulation you got! <br><span>` + totalScoreAchieved + `</span> out of <span>` + questions.length + `</span> <br> Good Luck & Try Again  !</span>`;
    } else if (totalScoreAchieved < 3) {
        finalScore.innerHTML =
            `<span>` + ` Aho ! You Got <br> <span>` + totalScoreAchieved + `</span> Out Of <span>` + questions.length + `</span> <br> Good Luck & Try Again !</span>`;
    } else {
        finalScore.innerHTML =
            `<span>` + ` Aho ! You Got <br> <span>` + totalScoreAchieved + `</span> Out Of <span>` + questions.length + `</span> <br> Good Luck & Try Again  !</span>`;
    }

}

// restart button function when user will click it brings user back to Home page ...

restartButton.addEventListener("click", function () {
    restartQuiz.classList.remove("restart_quiz");
    $(".main-container").show();
    restartQuiz.setAttribute("class", "quit-class");
    window.location.reload();
})