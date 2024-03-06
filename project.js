const questions = [
  {
    question: "When planning a vacation, what's your ideal destination?",
    answers: [
      { option: "A remote beach with crystal-clear waters.", value: "A" },
      { option: "A bustling city full of culture and nightlife.", value: "B" },
      {
        option: "A rugged mountain range with challenging trails.",
        value: "C",
      },
      { option: "A dense jungle teeming with exotic wildlife.", value: "D" },
    ],
  },
  {
    question: "How do you prefer to spend your weekends?",
    answers: [
      { option: "Relaxing at home with a good book or movie.", value: "A" },
      {
        option: "Exploring new restaurants and cafes with friends.",
        value: "B",
      },
      {
        option: "Hiking, camping, or participating in outdoor sports.",
        value: "C",
      },
      {
        option: "Volunteering for environmental or community projects.",
        value: "D",
      },
    ],
  },
  {
    question: "What's your attitude towards trying new things?",
    answers: [
      { option: "I prefer sticking to what I know and enjoy.", value: "A" },
      {
        option:
          "I'm open to trying new experiences, but I like to research first.",
        value: "B",
      },
      {
        option:
          "I'm always up for an adventure and love stepping out of my comfort zone.",
        value: "C",
      },
      {
        option: "I actively seek out new challenges and thrive on uncertainty.",
        value: "D",
      },
    ],
  },
  {
    question: "What type of activity excites you the most?",
    answers: [
      { option: "Relaxing activities like yoga or meditation.", value: "A" },
      {
        option: "Exploring museums, galleries, or historical sites.",
        value: "B",
      },
      {
        option:
          "Thrilling activities like skydiving, bungee jumping, or rock climbing.",
        value: "C",
      },
      {
        option:
          "Immersive experiences like wildlife safaris or cultural exchanges.",
        value: "D",
      },
    ],
  },
  {
    question: "How do you handle unexpected situations?",
    answers: [
      { option: "I prefer to avoid them altogether.", value: "A" },
      {
        option: "I adapt quickly and try to make the best of the situation.",
        value: "B",
      },
      {
        option:
          "I thrive on the adrenaline rush and see them as opportunities for growth.",
        value: "C",
      },
      {
        option: "I approach them with curiosity and embrace the challenge.",
        value: "D",
      },
    ],
  },
  {
    question:
      "What's your preferred mode of transportation for exploring a new destination?",
    answers: [
      { option: "Renting a car or taking a taxi for convenience.", value: "A" },
      {
        option: "Public transportation like buses, trains, or subways.",
        value: "B",
      },
      {
        option: "Hiking or biking to truly immerse myself in the surroundings.",
        value: "C",
      },
      {
        option:
          "Booking guided tours or excursions to learn from local experts.",
        value: "D",
      },
    ],
  },
  {
    question: "Which quote resonates with you the most?",
    answers: [
      { option: '"Happiness is a quiet walk along the beach."', value: "A" },
      {
        option:
          '"The world is a book, and those who do not travel read only one page." - Saint Augustine',
        value: "B",
      },
      {
        option:
          '"Life begins at the end of your comfort zone." - Neale Donald Walsch',
        value: "C",
      },
      { option: '"Adventure is worthwhile." - Aesop', value: "D" },
    ],
  },
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
let currentQuestion = 0;
let userAnswers = [];

function loadQuestion() {
  const questionElement = document.createElement("div");
  questionElement.classList.add("question-container");
  questionElement.innerHTML = `<p>${questions[currentQuestion].question}</p>`;
  quizContainer.appendChild(questionElement);

  const answersElement = document.createElement("div");
  answersElement.classList.add("answers-container");
  questions[currentQuestion].answers.forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.textContent = answer.option;
    answerButton.addEventListener("click", () => {
      userAnswers.push(answer.value);
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        quizContainer.innerHTML = "";
        loadQuestion();
      } else {
        showResult();
      }
    });
    answersElement.appendChild(answerButton);
  });
  quizContainer.appendChild(answersElement);
}
function showResult() {
  const result = userAnswers.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const max = Object.keys(result).reduce((a, b) =>
    result[a] > result[b] ? a : b
  );
  let personalityType = "";
  let personalityExplanation = "";

  switch (max) {
    case "A":
      personalityType = "Zen Explorer";
      personalityExplanation =
        "As a Zen Explorer, you appreciate calmness, tranquility, and inner peace in your adventures. You seek out serene environments where you can unwind, reflect, and connect with nature on a deeper level.";
      break;
    case "B":
      personalityType = "Cultural Connoisseur";
      personalityExplanation =
        "As a Cultural Connoisseur, you have a passion for exploring new cultures, cuisines, and historical landmarks. You enjoy immersing yourself in diverse experiences and learning from the rich tapestry of human heritage.";
      break;
    case "C":
      personalityType = "Adrenaline Junkie";
      personalityExplanation =
        "As an Adrenaline Junkie, you thrive on excitement and seek out thrilling experiences that push your limits. Whether it's skydiving, bungee jumping, or rock climbing, you love the rush of adrenaline that comes with taking risks and facing challenges.";
      break;
    case "D":
      personalityType = "Nature Enthusiast";
      personalityExplanation =
        "As a Nature Enthusiast, you're drawn to the wonders of the natural world, from dense forests to vast savannas. You find fulfillment in immersive outdoor adventures and cherish the beauty and simplicity of the great outdoors.";
      break;
  }

  // Display the result along with the explanation
  resultContainer.innerHTML = `
    <p>Your adventure personality is: <strong>${personalityType}</strong></p>
    <p>${personalityExplanation}</p>
  `;
}

loadQuestion();
