
var currentScore = document.querySelector('#currentScore');
var highScore = document.querySelector('#highScore');
var timer = document.querySelector('#timer');
var clickButton = document.querySelector('#clickButton');
var startButton = document.querySelector('#startButton');
var pauseButton = document.querySelector('#pauseButton');
var resetButton = document.querySelector('#resetButton');
var statusMessage = document.querySelector('#statusMessage');
var clickpermin = document.querySelector('#cpm');
var body = document.querySelector('body');

var current = 0;
var high = 0;
var time1 = 10;
var track = false;
var idTrack = null;
var paused = false; 
var cpharhil = 0;

function loadContent(){
    dataLoad();
    displayMessage();
}

function dataLoad(){
    var temp = localStorage.getItem('highScore');
    if(temp != null){
        high = parseInt(temp);
    } else {
        high = 0;
    }
}

function displayMessage(){
    currentScore.textContent = current;
    highScore.textContent = high;
    timer.textContent = time1;
    if(current > 20){
        currentScore.style.color='red';
    }
}

function statuMsg(msg){
    statusMessage.textContent = msg;
}

function showLoseAlert() {
    alert("try agian!!!!");
}
function showWinAlert() {
    alert("🎉 Congratulations! You beat the high score! 🏆");
}

function endGame(){
    clearInterval(idTrack);
    track = false;
    clickButton.disabled = true;
    startButton.disabled = false;
    startButton.innerText= "Play Again";
    pauseButton.disabled = true;
    if(current > high){
        localStorage.setItem('highScore', current);
        high = current;

        body.style.background = 'gold';
        setTimeout(function() {
            body.style.background = 'blue';
        }, 1000);
        displayMessage();
        statuMsg("🎉 Great job! Your score is higher than the previous one! 🏆");
        // showWinAlert();
    } else {
        statuMsg("😕 Oops! Your score is lower than your high score. Try again! 💪");
        showLoseAlert();
    }
    var temp = current/10 ;
    cpharhil = temp ;
    clickpermin.textContent=cpharhil;
}
function startGame(){
    track = true;
    paused = false;
    time1 = 10;
    current = 0;
    clickButton.disabled = false;
    startButton.disabled = true;
    pauseButton.disabled = false
     setTimeout(function(){
        statuMsg("click me");
        displayMessage();
    },1000)
     setTimeout(function(){
        statuMsg("Click as fast as possible");
        displayMessage();
    },2000)

    idTrack = setInterval(function(){
        if(!paused){
            time1--;
            if(time1 <= 0){
                endGame();
            }
            displayMessage();
        }
    }, 1000);
}

function clickMe(){
    if(track && !paused){
        current++;
        displayMessage();
        clickButton.style.transform = 'scale(1.1)'
   

    }
}

function pauseGame(){
    if(!track) return;
    paused = !paused;
    if(paused){
        statuMsg("⏸ Game paused! Click resume to continue!");
        pauseButton.textContent = "Resume";
        clickButton.disabled = true;
    } else {
        statuMsg("▶ Game resumed! Keep clicking!");
        pauseButton.textContent = "Pause";
        clickButton.disabled = false;
    }
}

function resetGame(){
    localStorage.removeItem('highScore');
    high = 0;
    current = 0;
    time1 = 10;
    displayMessage();
    statuMsg("🔄 Game has been reset. Ready for a fresh start! 🌟");
    clearInterval(idTrack);
    track = false;
    paused = false;
    startButton.disabled = false;
    clickButton.disabled = true;
    pauseButton.disabled = true;
    pauseButton.textContent = "Pause";
}

startButton.addEventListener('click', startGame);
clickButton.addEventListener('click', clickMe);
pauseButton.addEventListener('click', pauseGame);
resetButton.addEventListener('click', resetGame);