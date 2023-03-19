import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Pokemon = () => {

    const {id} = useParams();
    const [pokemon, setPokemon] = useState({
        name: 'Polar Burr',
        height: '',
        weight: ''
    });

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
            setPokemon(response.data)
        })
        .catch((err) => console.log(err))
            
    }, [id])

    return (
        <div>
            <h2>Poke Id#: {id}</h2>
            <h2>Name: {pokemon.name}</h2>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
        </div>
    );

};

export default Pokemon
