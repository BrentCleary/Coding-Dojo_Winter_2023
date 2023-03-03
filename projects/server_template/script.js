
// Promise is a Class
// Returns a promise

var BASE_URL = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/"

var results = document.getElementById('results')

function getHero(event)
{
    event.preventDefault()

    var heroId = document.querySelector("#heroNum").value
    console.log(heroId)
    

    // fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/"+heroId+".json")
    // fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${heroId}.json`)
    fetch(BASE_URL + heroId + ".json")
    .then(function(someServerResponse)
    {
        console.log(someServerResponse)
        return someServerResponse.json()
    })

    // ! THIS IS WHERE THE DATA IS STORED IN JSON FORMAT
    // THIS IS WHERE YOU ACCESS DATA
    .then(function(data)
    {
        console.log(data.images.md)
        results.innerHTML = 
            `<h3>${data.name}<h/3>
            <img src='${data.images.md}' alt="CAAPTAIN!">
            `
            
        fetch("127.0.0.1:5000/users")
    })
    .catch(function(err)
    {
        console.log("Houston......uhhhhhh..... we have a problem", err)
        results.innerHTML =
        `<h3>Sorry. Try a different Hero Number</h3>`
    })
}



// .then and .catch are promise resolutions

console.log("Check this")