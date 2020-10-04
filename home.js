var moves = ["scissors","rock","paper"];
var score=0;
const move = (m) => {
    document.getElementById("moveContainer").style.opacity=0;
    document.getElementById("moveContainer").style.zIndex=-1
    document.getElementById("gameContainer").style.opacity=1;
    document.getElementById("gameContainer").style.zIndex=1;
    var house=moves[Math.floor(Math.random() * moves.length)];
    console.log(m);
    document.getElementById("gameContainer").innerHTML='<div id="yourMove"><h2>You picked</h2><div class="'+m+'"><i class="fas fa-hand-'+m+'"></i></div></div><div id="result"></div><div id="houseMove"></div>';
    document.getElementById("houseMove").innerHTML='<h2>The house picked</h2><div class="'+house+'"><i class="fas fa-hand-'+house+'"></i></div>';
    var m=moves.indexOf(m);
    var h=moves.indexOf(house);
    var result=1;
    resultStatement="You win";
    if ((m+1)%3==h){
        result=-1;
        resultStatement="You loose";
    }
    if(m==h){
        result=0;
        resultStatement="Its a tie";
    }
    document.getElementById("result").innerHTML='<h2>'+resultStatement+'</h2><div id="play" onclick="play()">Play Again</div>';
    score=score+result;
    document.getElementById("score").innerHTML=score;
}
const play = () => {
    document.getElementById("moveContainer").style.opacity=1;
    document.getElementById("moveContainer").style.zIndex=1;
    document.getElementById("gameContainer").style.opacity=0;
    document.getElementById("gameContainer").style.zIndex=-1;
}