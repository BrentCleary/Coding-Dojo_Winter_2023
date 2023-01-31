// ChangeUserName and Banner Clr

var username = document.querySelector("#username");
var headerbarClr = document.querySelector(".header-bar");

function ChangeUserName()
{
    username.innerHTML = "Happy Rooster";
    headerbarClr.style.backgroundColor = "yellow";
}




// RemoveConnection Requests

var connectionBoxPhil = document.querySelector("#user-box-phil");
var connectionBoxAlayne = document.querySelector("#user-box-alayne");

function RemoveUserPhil()
{
    connectionBoxPhil.remove();
}

function RemoveUserAlayne()
{
    connectionBoxAlayne.remove();
}



// Change Connection Numbers

var requests = 2;
var connections = 10;
var requestNums = document.querySelector("#connect-req-num");
var connectNums = document.querySelector("#connect-num");

function SubtractNumbers()
{
    requests--;
    requestNums.innerHTML = requests; 
}

function AddNumbers()
{
    connections++;
    connectNums.innerHTML = connections;
    requests--;
    requestNums.innerHTML = requests 
}