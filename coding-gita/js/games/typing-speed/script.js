// DOM Elements
const textDisplay = document.querySelector("#textDisplay");
const typingArea = document.querySelector("#typingArea");
const timerDisplay = document.querySelector("#timer");
const wpmDisplay = document.querySelector("#wpm");
const accuracyDisplay = document.querySelector("#accuracy");
const bestWPMDisplay = document.querySelector("#bestWPM");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");

// Test texts
const testTexts = [
    "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster.",
    "Technology has revolutionized the way we communicate and work in the modern digital era.",
    "Typing speed is an essential skill for anyone working with computers in today's workplace.",
];

// Game state
let currentText = "";
let selectedTime = 60;       // default
let timeleft = selectedTime;
let timerInterval = null;
let startTime = null;
let bestWPM = 0;

// Load best WPM
function webLoad() {
    const temp = sessionStorage.getItem("previousWpm");
    bestWPM = temp ? parseInt(temp) : 0;
    displayContent();
}
webLoad();

// Display
function displayContent() {
    timerDisplay.textContent = timeleft;
    bestWPMDisplay.textContent = bestWPM;
}

// Time selection
function setTime(seconds) {
    // Prevent time changing during test
    if (timerInterval !== null) return;

    selectedTime = seconds;
    timeleft = seconds;
    displayContent();

    const buttons = document.querySelectorAll(".time-btn");
    buttons.forEach(btn => {
        if (parseInt(btn.textContent) === seconds) {
            btn.disabled = true;
            btn.classList.add("active-time");
        } else {
            btn.disabled = false;
            btn.classList.remove("active-time");
        }
    });
}

// Start test
function startGame() {
    clearInterval(timerInterval);
    timeleft = selectedTime;
    startBtn.disabled = true;

    // Disable time selection during the test
    const buttons = document.querySelectorAll(".time-btn");
    buttons.forEach(btn => btn.disabled = true);

    currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
    textDisplay.textContent = currentText;

    typingArea.disabled = false;
    typingArea.value = "";
    typingArea.focus();
    startTime = null;

    timerInterval = setInterval(() => {
        timeleft--;
        if (timeleft <= 0) {
            endGame();
        }
        displayContent();
    }, 1000);
}

// End test
function endGame() {
    clearInterval(timerInterval);
    timerInterval = null;
    typingArea.disabled = true;
    startBtn.disabled = false;

    // Re-enable time buttons after test ends
    const buttons = document.querySelectorAll(".time-btn");
    buttons.forEach(btn => {
        if (parseInt(btn.textContent) === selectedTime) {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
    });

    // Final WPM calculation
    const typed = typingArea.value.trim();
    const words = typed.split(/\s+/).filter(w => w.length > 0);
    const elapsed = (Date.now() - startTime) / 1000 / 60;
    const finalWpm = elapsed > 0 ? Math.floor(words.length / elapsed) : 0;

    // Update best WPM
    if (finalWpm > bestWPM) {
        bestWPM = finalWpm;
        sessionStorage.setItem("previousWpm", bestWPM);
        bestWPMDisplay.textContent = bestWPM;
    }
}

// Update WPM + Accuracy live
function updateStats() {
    const typed = typingArea.value.trim();
    const words = typed.split(/\s+/).filter(w => w.length > 0);
    const elapsed = (Date.now() - startTime) / 1000 / 60;
    const wpm = elapsed > 0 ? Math.floor(words.length / elapsed) : 0;
    wpmDisplay.textContent = wpm;

    let correctChars = 0;
    for (let i = 0; i < typed.length; i++) {
        if (currentText[i] === typed[i]) correctChars++;
    }

    const accuracy = typed.length > 0 ? Math.floor((correctChars / typed.length) * 100) : 0;
    accuracyDisplay.textContent = accuracy + "%";
}

// Highlight text
function Highlights() {
    const typed = typingArea.value;
    let html = "";

    for (let i = 0; i < currentText.length; i++) {
        if (i < typed.length) {
            html += currentText[i] === typed[i]
                ? `<span class="correct">${currentText[i]}</span>`
                : `<span class="incorrect">${currentText[i]}</span>`;
        } else {
            html += currentText[i];
        }
    }

    textDisplay.innerHTML = html;
}

// On type
function wordType() {
    if (!startTime) startTime = Date.now();
    updateStats();
    Highlights();
}

// Reset
function resetGame() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeleft = selectedTime;
    startTime = null;

    typingArea.value = "";
    typingArea.disabled = true;
    textDisplay.textContent = "Click 'Start Test' to begin typing!";
    wpmDisplay.textContent = "0";
    accuracyDisplay.textContent = "0%";

    startBtn.disabled = false;
    displayContent();

    // Re-enable time buttons
    const buttons = document.querySelectorAll(".time-btn");
    buttons.forEach(btn => {
        if (parseInt(btn.textContent) === selectedTime) {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
    });
}

// Event Listeners
startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);
typingArea.addEventListener("input", wordType);