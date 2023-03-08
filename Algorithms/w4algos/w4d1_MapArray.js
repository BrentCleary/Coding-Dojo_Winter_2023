// Create a function that maps the number of occurences of individual int in an array.

/* 
    Given an array of strings
    return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "Bob", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    Bob: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// pseudocode here

// create the function and decide what params it needs and what it will return


function MapArray(arr)
{
    var obj = {};
    for(var i = 0; i < arr.length; i++)
    {
        // create key when new var is found
        if(!obj[arr[i]])
        {
            obj[arr[i]] = 1;
        }
        // increment key val +1 when found again
        else
        {
            obj[arr[i]]++;
        }
    }
    return obj;
}

var example = MapArray(arr1)
var example2 = MapArray(arr2)
var example3 = MapArray(arr3)
console.log(example)
console.log(example2)
console.log(example3)




/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

//                                v
const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// pseudocode here

// create the function and decide what params it needs and what it will return



function FindOdd(arr)
{
    var obj = {};
    for(var i = 0; i < arr.length; i++)
    {
        if(!obj[arr[i]])
        {
            obj[arr[i]] = 1;
        }
        else
        {
            obj[arr[i]]++
        }
    }
    console.log(obj);
    var oddkey
    for(key in obj)
    {
        if(obj[key] % 2 != 0)
        {
            oddkey = key;
        }
        return oddkey;
    }
    // return oddkey;
}


output = FindOdd(nums1)
output2 = FindOdd(nums2)
output3 = FindOdd(nums3)
console.log(output)
console.log(output2)
console.log(output3)