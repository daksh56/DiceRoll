function diceRoll(){
//for player 1 n 2
function randomNumber1(a){
    var value =  Math.floor((Math.random() * 6) + 1);
    var randomDiceImg="./images/dice"+value+".png"
    document.querySelectorAll("img")[a].setAttribute("src",randomDiceImg);
    return value;
}
const a=randomNumber1(0);
const b=randomNumber1(1);

//for winner/looser/draw
if(a>b){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS ";
}
else if(a<b){
    
    document.querySelector("h1").innerHTML="PLAYER 2 WINS "
}

else{
    document.querySelector("h1").innerHTML="DRAW";
}
}
document.addEventListener("click", diceRoll)