// Three rules of recursion
// Recursive algorith must call itself recursively
// A recursive algorithm must have a base case.
//  - An ending condition
// A recursive algorithm must move towards the base case
//  - Must move towards its end


/* 
    Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;


function sumArr(nums, x = 0, sum = 0) {
    if(x < nums.length)
    {
        x += 1;
        sum += nums[x-1];
        return sumArr(nums, x, sum);
    }
    console.log(sum);
}

sumArr(nums1);
sumArr(nums2);
sumArr(nums3);

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:

// create the function and decide what params it needs and what it will return