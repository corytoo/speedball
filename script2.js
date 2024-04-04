var topPos = 50;
var leftPos = 0;
var intervalID;

var ball = document.getElementById("ball")
ball.style.position = "absolute"


document.getElementById('slider').addEventListener('input', function(){
    console.log(document.getElementById("slider").value)
    speed = document.getElementById("slider").value

    clearInterval(intervalID)
    intervalID = setInterval("ballMove()", speed)
})

function ballMove(){
    ball.style.left = leftPos+'px';
    ball.style.top = topPos+'px';

    topPos += 5;
    leftPos += 15;
    
    if(leftPos >= window.innerWidth - 70){
        topPos = 50;
        leftPos = 0;
    }
}