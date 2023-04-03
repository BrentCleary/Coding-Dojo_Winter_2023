// Cancel pairs until one or zero elements remain

/* 
  Given to me (Neil) in an interview
  Given a string
  return whether or not it's possible to make a palindrome out of the string's
  characters.
  What is it about a string that makes it possible for it to become a
  palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */

// function canStringBecomePalindrome(str) {

//     var tempArr = [];
//     //push new element into temp
//     if(str.length = 0)
//     {
//         return false;
//     }
//     for(var i = 0; i < str.length; i++)
//     {
//         tempArr.push(str[i])
//         //check if current element is already present
//         for(var j = 0; j < str.length; j++){
//             if(str[j] == str[i])
//             {
//                 tempArr.slice(i);
//                 tempArr.slice(j);
//             }
//         }
//     }

//     if(tempArr.length < 2)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

function canStringBecomePalindrome(str) {
// use a map to keep track of # of occurences
  const charCount = new Map();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  let oddCount = 0;
  for (const count of charCount.values()) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount <= 1 && str.length > 0;
}

console.log(canStringBecomePalindrome(str1));
console.log(canStringBecomePalindrome(str2));
console.log(canStringBecomePalindrome(str3));
console.log(canStringBecomePalindrome(str4));
console.log(canStringBecomePalindrome(str5));
console.log(canStringBecomePalindrome(str6));

// Loop over array
// Push each element into a new array
// Check if array has own property
// if true, remove both from array
