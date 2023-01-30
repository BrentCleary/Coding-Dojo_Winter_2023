// // returns the next lowest integer
// Math.floor();
// // prints the next highest integer
// Math.ceil();
// // returns a random float
// Math.random();

// // Returns a random number between between min and max value (inclusive)
// function d6(min, max) {
//     var roll = Math.floor(Math.random() * (max - min + 1) + min); 
//     return roll;
// }

// var playerRoll = d6(1,6);
// console.log("The player rolled: " + playerRoll);


// function JustRandom()
// {
//     var rando = Math.random();
//     return rando;
// }

// var RandomNumber = JustRandom();
// console.log("Random number is: " + RandomNumber);



var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function Magic8Ball (arr1)
{
    var totalanswers = arr1.length-1;
    var answerIndex = Math.floor(Math.random() * (totalanswers + 1)) ;
    var answer = arr1[answerIndex];
    return answer;
}

var ultimateTruth = Magic8Ball(lifesAnswers);
console.log("Your answer is: " + ultimateTruth);

// Select a random number between 0-19
// Select the index in the array
// Return the index from the array









