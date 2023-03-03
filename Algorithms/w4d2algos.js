///
// Given a string,
// return a new string with the duplicates excluded
// Bonus: Keep only the last instance of each character.
///

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// pseudocode here

function NoDupes(str)
{
    var newStr = "";
    for(var i = 0; i < str.length; i++)
    {
        temp = str[i];
        for(var j = 0; j < newStr.length; i++)
        {
            if(newStr[j] != temp)
            {
                newStr.concat(temp);
            }
        }
    }
    console.log("newStr")
}

NoDupes(str1);


// create the function and decide what params it needs and what it will return