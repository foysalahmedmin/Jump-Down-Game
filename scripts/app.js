

const ballAct = (className) => {
    const ball = document.getElementById("ball");
    if(!ball.classList.contains(className)){
        ball.classList.add(className);
        setTimeout(()=>{
        ball.classList.remove(className);
        }, 500)
    }
    

}

document.onkeydown = (e) =>{

    // e = e || window.event;

    if (e.keyCode == '38') {
        ballAct('ballAnimationJump');
    }
    else if (e.keyCode == '40') {
        ballAct('ballAnimationDown');
    }

};


let blockChange = setInterval(() => {
    console.log();
    const arrow = document.getElementById("arrow");
    const fire = document.getElementById("fire");
    let blockNum = Math.ceil(Math.random() * 2);
    if(blockNum == 1){
        arrow.style.display = "block";
        fire.style.display = "none";
    }else if(blockNum == 2){
        arrow.style.display = "none";
        fire.style.display = "block";
    }

}, 2000)

let check = setInterval(() => {
    const gameField = document.getElementById("gameField");
    const gameOver = document.getElementById("gameOverFiled");
    const ball = document.getElementById("ball");
    const arrow = document.getElementById("arrow");
    const ballJumpHeight = window.getComputedStyle(ball).getPropertyValue("bottom").slice(0, -2);
    const ballDownHeight = window.getComputedStyle(ball).getPropertyValue("height").slice(0, -2);
    const arrowPosition = window.getComputedStyle(arrow).getPropertyValue("left").slice(0, -2);

    // console.log( 165 > +arrowPosition );
    if(160> arrowPosition && 90 < arrowPosition  && 90 < ballDownHeight){
        // console.log("loss");
        arrow.style.left = arrowPosition +"px"
        arrow.style.animation = "none"
        gameOver.style.display= "block"
    }
}, 10);