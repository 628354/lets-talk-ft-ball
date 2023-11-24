import React from 'react';
import Menubar from '../dashboard/Menubar';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import 'react-quill/dist/quill.snow.css';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useState } from 'react';

export default function Editdefinition() {


  const [lgShow, setLgShow] = useState(false);

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


  const deleteClick = () => {
    alert('Do you want to delete?');
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
                        <h3>Edit Definition</h3>
                      <ul className='season-link'>
                        <li>
                          <Link>Home</Link>
                        </li>
                        <li>
                        <i className="ri-arrow-right-s-line"></i>
                        </li>
                        <li>
                          <Link>Edit Definition</Link>
                        </li>
                      </ul>
                      </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                    <div className='add-part'>
                      <ul className='add-button-min'>
                        <li className='add-button-fis'>

                          <Link to=""  onClick={() => setLgShow(true)} ><i className="ri-add-line"></i></Link>

                          <Link to=""><i className="ri-save-3-line"></i></Link>

                        </li>
                        {/* <li className='add-button-cencel'>
                          <Link to=""><i className="ri-reply-fill"></i></Link>
                        </li> */}
                      </ul>
                    </div>
                </div>
                </Row>


               

            </Container>
           </section>
           <section className='cafe-view-List'>
                <Container fluid>
                  <Row>
                    <div className='season_list_table'>
                      <div className='season-table-list'>
                        <h6><i class="ri-list-check"></i> View</h6>
                      </div>
                      <Table  bordered hover className='tablepress otherview'>
                        <thead>
                          <tr>
                            <th colspan="2">SQ</th>
                            <th colspan="2">Definition Type</th>
                            <th colspan="2">Contant</th>
                            <th colspan="2">Action</th>
                          </tr>
                        </thead>
                        <tbody className='table-list-one'>
                          
                          <tr>
                            <td colspan="2">1</td>
                            <td colspan="2"><p>Top Statistics for players in Major European Leagues</p></td>
                            <td colspan="2"><p>Top Statistics for players in Major European Leagues</p></td>
                            <td colspan="2">
                            <div className='add-button-fis'>
                                <ul className='editcafe'>
                                    <li><Link to="/Editseason"><i className="ri-pencil-fill"></i></Link></li>
                                    <li className='add-button-sec'>
                                    <button><i className="ri-delete-bin-line"></i></button>
                                </li>
                                </ul>
                            </div>
                            </td>
                          </tr>
                        </tbody>
                       
                      </Table>
                      <div className='table-footer-f'>
                        <div className='table-footer-s'>
                          <p>Showing 1 to 12 of 12 (1 Pages)</p>
                        
                        </div>
                      </div>
                    </div>
                  </Row>
                </Container>
               </section>
           
    </div>


    
      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg" >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <section className='tab-section'>
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
                                        <Form.Label>Definition Textarea</Form.Label>
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
                                        <Form.Label>Definition Textarea</Form.Label>
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
           </section> */}
        </Modal.Body>
      </Modal>


           
           
    </div>


  )
}
