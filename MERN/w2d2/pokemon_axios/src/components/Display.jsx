import React, { useState } from "react";
import axios from 'axios'

const Display = (props) => {

    const [pokeImg, setPokeImg] = useState([])

    const getImage = () => {
        // map over and insert name for API call for each pkmn
        {props.pokeList.map((pokeName) => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
            // setPokeImg to contain the front
            .then(response => {
                console.log(response.data.sprites.front_default)
                setPokeImg([...pokeImg, response.data.sprites.front_default])
                
                })
            return(true)
            })
    }}
    
    return(
        <div>
            <h1>Hello</h1>
            <button onClick={getImage}>Get Images</button>
            {
                pokeImg.map((image, index) => {
                    return(
                        <div key={index}>
                            <img src={image} alt="img_mon" />
                        </div>
                    )
                }
            )}
        </div>

    )

}

export default Display