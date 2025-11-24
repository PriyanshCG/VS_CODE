// DOM Elements
const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft');
const maxScoreDisplay = document.querySelector('#maxScore');
const startBtn = document.querySelector('#startBtn');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const message = document.querySelector('#meassage');
const hitDisplay = document.querySelector('#hit');
const glowing = document.querySelector('#glow');

// NEW DOM targets
const lastScoreDisplay = document.querySelector('#lastScore'); // NEW
const fastestHitDisplay = document.querySelector('#fastestHit'); // NEW

// Game State
let score = 0;
let time = 30;
let bestScore = 0;
let playGame = false;
let gameId = null;
let popTimeoutId = null;
let isPaused = false;
let hit = 0;

// Create Flex Container for Buttons
const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'space-between';
buttonContainer.style.gap = '10px';
buttonContainer.style.marginBottom = '20px';
startBtn.insertAdjacentElement('afterend', buttonContainer);

// Create Pause/Resume Button
const pauseBtn = document.createElement('button');
pauseBtn.id = 'pauseBtn';
pauseBtn.className = 'start-btn';
pauseBtn.textContent = 'Pause';
pauseBtn.disabled = true;

// Create Reset Button
const resetBtn = document.createElement('button');
resetBtn.id = 'resetBtn';
resetBtn.className = 'start-btn';
resetBtn.textContent = 'Reset';

// Append both buttons into flex container
buttonContainer.appendChild(pauseBtn);
buttonContainer.appendChild(resetBtn);

// Utility Functions
function webLoad() {
  onLoad();
  displayContent();
}

function onLoad() {
  const temp = localStorage.getItem('highScoreMole');
  bestScore = temp != null ? Number(temp) : 0;

  // NEW: Load session values (last score & fastest hit)
  const last = sessionStorage.getItem('lastScore');
  lastScoreDisplay.textContent = last !== null ? last : '-';

  const fastest = sessionStorage.getItem('fastestHit');
  fastestHitDisplay.textContent = fastest !== null ? `${fastest}ms` : '-';
}

function displayContent() {
  scoreDisplay.textContent = score;
  timeLeftDisplay.textContent = time;
  maxScoreDisplay.textContent = bestScore;
  hitDisplay.textContent = hit;
}

function clearTimers() {
  if (gameId) clearInterval(gameId);
  if (popTimeoutId) clearTimeout(popTimeoutId);
  gameId = null;
  popTimeoutId = null;
}

function hideAllMoles() {
  moles.forEach(m => {
    m.classList.remove('up', 'bonked');
    delete m.dataset.start; // clear any stored start time
  });
}

// Game Logic
function endGame() {
  clearTimers();
  playGame = false;
  isPaused = false;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  pauseBtn.textContent = 'Pause';
  hideAllMoles();
  startBtn.textContent = "play again";

  // NEW: Save last score to sessionStorage BEFORE resetting score
  sessionStorage.setItem('lastScore', String(score));
  lastScoreDisplay.textContent = String(score);

  if (score > bestScore) {
    glowing.style.background = 'gold';
    setTimeout(() => {
      glowing.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }, 3000);
    bestScore = score;
    localStorage.setItem('highScoreMole', bestScore);
    alert(`New Best! Score: ${score}`);
  } else {
    alert(`Your score: ${score}`);
  }

  if (score > 50) {
    scoreDisplay.style.color = 'gold';
  }

  // reset game variables
  score = 0;
  time = 30;
  hit = 0;
  displayContent();
}

function randomTime(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomHole() {
  return holes[Math.floor(Math.random() * holes.length)];
}

function popGame() {
  if (!playGame) return;
  const timer = randomTime(500, 1500);
  const timerFast = randomTime(600, 1000);
  const hole = randomHole();
  const mole = hole.querySelector('.mole');

  // make mole appear and record its start time (for fastest-hit)
  mole.classList.add('up');
  mole.dataset.start = String(Date.now()); // NEW: store timestamp (ms)

  // schedule mole hide
  popTimeoutId = setTimeout(() => {
    mole.classList.remove('up');
    delete mole.dataset.start;
    if (playGame) popGame();
  }, time < 10 ? timerFast : timer);
}

// Controls
function startGame() {
  if (playGame && !isPaused) return;

  // Bonus: clear last game score when starting new game
  sessionStorage.removeItem('lastScore');
  lastScoreDisplay.textContent = '-';

  time = 30;
  score = 0;
  playGame = true;
  isPaused = false;
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  pauseBtn.textContent = 'Pause';

  displayContent();
  popGame();

  gameId = setInterval(() => {
    time--;
    if (time < 0) endGame();
    displayContent();
  }, 1000);
}

function pauseGame() {
  if (!playGame || isPaused) return;
  isPaused = true;
  playGame = false;
  clearTimers();
  hideAllMoles();
  pauseBtn.textContent = 'Resume';
}

function resumeGame() {
  if (!isPaused) return;
  isPaused = false;
  playGame = true;
  pauseBtn.textContent = 'Pause';
  popGame();

  gameId = setInterval(() => {
    time--;
    if (time < 0) endGame();
    displayContent();
  }, 1000);
}

function resetGame() {
  clearTimers();
  playGame = false;
  isPaused = false;
  hideAllMoles();

  score = 0;
  time = 30;
  hit = 0;
  bestScore = 0;
  localStorage.setItem('highScoreMole', 0);

  startBtn.disabled = false;
  pauseBtn.disabled = true;
  pauseBtn.textContent = 'Pause';
  displayContent();

  // Also clear session values on hard reset
  sessionStorage.removeItem('lastScore');
  sessionStorage.removeItem('fastestHit');
  lastScoreDisplay.textContent = '-';
  fastestHitDisplay.textContent = '-';
}

// Event Listeners
function bonk(event) {
  if (!event.isTrusted || !playGame) return;
  const mole = event.target;
  if (mole.classList.contains('up')) {
    score++;
    hit++;
    message.textContent = "Whack!!!!!!!!!";

    // compute time taken from when this mole popped (ms)
    const start = mole.dataset.start ? parseInt(mole.dataset.start, 10) : null;
    if (start) {
      const timeTaken = Date.now() - start;

      // compare with sessionStorage value and store if faster
      const curFast = sessionStorage.getItem('fastestHit');
      if (!curFast || timeTaken < Number(curFast)) {
        sessionStorage.setItem('fastestHit', String(timeTaken));
        fastestHitDisplay.textContent = `${timeTaken}ms`;
      } else {
        fastestHitDisplay.textContent = `${curFast}ms`;
      }
    }

    mole.classList.remove('up');
    mole.classList.add('bonked');
    delete mole.dataset.start;
  }
  setTimeout(() => event.target.classList.remove('bonked'), 300);
  displayContent();
}

webLoad();
moles.forEach(m => m.addEventListener('click', bonk));
startBtn.addEventListener('click', startGame);
pauseBtn.addEventListener('click', () => (isPaused ? resumeGame() : pauseGame()));
resetBtn.addEventListener('click', resetGame);
