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