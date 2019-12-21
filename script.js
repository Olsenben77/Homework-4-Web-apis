var questionsContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var quizStart = document.getElementById("StartQuiz");
var timer = document.getElementById("timecounter");

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

//display buttons
setQuestion();

function setQuestion() {
  questionChoices.innerHTML = "1";

  for (var i = 0; i < questionChoices.length; ++i) {
    var questionChoices1 = questionChoices[i];

    var li = document.createElement("li");
    li.textContent = questionChoices1;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.classList.add("btn-lg");
    button.classList.add("btn-grid");

    button.textContent = questionChoices;

    li.appendChild(button);
    questionList.appendChild(li);
  }
  console.log(questionChoices1);
}
function shuffledQuestions(questions) {
  for (var i = questions.length - 1; i > 0; i--) {
    var rand = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[rand]] = [questions[rand], questions[i]];
    console.log(shuffledQuestions);
  }
}

function renderTime() {
  minutesDisplay.textContent = getFormattedMinutes();
  secondsDisplay.textContent = getFormattedSeconds();
}
function showQuestion(question) {
  //questionElement.innerText = question.question;
}
function selectAnswer() {}

function storeHighScores() {}

function timer() {
  setTime();

  interval = setInterval(function() {
    ++secondsElapsed;
    renderTime();
  }, 1000);
}
