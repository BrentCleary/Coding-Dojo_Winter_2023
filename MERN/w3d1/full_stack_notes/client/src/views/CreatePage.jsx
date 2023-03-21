import React, { useState, useEffect} from "react";
import axios from 'axios'

const CreatePage = () => {

    const [dishList, setDishList] = useState({})

    useEffect(() => {
        axios
        .get('http://localhost:8000/api/dishes')
        .then((response) => {
            // response.data."key of the data we are accessing"
            setDishList(response.data.dishes);
        })
        // error is the response sent from the API if there is a problem
        .catch((err) => console.log(err));
    }, [])

    return(
        <div>
            <h2>Create Page</h2>
        </div>
    );
};

export default CreatePage