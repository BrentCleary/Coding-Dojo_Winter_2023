import React, {useState, useEffect} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const CreatePage = () => {

    const nav = useNavigate();

    const[name, setName] = useState('');
    const[price, setPrice] = useState('');
    const[description, setDescription] = useState('');
    const[inStock, setInStock] = useState('');
    const[image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios
            .post('http://localhost:8000/api/products', {
                name, 
                price, 
                description, 
                inStock, 
                image,
        })
            .then(() => {
                nav('/products');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h2>Create Page</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    Name:
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </p>
                <p>
                    Price:
                    <input type='int' value={price} onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    Description:
                    <input rows='30' cols='30' value={description} onChange={(e) => setDescription(e.target.value)} />
                </p>
                <p>
                    inStock:
                    <input type='checkbox' checked={inStock} onChange={(e) => setInStock(e.target.checked)} />
                </p>
                <p>
                    Image:
                    <input type='text' value={image} onChange={(e) => setImage(e.target.value)} />
                </p>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreatePage