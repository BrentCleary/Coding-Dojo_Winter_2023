console.log("page loaded...");

// var video = document.getElementById

// function ChangeCursor(element){
//     element.style.cursor = "pointer";
// }

var video = document.getElementById("myVideo");
function PlayOnMouseOver(element)
{
    video.play();
    element.style.cursor = "pointer";
}

function PauseOnMouseOut(element)
{
    video.pause();
    element.style.cursor = "auto";
}

// function over(element)
// {
//     alert("mouseover");
// }


//  Notes commented out but left for reference