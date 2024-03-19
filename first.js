const max = prompt("Enter a maximum number");

const random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("Guess the Number!");

while(true){
    if(guess == "quit"){
        console.log("you are quit!")
        break;
    }

    if(guess == random){
        console.log("You are Right! Congrats!! Random number was", random)
        break;
    } else if(guess < random){
       guess = prompt("Hint : Your guess was too small. Please try higher.")
    }
    else{
        guess = prompt("Hint : Your guess was too large. Please try smaller")
    }

}
