
// Low[i] and High[i] - Mid[i] is L[i]+H[i] / 2

// New mid is Mid+1 or Mid - 1 depending on if the search number is greater or less than the result

// if H < L break

/* 
    Array: Binary Search (non recursive)
    Given a sorted array and a value, return whether the array contains that value.
    Do not sequentially iterate the array. Instead, ‘divide and conquer’,
    taking advantage of the fact that the array is sorted .

*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;



// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:

function BinarySearch(arr, searchNum)
{
    var low = 0;
    var high = arr.length-1;
    while(low <= high)
    {
        var mid = Math.floor((high+low) / 2);
        if(arr[mid] == searchNum)
        {
            return true;
        }
        else if(arr[mid] < searchNum)
        {
            low = mid+1;
        }
        else
        {
            high = mid-1;
        }
    
    }
    return false;
}

var result = BinarySearch(nums1, searchNum1)
console.log(result)
var result2 = BinarySearch(nums2, searchNum2)
console.log(result2)
var result3 = BinarySearch(nums3, searchNum3)
console.log(result3)
// create the function and decide what params it needs and what it will return