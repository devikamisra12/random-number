

//random number 

let random;
random = Math.floor(Math.random()* 10 + 1);

let guessRandom = prompt("Pick a number between 0-10");

if(random == guessRandom){
    alert("You Won")
}
else {
    alert("Better Luck Next Time")
}