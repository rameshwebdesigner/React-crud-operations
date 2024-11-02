import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';



const Home = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/users")
            .then(res => {
                setData(res.data);
            })
            .catch(error => console.log(error))
    }, []);
    const hadleDelete = (id) => {
        debugger;
        axios.delete("http://localhost:4000/users/" + id)
            .then(res => {
                alert("Successfully Deleted User");
                console.log(res.data);
                navigate("/");
                axios.get("http://localhost:4000/users")
                    .then(res => {
                        setData(res.data);
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));

    }
    return (
        <>
            <div className="container mt-5">
                <Link to="/create" className='btn btn-success'>Add User +</Link>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) =>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    {/* <Button variant="dark">Edit</Button> */}
                                    <Link to={`/update/${item.id}`} className='btn btn-success'>Update</Link>
                                    <Button variant="danger" onClick={(e) => hadleDelete(item.id)}>Delete</Button>
                                    <Link to={`/read/${item.id}`} className='btn btn-info'>Read</Link>
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        </>
    )

}

export default Home