

let gamesqn=[];
let usersqn=[];

let btns=["red", "yellow","green","blue"];

let started=false;
let level=0;
let highScore = 0;

let h2=document.querySelector("h2");
//let btn=document.querySelectorAll("button");
let start=document.querySelector(".start");
let btn=document.querySelector("btn");

 start.addEventListener("click",function(){
     if(started==false){
        console.log("game started");
        started=true;
        levelUp();
     }
});
 
    
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
      btn.classList.remove("flash");
    }, 200);
  }
  
  function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
      btn.classList.remove("userflash");
    }, 250);
  }

 function levelUp(){
    usersqn=[];
    level++;
    h2.innerText=`Level  ${level}`;
    h2.style.border="2px solid black";
    h2.style.width="20rem";
    h2.style.margin="auto";
    h2.style.marginTop="1.2rem";
    h2.style.borderRadius="12px"
    h2.style.backgroundColor="rgb(10, 10, 63)";
    h2.style.color="white"; 
   
   audio();
   
    //random button choose
    

  let ranIdx=Math.floor(Math.random()*3);
  let ranColor=btns[ranIdx];
  let ranBtn=document.querySelector(`.${ranColor}`);
//   console.log(ranBtn);
//   console.log(ranColor);
//   console.log(ranIdx);
     
     gamesqn.push(ranColor);
     console.log(gamesqn);
     gameFlash(ranBtn);
    
}

function checkAns(idx) {
    // console.log(`curr level: ${level}`);

  
    if (usersqn[idx] === gamesqn[idx]) {
      if (usersqn.length == gamesqn.length) {
        setTimeout(levelUp, 1000);
      }
    } else {
      highScore = HighScr(level);
      h2.innerHTML = `Game Over! <br> Your score was: <b>${level}<b><br><b>High Score: ${highScore}</b><br> Click on Start to play again.`;
      
      h2.style.border="2px solid black";
      h2.style.width="20rem";
      h2.style.margin="auto";
      h2.style.marginTop="1.2rem";
      h2.style.borderRadius="12px"
      h2.style.backgroundColor="rgb(10, 10, 63)";
      h2.style.color="white"; 
      
      
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "rgb(142, 56, 212)";
      }, 500);
      audiolose();
       reset();
    }
  }




function btnpress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    usersqn.push(userColor); 
     audioclick();
    checkAns(usersqn.length-1);
 }
 let allbtns=document.querySelectorAll(".btn");
 for(btn of allbtns){
    btn.addEventListener("click", btnpress);
 }

 function reset() {
    usersqn = [];
    gamesqn = [];
    started = false;
    level = 0;
  }
  
  function HighScr(lvl) {
    if (lvl > highScore) {
      highScore = lvl;
    }
    return highScore;
}


function audio() {
  let msc = new Audio("onmusic.wav");
  msc.play();
}

function audiolose() {
  let msc = new Audio("gameover.wav");
  msc.play();
}

function audioclick() {
  let msc = new Audio("music3.wav");
  msc.play();
}