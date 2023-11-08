import React from 'react';
import Menubar from '../dashboard/Menubar';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

export default function Addleagues() {

  const [text, setText] = useState('');

  const handleTextChange = (value) => {
    setText(value);
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }, { 'header': '4' }, { 'header': '5' }, { 'header': '6' }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      ['link', 'image', 'video'],
    ],
  };



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
                            <p><i class="ri-pencil-fill"></i>   Add League</p>
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
                                    <Form.Control type="text" placeholder="League Namee" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    Image
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control type="file" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    League Description
                                    </Form.Label>
                                    <Col sm="10">
                                    <ReactQuill className='edit-text' value={text} onChange={handleTextChange} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    League Meta Tag Title
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control type="text" placeholder="Meta Tag Title" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    League Meta Tag Description
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control as="textarea" rows={3} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    League Meta Tag Keywords
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control as="textarea" rows={3} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    League Blog Category
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </Form.Select>
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
                                    League Name
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control type="text" placeholder="League Namee" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    Image
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control type="file" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    League Description
                                    </Form.Label>
                                    <Col sm="10">
                                    <ReactQuill className='edit-text' value={text} onChange={handleTextChange} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    League Meta Tag Title
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control type="text" placeholder="Meta Tag Title" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    League Meta Tag Description
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control as="textarea" rows={3} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    League Meta Tag Keywords
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control as="textarea" rows={3} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    League Blog Category
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </Form.Select>
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
                                    <Form.Label column sm="2">
                                    Status
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Select>
                                        <option>Enabled</option>
                                        <option>Disabled</option>

                                    </Form.Select>
                                    </Col>
                                </Form.Group>
                                
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    Sort Order
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control type="number" placeholder="League Namee" />
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
