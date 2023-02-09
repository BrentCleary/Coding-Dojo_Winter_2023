/* 
    String: Reverse
    Given a string,
    return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

// add your pseudocode here

// create a temp variable to hold array
// loop through array, starting at end, and place in new array in reverse
// return new array
// call function


function reverseString(str)
{
    var newStr = "";
    for(var i = str.length-1; i >= 0; i--)
    {
        newStr+= (str[i]);
    }
    console.log(newStr);
}

reverseString(str1);
reverseString(str2);
reverseString(str3);
reverseString(str4);

// don't forget to call the function!




/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const strA = "object oriented programming";
const expectedA = "OOP";

// The 4 pillars of OOP
const strB = "abstraction polymorphism inheritance encapsulation";
const expectedB = "APIE";

const strC = "software development life cycle";
const expectedC = "SDLC";

// Bonus: ignore extra spaces
const strD = "  global   information tracker    ";
const expectedD = "GIT";

// add your pseudocode here


function acronymize(str) {
    var arrAcr = [];
    for(var i = 0; i <= str.length-1; i++)
    {
        if(str[i+1] != "" && str[i] == "")
        {
            arrAcr.pop(str[i]);
        }
    }
    console.log()
}
// don't forget to call the function!