const cup1 = document.getElementById('cup1');
const cup2 = document.getElementById('cup2');
const cup3 = document.getElementById('cup3');
const start = document.getElementById('start');
const ball = document.getElementById('ball');
const tryAgain = document.getElementById('try-again');
const scoreContainer = document.getElementById('score');
const levelContainer = document.getElementById('level');
const highestLevelContainer = document.getElementById('highest-level');

let rolling = false;
let gameStarted = false;
const cups = document.getElementsByClassName("cups");

const coords = [180, 230, 50, 0];
let cupSpots = [1, 2, 3];
let previousArray = [1, 2, 3];
let score = 0;
let highestLevel = 0;
let level = 0;
let transitionSpeed = 0;
let timeOutSpeed = 0;
let timeOutDevider = 0;
let waitTime = 1000;
let rollAmount = 0;

updateScores();

function updateScores() {
    scoreContainer.innerHTML = score;
    levelContainer.innerHTML = level;
    if (level > highestLevel) {
        highestLevel = level;
        highestLevelContainer.innerHTML = highestLevel;
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(a,b,c,d) {
    previousArray[0] = cupSpots[0];
    previousArray[1] = cupSpots[1];
    previousArray[2] = cupSpots[2];
    while (previousArray[0] === cupSpots[0] && previousArray[1] === cupSpots[1] && previousArray[2] === cupSpots[2]) {
        c=a.length;
        while(c)b=Math.random()*c--|                        0,d=a[c],a[c]=a[b],a[b]=d;
    }
}

function changeSpots(cup, from, to, how) {
    if (from === 3 && to === 2 && how === 1) {
        setTimeout(() => {
            changeCoords(cup, 230, 145);
            transitionDuration(cup, 1)
        }, timeOutSpeed / (timeOutDevider * 2));
    } 
    else if (from === 3 && to === 2 && how === 2) {
        setTimeout(() => {
            changeCoords(cup, 180, 105);
            transitionDuration(cup, 0.5);
            setTimeout(() => {
                changeCoords(cup, 230, 145);
            }, timeOutSpeed / timeOutDevider)
        }, timeOutSpeed / timeOutDevider);
    }
    if (from === 3 && to === 1 && 1 <= how <= 2) {
        setTimeout(() => {
            transitionDuration(cup, transitionSpeed / 2);
            changeCoords(cup, 140, 145);
            setTimeout(() => {
                changeCoords(cup, 230, 265);
            }, timeOutSpeed / timeOutDevider);
        }, timeOutSpeed / timeOutDevider);
    }
    if (from === 1 && to === 3 && 1 <= how <= 2) {
        setTimeout(() => {
            transitionDuration(cup, transitionSpeed / 2);
            changeCoords(cup, 80, 100);
            setTimeout(() => {
                changeCoords(cup, 230, 25);
            }, timeOutSpeed / timeOutDevider);
        }, timeOutSpeed / timeOutDevider);
    }
    if (from === 1 && to === 2 && how === 1) {
        setTimeout(() => {
            transitionDuration(cup, transitionSpeed);
            changeCoords(cup, 230, 145);
        }, timeOutSpeed / (timeOutDevider * 2));
    }
    else if (from === 1 && to === 2 && how === 2) {
        setTimeout(() => {
            changeCoords(cup, 180, 175);
            transitionDuration(cup, transitionSpeed / 2);
            setTimeout(() => {
                changeCoords(cup, 230, 145);
            }, timeOutSpeed / timeOutDevider)
        }, timeOutSpeed / timeOutDevider);
    }
    if (from === 2 && to === 1 && how === 1) {
        setTimeout(() => {
            transitionDuration(cup, transitionSpeed);
            changeCoords(cup, 230, 265);
        }, timeOutSpeed / (timeOutDevider * 2));
    }
    else if (from === 2 && to === 1 && how === 2) {
        setTimeout(() => {
            changeCoords(cup, 180, 215);
            transitionDuration(cup, transitionSpeed / 2);
            setTimeout(() => {
                changeCoords(cup, 230, 264);
            }, timeOutSpeed / timeOutDevider)
        }, timeOutSpeed / timeOutDevider);
    }
    if (from === 2 && to === 3 && how === 1) {
        setTimeout(() => {
            transitionDuration(cup, transitionSpeed);
            changeCoords(cup, 230, 25);
        }, timeOutSpeed / (timeOutDevider * 2));
    }
    else if (from === 2 && to === 3 && how === 2) {
        setTimeout(() => {
            changeCoords(cup, 180, 60);
            transitionDuration(cup, transitionSpeed / 2);
            setTimeout(() => {
                changeCoords(cup, 230, 25);
            }, timeOutSpeed / 3)
        }, timeOutSpeed / timeOutDevider);
    }
}

function timeOutSpeedCalc() {
    return transitionSpeed * 1000 / 2;
}

function changeSpeed() {
    if (level === 1) {
        transitionSpeed = 1;
        timeOutDevider = 2;
        waitTime = 600;
        timeOutSpeed = timeOutSpeedCalc();
        rollAmount = 10;
    }
    if (level === 2) {
        transitionSpeed = 0.8;
        timeOutDevider = 2;
        waitTime = 550;
        timeOutSpeed = timeOutSpeedCalc();
        rollAmount = 11;
    }
    if (level === 3) {
        transitionSpeed = 0.7;
        timeOutDevider = 2;
        waitTime = 525;
        timeOutSpeed = timeOutSpeedCalc();
        rollAmount = 13;
    }
    if (level === 4) {
        transitionSpeed = 0.75;
        timeOutDevider = 2;
        waitTime = 510;
        timeOutSpeed = timeOutSpeedCalc();
        rollAmount = 15;
    }
    if (level === 5) {
        transitionSpeed = 0.68;
        timeOutDevider = 2.5;
        waitTime = 500;
        timeOutSpeed = timeOutSpeedCalc();
        rollAmount = 16;
    }
    if (level === 6) {
        transitionSpeed = 0.62;
        timeOutDevider = 2.5;
        waitTime = 450;
        timeOutSpeed = timeOutSpeedCalc();
        rollAmount = 17;
    }
    if (level === 7) {
        transitionSpeed = 0.55;
        timeOutDevider = 3;
        waitTime = 360;
        timeOutSpeed = timeOutSpeedCalc();
        rollAmount = 20;
    }
    if (level === 8) {
        transitionSpeed = 0.5;
        timeOutDevider = 3;
        waitTime = 340;
        timeOutSpeed = timeOutSpeedCalc();
        rollAmount = 22;
    }
    if (level === 9) {
        transitionSpeed = 0.46;
        timeOutDevider = 3;
        waitTime = 330;
        timeOutSpeed = timeOutSpeedCalc();
        rollAmount = 24;
    }
    if (level === 10) {
        transitionSpeed = 0.4;
        timeOutDevider = 3;
        waitTime = 320;
        timeOutSpeed = timeOutSpeedCalc();
        rollAmount = 26;
    }
    if (level === 11) {
        transitionSpeed = 0.38;
        timeOutDevider = 3.3;
        waitTime = 310;
        timeOutSpeed = timeOutSpeedCalc();
        rollAmount = 28;
    }
    if (level === 12) {
        transitionSpeed = 0.34;
        timeOutDevider = 3.4;
        waitTime = 290;
        timeOutSpeed = timeOutSpeedCalc();
        rollAmount = 30;
    }
    if (level === 13) {
        transitionSpeed = 0.3;
        timeOutDevider = 3.5;
        waitTime = 270;
        timeOutSpeed = timeOutSpeedCalc();
        rollAmount = 35;
    }
}

function shuffler() {
    shuffleArray(cupSpots)
        changeSpots(1, previousArray.indexOf(1) + 1, cupSpots.indexOf(1) + 1, randomNumber(1, 2));
        changeSpots(2, previousArray.indexOf(2) + 1, cupSpots.indexOf(2) + 1, randomNumber(1, 2));
        changeSpots(3, previousArray.indexOf(3) + 1, cupSpots.indexOf(3) + 1, randomNumber(1, 2));
}
function roll(times, time) {
    rollWithDelay();
    function rollWithDelay() {
        const sleep = (time) => {    
        return new Promise((resolve) =>     setTimeout(resolve, time))
        }
        ball.hidden = true;
        const delayer = async () => {
        for (let i = 0; i < times; i++) {
            await sleep(time)
            shuffler();
            }
        }
        delayer();
    }
}

function clearValues() {
    score = 0;
    level = 0;
    updateScores();
}

function transitionDuration(cup, duration) {
    cups[cup - 1].style.transition = duration + "s"
}

function setScore() {
    score += (level * 100) + (level * 25);
}

function ballCoords() {
    if (cupSpots[0] === 2) {
        ball.style.right = "285px";
        ball.hidden = false;
    }
    else if (cupSpots[1] === 2) {
        ball.style.right = "165px";
        ball.hidden = false;
    }
    else if (cupSpots[2] === 2) {
        ball.style.right = "50px";
        ball.hidden = false;
    }
}

function checkIfRight(cup) {
    console.log(cup,"spots now" + cupSpots, "previous ar:" + previousArray)
    if (!rolling && gameStarted) {
        ballCoords();
        changeCoords(cup, 180);
        setTimeout(() => {
            changeCoords(cup, 230);
        }, 1300);
        if (cup === 2) {
            setScore();
            updateScores();
            start.hidden = false;
        }
        else if (cup === 1 || cup === 3) {
                changeCoords(1, 180);
                changeCoords(2, 180);
                changeCoords(3, 180);
            setTimeout(() => {
                changeCoords(1, 230);
                changeCoords(2, 230);
                changeCoords(3, 230);
            }, 1300);
            
            tryAgain.hidden = false;
            start.innerHTML = "Start";
        }
    }
    rolling = true;
}

function changeCoords(cup, top, right) {
    cups[cup - 1].style.top = top + "px";
    cups[cup - 1].style.right = right + "px";
}

cups[0].addEventListener("click", () => {checkIfRight(1)});
cups[1].addEventListener("click", () => {checkIfRight(2)});
cups[2].addEventListener("click", () => {checkIfRight(3)});
start.addEventListener("click", () => {
    ballCoords();
    level += 1;
    updateScores();
    changeSpeed();
    changeCoords(2, 180);
    setTimeout(() => {
        changeCoords(2, 230);
        gameStarted = true;
    }, 1300);
    start.hidden = "true";
    rolling = true;
    setTimeout(() => {
        roll(rollAmount, waitTime);
        setTimeout(() => {
            rolling = false;
        }, 6500);
    }, 2300);
    start.innerHTML = "Next Level";
});
tryAgain.addEventListener("click", () => {
    clearValues();
    tryAgain.hidden = true;
    start.hidden = false;
    });
