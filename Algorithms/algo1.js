// var creates a variable, then the variable name after var
// comment line

/*

    Multi comment line

*/

for (var i = 0; i < 10; i++)
{
    console.log(i);
    i = i + 3;
}

console.log("outside of the loop " + i);