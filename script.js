const quizContainer = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
  },
  {
    question: "What is the capital of Pakistan?",
    choices: ["Karachi", "Lahore", "Islamabad", "KPK"],
    correctAnswer: 2,
  },
  {
    question: "What is the capital of Ukraine?",
    choices: ["Kiev", "Mykolaiv", "Lviv", "Odessa"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Germany?",
    choices: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 1,
  },
  {
    question: "What is the capital of Italy?",
    choices: ["London", "Berlin", "Paris", "Rome"],
    correctAnswer: 3,
  },
];

function loadQuestion() {
  resetQuiz();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  for (let i = 0; i < choicesElement.children.length; i++) {
    choicesElement.children[i].children[1].textContent =
      currentQuestion.choices[i];
  }
}

function checkAnswer() {
  const selectedChoice = document.querySelector(
    'input[name="choice"]:checked'
  ).value;
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedChoice === currentQuestion.correctAnswer.toString()) {
    score++;
    resultElement.textContent = "Correct!";
  } else {
    resultElement.textContent = "Incorrect!";
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    //   Quiz ends
    quizContainer.innerHTML = `<h2>You scored ${score} out of ${questions.length}!</h2>
     <h3>Thankyou for playing the Quiz Game</h3>`;
  }
}

function resetQuiz() {
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach((radio) => (radio.checked = false));
}

// initial call
loadQuestion();
submitButton.addEventListener("click", checkAnswer);
