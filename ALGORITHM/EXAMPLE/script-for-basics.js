
const questions = [
    // First set of questions
    {
      question: "What is the result of 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "2 + 2 equals 4."
    },
    {
      question: "What is the output of 'Hello' + 'World'?",
      options: ["Hello", "World", "HelloWorld", "Syntax Error"],
      answer: "HelloWorld",
      explanation: "String concatenation results in 'HelloWorld'."
    },
    {
      question: "What is the value of 5 * 3?",
      options: ["8", "12", "15", "20"],
      answer: "15",
      explanation: "5 times 3 equals 15."
    },
    {
      question: "What is the output of 10 / 2?",
      options: ["3", "4", "5", "Syntax Error"],
      answer: "5",
      explanation: "10 divided by 2 equals 5."
    },
    {
      question: "What is the value of 4 % 3?",
      options: ["0", "1", "2", "3"],
      answer: "1",
      explanation: "The remainder of 4 divided by 3 is 1."
    },
    // Second set of questions
    {
      question: "What is the result of 3 * (2 + 5)?",
      options: ["12", "18", "21", "27"],
      answer: "21",
      explanation: "3 times the sum of 2 and 5 equals 21."
    },
    {
      question: "What is the value of 7 - 4?",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "7 minus 4 equals 3."
    },
    {
      question: "What is the output of 15 / 4?",
      options: ["3", "3.75", "4", "4.5"],
      answer: "3",
      explanation: "Integer division truncates the decimal part, so 15 divided by 4 equals 3."
    },
    {
      question: "What is the result of 2 ** 3?",
      options: ["6", "8", "9", "16"],
      answer: "8",
      explanation: "2 raised to the power of 3 equals 8."
    },
    {
      question: "What is the value of 10 - (4 * 2)?",
      options: ["2", "4", "6", "8"],
      answer: "2",
      explanation: "10 minus the product of 4 and 2 equals 2."
    },
    {
        question: "What is the output of 7 + 8?",
        options: ["13", "14", "15", "16"],
        answer: "15",
        explanation: "7 plus 8 equals 15."
      },
      {
        question: "What is the result of 6 * 9?",
        options: ["42", "48", "54", "60"],
        answer: "54",
        explanation: "6 times 9 equals 54."
      },
      {
        question: "What is the value of 25 / 5?",
        options: ["3", "4", "5", "6"],
        answer: "5",
        explanation: "25 divided by 5 equals 5."
      },
      {
        question: "What is the output of 12 % 7?",
        options: ["3", "4", "5", "6"],
        answer: "5",
        explanation: "The remainder of 12 divided by 7 is 5."
      },
      {
        question: "What is the result of 2 + 2 * 3?",
        options: ["8", "10", "12", "14"],
        answer: "8",
        explanation: "2 plus 2 times 3 equals 8."
      },
      {
        question: "What is the value of 16 / 4?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        explanation: "16 divided by 4 equals 4."
      },
      {
        question: "What is the output of 3 ** 4?",
        options: ["27", "64", "81", "144"],
        answer: "81",
        explanation: "3 raised to the power of 4 equals 81."
      },
      {
        question: "What is the result of 5 * (9 - 4)?",
        options: ["25", "30", "35", "40"],
        answer: "25",
        explanation: "5 times the difference between 9 and 4 equals 25."
      },
      {
        question: "What is the value of 20 / (4 + 1)?",
        options: ["2", "3", "4", "5"],
        answer: "4",
        explanation: "20 divided by the sum of 4 and 1 equals 4."
      },
      {
        question: "What is the output of 17 % 6?",
        options: ["1", "2", "3", "4"],
        answer: "5",
        explanation: "The remainder of 17 divided by 6 is 5."
      },
      {
        question: "What is the result of 3 + 4?",
        options: ["5", "6", "7", "8"],
        answer: "7",
        explanation: "3 plus 4 equals 7."
      },
      {
        question: "What is the value of 6 * 7?",
        options: ["36", "42", "48", "54"],
        answer: "42",
        explanation: "6 times 7 equals 42."
      },
      {
        question: "What is the output of 10 / 2?",
        options: ["3", "4", "5", "6"],
        answer: "5",
        explanation: "10 divided by 2 equals 5."
      },
      {
        question: "What is the result of 15 % 4?",
        options: ["1", "2", "3", "4"],
        answer: "3",
        explanation: "The remainder of 15 divided by 4 is 3."
      },
      {
        question: "What is the value of 2 + 3 * 4?",
        options: ["10", "14", "18", "20"],
        answer: "14",
        explanation: "2 plus 3 times 4 equals 14."
      },
      {
        question: "What is the output of 24 / 6?",
        options: ["2", "3", "4", "5"],
        answer: "4",
        explanation: "24 divided by 6 equals 4."
      },
      {
        question: "What is the result of 2 ** 5?",
        options: ["8", "16", "32", "64"],
        answer: "32",
        explanation: "2 raised to the power of 5 equals 32."
      },
      {
        question: "What is the value of 9 - (5 * 2)?",
        options: ["1", "2", "3", "4"],
        answer: "9",
        explanation: "9 minus the product of 5 and 2 equals 9."
      },
      {
        question: "What is the output of 30 / (6 + 2)?",
        options: ["3", "4", "5", "6"],
        answer: "3",
        explanation: "30 divided by the sum of 6 and 2 equals 3."
      },
      {
        question: "What is the result of 19 % 5?",
        options: ["1", "2", "3", "4"],
        answer: "4",
        explanation: "The remainder of 19 divided by 5 is 4."
      },
      {
        question: "What is the value of 2 * (7 + 3)?",
        options: ["16", "18", "20", "22"],
        answer: "20",
        explanation: "2 times the sum of 7 and 3 equals 20."
      },
      {
        question: "What is the output of 12 / 3?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        explanation: "12 divided by 3 equals 4."
      },
      {
        question: "What is the result of 4 ** 3?",
        options: ["8", "16", "32", "64"],
        answer: "64",
        explanation: "4 raised to the power of 3 equals 64."
      },
      {
        question: "What is the value of 15 - (6 * 2)?",
        options: ["3", "6", "9", "12"],
        answer: "3",
        explanation: "15 minus the product of 6 and 2 equals 3."
      },
      {
        question: "What is the output of 27 / (9 - 3)?",
        options: ["2", "3", "4", "5"],
        answer: "4",
        explanation: "27 divided by the difference between 9 and 3 equals 4."
      },
      {
        question: "What is the result of 8 % 3?",
        options: ["1", "2", "3", "4"],
        answer: "2",
        explanation: "The remainder of 8 divided by 3 is 2."
      },
      {
        question: "What is the value of 3 * (5 + 4)?",
        options: ["12", "15", "18", "21"],
        answer: "27",
        explanation: "3 times the sum of 5 and 4 equals 27."
      },
      {
        question: "What is the output of 20 / 5?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        explanation: "20 divided by 5 equals 4."
      },
      {
        question: "What is the result of 5 ** 4?",
        options: ["20", "25", "30", "40"],
        answer: "625",
        explanation: "5 raised to the power of 4 equals 625."
      },
      {
        question: "What is the value of 18 - (2 * 7)?",
        options: ["3", "6", "9", "12"],
        answer: "4",
        explanation: "18 minus the product of 2 and 7 equals 4."
      },
      {
        question: "What is the result of 9 + 6?",
        options: ["13", "14", "15", "16"],
        answer: "15",
        explanation: "9 plus 6 equals 15."
      },
      {
        question: "What is the value of 8 * 7?",
        options: ["48", "54", "56", "64"],
        answer: "56",
        explanation: "8 times 7 equals 56."
      },
      {
        question: "What is the output of 18 / 3?",
        options: ["4", "5", "6", "7"],
        answer: "6",
        explanation: "18 divided by 3 equals 6."
      },
      {
        question: "What is the result of 24 % 7?",
        options: ["3", "4", "5", "6"],
        answer: "3",
        explanation: "The remainder of 24 divided by 7 is 3."
      },
      {
        question: "What is the value of 3 + 4 * 5?",
        options: ["15", "19", "23", "27"],
        answer: "23",
        explanation: "3 plus 4 times 5 equals 23."
      },
      {
        question: "What is the output of 36 / 6?",
        options: ["4", "5", "6", "7"],
        answer: "6",
        explanation: "36 divided by 6 equals 6."
      },
      {
        question: "What is the result of 3 ** 3?",
        options: ["9", "18", "27", "36"],
        answer: "27",
        explanation: "3 raised to the power of 3 equals 27."
      },
      {
        question: "What is the value of 10 - (2 * 3)?",
        options: ["2", "4", "6", "8"],
        answer: "4",
        explanation: "10 minus the product of 2 and 3 equals 4."
      },
      {
        question: "What is the output of 42 / (7 + 1)?",
        options: ["4", "5", "6", "7"],
        answer: "5",
        explanation: "42 divided by the sum of 7 and 1 equals 5."
      },
      {
        question: "What is the result of 29 % 8?",
        options: ["3", "4", "5", "6"],
        answer: "5",
        explanation: "The remainder of 29 divided by 8 is 5."
      }
  ];
  



let score = 0;
let timeLeft = 0;
let timer;
let shuffledQuestions = [];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score-value");
const timerElement = document.getElementById("time-left");
const startBtn = document.getElementById("start-btn");
const leaderboardList = document.getElementById("leaderboard-list");
const usernameInput = document.getElementById("username");
const exitBtn = document.getElementById("exit-btn");
const explanationDiv = document.getElementById("explanation");
const explanationText = document.getElementById("explanation-text");
const nextBtn = document.getElementById("next-btn");

startBtn.addEventListener("click", startQuiz);
exitBtn.addEventListener("click", exitQuiz);
nextBtn.addEventListener("click", loadNextQuestion);

function startQuiz() {
    const username = usernameInput.value.trim();
    if (username === "") {
        alert("Please enter your name!");
        return;
    }
    document.getElementById("user-input").style.display = "none";
    startBtn.style.display = "none";
    exitBtn.style.display = "none";
    explanationDiv.style.display = "none";
    nextBtn.style.display = "none";
    score = 0;
    timeLeft = 60;
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    shuffledQuestions = shuffledQuestions.slice(0, 10);
    loadQuestion();
    updateTimer();
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timerElement.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer);
        endQuiz();
    } else {
        timeLeft--;
    }
}

function loadQuestion() {
    if (shuffledQuestions.length === 0) {
        endQuiz();
        return;
    }
    explanationDiv.style.display = "none"; // Hide explanation
    nextBtn.style.display = "none";
    const question = shuffledQuestions.pop();
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => {
            if (option === question.answer) {
                score++;
                scoreElement.textContent = score;
                button.classList.add("correct");
                showExplanation(question.explanation);
                nextBtn.style.display = "block";
            } else {
                button.classList.add("wrong");
                showExplanation(question.explanation);
                nextBtn.style.display = "block";
            }
            // Disable all options after selecting one
            document.querySelectorAll('.option').forEach(button => button.disabled = true);
        });
        optionsElement.appendChild(button);
    });
}

function showExplanation(explanation) {
    explanationDiv.style.display = "block";
    explanationText.textContent = explanation;
}

function loadNextQuestion() {
    explanationDiv.style.display = "none";
    loadQuestion();
}

function endQuiz() {
    questionElement.textContent = "Quiz Over!";
    optionsElement.innerHTML = "";
    clearInterval(timer);
    document.getElementById("user-input").style.display = "block";
    exitBtn.style.display = "inline-block";
    nextBtn.style.display = "none"; // Hide the Next button
    updateLeaderboard(usernameInput.value.trim(), score);
}

function updateLeaderboard(username, score) {
    let leaderboard = localStorage.getItem("leaderboard");
    leaderboard = leaderboard ? JSON.parse(leaderboard) : [];
    leaderboard.push({ username, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5); // Keep only top 5 scores
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    leaderboardList.innerHTML = "";
    leaderboard.forEach((entry, index) => {
        const li = document.createElement("li");
        li.textContent = `#${index + 1}: ${entry.username} - ${entry.score}`;
        leaderboardList.appendChild(li);
    });
}

  const leftEye = document.querySelector(".eye-left");
  const rightEye = document.querySelector(".eye-right");
  const mouth = document.querySelector(".mouth");

  nextBtn.addEventListener("click", () => {
    // Blink eyes
    setTimeout(() => {
      leftEye.style.transform = "scaleY(0)";
      rightEye.style.transform = "scaleY(0)";
    }, 100);

    setTimeout(() => {
      leftEye.style.transform = "scaleY(1)";
      rightEye.style.transform = "scaleY(1)";
    }, 500);

    // Talk mouth
    mouth.style.transform = "translateY(5px)";
    setTimeout(() => {
      mouth.style.transform = "translateY(0)";
    }, 500);
  });

function exitQuiz() {
    location.reload();
}
