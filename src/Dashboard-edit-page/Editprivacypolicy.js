import React from 'react';
import Menubar from '../dashboard/Menubar';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

export default function Editprivacypolicy() {
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
                        <h3>Privacy & Usage Terms</h3>
                      <ul className='season-link'>
                        <li>
                          <Link>Home</Link>
                        </li>
                        <li>
                        <i className="ri-arrow-right-s-line"></i>
                        </li>
                        <li>
                          <Link>PRIVACY & USAGE TERMS</Link>
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
                          <Link to=""><i className="ri-reply-fill"></i></Link>
                        </li>
                      </ul>
                    </div>
                </div>
                </Row>
            </Container>
           </section>
           <section className='tab-section'>
            <Container>
                <Row>
                <div className='general-part-home'>
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3 generalone"
                            >
                            <Tab className='tabevent' eventKey="profile" title={<span><img src={require('../img/en.png')} alt="General" /> General</span>}>
                            <div className='sanson-title'>
                            <div className='edithome'>
                                <div className='bannerimage'>
                                <Form>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Banner Upload </Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Privacy & Usage Terms Textarea</Form.Label>
                                        <ReactQuill className='edit-text' value={text} onChange={handleTextChange} />
                                    </Form.Group>
                                 </Form>
                                 <div className='button-press'>
                                    <Button>Edit</Button>
                                    <Button>seve</Button>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </Tab>
                            <Tab eventKey="profile2" title={<span><img src={require('../img/ar.png')} alt="General" /> العربية</span>}>
                            <div className='sanson-title'>
                            <div className='edithome'>
                                <div className='bannerimage'>
                                <Form>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Banner Upload </Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Privacy & Usage Terms Textarea</Form.Label>
                                        <ReactQuill className='edit-text' value={text} onChange={handleTextChange} />
                                    </Form.Group>

                                 </Form>
                                 <div className='button-press'>
                                    <Button>Edit</Button>
                                    <Button>seve</Button>
                                    </div>
                                 
                                

                                </div>
                            </div>
                            
                            </div>
                            
                            </Tab>
                            </Tabs>
                        </div>

                        
                </Row>
            </Container>
           </section>
           
    </div>
</div>
  )
}
