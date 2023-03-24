import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const DashboardPage = () => {

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
            setProductsList(res.data.products);
        })
        .catch((err) => console.log(err))
    }, [])

    const deleteProduct = (productToDelete) => {
        axios.delete(`http://localhost:8000/api/products/${productToDelete._id}`)
        .then((res) => {
            console.log(res);
            // Set a new array with elements whose _id don't match the productToDelete._id
            setProductsList(productsList.filter((product) => product._id !== productToDelete._id))
        })
        .catch((err) => console.log(err));
    }

    return (
        <div>
            <h2>DashboardPage</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>In Stock</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {productsList.map((product, idx) => (
                        <tr key={idx}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.inStock}</td>
                            <td><img src={product.image} alt='object' width="100" height="100"/> </td>
                            <td><Link to={`/products/${product._id}`}>View</Link></td>
                            <td><Link to={`/products/${product._id}/edit`}>Update</Link></td>
                            <td><button onClick={() => deleteProduct(product)}>DELETE</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DashboardPage