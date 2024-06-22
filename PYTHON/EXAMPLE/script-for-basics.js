
const questions = [
    {
        question: "What is Python?",
        options: [
            "A high-level programming language",
            "A type of snake",
            "A software application",
            "An operating system"
        ],
        answer: "A high-level programming language",
        explanation: "Python is a high-level programming language known for its simplicity and readability."
    },
    {
        question: "What is the output of 'print(5 + 3)' in Python?",
        options: ["5", "3", "8", "53"],
        answer: "8",
        explanation: "'print(5 + 3)' evaluates the expression '5 + 3' and prints the result, which is 8."
    },
    {
        question: "Which symbol is used for comments in Python?",
        options: ["//", "#", "/* */", "%%"],
        answer: "#",
        explanation: "In Python, the hash symbol (#) is used for single-line comments."
    },
    {
        question: "What is the keyword used to define a function in Python?",
        options: ["def", "function", "define", "func"],
        answer: "def",
        explanation: "The 'def' keyword is used to define functions in Python."
    },
    {
        question: "Which of the following data types is mutable in Python?",
        options: ["int", "float", "tuple", "list"],
        answer: "list",
        explanation: "Lists are mutable in Python, meaning their elements can be changed after creation."
    },
    {
        question: "What is the result of '5 == 5' in Python?",
        options: ["True", "False"],
        answer: "True",
        explanation: "'5 == 5' is a comparison that evaluates to True because 5 is equal to 5."
    },
    {
        question: "What is the output of 'print('Hello, world!')' in Python?",
        options: ["Hello, world!", "'Hello, world!'", "Hello", "World"],
        answer: "Hello, world!",
        explanation: "'print('Hello, world!')' prints the string 'Hello, world!' to the console."
    },
    {
        question: "Which loop is used to iterate over a sequence of elements in Python?",
        options: ["for loop", "while loop", "do-while loop", "if statement"],
        answer: "for loop",
        explanation: "The 'for loop' is used to iterate over a sequence of elements in Python."
    },
    {
        question: "What is the purpose of 'len()' function in Python?",
        options: ["To calculate length of a string", "To calculate length of a list", "Both A and B", "None of the above"],
        answer: "Both A and B",
        explanation: "'len()' function returns the length of a string, list, tuple, etc., depending on the argument passed."
    },
    {
        question: "Which symbol is used for string concatenation in Python?",
        options: ["+", "&", ",", "."],
        answer: "+",
        explanation: "The plus symbol (+) is used for string concatenation in Python."
    },
    {
        question: "What is the purpose of the 'return' statement in a function?",
        options: ["To print output", "To declare variables", "To terminate the program", "To return a value"],
        answer: "To return a value",
        explanation: "The 'return' statement is used to return a value from a function in Python."
    },
    {
        question: "What is the output of '5 ** 2' in Python?",
        options: ["25", "7", "10", "2.5"],
        answer: "25",
        explanation: "'5 ** 2' calculates the power of 5 to the exponent 2, resulting in 25."
    },
    {
        question: "Which keyword is used to check if an element is present in a sequence in Python?",
        options: ["is", "in", "not", "and"],
        answer: "in",
        explanation: "The 'in' keyword is used to check if an element is present in a sequence in Python."
    },
    {
        question: "What is the purpose of the 'if' statement in Python?",
        options: ["To define a function", "To declare variables", "To execute a block of code conditionally", "To perform arithmetic operations"],
        answer: "To execute a block of code conditionally",
        explanation: "The 'if' statement is used to execute a block of code conditionally based on a specified condition."
    },
    {
        question: "Which operator is used to perform integer division in Python?",
        options: ["//", "/", "*", "%"],
        answer: "//",
        explanation        : "The double forward slash (//) is used for integer division in Python."
    },
    {
        question: "What is the output of '3 * 'hello' ' in Python?",
        options: ["'hellohellohello'", "'hello hello hello'", "Error", "3hello"],
        answer: "'hellohellohello'",
        explanation: "The expression '3 * 'hello'' repeats the string 'hello' three times, resulting in 'hellohellohello'."
    },
    {
        question: "Which function is used to convert a string to uppercase in Python?",
        options: ["toUpper()", "toUpperCase()", "upper()", "uppercase()"],
        answer: "upper()",
        explanation: "The 'upper()' function is used to convert a string to uppercase in Python."
    },
    {
        question: "What is the purpose of the 'break' statement in a loop?",
        options: ["To continue to the next iteration of the loop", "To terminate the loop", "To print output", "To skip the current iteration and proceed to the next"],
        answer: "To terminate the loop",
        explanation: "The 'break' statement is used to exit the loop immediately and continue with the code following the loop."
    },
    {
        question: "Which keyword is used to exit from a loop prematurely in Python?",
        options: ["exit", "break", "continue", "return"],
        answer: "break",
        explanation: "The 'break' keyword is used to exit from a loop prematurely in Python."
    },
    {
        question: "What is the purpose of the 'continue' statement in a loop?",
        options: ["To exit the loop", "To skip the current iteration and proceed to the next", "To print output", "To terminate the loop"],
        answer: "To skip the current iteration and proceed to the next",
        explanation: "The 'continue' statement is used to skip the current iteration of a loop and continue with the next iteration."
    },
    {
        question: "Which of the following is NOT a valid data type in Python?",
        options: ["int", "float", "double", "bool"],
        answer: "double",
        explanation: "In Python, there is no 'double' data type. You can use 'float' for double-precision floating-point numbers."
    },
    {
        question: "What is the purpose of the 'else' statement in Python?",
        options: ["To execute a block of code conditionally", "To declare variables", "To perform arithmetic operations", "To define a function"],
        answer: "To execute a block of code conditionally",
        explanation: "The 'else' statement is used to execute a block of code when the condition specified in the 'if' statement evaluates to false."
    },
    {
        question: "Which method is used to remove the last element from a list in Python?",
        options: ["remove()", "pop()", "delete()", "del()"],
        answer: "pop()",
        explanation: "The 'pop()' method removes and returns the last element from a list in Python."
    },
    {
        question: "What is the output of '5 / 2' in Python?",
        options: ["2.5", "2", "2.0", "2.25"],
        answer: "2.5",
        explanation: "In Python, division (/) of two integers results in a floating-point number, so '5 / 2' equals 2.5."
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
