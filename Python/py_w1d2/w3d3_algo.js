/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";



function join(arr, separator) {
    var newString = ""; // your code here
    for(var i = 0; i < arr.length; i++)
    {
        newString += (arr[i]);
        if(i != arr.length-1)
        {
            newString += (separator);
        }
    }
    console.log(newString);
}

join(arr1, separator1);
join(arr2, separator2);
join(arr3, separator3);
join(arr4, separator4);
join(arr5, separator5);

// don't forget to call the function!

// add your pseudocode here
// create an string
// loop over the given array
    // add index of arr to string
        // add seperator behind indices
    