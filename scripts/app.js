

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

}, 2000);


let score = 0;
let check = setInterval(() => {
    const gameField = document.getElementById("gameField");
    const gameOver = document.getElementById("gameOverFiled");
    const ball = document.getElementById("ball");
    const arrow = document.getElementById("arrow");
    const fire = document.getElementById("fire");
    const ballJumpHeight = window.getComputedStyle(ball).getPropertyValue("bottom").slice(0, -2);
    const ballDownHeight = window.getComputedStyle(ball).getPropertyValue("height").slice(0, -2);
    const arrowPosition = window.getComputedStyle(arrow).getPropertyValue("left").slice(0, -2);
    const firePosition = window.getComputedStyle(fire).getPropertyValue("left").slice(0, -2);
    score += .05;
    console.log();
    document.getElementById('score').innerText = Math.floor(score);

    // console.log( 165 > +arrowPosition );
    if(160> arrowPosition && 90 < arrowPosition  && 90 < ballDownHeight){

        arrow.style.left = arrowPosition +"px";
        arrow.style.animation = "none";
        gameOver.style.display= "block";
        document.getElementById("last-score").innerText = Math.floor(score);
        clearInterval(blockChange);
        clearInterval(check);
        return false ;

    }else if(170> firePosition  && 90 < firePosition  && 75 > ballJumpHeight){

        fire.style.left = firePosition +"px";
        fire.style.animation = "none";
        gameOver.style.display= "block";
        document.getElementById("last-score").innerText = Math.floor(score);
        clearInterval(blockChange);
        clearInterval(check);
        return false ;
    }

}, 10);
