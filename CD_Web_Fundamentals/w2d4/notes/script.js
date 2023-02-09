console.log('script online!');

// API - Application Programming Interface

var pokeDiv = document.querySelector("#pokemonData");
var pokesearch = document.querySelector("#pokeSearch");

async function getPokeData() {
    // async - a decorator to declare a function is async and give us access to await
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokesearch.value);
    // await - allows us to tell the code to only continue running when that line has finished
    var PokeData = await response.json();
    console.log(PokeData.name);

    
    pokeDiv.innerHTML += `<h1>Pokemon Name: ${PokeData.name}</h1>`
    pokeDiv.innerHTML += `<img src='${PokeData.sprites.front_shiny}'>`
}
    
// getCoderData();
