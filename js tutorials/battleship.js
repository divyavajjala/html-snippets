// var location1 = 3;
// var location2 = 4;
// var location3 = 5;
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) { // While the ship isn't sunk, we're still in the game, so keep looping. Once the ship is sink,the while loop is going to stop looping. //
    guess = prompt("Ready, aim, fire! (enter number 0-6):");
    if (guess < 0 || guess > 6) { //if guess is lessthan 0 (-1,-2,etc) or guess is greaterthan 6(7,8,etc)if any condition is true it displays a alert(please enter valid no)//
        alert("Please enter a valid number !");
    }
    else {
        guesses = guesses + 1; //add one to guesses//
        if (guess == location1 || guess == location2 || guess == location3) { //if the user's guess matches the location//
            alert("HIT !"); //tell user "hit"//
            hits = hits + 1; //add 1 to hits//
            //the above if statement we can write using || operator
            //if(guess == location1){
            //     hits = hits+1;
            // }
            // else if (guess == location2){
            //     hits = hits+1;
            // }
            // else if(guess == location3){
            //     hits = hits+1;
            // }
            if (hits == 3) { //if number of hits is 3//
                isSunk = true;
                alert("You sank my battleship!");
            }
        }
        else {
            alert("MISS !")
        }
    }
}
var stats = "you took" + guesses + "guesses to sink my battleship" + "which means your shooting accuracy was" + (3 / guesses);
alert(stats);