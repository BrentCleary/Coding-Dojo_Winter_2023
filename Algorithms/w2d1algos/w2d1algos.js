// returns the next lowest integer
Math.floor();
// prints the next highest integer
Math.ceil();
// returns a random float
Math.random();

// Returns a random number between between min and max value (inclusive)
function d6(min, max) {
    var roll = Math.floor(Math.random() * (max - min + 1) + min); 
    return roll;
}

var playerRoll = d6(1,6);
console.log("The player rolled: " + playerRoll);


function JustRandom()
{
    var rando = Math.random();
    return rando;
}

var RandomNumber = JustRandom();
console.log("Random number is: " + RandomNumber);



