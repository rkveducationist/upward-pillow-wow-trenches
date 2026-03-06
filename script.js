// ===============================
// Java Daily Quiz - Complete JS
// ===============================

// -------------------------------
// Questions Array (Edit anytime)
// -------------------------------

let questions = [

{
question: "1) Java is mainly known for which feature?",
options: [
"Platform independence",
"Only mobile development",
"Only desktop applications",
"Only web design"
],
answer: "Platform independence"
},

{
question: "2) Which company originally developed Java?",
options: [
"Microsoft",
"Sun Microsystems",
"Apple",
"IBM"
],
answer: "Sun Microsystems"
},

{
question: "3) Java was released in which year?",
options: [
"1995",
"2005",
"1989",
"2010"
],
answer: "1995"
},

{
question: "4) Which of the following is NOT a feature of Java?",
options: [
"Object Oriented",
"Platform Independent",
"Pointer arithmetic",
"Secure"
],
answer: "Pointer arithmetic"
},

{
question: "5) Which tool is required to compile Java programs?",
options: [
"JVM",
"JDK",
"JRE",
"JDBC"
],
answer: "JDK"
},

{
question: "6) Which command is used to compile Java code?",
options: [
"java",
"javac",
"run",
"compile"
],
answer: "javac"
},

{
question: "7) Which command is used to run a Java program?",
options: [
"execute",
"java",
"run",
"javac"
],
answer: "java"
},

{
question: "8) What does JDK stand for?",
options: [
"Java Deployment Kit",
"Java Development Kit",
"Java Design Kit",
"Java Debug Kit"
],
answer: "Java Development Kit"
},

{
question: "9) What does JRE stand for?",
options: [
"Java Runtime Environment",
"Java Run Engine",
"Java Runtime Editor",
"Java Resource Engine"
],
answer: "Java Runtime Environment"
},

{
question: "10) What does JVM stand for?",
options: [
"Java Virtual Machine",
"Java Variable Machine",
"Java Verified Machine",
"Java Version Manager"
],
answer: "Java Virtual Machine"
},

{
question: "11) What is the main responsibility of JVM?",
options: [
"Compile Java code",
"Execute Java bytecode",
"Write Java programs",
"Edit Java files"
],
answer: "Execute Java bytecode"
},

{
question: "12) What is the extension of Java source files?",
options: [
".java",
".class",
".exe",
".js"
],
answer: ".java"
},

{
question: "13) What is the extension of compiled Java files?",
options: [
".class",
".java",
".exe",
".obj"
],
answer: ".class"
},

{
question: "14) Which method is the entry point of a Java program?",
options: [
"start()",
"main()",
"run()",
"init()"
],
answer: "main()"
},

{
question: "15) Which keyword is used to define a class in Java?",
options: [
"class",
"struct",
"define",
"object"
],
answer: "class"
},

{
question: "16) Which of the following is a primitive data type?",
options: [
"String",
"Array",
"int",
"Object"
],
answer: "int"
},

{
question: "17) Which data type is used to store whole numbers?",
options: [
"int",
"float",
"boolean",
"char"
],
answer: "int"
},

{
question: "18) Which data type is used to store decimal values?",
options: [
"int",
"double",
"boolean",
"char"
],
answer: "double"
},

{
question: "19) Which data type is used to store true or false values?",
options: [
"boolean",
"int",
"float",
"char"
],
answer: "boolean"
},

{
question: "20) Which keyword is used for decision making?",
options: [
"if",
"loop",
"class",
"switcher"
],
answer: "if"
},

{
question: "21) Which statement is used to check multiple conditions?",
options: [
"if-else",
"loop",
"class",
"package"
],
answer: "if-else"
},

{
question: "22) Which decision making statement is used for multiple choices?",
options: [
"switch",
"loop",
"while",
"break"
],
answer: "switch"
},

{
question: "23) Which loop executes at least once?",
options: [
"for",
"while",
"do-while",
"foreach"
],
answer: "do-while"
},

{
question: "24) Which loop is best used when number of iterations is known?",
options: [
"for loop",
"while loop",
"do loop",
"switch"
],
answer: "for loop"
},

{
question: "25) Which loop is used when condition is checked first?",
options: [
"while",
"do while",
"switch",
"class"
],
answer: "while"
},

{
question: "26) What is a method in Java?",
options: [
"A block of code that performs a task",
"A variable",
"A loop",
"A package"
],
answer: "A block of code that performs a task"
},

{
question: "27) What is method overloading?",
options: [
"Same method name with different parameters",
"Different method names",
"Method inside method",
"Multiple classes"
],
answer: "Same method name with different parameters"
},

{
question: "28) Which keyword is used to return value from method?",
options: [
"return",
"break",
"continue",
"exit"
],
answer: "return"
},

{
question: "29) What is a void method?",
options: [
"A method that returns no value",
"A method with error",
"A method with loop",
"A method without class"
],
answer: "A method that returns no value"
},

{
question: "30) Which method type has no parameters and no return value?",
options: [
"Simple method",
"Void method without parameters",
"Parameterized method",
"Return method"
],
answer: "Void method without parameters"
}

];

// -------------------------------
// Global Variables
// -------------------------------

let timeLeft = 60; // 5 minutes = 300 seconds
let timerInterval;
let studentName = "";


// -------------------------------
// Start Quiz
// -------------------------------

function startQuiz() {

    studentName = document.getElementById("studentName").value.trim();

    if (studentName === "") {
        alert("Please enter your name!");
        return;
    }

    document.getElementById("start-section").classList.add("hide");
    document.getElementById("quiz-section").classList.remove("hide");

    loadQuestions();
    startTimer();
}


// -------------------------------
// Load Questions (Structured)
// -------------------------------

function loadQuestions() {

    let quizForm = document.getElementById("quizForm");
    quizForm.innerHTML = "";

    questions.forEach((q, index) => {

        let questionCard = document.createElement("div");
        questionCard.classList.add("question-card");

        let questionTitle = document.createElement("h3");
        questionTitle.innerText = q.question;
        questionCard.appendChild(questionTitle);

        q.options.forEach(option => {

            let label = document.createElement("label");
            label.classList.add("option");

            let radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "q" + index;
            radio.value = option;

            let span = document.createElement("span");
            span.innerText = option;

            label.appendChild(radio);
            label.appendChild(span);

            questionCard.appendChild(label);
        });

        quizForm.appendChild(questionCard);
    });
}


// -------------------------------
// Timer Function
// -------------------------------

function startTimer() {

    timerInterval = setInterval(() => {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        document.getElementById("timer").innerText =
            "Time Left: " +
            minutes + ":" +
            (seconds < 10 ? "0" : "") + seconds;

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            alert("Time is up! Submitting quiz...");
            submitQuiz();
        }

    }, 1000);
}


// -------------------------------
// Submit Quiz
// -------------------------------

function submitQuiz() {

    clearInterval(timerInterval);

    let score = 0;

    questions.forEach((q, index) => {

        let selected = document.querySelector(
            'input[name="q' + index + '"]:checked'
        );

        if (selected && selected.value === q.answer) {
            score++;
        }
    });

    document.getElementById("quiz-section").classList.add("hide");
    document.getElementById("result-section").classList.remove("hide");

    document.getElementById("resultText").innerHTML =
        "<strong>" + studentName + "</strong>,<br><br>" +
        "Your Score: <strong>" + score + " / " + questions.length + "</strong>";
}