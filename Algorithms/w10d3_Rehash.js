/* 
Given by Riot games.
*/

const str1 = 'b70a164c32a20c10';
const expected1 = 'a184b70c42';

const str2 = 'd20a47b25b25a33c60d50'
const expected2 = 'a80b50c60d70'

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(str) {
  // keep track of the count
  let letterCount = {}
  let currentLetter = ''
  let countString = ''
  // loop through each character
  for(let i = 0; i<str.length; i++)
  {
    let char = str.charAt(i)
    if(/[a-zA-Z]/.test(char))
    {
      currentLetter+=char;
    }
    // if char is number add to counter string
    if(/[0-9]/.test(char))
    {
      countString+=char;
      // if the function reaches the end of the counter string, the next char is a letter
      if ( i== str.length-1 || /[a-zA-Z]/.test(str.charAt(i+1)))
      {
        // add current letter and (|| 0 ) resets the current letter
        letterCount[currentLetter] = letterCount[currentLetter] || 0;
        letterCount[currentLetter] += parseInt(countString);
        currentLetter = '';
        countString = '';
      }
    }
  }
  // sort the letters alphebtically
  const sortedLetters = Object.keys(letterCount).sort();
  let reHashed = '';
  // loop through teh sorted letters and their countrs and concat into a rehashed string
  sortedLetters.forEach(letter => {
    reHashed += letter + letterCount[letter];
  });
  return reHashed;
}

console.log(rehash(str1))
console.log(rehash(str2))