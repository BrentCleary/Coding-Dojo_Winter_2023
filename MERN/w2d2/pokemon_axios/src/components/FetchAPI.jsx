import React, { useState } from "react";
import axios from 'axios'

const FetchAPI = (props) => {

    const [pokemon, setPokemon] = useState([])

    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
            .then(response => {
                console.log(response.data.results)
                setPokemon(response.data.results)
            
                response.data.results.map((poke) => {
                    var name = (poke.name);
                    console.log("Fetch Name before call", name)
                    return (
                        // calls updatelist in App.js and updates setPokeArray                        
                        props.getPokemon(name)
                    )})
            
            } )
        

    };

    return(

        <div>
            <button onClick={fetchPokemon}> Fetch'em All </button>
            {
                pokemon.map((poke, index) => {
                    return (
                        <div key={index}>
                            {poke.name}
                        </div>
                    )
                })
            }
        </div>

    )
}

export default FetchAPI