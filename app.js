const questions = [
    {
        'que': 'Which of the following is the most famous character created by Sanrio?',
        'a': 'Pikachu',
        'b': 'Mickey Mouse',
        'c': 'Hello Kitty',
        'd': 'Spongebob SquarePants',
        'correct': 'c'
    },
    {
        'que': 'What year was the Hello Kitty character created?',
        'a': '1974',
        'b': '1980',
        'c': '1995',
        'd': '1978',
        'correct': 'a'
    },
    {
        'que': 'What is Hello Kitty’s real name?',
        'a': 'Kitty White',
        'b': 'Fifi',
        'c': 'Mimi Cat',
        'd': 'Bella White',
        'correct': 'a',
    },
    {
        'que': 'Which Sanrio character is known as a little penguin who lives in Antarctica?',
        'a': 'Cinnamonroll',
        'b': 'Keroppi',
        'c': 'Tuxedosam',
        'd': 'Pompompurin',
        'correct': 'c'
    },
    {
        'que': 'Which Sanrio character is a golden retriever known for his love of pudding?',
        'a': 'Chococat',
        'b': 'Kuromi',
        'c': 'Pompompurin',
        'd': 'Badtz-Maru',
        'correct': 'c'
    }
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");

// Load the first question
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

// Handle the quiz submission
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
};

// Get the selected answer
const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

// Reset the options
const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
};

// End the quiz and display the score
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
        <h3>Thank you for taking the quiz</h3>
        <h2>Your score is: ${right} / ${total}</h2>
    </div>
    `;
};

// Start the quiz when the Start button is clicked
document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('openingPage').style.display = 'none'; // Hide opening page
    document.getElementById('quizContainer').style.display = 'flex'; // Show quiz container
    loadQuestion(); // Load the first question
});
