import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Planet = () => {

    const {id} = useParams();
    const [planet, setPlanet] = useState({
        name: "Somewhere",
        climate: "",
        terrain: "",
        surface_water: "",
        population: ""
    });

    useEffect( () => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then((response) => {
            setPlanet(response.data)
            console.log(response.data)
        })
        .catch((err) => console.log(err))

    },[id])

    return(
        <div>
            <h2>{planet.name}</h2>
            <p></p>
            <h4>Climate: {planet.climate}</h4>
            <h4>Terrain: {planet.terrain}</h4>
            <h4>Surface Water: {planet.surface_water}</h4>
            <h4>Population: {planet.population}</h4>
        </div>
    )
};

export default Planet