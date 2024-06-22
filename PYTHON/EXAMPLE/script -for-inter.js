const questions = [
    {
        question: "What is the purpose of list comprehension in Python?",
        options: ["To create new lists based on existing lists", "To perform mathematical computations", "To define functions", "To convert lists to tuples"],
        answer: "To create new lists based on existing lists",
        explanation: "List comprehension provides a concise way to create new lists by iterating over existing lists."
    },
    {
        question: "What is a lambda function in Python?",
        options: ["A function defined using the 'def' keyword", "A function that takes multiple arguments", "An anonymous function", "A function that returns a tuple"],
        answer: "An anonymous function",
        explanation: "A lambda function in Python is an anonymous function defined using the 'lambda' keyword."
    },
    {
        question: "What does the 'map()' function do in Python?",
        options: ["Applies a function to every item in an iterable", "Creates a list of tuples", "Performs matrix multiplication", "Filters elements from a list"],
        answer: "Applies a function to every item in an iterable",
        explanation: "The 'map()' function in Python applies a given function to every item of an iterable (list, tuple, etc.) and returns a map object."
    },
    {
        question: "What is the purpose of the 'filter()' function in Python?",
        options: ["Applies a function to every item in an iterable", "Creates a list of tuples", "Filters elements from a list based on a condition", "Performs matrix multiplication"],
        answer: "Filters elements from a list based on a condition",
        explanation: "The 'filter()' function in Python filters elements from a list based on a specified condition and returns an iterator."
    },
    {
        question: "What is the difference between 'append()' and 'extend()' methods of a list in Python?",
        options: ["'append()' adds a single element, while 'extend()' adds multiple elements", "'extend()' adds a single element, while 'append()' adds multiple elements", "'append()' and 'extend()' perform the same operation", "There is no difference between them"],
        answer: "'append()' adds a single element, while 'extend()' adds multiple elements",
        explanation: "'append()' method adds a single element to the end of a list, while 'extend()' method adds elements of an iterable (e.g., another list) to the end of the list."
    },
    {
        question: "What is the purpose of the 'zip()' function in Python?",
        options: ["Combines two or more lists into a single list of tuples", "Unzips a list of tuples into separate lists", "Creates a list of tuples with repeated elements", "Performs matrix multiplication"],
        answer: "Combines two or more lists into a single list of tuples",
        explanation: "The 'zip()' function in Python combines two or more lists into a single list of tuples where each tuple contains elements from the corresponding positions of the input lists."
    },
    {
        question: "What is the difference between 'tuple' and 'list' data types in Python?",
        options: ["Tuples are immutable, lists are mutable", "Lists are immutable, tuples are mutable", "Both tuples and lists are mutable", "Both tuples and lists are immutable"],
        answer: "Tuples are immutable, lists are mutable",
        explanation: "Tuples are immutable, meaning their elements cannot be changed after creation, whereas lists are mutable and allow modification of their elements."
    },
    {
        question: "What is a generator in Python?",
        options: ["A function that generates random numbers", "A function that generates lists", "An iterator that generates values on-the-fly", "A function that generates tuples"],
        answer: "An iterator that generates values on-the-fly",
        explanation: "A generator in Python is a special type of iterator that generates values on-the-fly using 'yield' keyword rather than returning them all at once."
    },
    {
        question: "What is the purpose of the 'next()' function in Python?",
        options: ["Gets the next element from an iterator", "Returns the current date and time", "Performs mathematical calculations", "Converts strings to uppercase"],
        answer: "Gets the next element from an iterator",
        explanation: "The 'next()' function in Python retrieves the next item from an iterator."
    },
    {
        question: "What is the purpose of the 'enumerate()' function in Python?",
        options: ["Adds indexes to elements in an iterable", "Counts the number of occurrences of an element in a list", "Performs matrix multiplication", "Converts lists to tuples"],
        answer: "Adds indexes to elements in an iterable",
        explanation: "The 'enumerate()' function in Python adds a counter to an iterable and returns it as an enumerate object."
    },
    {
        question: "What is the purpose of the 'super()' function in Python?",
        options: ["Calls a method from the superclass", "Performs arithmetic operations", "Creates a new instance of a class", "Converts strings to uppercase"],
        answer: "Calls a method from the superclass",
        explanation: "The 'super()' function in Python is used to call a method from the superclass within a subclass."
    },
    {
        question: "What is the purpose of the 'staticmethod()' decorator in Python?",
        options: ["Defines a static method within a class", "Defines a class method within a class", "Defines a method that can access class variables", "Defines a method that can access instance variables"],
        answer: "Defines a static method within a class",
        explanation: "The 'staticmethod()' decorator in Python is used to define a static method within a class."
    },
    {
        question: "What is the purpose of the 'classmethod()' decorator in Python?",
        options: ["Defines a class method within a class", "Defines a static method within a class", "Defines a method that can access instance variables", "Defines a method that can access class variables"],
        answer: "Defines a class method within a class",
        explanation: "The 'classmethod()' decorator in Python is used to define a class method within a class."
    },
    {
        question: "What is the purpose of the 'property()' function in Python?",
        options: ["Defines properties for attributes of a class", "Performs arithmetic operations", "Creates new instances of a class", "Converts strings to uppercase"],
        answer: "Defines properties for attributes of a class",
        explanation: "The 'property()' function in Python is used to define properties for attributes of a class, allowing custom getter, setter, and deleter methods."
    },
    {
        question: "What is the purpose of the 'assert' statement in Python?",
        options: ["Checks if a condition is true and raises an error if it's false", "Prints output to the console", "Declares variables", "Executes a block of code repeatedly"],
        answer: "Checks if a condition is true and raises an error if it's false",
        explanation: "The 'assert' statement in Python checks if a condition is true. If the condition is false, it raises an AssertionError with an optional error message."
    },
    {
        question: "What is the purpose of the 'try', 'except', 'finally' blocks in Python?",
        options: ["To handle exceptions", "To define variables", "To perform file operations", "To create lists"],
        answer: "To handle exceptions",
        explanation: "The 'try', 'except', 'finally' blocks in Python are used for exception handling. Code that might raise an exception is placed inside the 'try' block, and the 'except' block is used to handle the exception. The 'finally' block is executed whether an exception occurs or not."
    },
    {
        question: "What is the difference between 'deepcopy()' and 'copy()' functions in Python?",
        options: ["'deepcopy()' creates a shallow copy, while 'copy()' creates a deep copy", "'copy()' creates a shallow copy, while 'deepcopy()' creates a deep copy", "Both 'deepcopy()' and 'copy()' create shallow copies", "There is no difference between them"],
        answer: "'deepcopy()' creates a deep copy, while 'copy()' creates a shallow copy",
        explanation: "'deepcopy()' function in Python creates a deep copy of the object, including all nested objects, while 'copy()' function creates a shallow copy, i.e., a new object that stores references to the original nested objects."
    },
    {
        question: "What is the purpose of the 'sys' module in Python?",
        options: ["Provides access to system-specific parameters and functions", "Performs mathematical computations", "Handles exceptions", "Performs file operations"],
        answer: "Provides access to system-specific parameters and functions",
        explanation: "The 'sys' module in Python provides access to system-specific parameters and functions, including command-line arguments, Python runtime environment, and exit functions."
    },
    {
        question: "What is the purpose of the 'os' module in Python?",
        options: ["Provides operating system dependent functionality", "Performs mathematical computations", "Handles exceptions", "Performs file operations"],
        answer: "Provides operating system dependent functionality",
        explanation: "The 'os' module in Python provides a portable way to use operating system dependent functionality, such as interacting with the filesystem, running shell commands, and managing processes."
    },
    {
        question: "What is the purpose of the 're' module in Python?",
        options: ["Provides support for regular expressions", "Performs mathematical computations", "Handles exceptions", "Performs file operations"],
        answer: "Provides support for regular expressions",
        explanation: "The 're' module in Python provides support for regular expressions, allowing you to work with patterns in strings, such as searching, replacing, and splitting."
    },
    {
        question: "What is the purpose of the 'json' module in Python?",
        options: ["Provides support for JSON encoding and decoding", "Performs mathematical computations", "Handles exceptions", "Performs file operations"],
        answer: "Provides support for JSON encoding and decoding",
        explanation: "The 'json' module in Python provides support for encoding and decoding JSON (JavaScript Object Notation) data, allowing you to serialize Python objects into JSON strings and deserialize JSON strings into Python objects."
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
