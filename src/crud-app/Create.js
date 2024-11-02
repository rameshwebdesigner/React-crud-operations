import axios from 'axios';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';



const Create = () => {
    const [inputData, setInputData] = useState({
        "name": '',
        "email": ''
    });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/users", inputData)
            .then((res) => {
                alert("Successfully added user");
                navigate("/");
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
                            <input type="test" class="form-control form-control-sm"
                                onChange={(e) => setInputData({ ...inputData, "name": e.target.value })} />
                        </div>
                        <div class="form-group mt-3">
                            <label for="email">Email</label>
                            <input type="test" class="form-control form-control-sm"
                                onChange={(e) => setInputData({ ...inputData, "email": e.target.value })} />
                        </div>
                        <button type="submit" class="btn btn-primary btn-block mt-3" >Sign in</button>
                    </Form>
                </div>
            </div >
        </>
    )
}

export default Create