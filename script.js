var questionsContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var quizStart = document.getElementById("StartQuiz");
var timer = document.getElementById("timecounter");
var listOfQuestions = document.getElementById("questionList");
var questionHeader = document.getElementById("question");
var clearButton = document.getElementById("ClearHighscores");

var questions = [
  {
    title: "Arrays are accesed using ______________ notation:",
    choices: ["Bracket", "Curly Brackets", "Parentheses", "Array"],
    answer: "Bracket"
  },
  {
    title: "There are/is _________ numeric type(s) in JavaScript.",
    choices: ["One", "Two", "Three", "Infinite"],
    answer: "One"
  },
  {
    title: "Which function determines whether a number is an illegal value?",
    choices: ["init", "numberSelect", "isNaN", "valueSelect"],
    answer: "isNaN"
  },
  {
    title: "What symbol means to increment?",
    choices: ["+", "===", "**", "++"],
    answer: "++"
  },
  {
    title: "Which type of quotation marks do we use in Strings?",
    choices: [
      "double quotes",
      "single quotes",
      "both work, just be consistent",
      "neither"
    ],
    answer: "parentheses"
  },
  {
    title: "What cereal was Spencer eating in class last Saturday?",
    choices: [
      "Lucky Charms",
      "Cinnamon Toast Crunch",
      "Cheerios",
      "Count Chocula"
    ],
    answer: "Cheerios"
  }
];

var totalSeconds = 0;
var secondsElapsed = 0;
var score = 0;

var questionChoices = questions[0].choices;
var titleChoices = questions[0].title;

setQuestionHeading();

function setQuestionHeading() {
  for (var i = 0; i < titleChoices.length; ++i) {}
}

//answerquestion heading and display buttons
setQuestion();

function setQuestion() {
  questionHeader.textContent = titleChoices;
  questionChoices.innerHTML = "";

  for (var i = 0; i < questionChoices.length; ++i) {
    var questionChoices1 = questionChoices[i];

    var li = document.createElement("li");
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.classList.add("btn-lg");
    button.classList.add("btn-primary");
    button.classList.add("btn-grid");

    button.textContent = questionChoices1;

    li.appendChild(button);
    listOfQuestions.appendChild(li);
  }
  console.log(questionChoices);
}
// transitioning to next question
function setNextQuestion() {
  function shuffledQuestions(questions) {
    for (var i = questions.length - 1; i > 0; i--) {
      var rand = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[rand]] = [questions[rand], questions[i]];
    }
  }
}

//questionElement.innerText = question.question;

//store correct answers
function storeAnswers() {
  userAnswer = (
    question.answer[i].querySelector("input[name=question" + i + "]:checked") ||
    {}
  ).value;
  if (userAnswer === questions[i].answer) {
    numCorrect++;
  } else userAnswer === questions[i];
  {
  }
}

//timer countdown
function renderTime() {
  minutesDisplay.textContent = getFormattedMinutes();
  secondsDisplay.textContent = getFormattedSeconds();
}

function startTime() {
  timerId = setInterval(clockTick, 1000);
}

function minusTenSeconds() {
  if (timer >= 10) {
    timer -= 10;
    timerEl.innerHTML = time;
  }
}
function reset() {
  count = 0;
  timerEl.innerHTML = count;
}

//Save High Scores
function storeHighScores() {
  text.content = highScores;
  localStorage.getItem("HighScores");
}

timerEl.onclick = decrement;
clearButton.onclick = reset;
console.log(reset);
