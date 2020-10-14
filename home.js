var moves = ["scissors","rock","paper"];
var userscore=0;
var localscore=localStorage.getItem("finalScore");
if(localscore!=null){
   userscore=parseInt(localscore); 
}

console.log((localscore));
window.onload = () =>{
   document.getElementById("score").innerHTML=userscore; 
}

const move = (m) => {
    document.getElementById("moveContainer").style.opacity=0;
    document.getElementById("moveContainer").style.zIndex=-1
    document.getElementById("gameContainer").style.opacity=1;
    document.getElementById("gameContainer").style.zIndex=1;
    var house=moves[Math.floor(Math.random() * moves.length)];
    console.log(m);
    document.getElementById("gameContainer").innerHTML='<div id="yourMove"><h2>You picked</h2><div class="'+m+'"><i class="fas fa-hand-'+m+'"></i></div></div><div id="result"></div><div id="houseMove"></div>';
    document.getElementById("houseMove").innerHTML='<h2>House picked</h2><div class="'+house+'"><i class="fas fa-hand-'+house+'"></i></div>';
    var mi=moves.indexOf(m);
    var h=moves.indexOf(house);
    var result=1;
    resultStatement="You win";
    if ((mi+1)%3==h){
        result=-1;
        resultStatement="You loose";
    }
    if(mi==h){
        result=0;
        resultStatement="Its a tie";
    }
    if(resultStatement=="You win"){
        var x=document.getElementsByClassName(m);
        for(xi=0;xi<x.length;xi++){
            x[xi].classList.add("winner");
        }
    }
    if(resultStatement=="You loose"){
        var x=document.getElementsByClassName(house);
        for(xi=0;xi<x.length;xi++){
            x[xi].classList.add("winner");
        }
    }
    document.getElementById("result").innerHTML='<h2>'+resultStatement+'</h2><div id="play" onclick="play()">Play Again</div>';
    userscore=userscore+result;
    document.getElementById("scoreContainer").style.animation='scorechange 0.4s ease-in-out 1 normal backwards';
    document.getElementById("score").innerHTML=userscore;
    var scorestring=userscore.toString();
    localStorage.setItem("finalScore",scorestring);
}
const play = () => {
    document.getElementById("moveContainer").style.opacity=1;
    document.getElementById("moveContainer").style.zIndex=1;
    document.getElementById("gameContainer").style.opacity=0;
    document.getElementById("gameContainer").style.zIndex=-1;
    var x=document.getElementsByClassName("rock");
    for(xi=0;xi<x.length;xi++){
        x[xi].classList.remove("winner");
    }
    var x=document.getElementsByClassName("paper");
    for(xi=0;xi<x.length;xi++){
        x[xi].classList.remove("winner");
    }
    var x=document.getElementsByClassName("scissors");
    for(xi=0;xi<x.length;xi++){
        x[xi].classList.remove("winner");
    }
    document.getElementById("scoreContainer").style.animation='none';
    
}