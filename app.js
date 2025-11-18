let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg= document.querySelector(".msg");
const scissor =document.querySelector("#scissoring");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    let options =["rock","paper","scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}
const draw =()=>{
    console.log("The Game Was  Draw");
    msg.innerText = "It was a draw! Play Again!";
    msg.style.backgroundColor="black"
   
}
const showwinner = (userWin,compchoice,userChoice)=>{
    if(userWin){
        userScore++;
        userscorepara.innerText=`${userScore}`;
        console.log("You win");
        msg.innerText = `You Won! Your ${userChoice} beats Opponent's ${compchoice} `;
        msg.style.backgroundColor= "green";
    }else{
        compScore++;
        compscorepara.innerText=`${compScore}`;
        console.log("You lose");
        msg.innerText = `Your Lose! Opponent's ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) =>{
    console.log("User Choice", userChoice);
    const compchoice= genCompChoice();
    console.log("Computer Choice",compchoice);
    if(userChoice === compchoice){
        draw();
        scissor.innerHTML = "";
    }
    else{
        let userWin= true;
        if(userChoice==="rock"){
            userWin= compchoice==="paper"? false:true;
            scissor.innerHTML = "";
        }
        else if(userChoice==="paper"){
            //rock,scissor
            userWin= compchoice==="rock"? false:true;
            scissor.innerHTML = "";
        }
        else if(userChoice==="scissor"){
            //rock,paper
            userWin= compchoice==="rock"?false:true;
            scissor.innerHTML="<img src='images/giphy.gif'>"

        }
        showwinner(userWin,compchoice,userChoice);
    }
}

choices.forEach((choice) =>{
   
    choice.addEventListener("click",()=>{
        let userChoice= choice.getAttribute("id");
        
        playGame(userChoice);
    })
})
