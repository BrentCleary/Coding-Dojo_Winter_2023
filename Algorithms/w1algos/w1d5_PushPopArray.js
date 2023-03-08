var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);


// /// pop() removes the last index of the array and returns it
// arr1.pop();

// /// push() inserts a var into the last index of the array
// arr1.push();


var arr1 = ["a", "b", "c", "d", "e"];

for (var i = 0; i < arr1.length/2; i++)
{
    var temp = arr1[i];
    arr1[i] = arr1[arr1.length - i - 1 ];
    arr1[arr1.length - i - 1 ] = temp;
}

console.log(arr1);











