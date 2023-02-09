console.log('script online!');

// Original Code

async function getPokemonData(pokeName) {
    // await executes this code and does not run the next line until it is completed.
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    var pokeData = await response.json();

    return pokeData;
}


async function displayPokemonData() {

    var pokemon = await getPokemonData(document.querySelector('#pokeSearch').value.toLowerCase());
    console.log(pokemon);
    var pokeDiv = document.querySelector('#pokemonData')


    pokeDiv.innerHTML = "";
    pokeDiv.innerHTML += `<h1> ${pokemon.name} </h1>`;
    pokeDiv.innerHTML += `<img src='${pokemon.sprites.front_default}' alt='${pokemon.name}'>`

}














// async function PikachuData()
// {
//     var response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
//     var pikachuData = await response.json();
    
//     return pikachuData;
// }

// async function PikachuCard()
// {
//     var pikachuData = PikachuData();
//     console.log(pikachuData);
//     var pikaName = document.querySelector("#pokemanName1");

//     pikaName.innerHTML += `<h4> ${pikachuData.name} </h4>`

// }

