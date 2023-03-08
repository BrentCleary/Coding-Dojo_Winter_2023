// //  console.timeEnd("timer")

// for ( let n= 0; n < 50 ; N++ {
//     console.log(n, ': ',  )
// })

// // Memoization stores info throughtout the function

// function fibmemo(n, memo={})
// {
//     // if we have already cached the value, return it
//     if(n in memo) {
//         return memo[n]
//     }
//     if (n <= 1)
//     {
//         return n
//     }
//     // cache the value and return it
//     memo[n] = fibmemo(n-1, memo) + fibmemo(n-2, memo)
//     return memo[n]
// }



// // bsearch(arr, target. ???)
// //     base case
// //     logic
// //     recusrive calls 


// function binaryRecursion()
// {

// }

/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

//                   V
const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

//                   V
const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// don't be afraid to add extra parameters 👇
function binarySearch(sortedNums, searchNum, left = 0, right = sortedNums.length - 1) {
    if(left > right)
    {
        return false;
    }
    var mid = Math.floor((left + right)/2);
    
    // base case(s)
    if(sortedNums[mid] == searchNum)
    {
        return true;
    }
    // logic
    else if(sortedNums[mid] > searchNum)
    {
        return binarySearch(sortedNums, searchNum, left, right = mid-1)
    }
    else if(sortedNums[mid] < searchNum)
    {
        return binarySearch(sortedNums, searchNum, left = mid + 1, right)
    }

}

console.log(binarySearch(nums1, searchNum1))
console.log(binarySearch(nums2, searchNum2))
console.log(binarySearch(nums3, searchNum3))