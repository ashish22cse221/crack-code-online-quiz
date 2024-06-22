const questions = [
    {
        question: "What is the purpose of the 'transient' keyword in Java?",
        options: ["To indicate that a variable should not be serialized", "To make a variable transient in memory", "To indicate temporary variable state", "To enhance performance by skipping unnecessary checks"],
        answer: "To indicate that a variable should not be serialized",
        explanation: "The 'transient' keyword in Java is used to indicate that a field should not be part of the serialization process, meaning it will not be saved when the object is serialized."
    },
    {
        question: "How does the 'synchronized' keyword function in Java?",
        options: ["It prevents a class from being subclassed", "It allows multiple threads to access a method or block simultaneously", "It ensures that only one thread at a time can execute a method or block of code", "It synchronizes data between multiple databases"],
        answer: "It ensures that only one thread at a time can execute a method or block of code",
        explanation: "The 'synchronized' keyword in Java is used to ensure that only one thread can execute a method or block of code at a time, thus preventing thread interference and consistency problems."
    },
    {
        question: "What is the Singleton pattern and how do you implement it in Java?",
        options: ["A design pattern that ensures a class has only one instance and provides a global point of access to it", "A pattern that allows multiple instances of a class", "A Java feature that automatically manages memory", "A pattern used to create duplicate objects"],
        answer: "A design pattern that ensures a class has only one instance and provides a global point of access to it",
        explanation: "The Singleton pattern is a design pattern that restricts the instantiation of a class to one 'single' instance. This is useful when exactly one object is needed to coordinate actions across the system. It's commonly implemented by making the constructor private and creating a static method that returns the instance."
    },
    {
        question: "What are lambda expressions in Java, and provide an example?",
        options: ["A way to create anonymous classes", "A feature for string manipulation", "A concise way to represent one method interface using an expression", "A type of exception handling"],
        answer: "A concise way to represent one method interface using an expression",
        explanation: "Lambda expressions in Java are a way to provide a clear and concise way to represent one method interface using an expression. They are used primarily to define inline implementation of a functional interface. Example: `(a, b) -> a + b` represents a lambda expression that takes two parameters and returns their sum."
    },
    {
        question: "What is the difference between Checked and Unchecked exceptions in Java?",
        options: ["Checked exceptions are checked at compile-time while Unchecked exceptions are checked at runtime", "Checked exceptions are severe while Unchecked exceptions are minor issues", "Unchecked exceptions are related to syntax errors, Checked exceptions are runtime errors", "Checked exceptions are manually thrown by the programmer, while Unchecked exceptions are thrown by the Java Virtual Machine"],
answer: "Checked exceptions are checked at compile-time while Unchecked exceptions are checked at runtime",
explanation: "In Java, checked exceptions are the exceptions that are checked at compile-time, meaning the compiler requires them to be caught or declared in the method signature. Unchecked exceptions, including RuntimeExceptions, are not checked at compile-time but rather occur at runtime."
},
{
question: "Explain the concept of Generics in Java.",
options: ["A feature that allows the Java Virtual Machine to optimize memory usage", "A mechanism that provides tighter type checks at compile time and supports generic programming", "A way of securing Java applications", "A design pattern used in Java programming"],
answer: "A mechanism that provides tighter type checks at compile time and supports generic programming",
explanation: "Generics in Java are a feature that allows you to write code with generic types. Generics enable types (classes and interfaces) to be parameters when defining classes, interfaces, and methods. This provides stronger type checks at compile time and supports generic programming."
},
{
question: "What does the 'volatile' keyword do in Java?",
options: ["Indicates that a variable may change asynchronously", "Improves the performance of multithreaded programs", "Prevents a variable from being serialized", "Makes a method synchronized"],
answer: "Indicates that a variable may change asynchronously",
explanation: "The 'volatile' keyword in Java is used to indicate that a variable's value will be modified by different threads. Declaring a variable volatile ensures that any thread that reads the field will see the most recently written value."
},
{
question: "How do you create an immutable object in Java?",
options: ["By using the 'final' keyword with all variables", "By making all methods and variables static", "By not providing any setters or methods that modify state", "Both A and C"],
answer: "Both A and C",
explanation: "To create an immutable object in Java, you should make the class final (to prevent subclassing), all member variables final (to prevent their values from being altered once assigned), and avoid providing setters or any methods that modify the object's state."
},
{
question: "What is the difference between 'throw' and 'throws' in Java?",
options: ["'throw' is used to declare an exception, whereas 'throws' is used to actually throw an exception", "'throws' is used in method signatures to declare an exception, whereas 'throw' is used to actually throw an exception", "'throw' can only be used inside a method, 'throws' can be used anywhere", "'throws' initializes a new exception, whereas 'throw' does not"],
answer: "'throws' is used in method signatures to declare an exception, whereas 'throw' is used to actually throw an exception",
explanation: "'throws' is used in the declaration of a method to indicate that the method might throw one or more exceptions. 'throw' is used within the method body to actually throw an exception."
},
{
question: "Explain the difference between fail-fast and fail-safe iterators in Java.",
options: ["Fail-fast iterators directly modify the collection, causing a ConcurrentModificationException, while fail-safe iterators work on a clone of the collection", "Fail-fast iterators operate on a separate copy of the collection, while fail-safe iterators operate on the original collection", "Fail-safe iterators can throw a ConcurrentModificationException, while fail-fast iterators cannot", "There is no significant difference between the two"],
answer: "Fail-fast iterators directly modify the collection, causing a ConcurrentModificationException, while fail-safe iterators work on a clone of the collection",
explanation: "Fail-fast iterators operate on the original collection and will throw a ConcurrentModificationException if the collection is structurally modified while iterating, except through the iterator's own remove method. Fail-safe iterators, on the other hand, operate on a copy of the collection, so they don't throw an exception if the collection is modified during iteration."
},
{
question: "What is method overloading and method overriding in Java?",
options: ["Method overloading occurs within the same class, method overriding occurs in two classes that have IS-A (inheritance) relationship", "Method overriding is a compile-time concept, method overloading is a runtime concept", "Method overloading occurs between siblings, method overriding occurs between parent and child classes", "Method overloading and method overriding both occur within the same class"],
answer: "Method overloading occurs within the same class, method overriding occurs in two classes that have IS-A (inheritance) relationship",
explanation: "Method overloading is when two or more methods in the same class have the same name but different parameters. Method overriding is when a method in a child class has the same name, return type, and parameters as a method in its parent class."
},
{
question: "What are the access modifiers in Java?",
options: ["public, private, protected, default", "public, private, internal, protected", "public, private, protected, static", "public, private, secure, default"],
answer: "public, private, protected, default",
explanation: "Java has four access modifiers: public, private, protected, and default (no modifier). Each provides different levels of access control in a program."
},
{
question: "What is the difference between abstract class and interface in Java?",
options: ["Abstract classes can have method implementations, interfaces cannot", "Interfaces support multiple inheritances, abstract classes do not", "Abstract classes are used to provide partial implementation of an interface", "Both A and B"],
answer: "Both A and B",
explanation:"Abstract classes in Java can have both abstract and non-abstract methods (method implementations), whereas interfaces can only have abstract methods (until Java 8, which introduced default and static methods in interfaces). Interfaces support multiple inheritances, allowing a class to implement multiple interfaces, while a class can extend only one abstract class, thus not supporting multiple inheritance."
},
{
question: "How do you ensure thread safety in Java?",
options: ["By using synchronized blocks or methods", "By using volatile variables", "By avoiding the use of static variables", "By using atomic classes from the java.util.concurrent package"],
answer: "By using synchronized blocks or methods",
explanation: "Ensuring thread safety in Java can be achieved through various means, but one of the most common methods is by using synchronized blocks or methods to control access to critical sections of code. Synchronization ensures that only one thread can access the synchronized section at a time."
},
{
question: "What is the purpose of the 'static' keyword in Java?",
options: ["To create variables and methods that belong to the class, rather than an instance of the class", "To indicate that a class is thread-safe", "To make a method synchronized", "To ensure that a variable or method is loaded into memory at runtime"],
answer: "To create variables and methods that belong to the class, rather than an instance of the class",
explanation: "The 'static' keyword in Java is used to create class-level variables and methods. This means that they belong to the class itself, rather than to any specific instance of the class, allowing them to be accessed without creating an instance of the class."
},
{
question: "Explain the concept of Reflection in Java.",
options: ["The ability of a program to analyze itself and modify its logic at runtime", "The process by which a program can mirror its operations in a remote application", "A design pattern that simplifies the development of Java applications", "The mechanism that allows the cloning of objects"],
answer: "The ability of a program to analyze itself and modify its logic at runtime",
explanation: "Reflection in Java is a powerful feature that allows running programs to introspect upon themselves and manipulate internal properties of the program. This includes the ability to inspect classes, interfaces, fields, and methods at runtime, without knowing the names of these components at compile time."
},
{
question: "What is the difference between 'deep copy' and 'shallow copy' in Java?",
options: ["Deep copy duplicates the referenced objects, shallow copy only copies the object references", "Shallow copy duplicates the referenced objects, deep copy only copies the object references", "Deep copy is faster than shallow copy", "Shallow copy uses more memory than deep copy"],
answer: "Deep copy duplicates the referenced objects, shallow copy only copies the object references",
explanation: "In Java, a shallow copy of an object copies all of the member field values. However, the fields themselves are not copied; thus, if the field value is an object, the copy will have a reference to the same object as the original. A deep copy copies all fields, and if a field is an object, it creates a new object and copies all the fields of the original object to the new object, thus creating a fully independent copy."
},
{
question: "What is the 'finally' block in Java?",
options: ["A block that is always executed after a try/catch block, used for cleanup code", "A mandatory block that must follow every try block", "A block that contains final variables and methods", "A block that is executed only if an exception is thrown"],
answer: "A block that is always executed after a try/catch block, used for cleanup code",
explanation: "The 'finally' block in Java is used to execute important code such as closing connections, streams, or freeing up any resources. It is always executed whether an exception is handled or not, making it the ideal place to perform cleanup operations."
},
{
question: "Describe the 'this' keyword in Java.",
options: ["It refers to the current class instance", "It is used to invoke the current class constructor", "It differentiates between local and global variables when they have the same name", "All of the above"],
answer: "All of the above",
explanation: "The 'this' keyword in Java is a reference variable that refers to the current object. It can be used to refer to the current class instance variable, invoke the current class method, invoke the current class constructor, and differentiate between local and global variables when they have the same name."
},
{
question: "Explain the use of the 'super' keyword in Java.",
options: ["It is used to access or call the parent class members (variables and methods)", "It is used to call the parent class constructor", "It is utilized to override methods in the child class", "Both A and B"],
answer: "Both A and B",
explanation: "The 'super' keyword in Java is used for different purposes: It can be used to access or call the parent class members (variables and methods) that are hidden by the child class. It is also used to call the parent class constructor from the child class."
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
