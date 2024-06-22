const questions = [
    {
        question: "What is the purpose of the 'public static void main(String[] args)' method in Java?",
        options: ["To declare variables", "To define a standard method for running tests", "To execute a Java program", "To initialize the variables"],
        answer: "To execute a Java program",
        explanation: "The 'public static void main(String[] args)' method is the entry point for any Java program. It's where the program begins execution."
    },
    {
        question: "Which data type would you use to store a logical value in Java?",
        options: ["int", "boolean", "String", "double"],
        answer: "boolean",
        explanation: "The 'boolean' data type is used in Java to store logical values, which can be either 'true' or 'false'."
    },
    {
        question: "What does the 'final' keyword signify in Java?",
        options: ["The value can be changed later", "The value cannot be changed once assigned", "The method can be overridden", "The class can be inherited"],
        answer: "The value cannot be changed once assigned",
        explanation: "In Java, the 'final' keyword is used to denote constants. It can be used with variables to make their values unchangeable after assignment, with methods to prevent them from being overridden, and with classes to prevent them from being subclassed."
    },
    {
        question: "How do you create a new instance of an object in Java?",
        options: ["ClassName objectName;", "ClassName objectName = ClassName();", "ClassName objectName = new ClassName();", "new ClassName objectName;"],
        answer: "ClassName objectName = new ClassName();",
        explanation: "In Java, a new instance of an object is created using the 'new' keyword followed by the class constructor."
    },
    {
        question: "What is the default value of an object reference declared as an instance variable in Java?",
        options: ["null", "0", "undefined", "Not assigned"],
        answer: "null",
        explanation: "In Java, if an object reference is declared but not explicitly initialized, its default value is 'null'."
    },
    {
        question: "What does the 'static' keyword indicate in Java?",
        options: ["The method or variable belongs to the instance of a class", "The method or variable belongs to the class, rather than any instance of the class", "The variable values can change", "The method can be executed without creating an instance of the class"],
        answer: "The method or variable belongs to the class, rather than any instance of the class",
        explanation: "In Java, the 'static' keyword is used to indicate that a particular method or variable belongs to the class itself, rather than to instances of the class."
    },
    {
        question: "What is an exception in Java?",
        options: ["A type of variable", "An error that occurs during the execution of a program", "A method that terminates a program", "A class that extends the RuntimeException"],
        answer: "An error that occurs during the execution of a program",
        explanation: "An exception in Java is an event (an instance of Throwable) that disrupts the normal flow of the program's instructions during its execution."
    },
    {
        question: "Which of the following is not a valid Java identifier?",
        options: ["_identifier", "2ndName", "$name", "identifier2"],
        answer: "2ndName",
        explanation: "In Java, identifiers cannot begin with a digit. Thus, '2ndName' is not a valid identifier."
    },
    {
        question: "What is encapsulation in Java?",
        options: ["The ability to store data in multiple formats", "The bundling of data with methods that operate on that data", "The concept of hiding internal state and requiring all interaction to be performed through an object's methods", "The inheritance of parent class methods by child classes"],
        answer: "The concept of hiding internal state and requiring all interaction to be performed through an object's methods",
        explanation: "Encapsulation in Java is a principle of wrapping the data (variables) and code acting on the data (methods) together as a single unit and hiding the details from the users."
    },
    {
        question: "Which method is used to compare two strings for equality in Java?",
        options: ["equals()", "compareTo()", "Equal()", "compare()"],
        answer: "equals()",
        explanation: "The 'equals()' method in Java is used to compare two strings for content equality."
    },
    {
        question: "What is inheritance in Java?",
        options: ["The process of optimizing code", "The process where one object acquires the properties of another", "A method of creating new classes from existing ones", "A principle that restricts access to parts of the program"],
        answer: "A method of creating new classes from existing ones",
        explanation: "Inheritance in Java is a mechanism wherein a new class is derived from an existing class, inheriting its fields and methods, allowing for code reuse."
    },
    {
        question: "What does the 'this' keyword refer to in Java?",
        options: ["The current class instance variable", "A static method of the current class", "A constructor of the current class", "The superclass of the current class"],
        answer: "The current class instance variable",
        explanation: "In Java, 'this' is a reference variable that refers to thecurrent object."
    },
    {
    question: "How do you ensure a class cannot be inherited in Java?",
    options: ["By using the 'sealed' keyword", "By using the 'final' keyword", "By making the class abstract", "By declaring a private constructor"],
    answer: "By using the 'final' keyword",
    explanation: "In Java, marking a class as 'final' prevents it from being subclassed."
    },
    {
    question: "What is polymorphism in Java?",
    options: ["The ability of Java to execute a program on different operating systems", "The ability of a variable, function, or object to take on multiple forms", "The concept of breaking a problem into smaller parts", "The capability of Java to store different types of data"],
    answer: "The ability of a variable, function, or object to take on multiple forms",
    explanation: "Polymorphism in Java is the capability of a method to do different things based on the object that it is acting upon, enabling a single interface to control access to a general class of actions."
    },
    {
    question: "What is an interface in Java?",
    options: ["A class that is used to group related methods with empty bodies", "A template that allows you to create objects", "A special class that cannot be instantiated", "A type of data structure"],
    answer: "A class that is used to group related methods with empty bodies",
    explanation: "An interface in Java is a reference type, similar to a class, that can contain only constants, method signatures, default methods, static methods, and nested types. Interfaces cannot contain instance fields or constructor methods."
    },
    {
    question: "Which of the following is true about a constructor in Java?",
    options: ["It must have the same name as its class", "It is used to destroy an object", "It can return a value", "It must be declared as 'final'"],
    answer: "It must have the same name as its class",
    explanation: "In Java, a constructor is a block of code that initializes a newly created object and has the same name as its class."
    },
    {
    question: "How do you handle exceptions in Java?",
    options: ["Using 'try' and 'catch' blocks", "By using 'throw' and 'throws' keywords", "By using 'error' and 'finally' blocks", "Both A and B"],
    answer: "Both A and B",
    explanation: "In Java, exceptions are handled using 'try', 'catch', and 'finally' blocks, as well as with the 'throw' and 'throws' keywords."
    },
    {
    question: "What does the 'extends' keyword signify in Java?",
    options: ["That a class is being inherited by another class", "That a class is inheriting from an interface", "That a method is being overridden", "That an interface is implementing another interface"],
    answer: "That a class is being inherited by another class",
    explanation: "In Java, the 'extends' keyword is used in class declarations to inherit from a superclass."
    },
    {
    question: "Which collection class allows you to grow or shrink its size and provides indexed access to its elements, but is not synchronized?",
    options: ["java.util.ArrayList", "java.util.Vector", "java.util.HashMap", "java.util.HashSet"],
    answer: "java.util.ArrayList",
    explanation: "ArrayList in Java allows for dynamic arrays that can grow as needed. It provides indexed access to its elements but is not synchronized, meaning it's not thread-safe without external synchronization."
    },
    {
    question: "What is the difference between '=='' and 'equals()' in Java?",
    options: ["'==' checks for value equality, and 'equals()' checks for reference equality", "'==' checks for reference equality, and 'equals()' checks for value equality", "There is no difference; both perform the same operation", "'==' is used only for primitive types, while 'equals()' is used for object comparison"],
    answer: "'==' checks for reference equality, and 'equals()' checks for value equality",
    explanation: "'==' operator checks if both references points to the same location or not, whereas 'equals()' method evaluates to the comparison of values in the objects."
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
    timeLeft = 120;
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
