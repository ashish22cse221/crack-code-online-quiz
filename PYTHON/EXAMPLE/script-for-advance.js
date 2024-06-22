const questions = [
    {
        question: "What is the difference between concurrency and parallelism?",
        options: ["Concurrency is about dealing with multiple tasks at the same time, while parallelism is about executing multiple tasks simultaneously.", "Concurrency and parallelism are synonymous terms.", "Concurrency focuses on executing a single task efficiently, while parallelism focuses on executing multiple independent tasks simultaneously.", "Concurrency and parallelism are concepts exclusive to hardware architecture."],
        answer: "Concurrency is about dealing with multiple tasks at the same time, while parallelism is about executing multiple tasks simultaneously.",
        explanation: "Concurrency involves managing multiple tasks that may start, run, and complete in overlapping time periods, while parallelism involves executing multiple tasks simultaneously by leveraging multiple processors or cores."
    },
    {
        question: "What is the difference between abstraction and encapsulation in object-oriented programming?",
        options: ["Abstraction is the process of hiding implementation details, while encapsulation involves bundling data and methods that operate on that data into a single unit.", "Abstraction and encapsulation are synonymous terms.", "Abstraction focuses on exposing implementation details, while encapsulation focuses on hiding data.", "Abstraction and encapsulation are not relevant in object-oriented programming."],
        answer: "Abstraction is the process of hiding implementation details, while encapsulation involves bundling data and methods that operate on that data into a single unit.",
        explanation: "Abstraction allows focusing on the essential qualities of an object while hiding its implementation details, while encapsulation binds together the data and functions that manipulate the data, preventing direct access to the data from outside the object's scope."
    },
    {
        question: "What is the concept of polymorphism in object-oriented programming?",
        options: ["Polymorphism allows objects of different types to be treated as objects of a common superclass.", "Polymorphism refers to the ability of objects to change their state over time.", "Polymorphism is the process of defining multiple methods with the same name but different implementations.", "Polymorphism is not applicable in object-oriented programming languages."],
        answer: "Polymorphism allows objects of different types to be treated as objects of a common superclass.",
        explanation: "Polymorphism allows objects of different types to be treated as objects of a common superclass, enabling them to be operated upon in a uniform manner."
    },
    {
        question: "What is the principle of DRY (Don't Repeat Yourself) in software development?",
        options: ["DRY emphasizes the importance of writing concise and understandable code.", "DRY advocates for the reuse of code to avoid duplication and redundancy.", "DRY suggests avoiding the use of comments in code to maintain clarity.", "DRY promotes the use of repetition and redundancy in code for clarity."],
        answer: "DRY advocates for the reuse of code to avoid duplication and redundancy.",
        explanation: "The DRY principle encourages developers to avoid duplication by extracting common functionalities into reusable modules or functions, thereby reducing redundancy, improving maintainability, and minimizing the chance of errors."
    },
    {
        question: "What is the difference between imperative and declarative programming paradigms?",
        options: ["Imperative programming focuses on how to achieve a result, while declarative programming focuses on what the result should be.", "Imperative and declarative programming are synonymous terms.", "Imperative programming emphasizes the outcome of a computation, while declarative programming emphasizes the process.", "Imperative programming is more abstract than declarative programming."],
        answer: "Imperative programming focuses on how to achieve a result, while declarative programming focuses on what the result should be.",
        explanation: "In imperative programming, the focus is on describing the steps that the computer should take to accomplish a task, whereas in declarative programming, the emphasis is on describing the desired outcome without specifying the exact steps to achieve it."
    },
    {
        question: "What is memoization in computer science?",
        options: ["Memoization is a technique used to speed up algorithms by storing previously computed results and reusing them when the same inputs occur again.", "Memoization refers to the process of optimizing memory usage in computer programs.", "Memoization is a type of encryption algorithm used for securing sensitive data.", "Memoization is not applicable in computer science."],
        answer: "Memoization is a technique used to speed up algorithms by storing previously computed results and reusing them when the same inputs occur again.",
        explanation: "Memoization is an optimization technique used primarily in dynamic programming to speed up algorithms by storing the results of expensive function calls and returning the cached result when the same inputs occur again."
    },
    {
        question: "What is the concept of inversion of control (IoC) in software engineering?",
        options: ["IoC is a design principle where the flow of control is inverted compared to traditional procedural programming.", "IoC is a programming paradigm that emphasizes explicit dependencies between components.", "IoC refers to the process of centralizing control logic within a single component.", "IoC is not relevant in software engineering."],
        answer: "IoC is a design principle where the flow of control is inverted compared to traditional procedural programming.",
        explanation: "Inversion of control (IoC) is a design principle where the control flow of a program is inverted compared to traditional procedural programming. Instead of the application controlling the flow of execution, the control is delegated to external frameworks or libraries."
    },
    {
        question: "What is the difference between functional and imperative programming paradigms?",
        options: ["Functional programming treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data, while imperative programming uses statements to change a program's state.", "Functional and imperative programming are synonymous terms.", "Functional programming is focused on describing how to achieve a result, while imperative programming emphasizes the outcome of a computation.", "Imperative programming relies on recursion, while functional programming relies on iteration."],
        answer: "Functional programming treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data, while imperative programming uses statements to change a program's state.",
        explanation: "Functional programming emphasizes the evaluation of mathematical functions and avoids changing state and mutable data, while imperative programming relies on statements that change a program's state, often through mutable variables and assignments."
    },
    {
        question: "What is the concept of currying in functional programming?",
        options: ["Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument.", "Currying is a technique for optimizing recursive functions in functional programming languages.", "Currying refers to the process of optimizing memory usage by storing intermediate results in functional programming.", "Currying is not applicable in functional programming."],
        answer: "Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument.",
        explanation: "Currying is a technique used in functional programming where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. This allows for partial application of functions and enables greater flexibility in function composition."
    },
    {
        question: "What is the concept of tail call optimization (TCO) in functional programming?",
        options: ["Tail call optimization is a compiler optimization technique that eliminates the need for additional stack frames when the last action of a function is a call toitself, allowing for efficient recursive function calls.", "Tail call optimization is a method for optimizing memory usage in functional programming languages.", "Tail call optimization is a technique for optimizing file I/O operations in functional programming languages.", "Tail call optimization is not relevant in functional programming."],
        answer: "Tail call optimization is a compiler optimization technique that eliminates the need for additional stack frames when the last action of a function is a call to itself, allowing for efficient recursive function calls.",
        explanation: "Tail call optimization is a compiler optimization technique used in functional programming languages to optimize recursive function calls. It eliminates the need for additional stack frames when the last action of a function is a call to itself, thus preventing stack overflow errors and improving performance."
        },
        {
        question: "What is lazy evaluation in programming languages?",
        options: ["Lazy evaluation is an evaluation strategy that delays the evaluation of an expression until its value is needed.", "Lazy evaluation is a technique for optimizing memory usage in programming languages.", "Lazy evaluation is a method for improving the speed of recursive functions in programming languages.", "Lazy evaluation is not applicable in programming languages."],
        answer: "Lazy evaluation is an evaluation strategy that delays the evaluation of an expression until its value is needed.",
        explanation: "Lazy evaluation is an evaluation strategy used in programming languages where the evaluation of an expression is delayed until its value is needed. This can help improve efficiency by avoiding unnecessary computations and conserving memory."
        },
        {
        question: "What is the difference between static typing and dynamic typing in programming languages?",
        options: ["Static typing requires variable types to be explicitly declared at compile time, while dynamic typing determines variable types at runtime.", "Static typing determines variable types at runtime, while dynamic typing requires variable types to be explicitly declared at compile time.", "Static typing and dynamic typing are synonymous terms.", "Static typing and dynamic typing are not relevant in programming languages."],
        answer: "Static typing requires variable types to be explicitly declared at compile time, while dynamic typing determines variable types at runtime.",
        explanation: "In static typing, variable types are checked at compile time, and variables must have their types declared explicitly. In dynamic typing, variable types are determined at runtime, allowing for more flexibility but potentially leading to runtime errors."
        },
        {
        question: "What is the concept of higher-order functions in programming languages?",
        options: ["Higher-order functions are functions that take other functions as arguments or return them as results.", "Higher-order functions are functions with a higher priority in execution compared to other functions.", "Higher-order functions are functions that execute faster than other functions.", "Higher-order functions are not relevant in programming languages."],
        answer: "Higher-order functions are functions that take other functions as arguments or return them as results.",
        explanation: "Higher-order functions are functions that can take other functions as arguments or return them as results. They enable functional programming paradigms such as function composition, mapping, and filtering."
        },
        {
        question: "What is the concept of monads in functional programming?",
        options: ["Monads are a design pattern used to manage side effects in functional programming.", "Monads are a mathematical concept used to represent computations in functional programming.", "Monads are a data structure used for storing recursive data in functional programming.", "Monads are not applicable in functional programming."],
        answer: "Monads are a design pattern used to manage side effects in functional programming.",
        explanation: "Monads are a design pattern used in functional programming to manage side effects, such as state, I/O operations, and exceptions, in a safe and composable manner. They provide a structured way to encapsulate and sequence impure computations."
        },
        {
        question: "What is the concept of purity in functional programming?",
        options: ["Purity refers to the absence of side effects and reliance on immutable data in functional programming.", "Purity refers to the speed and efficiency of functional programming languages compared to imperative languages.", "Purity refers to the simplicity and clarity of functional programming languages.", "Purity is not relevant in functional programming."],
        answer: "Purity refers to the absence of side effects and reliance on immutable data in functional programming.",
        explanation: "Purity in functional programming refers to the absence of side effects and the reliance on immutable data. Pure functions produce the same output for the same inputs and have no observable interactions with the outside world, making them easier to reason about and test."
        },
        {
        question: "What is the concept of referential transparency in functional programming?",
        options: ["Referential transparency means that an expression can be replaced with its value without changing the program's behavior.", "Referential transparency refers to the speed at which functions are executed in functional programming languages.", "Referential transparency means that functions can refer to each other without causing circular dependencies in functional programming.", "Referential transparency is not relevant in functional programming."],
        answer: "Referential transparency means that an expression can be replaced with its value without changing the program's behavior.",
        explanation: "Referential transparency is a property of expressions in functional programming where an expression can be replaced with its value without changing the program's behavior. This property facilitates reasoning about programs and enables equational reasoning."
        },
        {
        question: "What is the concept of algebraic data types in functional programming?",
        options: ["Algebraic data types are composite types built from other types, including product types (tuples and records) and sum types (enums and tagged unions).", "Algebraic data types are mathematical structures used for representing numeric data in functional programming.", "Algebraic data types are data types used exclusively for algebraic computations in functional programming.", "Algebraic data types are not relevant in functional programming."],
        answer: "Algebraic data types are composite types built from other types, including product types (tuples and records) and sum types (enums and tagged unions).",
        explanation: "Algebraic data types are composite data types formed by combining simpler types. They include product types, which represent combinations of types like tuples and records, and sum types, which represent choice between types like enums and tagged unions."
        },
        {
        question: "What is the concept of pattern matching in functional programming?",
        options: ["Pattern matching is a feature that allows for concise and readable code by matching the structure of data with predefined patterns.", "Pattern matching is a technique used for optimizing recursive functions in functional programming languages.", "Pattern matching is a method for encrypting data in functional programming languages.", "Pattern matching is not relevant in functional programming."],
        answer: "Pattern matching is a feature that allows for concise and readable code by matching the structure of data with predefined patterns.",
        explanation: "Pattern matching is a feature found in many functional programming languages that allows developers to destructure and match the shape of data against predefined patterns. It enables concise and readable code by expressing complex conditional logic more succinctly."
        },
        {
        question: "What is the concept of tail recursion in functional programming?",
        options: ["Tail recursion is a recursive function call that appears at the end of a function's body, allowing for efficient optimization by compilers.", "Tail recursion is a technique for optimizing memory usage in functional programming languages.", "Tail recursion is a method for encrypting data in functional programming languages.", "Tail recursion is not relevant in functional programming."],
        answer: "Tail recursion is a recursive function call that appears at the end of a function's body, allowing for efficient optimization by compilers.",
        explanation: "Tail recursion is a special form of recursion where the recursive call is the last operation performed by the function. This allows compilers to optimize the recursion by reusing the same stack frame for each recursive call, avoiding stack overflow errors and improving performance."
        },
        {
        question: "What is the concept of monoids in functional programming?",
        options: ["Monoids are algebraic structures consisting of a set, an associative binary operation, and an identity element.", "Monoids are a design pattern used to manage side effects in functional programming.", "Monoids are a data structure used for storing recursive data in functional programming.", "Monoids are not applicable in functional programming."],
        answer: "Monoids are algebraic structures consisting of a set, an associative binary operation, and an identity element.",
        explanation: "Monoids are algebraic structures commonly used in functional programming that consist of a set, an associative binary operation, and an identity element. They provide a way to combine values of the same type together in a consistent and composable manner."
        },
        {
        question: "What is the concept of applicative functors in functional programming?",
        options: ["Applicative functors are higher-order functors that support lifting functions into a context and applying them to values within that context.", "Applicative functors are data structures used for storing recursive data in functional programming.", "Applicative functors are a design pattern used to manage side effects in functional programming.", "Applicative functors are not relevant in functional programming."],
        answer: "Applicative functors are higher-order functors that support lifting functions into a context and applying them to values within that context.",
        explanation: "Applicative functors are a type class in functional programming that generalizes the notion of function application within a context. They provide a way to apply a function to values wrapped in a context, such as lists, options, or futures, while preserving the context."
        },
        {
        question: "What is the concept of monad transformers in functional programming?",
        options: ["Monad transformers are a way to compose monads together to create more complex monads.", "Monad transformers are data structures used for storing recursive data in functional programming.", "Monad transformers are a design pattern used to manage side effects in functional programming.", "Monad transformers are not relevant in functional programming."],
        answer: "Monad transformers are a way to compose monads together to create more complex monads.",
        explanation: "Monad transformers are a technique used in functional programming to combine multiple monads into a single monad that captures the effects of all the constituent monads. They allow for the composition of monads while preserving their individual capabilities."
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
