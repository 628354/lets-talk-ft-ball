import React, { useState }  from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { apiCall } from '../helper/RequestHandler';
import {CONTACT_FORM, REQUEST_TYPE}  from "../helper/APIInfo";



export default function Contact() {

const [formData, setFormData] = useState({
    "name": "",
    "email": "",
    "subject": "",
    "message": ""
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};

console.log(formData);

const getFormData = async (e) => {
  e.preventDefault();
  try {
    const response = await apiCall(CONTACT_FORM.find, REQUEST_TYPE.POST, formData);
    console.log(response);

    if (response.status === 200 && response.hasError === false) {
      console.log("Data successfully sent to the server");
    
    }

  } catch (error) {
    console.error("Error while sending data:", error);
  }
};
  return (
    <div>
      <section className='en_hero_about en_hero_about'>
          <Container>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>


                </div>
            </div>
          </Container>
         </section>
          
           
         <div className='en_bread_crumb ar_bread_crumb'>
         <Container>
         <ul className='en_creat_nav ar_creat_nav'>
             <li>
               <Link to="/">Home</Link>
             </li>
             <li>
             <i className="ri-arrow-right-s-line"></i>
             </li>
             <li>
               <Link to="/DEFINITION">DEFINITION</Link>
             </li>
           </ul>
           <div className='leagues_cont'>
              <h2>Contact Us</h2>
            </div>
         </Container>
         </div>
         <section className='en_section_contact'>
          <Container>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='en_contact_img'>
              <img src={require('../img/contact-img.png')} alt="earth" className="en_contantus"/>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 m-auto'>
              <div className='en_contact_contant'>
              <h4>Have Some Question or Comment?</h4>

              <div className='en_conact_form'>
              <Form>
              <Form.Group className="mb-3 en_laelcolor" controlId="formGroupEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text"  placeholder="" name="name" onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3 en_laelcolor" controlId="formGroupEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control type="email" placeholder="" name="email" onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3 en_laelcolor" controlId="formGroupEmail">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="" name="subject" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} name="message"onChange={handleChange}/>
              </Form.Group>
              <button className='en_send_m ar_send_m' onClick={getFormData}>Send Message</button>
                
              </Form>
              </div>
              </div>
            </div>
            </div>
          </Container>
         </section>
   

    </div>
  )
}
