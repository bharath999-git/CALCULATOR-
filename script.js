let currentDisplay = "0";
const display = document.getElementById("display");
const message = document.getElementById("message");

const funnyMessages = [
    "Haha, just kidding! Use your brain!",
    "Nope, that's wrong! Try again!",
    "I failed math class on purpose!",
    "Did you really trust me? 😂",
    "The answer is... definitely not this!",
    "My calculator runs on random numbers!",
    "I'm just here to mess with you!",
    "Oops! My circuits are fried!",
    "I'm not a calculator, I'm a prankster!",
];

function appendToDisplay(value) {
    if (currentDisplay === "0" && value !== ".") {
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    display.textContent = currentDisplay;
}

function clearDisplay() {
    currentDisplay = "0";
    display.textContent = currentDisplay;
    message.textContent = "Try me! I'm terrible at math!";
}

function calculate() {
    try {
        // Get a random wrong answer
        const randomMultiplier = Math.random() * 10 - 5; // -5 to +5
        const realAnswer = eval(currentDisplay);
        const wrongAnswer = realAnswer + (realAnswer * randomMultiplier);
        
        display.textContent = wrongAnswer.toFixed(2);
        
        // Show a random funny message
        const randomIndex = Math.floor(Math.random() * funnyMessages.length);
        message.textContent = funnyMessages[randomIndex];
    } catch (error) {
        display.textContent = "Error";
        message.textContent = "Even I can't mess this up!";
    }
}
