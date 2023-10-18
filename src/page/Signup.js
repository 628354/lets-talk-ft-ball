import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div>
        <section className='en_hero_image en_hero_image'>
          <Container>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>

                </div>
            </div>
          </Container>
        </section>
        <section className='en_login ar_login'>
            <Container>
                <div className='row en_login_box'>
                    <div className='col-lg-6 col-md-6 col-sm-12 en_bckg'>
                        <div className='en_login_img ar_login_img'>

                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='en_login_signup ar_login_signup'>
                        <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First name" />  
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" />  
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />

                            </Form.Group>
                            <button className='spy_button'>Signup</button>
                            </Form>
                            
                        </div>
                    </div>
                </div>
            </Container>

        </section>


    </div>
  )
}
