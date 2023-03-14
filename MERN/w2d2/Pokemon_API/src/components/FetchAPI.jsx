import React, {useState} from "react";


const FetchAPI = () => {

    const [pokemon, setPokemon] = useState([])

    const fetchData = () => {
        // Built in Javascript function for API's
        fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        // Two methods: then() and then()
        // Gets the data and returns data as JSON so we can read it
        .then((response) => {
            return response.json()
        })
        // Second then is just console.log (for now)
        .then((response) => {
            console.log("this is the Json data: ", response)
            setPokemon(response.results)
        })
        // Will return a notice if there is an error
        .catch((error) => {
            console.log("This is our catch error: ", error)
        }
        )
    }

    return (
        <div>
            <h1>FetchAPI</h1>
            <button onClick={fetchData}>Fetch Our Data</button>
            {
                pokemon.map((poke, index) => {
                    return(
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