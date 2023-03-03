/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:



function makechange(cents)
{
    var results = {};
    var coinVals = [25, 10, 5, 1];

    for(var i = 0; i < coinVals.length; i++)
    {
        if(cents / coinVals[i] > 0)
        {
            results["quarters"] = Math.floor(cents/coinVals[i]);
            console.log(results)
            remainder = cents - results
        }

    }

}

makechange(cents1)

// create the function and decide what params it needs and what it will return