var topPos = 50;
var leftPos = 0;

var ball = document.getElementById("ball")

setInterval('ballMove()', 100)

function ballMove(){
    ball.style.position = "absolute";
    ball.style.left = leftPos+'px';
    ball.style.top = topPos+'px';

    topPos += 5;
    leftPos += 15;

    if(leftPos >= window.innerWidth - 70){
        topPos = 50;
        leftPos = 0;
    }
}