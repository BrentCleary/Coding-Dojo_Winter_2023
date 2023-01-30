function RemoveButton(element)
{
    element.remove();
}

function StatusChange(element)
{
    if(element.innerText == "Log Off")
    {
        element.innerText = "Login";
    }
    else if(element.innerText == "Login")
    {
        element.innerText = "Log Off";
    }
}

var likes = 0;
function IncreaseLikes(element)
{
    likes++;
    element.innerText = likes + " Likes";
}

