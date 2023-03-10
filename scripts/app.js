

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

let check = setInterval(() => {
    const gameField = document.getElementById("gameField");
    const ball = document.getElementById("ball");
    const arrow = document.getElementById("arrow");
    const ballJumpHeight = window.getComputedStyle(ball).getPropertyValue("bottom").slice(0, -2);
    const ballDownHeight = window.getComputedStyle(ball).getPropertyValue("height").slice(0, -2);
    const arrowPosition = window.getComputedStyle(arrow).getPropertyValue("left").slice(0, -2);

    // console.log( 165 > +arrowPosition );
    if(165 > arrowPosition && 100 < arrowPosition  && 90 < ballDownHeight){
        // console.log("loss");
        arrow.style.left = arrowPosition +"px"
        arrow.style.animation = "none"
        // gameField.innerHTML+= `<h1 style = "color: 'red'; position: 'absolute'; top:'47%'" >Game Over!</h1>`
    }
}, 100);