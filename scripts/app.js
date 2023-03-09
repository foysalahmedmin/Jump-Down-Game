

const ballAct = (className) => {
    document.getElementById("ball").classList.add(className);
    setTimeout(()=>{
    document.getElementById("ball").classList.remove(className);
    }, 500)

}

document.getElementById("gameField").onclick = () =>{
    ballAct('ballAnimationJump');
}