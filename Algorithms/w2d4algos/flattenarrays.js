// complete the following function

var arr2d = [ [2, 5, 8],
            [3, 6, 1],
            [5, 7, 7] ];

function flatten(arr)
{
    var flat = [];
    for(var i = 0; i < arr.length; i++)
    {
        for(var j = 0; j < arr[i].length; j++)
        {
            flat.push(arr[i][j]);
        }
    }
    return flat;
}

// flatten(arr2d) = result;

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

