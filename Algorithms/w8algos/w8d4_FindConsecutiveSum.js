// Interview Algo given to alumni Oct 2019

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const numbers4 = [2, 5, 3, 6, 7, 23, 12];
const sum4 = 16;
const expected4 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

const numbers5 = [];
const sum5 = 5;
const expected5 = [];

const numbers_1 = [5];
const sum5_1 = 5;
const expected5_1 = [[5]];

const numbers6 = [10, 15, 20, 35, 30];
const sum6 = 5;
const expected6 = [];

// Bonus:
const numbers7 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum7 = 16;
const expected7 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// Bonus:
const numbers8 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum8 = -16;
const expected8 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered numbers.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function findConsecutiveSums(numbers, targetSum) {
    var sum = 0;
    let results = [];
    for(var i = 0; i<numbers.length; i++)
    {
        while(sum < targetSum)
        {
            console.log(sum, " + ", numbers[i], " = ")
            sum = sum + numbers[i];
            console.log(sum)
            results.push(i)
        }
    }

}

console.log(findConsecutiveSums(numbers4, sum4));