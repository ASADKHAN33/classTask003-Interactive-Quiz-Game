const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

const questionArea = document.getElementById('question-area');
const answerButtons = document.querySelectorAll('.btn');
const scoreArea = document.getElementById('score-area');
const nextButton = document.getElementById('next-btn');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionArea.textContent = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.onclick = () => checkAnswer(currentQuestion.answers[index]);
    });
}

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correct) {
        alert("Correct!");
        score++;
        scoreArea.textContent = `Score: ${score}`;
    } else {
        alert("Try Again!");
    }
}

nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz Over! Your score is ${score}`);
        currentQuestionIndex = 0;
        score = 0;
        scoreArea.textContent = `Score: ${score}`;
        loadQuestion();
    }
};

loadQuestion();
