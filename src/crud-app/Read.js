import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

const Read = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const navigation = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:4000/users/" + id)
            .then(res => setData(res.data))
            .catch(error => console.log(error));
    }, []);
    const handleBackToHome = () => {
        navigation("/");
    }



    return (
        <>
            <div className='mt-5 container'>
                <ListGroup>
                    <ListGroup.Item>{data.id}</ListGroup.Item>
                    <ListGroup.Item>{data.name}</ListGroup.Item>
                    <ListGroup.Item>{data.email}</ListGroup.Item>
                    <ListGroup.Item> <Link to="/" className='btn btn-info' onClick={handleBackToHome}  >Back</Link></ListGroup.Item>
                </ListGroup>
            </div>
        </>
    )
}

export default Read