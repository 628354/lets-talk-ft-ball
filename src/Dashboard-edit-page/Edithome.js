import React from 'react';
import Menubar from '../dashboard/Menubar';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Edithome() {
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
                        <h3>Edit Home</h3>
                      <ul className='season-link'>
                        <li>
                          <Link>Home</Link>
                        </li>
                        <li>
                        <i className="ri-arrow-right-s-line"></i>
                        </li>
                        <li>
                          <Link>Edit Home</Link>
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
                                <h3>twygqgsuyhgsygwiug </h3>
                            </div>
                            
                            </div>
                            </Tab>
                            <Tab eventKey="profile2" title={<span><img src={require('../img/ar.png')} alt="General" /> العربية</span>}>
                            <div className='sanson-title'>
                            <h1>tesst 2</h1>
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
