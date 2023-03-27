
// #1
console.log(hello);                                   
var hello = 'world';
// console.log(hello); // logs undefined                                  
// var hello = 'world'; // hello = 'world'


console.log("---------------")

// #2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// 'magnet'

console.log("---------------")

// #3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// 'super cool'


console.log("---------------")


// #4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// "chicken"
// "half-chicken"


console.log("---------------")

// #5
// mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// Ouput - Got this one wrong
// "chicken"
// "fish"
// undefined
// undefined

console.log("---------------")

// #6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// Output
// disco
// rock
// r&b
// disco


console.log("---------------")

// #7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

/* Ouput
"san jose"
"seattle" < hoisted
"burbank"
"san jose"
*/


console.log("---------------")

// #8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// Output
// {"Chicago",  65}
// "closed for now"





