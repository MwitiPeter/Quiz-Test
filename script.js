// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "What is the boiling point of water?",
    answers: [
      { text: "100°C", correct: true },
      { text: "90°C", correct: false },
      { text: "80°C", correct: false },
      { text: "120°C", correct: false },
    ],
  },
  {
    question: "What does DNA stand for?",
    answers: [
      { text: "Deoxyribonucleic Acid", correct: true },
      { text: "Dynamic Network Algorithm", correct: false },
      { text: "Digital Network Array", correct: false },
      { text: "Data Network Architecture", correct: false },
    ],
  },
  {
    question: "Which continent is the Sahara Desert located on?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "Australia", correct: false },
      { text: "North America", correct: false },
    ],
  },
  {
    question: "What is H2O commonly known as?",
    answers: [
      { text: "Salt", correct: false },
      { text: "Oxygen", correct: false },
      { text: "Water", correct: true },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Which country is famous for the Great Wall?",
    answers: [
      { text: "India", correct: false },
      { text: "China", correct: true },
      { text: "Japan", correct: false },
      { text: "Korea", correct: false },
    ],
  },
  {
    question: "Who was the first President of the United States?",
    answers: [
      { text: "Abraham Lincoln", correct: false },
      { text: "George Washington", correct: true },
      { text: "Thomas Jefferson", correct: false },
      { text: "John Adams", correct: false },
    ],
  },
  {
    question: "How many legs does a spider have?",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "10", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Helium", correct: false },
    ],
  },
  {
    question: "How many continents are there?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Nile", correct: true },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Michelangelo", correct: false },
    ],
  },
  {
    question: "What do bees make?",
    answers: [
      { text: "Butter", correct: false },
      { text: "Sugar", correct: false },
      { text: "Honey", correct: true },
      { text: "Syrup", correct: false },
    ],
  },
  {
    question: "Which metal is liquid at room temperature?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Iron", correct: false },
      { text: "Aluminum", correct: false },
      { text: "Copper", correct: false },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Steel", correct: false },
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Granite", correct: false },
    ],
  },
  {
    question: "What is the square root of 64?",
    answers: [
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
    ],
  },
  {
    question: "Which instrument has keys, pedals, and strings?",
    answers: [
      { text: "Guitar", correct: false },
      { text: "Drums", correct: false },
      { text: "Piano", correct: true },
      { text: "Violin", correct: false },
    ],
  },
  {
    question: "How many planets are in our Solar System?",
    answers: [
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "Which language is primarily spoken in Brazil?",
    answers: [
      { text: "Spanish", correct: false },
      { text: "Portuguese", correct: true },
      { text: "English", correct: false },
      { text: "French", correct: false },
    ],
  },
  {
    question: "What do you call animals that eat only plants?",
    answers: [
      { text: "Carnivores", correct: false },
      { text: "Omnivores", correct: false },
      { text: "Herbivores", correct: true },
      { text: "Insectivores", correct: false },
    ],
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: false },
      { text: "Earth", correct: false },
      { text: "Mercury", correct: true },
    ],
  },
  {
    question: "What is the main ingredient in guacamole?",
    answers: [
      { text: "Tomato", correct: false },
      { text: "Lettuce", correct: false },
      { text: "Avocado", correct: true },
      { text: "Cucumber", correct: false },
    ],
  },
  {
    question: "What color do you get when you mix red and white?",
    answers: [
      { text: "Pink", correct: true },
      { text: "Purple", correct: false },
      { text: "Brown", correct: false },
      { text: "Orange", correct: false },
    ],
  },
  {
    question: "Which part of the plant conducts photosynthesis?",
    answers: [
      { text: "Root", correct: false },
      { text: "Stem", correct: false },
      { text: "Leaf", correct: true },
      { text: "Flower", correct: false },
    ],
  },
  {
    question: "How many hours are there in two days?",
    answers: [
      { text: "24", correct: false },
      { text: "36", correct: false },
      { text: "48", correct: true },
      { text: "72", correct: false },
    ],
  },
];

//Quiz state vars
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// exent listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = score;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  // reset state
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  // optimization click
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if quiz is over or more questions
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startQuiz();
}
