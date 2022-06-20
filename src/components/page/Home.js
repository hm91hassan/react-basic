import React, { useEffect, useState } from 'react'
import logo from '../../logo.svg';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Content() {
    const [data, setdata] = useState([])
    const getData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setdata(response.data);

        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(data);
    return (
        <div className='container'>
            <h2>Welcome to Akash Teaching Home

                <i className='mdi mdi-battery'></i>
            </h2>
            <div className='row'>
                {
                    data.map(el => {
                        return (
                            <div className="card col-3">


                                <div style={{ width: '100%' }}>
                                    <img src={logo} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{el.title}</h5>
                                        <p className="card-text">{el.body}</p>
                                        <Link to={`/product/${el.id}`} className="btn btn-primary">Details</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

        </div>
    )
}

export default Content
