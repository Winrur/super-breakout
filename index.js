let ballX = 75;
let ballSpeedX = 5;
let ballY = 5;
let ballSpeedY = 7;

const PADDLE_WIDTH = 100;
const PADDLE_THICKNESS = 10;
let paddleX = 400;

let canvas, ctx, fps;

function updateMousePos(evt) {
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;

    let mouseX = evt.clientX - rect.left - root.scrollLeft;

    paddleX = mouseX;
}

window.onload = function() {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");

    fps = 60;
    setInterval(updateAll, 1000/fps);

    canvas.addEventListener("mousemove", updateMousePos);
};

function updateAll() {
    moveAll();
    drawAll();
}

function drawRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    ctx.fillStyle = fillColor;
    ctx.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function drawCircle(centerX, centerY, radius, fillColor) {
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    ctx.fill();
}

function drawAll() {
    // Draw background  
    drawRect(0, 0, canvas.width, canvas.height, "black");
    // Draw ball
    drawCircle(ballX, ballY, 10, "white");
    // Draw paddle
    drawRect(paddleX, canvas.height-PADDLE_THICKNESS, PADDLE_WIDTH, PADDLE_THICKNESS, "white");
}


function moveAll() {
    ballX += ballSpeedX; 
    ballY += ballSpeedY;

    if(ballX < 0){
        ballSpeedX *= -1;
    }
    if(ballX > canvas.width) {
        console.log("test1234");
        ballSpeedX *= -1;
    }
    if(ballY < 0) {
        ballSpeedY *= -1;
    }
    if(ballY > canvas.height) {
        console.log("test1234");
        ballSpeedY *= -1;
    }
}

