//-----------------JS TEXT GAME ASSIGNMENT-------------------------------------------------------
let yourScore = 0;
let computerScore = 0;
const MAXLIMIT = 7;
const cars = [ "Subaru", "Volvo", "Ford", "Porsche", "Tesla"];
index = (Math.floor(Math.random() * cars.length));
selectedCar = cars[index];
//console.log(selectedCar, selectedCar.length);
let carResult= "*" .repeat(selectedCar.length);
console.log("car result" ,carResult)

let wrongLetter = [];

do {
  yourInput = prompt("Guess the car. " + carResult + "\nYou tried the letters: "+ wrongLetter, "Enter the letter");

  if(yourInput == null) {
    console.log("You cancelled the game");
  } else {
    let carAlphbet = yourInput[0];
    console.log("car Alphbet", carAlphbet);

    if(!carAlphbet.match(/[a-z]/i)){
      console.log("You entered a special character it is not acceptable");
      continue;
    }

    if(selectedCar.toLowerCase().includes(carAlphbet.toLowerCase())) {
      yourScore ++;
      console.log("The alphabet is matching");
    } else {
      wrongLetter.push(carAlphbet); 
      console.log("The alphabet is not matching");
      computerScore++;
    }

    console.log("Your score =", yourScore);
    console.log("Computer score = ", computerScore);
    for (let i=0; i< selectedCar.length; i++){
      if(selectedCar[i].toLowerCase() == carAlphbet.toLowerCase()){
      // console.log("The alpahbet is present in ", i);
      carResult = carResult.slice(0,i) + carAlphbet + carResult.slice(i+1);
      } 
    }
  }
} while (carResult.toLowerCase() != selectedCar.toLowerCase() && computerScore < MAXLIMIT  && yourInput != null);

console.log("The selected car is ", selectedCar);

if (carResult.toLowerCase() == selectedCar.toLowerCase()){
  console.log("You won");
  alrt("You won");
} else {
  console.log("Computer won");
  alert("Computer won");
}


