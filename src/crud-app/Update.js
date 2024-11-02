import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Update = () => {
    const { id } = useParams();
    const [inputData, setInputData] = useState({
        id,
        "name": '',
        "email": ''
    });
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:4000/users/" + id)
            .then((res) => {
                setInputData(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        axios.put("http://localhost:4000/users/" + id, inputData)
            .then((res) => {
                alert("Successfully Updated user data");
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            <div className="container mt-5">
                <div class="login-form" style={
                    {
                        "width": "330px",
                        "margin": "20px"
                    }
                }>
                    <Form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="test" class="form-control form-control-sm" value={inputData.name}
                                onChange={(e) => setInputData({ ...inputData, "name": e.target.value })} />
                        </div>
                        <div class="form-group mt-3">
                            <label for="email">Email</label>
                            <input type="test" class="form-control form-control-sm" value={inputData.email}
                                onChange={(e) => setInputData({ ...inputData, "email": e.target.value })} />
                        </div>
                        <button type="submit" class="btn btn-primary btn-block mt-3" >Update</button>
                    </Form>
                </div>
            </div >
        </>
    )
}

export default Update