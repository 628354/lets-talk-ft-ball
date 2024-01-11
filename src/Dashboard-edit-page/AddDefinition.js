import React, { useState, useEffect } from "react";
import axios from "axios";
import Menubar from "../dashboard/Menubar";
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {ADD_DEFINITION, REQUEST_TYPE} from '../helper/APIInfo';
import { apiCall } from '../helper/RequestHandler';
import ReactQuill from "react-quill";

export default function AddDefination() {

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [getLeagues, setLeagues] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);
  const [allData,setAllData]=useState(null)
    const [formData, setFormData] = useState({
        type: '',
        content: '',
    
    });
    const [formDataAr, setFormDataAr] = useState({
        type: '',
        content: '',
  
    });
    
  
    const handleChange = (field, value) => {
      console.log(`Updating ${field} with value: ${value}`);
      setFormData({
        ...formData,
        [field]: value,
      });
    };
  
  
    const handleChangeAr = (field, value) => {
      console.log(`Updating ${field} with value: ${value}`);
      setFormDataAr({
        ...formDataAr,
        [field]: value,
      });
    };
  
  
  
    const handleSave = async (e) => {
      e.preventDefault();
   const token = localStorage.getItem("token")
      // Check if required fields are filled
      if (!formData.type) {
        setErrorMessage('Please fill in all required fields.');
        clearMessages();
      } else {
        try {
          let data = {
           
            en: formData,
            ar: formDataAr,
          };
          
        
        // console.log('Sending data to the server:', { en: formData, ar: formDataAr });
          const response = await apiCall(ADD_DEFINITION.add, REQUEST_TYPE.POST, data,token);
          // console.log(response);
          setSuccessMessage(response?.response?.data?.message);
          clearMessages();
        } catch (error) {
          setErrorMessage('Error occurred. Please try again.');
          clearMessages();
        }
      }
    };
    
  
    const clearMessages = () => {
      setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
      }, 3000);
    };
  
    return (
      <div>
        <Menubar />
        <div className='right-side-contant py-3'>
          <section className='min-section-one'>
            <Container fluid>
              <Row>
                <div className="col-lg-6 col-md-6 col-6">
                  <div className='season-us'>
                    <div className='season-link-part'>
                      <h3>Add Defination</h3>
                      <ul className='season-link'>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <i className="ri-arrow-right-s-line"></i>
                        </li>
                        <li>
                          <Link to="/Teams">Add Defination</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                  <div className='add-part'>
                    <ul className='add-button-min'>
                      <li className="add-button-fis">
                        <button onClick={handleSave}>
                          <Link to=""><i className="ri-save-3-line"></i></Link>
                        </button>
                      </li>
                      <li className='add-button-cencel'>
                        <Link to="/Teams"><i className="ri-reply-fill"></i></Link>
                      </li>
                    </ul>
                    {successMessage && (
                      <div className="alert alert-success">{successMessage}</div>
                    )}
                    {errorMessage && (
                      <div className="alert alert-danger">{errorMessage}</div>
                    )}
                  </div>
                </div>
              </Row>
            </Container>
          </section>
          <section className='Add-Teams-open Add-Season-open'>
            <Container fluid>
              <Row>
                <div className='main_add_teams'>
                  <div className='main-ad-sea'>
                    <p><i className="ri-pencil-fill"></i>Add Defination</p>
                  </div>
                  <div className='addsection-open'>
                    <div className='add-genral'>
                      {/* <h6>General</h6> */}
                    </div>
                    <div className='general-part'>
                      <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3 generalone"
                      >
                        <Tab className='tabevent' eventKey="profile" title={<span><img src={require('../img/en.png')} alt="General" /> General</span>}>
                          
                          <div className='date-for-section'>
                            
                            <div className='sanson-title'>
                             
                              <Form>
                              <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="formPlaintextPassword"
                              >
                                <Form.Label column sm="2" className="season-coll">
                               Defination Titile 
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control
                                  type="text"
                                  placeholder="Defination Titile "
                                //   value={formData.Team_Name_English}
                                  onChange={(e) =>
                                    handleChange("type", e.target.value)
                                  }
                                  
                                />
                                  </Col>
                              </Form.Group>
                             
                              <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="formPlaintextPassword"
                              >
                                <Form.Label column sm="2" className="season-coll">
                                Defination Description
                                </Form.Label>
                                <Col sm="10">
                                  <ReactQuill
                                    className="edit-text"
                                    // value={formData.Description_English}
                                    onChange={(value) =>
                                      handleChange("content",value)
                                    }
                                  />
                                </Col>
                              </Form.Group>
                             
                            </Form>
                            </div>
                          </div>
                         
                       
                        </Tab>
                        <Tab
                          eventKey="profile2"
                          title={
                            <span>
                              <img src={require("../img/ar.png")} alt="General" />{" "}
                              العربية
                            </span>
                          }
                        >
                          <div className="sanson-title">
                          <Form.Group
                                as={Row}
                                className="mb-2"
                                controlId="formPlaintextPassword"
                              >
                                <Form.Label column sm="2" className="season-coll">
                                Defination Titile 
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control
                                  type="text"
                                  placeholder=" Defination Titile Arabic"
                                //   value={formDataAr.Team_Name_Arabic}
                                  onChange={(e) =>
                                    handleChangeAr("type", e.target.value)
                                  }
                                  
                                />
                                 </Col>
                              </Form.Group>
                              
                              <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="formPlaintextPassword"
                              >
                                <Form.Label column sm="2" className="season-coll">
                                Defination Description
                                </Form.Label>
                                <Col sm="10">
                                  <ReactQuill
                                    className="edit-text"
                                    // value={formDataAr.Description_Arabic}
                                    onChange={(value) =>
                                      handleChangeAr("content",value)
                                    }
                                  />
                                </Col>
                              </Form.Group>
                              
                         
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
  
  
                  </div>
                </div>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    );
}