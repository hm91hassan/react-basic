import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';


function Product() {
    const [product, setProduct] = useState([]);
    const param = useParams();
    const getProduct = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + param.id);
            setProduct(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProduct();
    }, [])

    console.log(product);
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.body}</p>
                    <Link to="/" className="btn btn-primary">Back</Link>
                </div>
            </div>
        </div>
    )
}

export default Product
