const nums1 = [11, 8, 14, 3, 6, 2, 7];
/* 
There are many possible answers for nums1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {number} The idx where left section of smaller items ends.
 */


// Posted by Anthony Winn in Discord 03/09/2023


function partition(arr = [], left = 0, right = arr.length - 1) {
    const midIdx = Math.floor((left + right) / 2);
    const pivotValue = arr[midIdx];
    const tempPivotIdx = right;
  
    
    [arr[right], arr[midIdx]] = [arr[midIdx],arr[right]];
    right--;
    while ( true ){
      // console.log(arr)
      
      while(arr[left] < pivotValue){
          left++;
          // console.log("LEFT==========", left)
      }
      // number 5
      while (arr[right] > pivotValue){
          right--;
          // console.log("======RIGHT", right)
      }
      
      if (left >= right){
          [arr[left], arr[tempPivotIdx]] = [arr[tempPivotIdx], arr[left]]
          // console.log('======',left)
          // console.log(arr)
          return left
      }
      [arr[left] , arr[right] ] = [arr[right], arr[left]];
        left++;
        right--;
      
    }
     
    
  }
  console.log(partition(nums2))