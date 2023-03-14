import React, { useState } from "react";
import axios from 'axios'

const FetchAPI = () => {

    const [pokemon, setPokemon] = useState([])

    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => {
                console.log(response.data.results)
                setPokemon(response.data.results)} )
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