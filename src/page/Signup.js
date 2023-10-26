import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/register', formData); // Replace with your API endpoint (add http://)
      console.log('Registration successful', response.data);
      // You can redirect the user or perform other actions on success
    } catch (error) {
      console.error('Registration failed', error);
      // Handle errors, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <section className="en_hero_image en_hero_image">
        <Container>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12"></div>
          </div>
        </Container>
      </section>
      <section className="en_login ar_login">
        <Container>
          <div className="row en_login_box">
            <div className="col-lg-6 col-md-6 col-sm-12 en_bckg">
              <div className="en_login_img ar_login_img"></div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="en_login_signup ar_login_signup">
                <Form onSubmit={handleSignup}>
                  <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button className="spy_button" type="submit">
                    Signup
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
