import React, {useState, useEffect} from "react";
import axios from "axios"
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DetailsPage = () => {
    const [product, setProduct] = useState();
    const {id} = useParams();

    const nav = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data.products)
                console.log(res.data)
                console.log(product)
            })
            .catch((err) => console.log(err));
    }, [])

    const deleteProduct = (productToDelete) => {
        axios.delete(`http://localhost:8000/api/products/${productToDelete._id}`)
        .then((res) => {
            console.log(res);
            nav('/products');
        })
        .catch((err) => console.log(err));
    }

    return (
        <div>
            <h2>DetailsPage</h2>

            {product && (
                <div>
                    <img src={product.image} alt="product-image" width="200" height="200" />
                    <p>Name: {product.name}</p>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                    <p>In Stock: {product.inStock}</p>
                    <button onClick={() => deleteProduct(product)}>DELETE</button>
                </div>
            )}
        </div>
    )
}

export default DetailsPage