// Temperature Changes

// Fahrenheit to Celcius Conversion


// Updates Values by ID

function TempChange(element)
{
    for(var i = 1; i < 9; i++)
        {
            var tempID = document.querySelector("#temp" + i);
            var temp = tempID.innerHTML;
            if(element.value == "C")
            {
                // Convert to Celcius
                temp = Math.round(5/9 * (temp - 32));
                console.log(temp);
                tempID.innerHTML = temp;
            }
            else if(element.value == "F")
            {
                // Convert to Fahrenheit
                temp = Math.round((9/5 * temp) + 32);
                console.log(temp);
                tempID.innerHTML = temp;
            }
        }
}

// function TempConvert(element)
// {
//     if(element.value == "C")
//     {
//         // Convert to Celcius
//         return Math.round(5/9 * (temp - 32));
//     }
//     else 
//     {
//         // convert to Fahrenheit
//         return Math.round(9/5 * (temp + 32));
//     }
// }


// City Alert Message
function AlertMessage(element)
{
    var city = element.innerHTML;
    alert("Alert: You can considered visiting " + city + "! Please reconsider.");
}


// Accept Cookies Removal

cookieBar = document.querySelector(".cookie-bar-cont");

function RemoveCookieAlert()
{
    console.log("clicked");
    cookieBar.remove();
}