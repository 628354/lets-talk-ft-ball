import React from 'react';
import Menubar from '../dashboard/Menubar';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


export default function Editleagues() {
  return (
    <div>
    <Menubar/>
    <div className='right-side-contant py-3'>
    <section className='min-section-one'>
            <Container fluid>
                <Row>
                <div className="col-lg-6 col-md-6 col-6">
                    <div className='season-us'>
                      
                      <div className='season-link-part'>
                        <h3> League</h3>
                      <ul className='season-link'>
                        <li>
                          <Link>Home</Link>
                        </li>
                        <li>
                        <i className="ri-arrow-right-s-line"></i>
                        </li>
                        <li>
                          <Link>League</Link>
                        </li>
                        <li>
                        <i className="ri-arrow-right-s-line"></i>
                        </li>
                        <li>
                          <Link>Botola Pro</Link>
                        </li>
                      </ul>
                      </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                    <div className='add-part'>
                      <ul className='add-button-min'>
                        <li className='add-button-fis'>
                          <Link to=""><i className="ri-save-3-line"></i></Link>
                         
                        </li>
                        <li className='add-button-cencel'>
                          <Link to="/Leagues"><i className="ri-reply-fill"></i></Link>
                        </li>
                      </ul>
                    </div>
                  
                </div>
                </Row>
            </Container>
           
            
           </section>
           <hr/>
           <section className='Add-Season-open'>
            <Container fluid>
                <Row>
                    <div className='main_add_season'>
                        <div className='main-ad-sea'>
                            <p><i class="ri-pencil-fill"></i> Edit League</p>
                        </div>
                        <hr/>


                        <div className='addsection-open'>
                        <div className='add-genral'>
                            <h6>General</h6>
                        </div>
                        <hr/>
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
                                    <Form.Label column sm="2">
                                    League Name
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control type="text" placeholder="League Name" value="Botola Pro"/>
                                    </Col>
                                </Form.Group>
                                </Form>
                            </div>
                            </Tab>
                            <Tab eventKey="profile2" title={<span><img src={require('../img/ar.png')} alt="General" /> العربية</span>}>
                            <div className='sanson-title'>
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    Season Title
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control type="text" placeholder="Season Title" value="Botola Pro" />
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
                        <hr/>
                        <div className='date-for-section'>
                        <div className='sanson-title'>
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="1">
                                    Status
                                    </Form.Label>
                                    <Col sm="11">
                                    <Form.Select>
                                        <option>Disabled</option>
                                        <option>Enabled</option>

                                    </Form.Select>
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
