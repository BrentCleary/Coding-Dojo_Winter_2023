import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const People = () => {

    const {id} = useParams();
    const [people, setPeople] = useState({
        name: "Someone",
        height: "",
        mass: "",
        hair_color: "",
        skin_color: ""
    });

    useEffect( () => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then((response) => {
            setPeople(response.data)
            console.log(response.data)
        })
        .catch((err) => console.log(err))


    },[id])

    return(
        <div>
            <h2>{people.name}</h2>
            <p></p>
            <h4>Height: {people.height}</h4>
            <h4>Mass: {people.mass}</h4>
            <h4>Hair Color: {people.hair_color}</h4>
            <h4>Skin Color: {people.skin_color}</h4>
        </div>
    )
};

export default People