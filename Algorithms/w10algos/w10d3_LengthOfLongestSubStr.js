// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = 'abcabcbb';
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = 'bbbbb';
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = 'pwwkew';
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = 'dvadf';
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {
  let maxLength = 0;
  // starting index of current substring
  let start = 0;
  // keep track of most recent index of each character in the substring
  let charMap = {};
  // loop through each character
  for(let i=0; i<str.length; i++)
  {
    const char = str.charAt(i);
    // if char has been seen before, update start to be index of last occurance of char
    // ensure substring does not have repeating characters
    if(charMap[char] >= start)
    {
      start = charMap[char] + 1;
    }
    // update charMap w current char and it's index
    charMap[char] = i;
    // update maxLength if the current substring is longer than the previous substring
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}

console.log(lengthOfLongestSubString(str1))
console.log(lengthOfLongestSubString(str2))
console.log(lengthOfLongestSubString(str3))
console.log(lengthOfLongestSubString(str4))