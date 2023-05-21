let click = parseInt(localStorage.amountOfClicks) || 0
let dir =  document.getElementById("clicker");
let clic = document.createElement("h1")
let timeD = document.createElement("h1")
dir.appendChild(clic);
dir.appendChild(timeD)
clic.innerText = " You clicked  " + click + " times !"
timeLeft = 10;

function handleClicks (){
    click+=1;
    clic.innerText = " You clicked  " + click + " times !"
    localStorage.amountOfClicks = click

}
document.addEventListener("click", handleClicks);
let tiemr = setInterval(() => {
    if (timeLeft>0){
        timeLeft-=1 
        timeD.innerText="Time Left :" + timeLeft;
    } else{
        document.removeEventListener("click",handleClicks);
    }
}, 1000);   
  