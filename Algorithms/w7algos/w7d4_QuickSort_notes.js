// Quick Sort

/* 
The goal of the partion function

receive an Array, left index, right index

Choose a pivot value. This can be from the middle, beginning, end, or even random
    - choosing from middle for this algo
    - Math.floor(arr.length/2) to find middle of the arr

Then, partition the array, so all values smaller than the pivot go to the left, all larger got to the right

Return the index of the pivot ( THE INDEX )

Array may not be perfectly sorted, by the end of the function. Just divided around the pivot.


*/

function partition(nums = [], leftIdx = 0, rightIdx = nums.length - 1)
{
    const midIdx = Math.floor((leftIdx + rightIdx)/2)
    const pivotValue = nums[midIdx]
}

/*
move pivot to end of array 
check values in loop, moving one space right form leftIdx, and one right from rightIdx
right<pivot
left>pivot
Check if the Idx's have crossed leftIdx<rightIdx
Swap left / right
decriment left and right in to 

*/


function partition(nums = [], leftIdx = 0, rightIdx = nums.length - 1)
{
    const midIdx = Math.floor((leftIdx + rightIdx)/2)
    const pivotValue = nums[midIdx]
}