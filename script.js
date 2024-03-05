

let attempts = 3;
let number = Math.round(Math.random() * 100);
console.log(number);

let guess = +prompt(`Guess a number between 1 - 100`);

while (attempts > 0 && attempts <= 3) {
  if (guess < 0 || guess > 100) {
    alert("Please enter a number between 0 and 100");
    guess = +prompt("Please enter a number (0-100)");
  } else if (guess > number) {
    alert("Wrong number, please enter lower number");
    --attempts;
    alert(` You have ${attempts} attempts left`);
    guess = +prompt("Please enter a number (0-100)");
  } else if (guess < number) {
    alert("Wrong number, please enter higher number");
    --attempts;
    alert(` You have ${attempts} attempts left`);
    guess = +prompt("Please enter a number (0-100)");
  } else {
    alert("YOU WON!!");
    break;
  }
  if (attempts == 0) {
    alert("Game Over!!");
  }
}


 