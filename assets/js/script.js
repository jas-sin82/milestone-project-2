//  targeting  main variables and id´s of home page and quiz box

const startButton = document.getElementById("btn-start-quiz");
const questionBox = document.getElementById("question-box");
const quitQuiz = document.getElementById("quit-quiz");
const nextQuestion = document.getElementById("next-question");
const instructionBox = document.getElementById("instruction_box")
const nextApp = document.getElementById("next-app");
const audioWrong = document.getElementById("myAudio-wrong");
const audioRight = document.getElementById("myAudio-right");


// adding addEventfunction (when the start button clicked)

startButton.addEventListener("click", function () {
    questionBox.classList.remove("question-containers");
    instructionBox.setAttribute("class", "instruction-box-1");
    $(".main-container").hide();
})


//  adding addEventfunction ( targeting the next button inside instruction box  )

nextApp.addEventListener("click", function () {
    instructionBox.classList.remove("instruction-box-1");
    questionBox.setAttribute("class", "question-containers");
    instructionBox.setAttribute("class", "quit-class");
    nextQuestion.classList.add("unable-button");
    questionCounter(1);
})

// adding addEventfunction (when the quit button clicked)

quitQuiz.addEventListener("click", function () {
    questionBox.classList.remove("question-containers");
    $(".main-container").show();
    currentQuestion = 0;
    allQuestion(currentQuestion);
    currentNumber = 0;
    questionCounter(currentNumber);
    nextQuestion.classList.add("unable-button");
    document.getElementById("correct-answer").innerText = totalScoreAchieved = 0;
    document.getElementById("incorrect-answer").innerText = totalScoreAchieved = 0;
    restartQuiz.classList.remove("restart_quiz");
    restartQuiz.setAttribute("class", "quit-class");

})

// Array of Questions and Answers.

let questions = [{
        number: 1,
        question: "Which of the following is a greenhouse gas?",
        answers: ["CO2", "Methane", "Vapor Water", "Above All"],
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
            "up to 5 years",
            "up to 100 years",
            "All of the above"
        ],
        correctAnswer: "up to 200 years",
    },
    {
        number: 9,
        question: "What do scientists agree is causing climate change?",
        answers: ["Humans",
            "Animals",
            "Sun",
            "All of the above"
        ],
        correctAnswer: "Humans",
    },
    {
        number: 10,
        question: "What's the easiest ways you can help prevent global warming?",
        answers: ["Stop Eating Meat",
            "Use Less Fossil Fuels",
            "Plant trees",
            "All of the above"
        ],
        correctAnswer: "All of the above",
    },
    {
        number: 11,
        question: "How much of the world's food produced in a year is thrown away uneaten?",
        answers: ["One quarter",
            "One third",
            "One half",
            "All of the above"
        ],
        correctAnswer: "One third",
    },
    {
        number: 12,
        question: "What is the  biggest threat towards development is?",
        answers: ["Climate change",
            "Pollution",
            "Population growth",
            "All of the above"
        ],
        correctAnswer: "Climate change",
    },
    {
        number: 13,
        question: "What percentage of the global greenhouse gas emissions does the transportation sector emit?",
        answers: ["20%",
            "14%",
            "50%",
            "70%"
        ],
        correctAnswer: "14%",
    },
    {
        number: 14,
        question: "When you hear its unusually hot today, is that about the climate or weather?",
        answers: ["Climate",
            "weather",
            "None",
            "All of the above"
        ],
        correctAnswer: "weather",
    },
    {
        number: 15,
        question: " When was the last time in Earth's history that CO2 was as high as it is now?",
        answers: ["This is the highest it's ever been",
            "3 million years ago",
            "None",
            "All of the above"
        ],
        correctAnswer: "3 million years ago",
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

function questionCounter(index) {
    const questionCounting = document.getElementById("total-questions");
    questionCounting.innerHTML = `<span> ${index} of ${questions.length} </span>`;

}

allQuestion(0);
let currentQuestion = 0;
let totalScoreAchieved = 0;
let currentNumber = 1;


// select answer option if the answer is correct do x and if the answer is incorrect do y.

function selectedAnswers(correctAnswer) {
    let userAnswer = correctAnswer.innerText;
    let rightAnswer = questions[currentQuestion].correctAnswer;
    let allAnswers = answerContent.children.length;
    if (userAnswer === rightAnswer) {
        totalScoreAchieved += 1;
        // if the user answer is correct green color background  will pop up inside the answer box.
        correctAnswer.classList.add("green");
        audioRight.play();
        nextQuestion.classList.remove("unable-button");
        incrementScore();
    } else {
        // if the user answer is incorrect red color background  will pop up inside the answer box.
        correctAnswer.classList.add("red");
        setTimeout(() => {
            audioWrong.play();
        }, 500);
        nextQuestion.classList.remove("unable-button");
        incrementWrongAnswer();

        //if the user answer is incorrect ! correct answer will  automatically pop up with green highlight.

        /*for (let x = 0; x < allAnswers; x++) {
            if (answerContent.children[x].innerText === rightAnswer) {
                answerContent.children[x].classList.add("green");
            }

        }*/

    }

    // user can click just one answer ! once user clicked,the rest of the answers will unable to click.
    for (let x = 0; x < allAnswers; x++) {
        answerContent.children[x].classList.add("unable-answer");
    }

}

// getting  score of correct answer and increment in to correct Answers element.

function incrementScore() {

    var currentScore = parseInt(document.getElementById("correct-answer").innerText);
    document.getElementById("correct-answer").innerText = ++currentScore;
}

// Getting score of incorrect answer and increment in to incorrect Answers element.

function incrementWrongAnswer() {

    var currentScore = parseInt(document.getElementById("incorrect-answer").innerText);
    document.getElementById("incorrect-answer").innerText = ++currentScore;
}

// next button function to click to go to next question.

const nextButton = document.getElementById("next-question");

nextButton.addEventListener("click", function () {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        currentNumber++;
        allQuestion(currentQuestion);
        questionCounter(currentNumber);
        nextQuestion.classList.add("unable-button");
    } else {
        console.log("successfully loaded");
        quizFinalResult();
        nextQuestion.classList.add("unable-button");
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
    if (totalScoreAchieved > 12) {
        finalScore.innerHTML =
            `<span>` + `Excellent You are rock ! <br> Please share your knowledge with <br> others to save our planet <br> <span>` + totalScoreAchieved + `</span> out of <span>` + questions.length + `</span> !</span>`;
    } else if (totalScoreAchieved >= 8) {
        finalScore.innerHTML =
            `<span>` + `Congratulation you got! <br><span>` + totalScoreAchieved + `</span> out of <span>` + questions.length + `</span> <br> Good Luck & Try Again  !</span>`;
    } else if (totalScoreAchieved < 7) {
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
    restartQuiz.setAttribute("class", "quit-class");
    restartQuiz.classList.remove("main-container");
    questionBox.setAttribute("class", "question-containers");
    currentQuestion = 0;
    allQuestion(currentQuestion);
    currentNumber = 0;
    questionCounter(currentNumber);
    nextQuestion.classList.add("unable-button");
    document.getElementById("correct-answer").innerText = totalScoreAchieved = 0;
    document.getElementById("incorrect-answer").innerText = totalScoreAchieved = 0;
})