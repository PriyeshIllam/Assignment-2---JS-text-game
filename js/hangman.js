//-----------------JS TEXT GAME ASSIGNMENT-------------------------------------------------------
let yourScore = 0;
let computerScore = 0;
const MAXLIMIT = 7;
const cars = [ "Subaru", "Volvo", "Ford", "Porsche", "Tesla"];
let index = (Math.floor(Math.random() * cars.length));
let selectedCar = cars[index];
let carResult= "*" .repeat(selectedCar.length);
let wrongLetter = [];

let yourInput;
do {
    yourInput = prompt("Guess the car. " + carResult + "\nYou tried the letters: "+ wrongLetter + '\nyourScore = '+ yourScore + '\ncomputerScore = ' + computerScore + '\nYou can make only ' + (MAXLIMIT - computerScore) + ' mistakes' ,   "Enter the letter");

  if(yourInput === null) {
   alert("You cancelled the game");
  } else {
    if (yourInput.length > 1) {
      alert("You entered multiple characters & only the first one will be considered");
    }
    let carAlphbet = yourInput[0];
    
    if(!carAlphbet.match(/[a-z]/i)){
      alert("You entered a special character it is not acceptable");
      continue;
    }

    if(selectedCar.toLowerCase().includes(carAlphbet.toLowerCase())) {
      yourScore ++;
      alert("Great Job, You got one point");
    } else {
      wrongLetter.push(carAlphbet); 
      alert("Oops..The alphabet is not matching");
      computerScore++;
    }
    for (let i=0; i< selectedCar.length; i++){
      if(selectedCar[i].toLowerCase() === carAlphbet.toLowerCase()){
        carResult = carResult.slice(0,i) + carAlphbet + carResult.slice(i+1);
      } 
    }
  }
} while (carResult.toLowerCase() != selectedCar.toLowerCase() && computerScore < MAXLIMIT  && yourInput != null);

alert("The selected car is "+ selectedCar);

if (carResult.toLowerCase() === selectedCar.toLowerCase()){
  alert("Hooray!! You won");
} else {
  alert("Computer won, Better luck next time!");
}


