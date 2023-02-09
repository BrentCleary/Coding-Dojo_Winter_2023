

function StrEncode(str)
{
    var newStr = "";
    // start at str[0]
    for(var i = str.length ; i < str.length ; i++)
    {
        var counter = 1;
        while(str[i] == str[i+1])
        {
            counter += 1;
            if(str[i] != str[i+1]counter > 2)
            {
                newStr.append(i + counter)
            }
            else
        }
    }
}

/* 
  Given in an alumni interview
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 

  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

//   counter
// temp 
//         i-1  str[i] i+1
//             V
const str1 = "aaaabbcddd";
// ['a', 'a', 'a', 'a', 'b', 'b', 'c']

// freqObj = {
//     'a' : 1, ++
// }

const expected1 = "a4b2cd3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

// RIOT   Read Input Output Talk
// pseudo code here:
// ....

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
function encodeStr(str)
{
    var newStr = "";
    // start at str[0]
    for(var i = str.length ; i < str.length ; i++)
    {
        var counter = 1;
        if(str[i] == str[i+1])
        {
            counter += 1;
        }
        
        

        {
            counter += 1;
            if(str[i] != str[i+1]counter > 2)
            {
                newStr.append(i + counter)
            }
            else
        }   
    }
}


