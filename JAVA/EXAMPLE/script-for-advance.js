const questions = [
    {
        question: "Explain the concept of Generics in Java and why it's used.",
        options: ["To provide compile-time type checking and remove risk of ClassCastException", "To allow the creation of type-safe collections", "To enhance the performance of the application", "All of the above"],
        answer: "All of the above",
        explanation: "Generics in Java enables algorithms to be written in a way that allows type parameters to be specified later. This approach offers compile-time type safety that leads to more robust and easier to read code. It eliminates the need for casts, and it can lead to significant performance improvements, especially in collections."
    },
    {
        question: "What is the Java Memory Model?",
        options: ["A system that manages application memory and garbage collection", "A collection of rules and guarantees provided by the JVM to ensure variable consistency across different threads", "A framework for developing memory-efficient Java applications", "An interface for memory management tools"],
        answer: "A collection of rules and guarantees provided by the JVM to ensure variable consistency across different threads",
        explanation: "The Java Memory Model defines how threads interact through memory and what behaviors are allowed in concurrent execution. It's crucial for developing multithreaded applications to avoid issues like thread interference and memory consistency errors."
    },
    {
        question: "Describe the process and benefits of using the Fork/Join Framework in Java.",
        options: ["It's used to efficiently execute recursive algorithms by leveraging multiple processors", "It simplifies the development of server applications", "It's a tool for memory optimization", "It's used to fork new JVM processes"],
        answer: "It's used to efficiently execute recursive algorithms by leveraging multiple processors",
        explanation: "The Fork/Join Framework introduced in Java 7 is designed for parallel execution of tasks and is based on the work-stealing algorithm, where worker threads that run out of tasks can 'steal' tasks from other threads' work queues. This framework is particularly effective for recursive algorithms and can significantly improve performance on multicore processors."
    },
    {
        question: "Explain the difference between Checked and Unchecked Exceptions in Java.",
        options: ["Checked exceptions are checked at compile-time, while unchecked exceptions are checked at runtime", "Checked exceptions are serious errors while unchecked exceptions are minor", "Unchecked exceptions derive from the Error class", "Checked exceptions are used for recoverable conditions while unchecked exceptions are not"],
        answer: "Checked exceptions are checked at compile-time, while unchecked exceptions are checked at runtime",
        explanation: "In Java, checked exceptions are those that are checked at compile time for handling by the programmer (e.g., IOException). Unchecked exceptions are those that the compiler does not require to be caught or declared to be thrown (e.g., NullPointerException), and they are checked at runtime."
    },
    {
        question: "What is the purpose of the volatile keyword in Java?",
        options: ["To make a class thread-safe", "To indicate that a variable's value will be modified by different threads", "To cache the value of a variable", "To make a method synchronized"],
        answer: "To indicate that a variable's value will be modified by different threads",
        explanation: "The volatile keyword in Java is used to indicate that a variable may be changed by multiple threads. It ensures that changes made in one thread are immediately visible to other threads. It is a means of achieving lightweight synchronization for variables."
    },
    {
        question: "How does the ConcurrentHashMap differ from the Hashtable in Java?",
        options: ["ConcurrentHashMap allows concurrent read operations without locking", "ConcurrentHashMap does not allow null keys or values, while Hashtable does", "Hashtable is faster than ConcurrentHashMap", "ConcurrentHashMap is synchronized while Hashtable is not"],
        answer: "ConcurrentHashMap allows concurrent read operations without locking",
        explanation: "ConcurrentHashMap is designed for concurrency and allows multiple readers without blocking, unlike Hashtable which locks during read operations. This makes ConcurrentHashMap highly scalable and efficient for concurrent access. Additionally, ConcurrentHashMap does not lock the whole map but only segments of it, reducing contention."
    },
    {
        question: "Explain the use of the transient keyword in Java.",
        options: ["To make a variable not serializable", "To temporarily increase the visibility of a variable", "To make a variable volatile", "To indicate a variable is thread-safe"],
        answer: "To make a variable not serializable",
        explanation: "The transient keyword in Java is used to indicate that a field should not be serialized. When an object is serialized, fields marked as transient are ignored by the serialization mechanism, meaning they are not saved or restored as part of the serialized object state."
    },
    {
        question: "What is the purpose of the @Override annotation?",
        options: ["To change the functionality of an inherited method", "To improve performance of overridden methods", "To ensure a subclass method correctly overrides a superclass method", "To document overridden methods"],
        answer: "To ensure a subclass method correctly overrides a superclass method",
        explanation: "The @Override annotation is used to indicate that a method declaration is intended to override a method declaration in a superclass. If the method does not correctly override a method in its superclass, the compiler will generate an error. This helps catch common errors at compile time."
    },
    {
        question: "What is the difference between fail-fast and fail-safe iterators in Java?",
        options: ["Fail-fast iterators can cause concurrent modification exceptions, while fail-safe iterators cannot", "Fail-safe iterators are slower than fail-fast iterators", "Fail-fast iterators are used in multithreading environments, while fail-safe iterators are not", "Fail-safe iterators allow modifications to collections while iterating, fail-fast iterators do not"],
        answer: "Fail-fast iterators can cause concurrent modification exceptions, while fail-safe iterators cannot",
        explanation: "Fail-fast iterators operate directly on the collection, causing them to throw a ConcurrentModificationException if the collection is modified while iterating. Fail-safe iterators operate on a copy of the collection, allowing the original collection to be modified without affecting the iteration."
    },
    {
        question: "Explain the concept of type erasure in Java Generics.",
        options: ["It's the process of enforcing type constraints at compile-time and removing them at runtime", "It's a technique to improve the runtime efficiency of generics", "It's the conversion of generic types to Object types during execution", "All of the above"],
        answer: "It's the process of enforcing type constraints at compile-time and removing them at runtime",
        explanation: "Type erasure is a process used by the Java compiler to enforce type constraints on generics at compile time and to remove generic type information by replacing all generic types with their bounds or Object if the type is unbounded. This ensures that generic types do not cause overhead at runtime."
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
