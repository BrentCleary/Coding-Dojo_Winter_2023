import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Berries = () => {

    const { id } = useParams();
    const [berry, setBerry] = useState({
        name: 'Purple',
        growthTime: '',
        maxHarvest: '',
        size: ''
    });

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/berry/${id}`)
        .then((response) => {
            setBerry(response.data)
        })
        .catch((err) => console.log(err))
            
    }, [id])

    return (
        <div>
            <h2>Berry Id#: {id}</h2>
            <h2>Name: {berry.name}</h2>
            <p>Growth Time: {berry.growthTime}</p>
            <p>Max Harvest: {berry.maxHarvest}</p>
            <p>Size: {berry.size}</p>
        </div>
    );

};

export default Berries
