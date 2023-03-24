import React, {useState, useEffect} from "react";
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";

const UpdatePage = () => {

    const nav = useNavigate();
    const { id } = useParams();

    const[name, setName] = useState('');
    const[price, setPrice] = useState('');
    const[description, setDescription] = useState('');
    const[inStock, setInStock] = useState('');
    const[image, setImage] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            const product = res.data.products
            console.log(res.data)

            setName(product.name)
            setPrice(product.price)
            setDescription(product.description)
            setInStock(product.inStock)
            setImage(product.image)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios
            .put(`http://localhost:8000/api/products/${id}`, {
                name, 
                price, 
                description, 
                inStock, 
                image,
        })
            .then((results) => {
                console.log(results);
                nav(`/products/${id}`);
            })
            .catch((err) => console.log(err));
    };


    return (
        <div>
            <h2>Update Page</h2>
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

export default UpdatePage