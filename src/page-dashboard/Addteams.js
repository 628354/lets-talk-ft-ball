import React, { useState } from "react";
import axios from "axios";
import Menubar from "../dashboard/Menubar";
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


export default function Addteams() {
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [formData, setFormData] = useState({
        teamName: '',
        short_name: '',
        status: 'active'
    })
    const handleChange = (filed, value) => {
        setFormData({
            ...formData,
            [filed]: value
        })
    }
    const handleSave = async () => {
        if (formData.teamName.trim() === '' || formData.short_name.trim() === '') {
            setErrorMessage('Please fill in all required fields.');
            clearMessages();
        } else {
            try {
                const response = await axios.post('https://phpstack-1140615-3967632.cloudwaysapps.com/backend/createTeam', formData);
                console.log(response.data);
                setSuccessMessage(response.data.message);
                clearMessages(); 
            } catch (error) {
                setErrorMessage('Error occurred. Please try again.');
                clearMessages(); 
                console.error(error);
            }

        }
    }
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
                    <h3> Teams</h3>
                    <ul className='season-link'>
                      <li>
                        <Link>Home</Link>
                      </li>
                      <li>
                        <i className="ri-arrow-right-s-line"></i>
                      </li>
                      <li>
                        <Link>Teams</Link>
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
            <hr />
            <section className='Add-Teams-open'>
              <Container fluid>
                <Row>
                  <div className='main_add_teams'>
                    <div className='main-ad-sea'>
                      <p><i class="ri-pencil-fill"></i>  Add Teams</p>
                    </div>
                    <hr />
    
    
                    <div className='addsection-open'>
                      <div className='add-genral'>
                        <h6>General</h6>
                      </div>
                      <hr />
                      <div className='general-part'>
                        <Tabs
                          defaultActiveKey="profile"
                          id="uncontrolled-tab-example"
                          className="mb-3 generalone"
                        >
                          <Tab className='tabevent' eventKey="profile" title={<span><img src={require('../img/en.png')} alt="General" /> General</span>}>
                            <div className='sanson-title'>
                              <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                  <Form.Label column sm="1">
                                  Team Name
                                  </Form.Label>
                                  <Col sm="11">
                                    <Form.Control type="text" placeholder="team Name" value={formData.teamName}
                                      onChange={(e) => handleChange('teamName', e.target.value)} />
                                  </Col>
                                </Form.Group>
                              </Form>
                           
                            </div>
                          </Tab>
                          <Tab eventKey="profile2" title={<span><img src={require('../img/ar.png')} alt="General" /> العربية</span>}>
                            <div className='sanson-title'>
                              <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                  <Form.Label column sm="1">
                                  Team Name
                                  </Form.Label>
                                  <Col sm="11">
                                    <Form.Control type="text" placeholder="Team Name" />
                                  </Col>
                                </Form.Group>
                              </Form>
                            </div>
                          </Tab>
                        </Tabs>
                      </div>
    
                      <div className='add-genral'>
                        <h6>Data</h6>
                      </div>
                      <hr />
                      <div className='date-for-section'>
                        <div className='team Name'>
                          <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="2">
                                Status
                              </Form.Label>
                              <Col sm="10">
                                <Form.Select
                                  value={formData.status}
                                  onChange={(e) => handleChange(e)}
                                  name="status"
                                >
                                  <option value="active">Active</option>
                                  <option value="inactive">Inactive</option>
                                </Form.Select>
                              </Col>
                            </Form.Group>
    
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="2">
                              Short Name
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control type="text" placeholder="short_name" value={formData.short_name}
                                  onChange={(e) => handleChange('short_name', e.target.value)} />
                              </Col>
                            </Form.Group>
                          </Form>
                        </div>
                      </div>
                    </div>
    
                  </div>
    
                </Row>
              </Container>
            </section>
          </div>
        </div>
      )
}