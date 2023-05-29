// Function to implement the craps game
function playCraps() {
    // Generate two random numbers between 1 and 6
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;

    // Calculate the sum of the two dice
    var sum = die1 + die2;

    // Get the result element
    var resultElement = document.getElementById("result");

    // Check the game rules and output the result
    if (sum === 7 || sum === 11) {
        resultElement.innerHTML = "CRAPS - You lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        resultElement.innerHTML = "You won!";
    } else {
        resultElement.innerHTML = "You pushed!";
    }
}
