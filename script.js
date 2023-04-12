const startButton = document.getElementById("start-btn");
const questionContainerElemenet = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElemenet.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
    clearStatusClass(document.body)
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText='Restart Quiz'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "Which is the capital of Romania?",
    answers: [
      { text: "Budapest", correct: false },
      { text: "Bucharest", correct: true },
      { text: "Sibiu", correct: false },
      { text: "Transilvania", correct: false },
    ],
  },
  {
    question: "What are the colours of the flag of Romania?",
    answers: [
      { text: "Blue, yellow and red", correct: true },
      { text: "Red and white", correct: false },
      { text: "Red and green", correct: false },
      { text: "Red, blue and white", correct: false },
    ],
  },
  {
    question: "Which mountains runs through the center of Romania?",
    answers: [
      { text: "Balkan Mountains", correct: false },
      { text: "Caucasus Mountains", correct: false },
      { text: "Carpathian Mountains", correct: true },
      { text: "Scandinavian Mountains", correct: false },
    ],
  },
  {
    question: "What is the Romanian currency?",
    answers: [
      { text: "BTC", correct: false },
      { text: "Leu", correct: true },
      { text: "EUR", correct: false },
      { text: "USD", correct: false },
    ],
  },
  {
    question: "What is the primary language spoken in Romania?",
    answers: [
      { text: "English", correct: false },
      { text: "Russian", correct: false },
      { text: "French", correct: false },
      { text: "Romanian", correct: true },
    ],
  },
  {
    question: "Is Romania part of NATO?",
    answers: [
      { text: "No", correct: false },
      { text: "Yes", correct: true },
    ],
  },
  {
    question: "The estimated current population of Romania:",
    answers: [
      { text: "10-12 million", correct: false },
      { text: "5-7 million", correct: false },
      { text: "30-32 million", correct: false },
      { text: "18-20 million", correct: true },
    ],
  },
  {
    question: "Romania is member state of the European Union.",
    answers: [
      { text: "False", correct: false },
      { text: "True", correct: true },
    ],
  },
  {
    question:
      "Romania has no state religion, but it is a very religious country. What is the main religion in Romania?",
    answers: [
      { text: "Buddhism", correct: false },
      { text: "Islam", correct: false },
      { text: "Hinduism", correct: false },
      { text: "Christianity", correct: true },
    ],
  },
  {
    question: "The famous Vlad the Impaler, ruler of Wallachia, is a vampire Romanian?",
    answers: [
      { text: "Yes, he is the most famous vampire and everything in the movies is true", correct: false },
      {
        text: "The legendary vampire was created by author Bram Stoker for his 1897 novel of the same name",
        correct: true,
      },
    ],
  },
];
