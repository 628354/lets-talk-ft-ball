import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/adminLogin', { email, password })
            .then((response) => {
                console.log()
                console.log('Login successful', response.data);
            })
            .catch((error) => {
                console.error('Login failed', error);
            });
    }

    return (
        <div>
           
            <section className='en_login ar_login'>
                <Container>
                    <div className='row en_login_box'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='en_login_contant ar_login_contant'>
                                <Form onSubmit={handleFormSubmit}>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                        <div className='password_formt'>
                                            <Link to="/Signup">Register</Link>
                                            <Link to="/Forgot">Forgot Password</Link>
                                        </div>
                                    </Form.Group>
                                    <button type="submit" className='spy_button'>
                                        Submit
                                    </button>
                                </Form>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 en_bckg'>
                            <div className='en_login_img ar_login_img'>
                                {/* Place your image here */}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}
