import React, {useState, useEffect} from "react";
import axios from "axios"
import { Link, useParams } from "react-router-dom";

const DetailsPage = () => {
    const [product, setProduct] = useState();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data.products)
                console.log(res.data)
                console.log(product)
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <h2>DetailsPage</h2>

            {product && (
                <div>
                    <img src={product.image} alt="product-image" width="200" height="200" />
                    <p>Name: {product.name}</p>
                    <p>Product: {product.price}</p>
                    <p>Description: {product.description}</p>
                    <p>In Stock: {product.inStock}</p>
                </div>
            )}
        </div>
    )
}

export default DetailsPage