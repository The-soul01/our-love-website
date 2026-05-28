// quiz.js: handles the quiz functionality

// Define quiz questions. Replace these with your own questions and answers.
const quizQuestions = [
    {
        question: "Where did we first meet?",
        options: ["At a coffee shop", "At a friend's party", "In college", "Online"],
        answer: 1 // index of correct option (0-based)
    },
    {
        question: "What is our favorite movie to watch together?",
        options: ["The Notebook", "Inception", "Spirited Away", "La La Land"],
        answer: 0
    },
    {
        question: "Which song always reminds you of me?",
        options: ["Perfect", "Thinking Out Loud", "All of Me", "A Sky Full of Stars"],
        answer: 2
    },
    {
        question: "What was the destination of our first trip together?",
        options: ["Goa", "Paris", "Manali", "A local park"],
        answer: 2
    },
    {
        question: "Which food do we love cooking together?",
        options: ["Pizza", "Pasta", "Biryani", "Ramen"],
        answer: 1
    }
];

// Load the quiz when the DOM is ready
document.addEventListener("DOMContentLoaded", loadQuiz);

function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    // Clear container in case of reload
    quizContainer.innerHTML = '';
    quizQuestions.forEach((q, index) => {
        // Create question wrapper
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('quiz-question');
        // Question text
        const questionText = document.createElement('h3');
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionText);
        // Options list
        q.options.forEach((option, optIndex) => {
            const label = document.createElement('label');
            label.classList.add('option-label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${index}`;
            input.value = optIndex;
            label.appendChild(input);
            // Add visible text next to the radio button
            const span = document.createElement('span');
            span.textContent = option;
            label.appendChild(span);
            questionDiv.appendChild(label);
        });
        quizContainer.appendChild(questionDiv);
    });
}

// Function to handle quiz submission
function submitQuiz() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value, 10) === q.answer) {
            score++;
        }
    });
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    // Display result message
    const total = quizQuestions.length;
    const percentage = Math.round((score / total) * 100);
    let message;
    if (percentage === 100) {
        message = `Amazing! You got all questions right (${score}/${total}). We are perfectly synced!`;
    } else if (percentage >= 60) {
        message = `Great job! You scored ${score}/${total}. You remember most of our moments.`;
    } else {
        message = `You scored ${score}/${total}. It's the perfect excuse to revisit our memories and create even more!`;
    }
    resultDiv.textContent = message;
    resultDiv.classList.add('show');
}
