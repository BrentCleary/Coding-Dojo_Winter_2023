/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.

    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

/* 
    Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
    because it occurs 3 times at most in ONE set
*/
const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const nums3A = [];
const nums3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const nums4A = [2, 2, 3, 3, 3];
const nums4B = [];
const expected4 = [2, 2, 3, 3, 3];

const nums5A = [];
const nums5B = [];
const expected5 = [];

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */


// function orderedMultisetUnion(sortedA, sortedB)
//     var results = [];
//     for(let i = 0; i< sortedA.length; i++ ){
//         for(let i = 0; i< sortedA.length; i++ ){
//             results.push()
//         }
//     }
// }


function orderedMultisetUnion(sortedA, sortedB)
{
    var objA = {};
    var objB = {};
    for(var i = 0; i < sortedA.length; i++)
    {
        // create key when new var is found
        if(!objA[sortedA[i]])
        {
            objA[sortedA[i]] = 1;
        }
        // increment key val +1 when found again
        else
        {
            objA[sortedA[i]]++;
        }
    }
    for(var i = 0; i < sortedB.length; i++)
    {
        // create key when new var is found
        if(!objB[sortedB[i]])
        {
            objB[sortedB[i]] = 1;
        }
        // increment key val +1 when found again
        else
        {
            objB[sortedB[i]]++;
        }
    }
    return (objA, objB)
}

console.log(orderedMultisetUnion(nums1A, nums1B))


function orderedMultisetUnion(arr1, arr2) {
    // initialize two pointers i and j to the beginning of arr1 and arr2
    let result = [];
    let i = 0;
    let j = 0;
  // enters a while loop that continues as long as there are still elements in both arr1 and arr2
    while (i < arr1.length && j < arr2.length) {
      // the function checks if the current elements at the pointers are equal. If they are the function pushes the element to result and increments both pointers
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        i++; //increments 1
        j++; // increments j
      } else if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;//increments i
      } else {
        result.push(arr2[j]);
        j++;// increments j
      }
    }
  // the function enters two more while loops to handle any remaining elements in arr1 or arr2 pushin it to result
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
  
    return result;
  }
  
  console.log(orderedMultisetUnion(nums1A,nums1B))