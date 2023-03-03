// Count total sum of array
// Divide by Half
// Return index of array[i+1]


SumLeft - sumRight


// if( totalSum - rightSum == totalSum - leftSum )
// {
        // Check if the current index i
// }
//   

// Get the total sum
// Add index 0
// Minus leftSum from total

// check if leftSum = Current rightSum index
// if not(continue iterating and add to left sum)


function FindBalanceIndex(arr)
{
    var leftSum = 0;
    var rightSum = 0;
    for(var i = 0; i < arr.length; i++)
    {
        leftSum = leftSum + arr[i];

        for(var j = arr.length; j > -1; j--)
        // starts at back of index and moves back
        {
            rightSum = arr[j];
            if(rightSum > leftSum)
            // Check if rightSum is greater than left
            {
                console.log("leftSum = " + leftSum, "rightSum = " + rightSum)
                break
            }
            else if( leftSum > rightSum)
            {

            }
        }
    }
}
