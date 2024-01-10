import React from 'react';
import Menubar from '../dashboard/Menubar';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'react-quill/dist/quill.snow.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

export default function Cafeview() {

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
                        <h3>View Cafe</h3>
                      <ul className='season-link'>
                        <li>
                          <Link>Home</Link>
                        </li>
                        <li>
                        <i className="ri-arrow-right-s-line"></i>
                        </li>
                        <li>
                          <Link>View Cafe</Link>
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
                          {/* className='col-sm-2'  */}
                            <th >SQ</th>
                            <th >Title</th>
                            {/* <th >Other</th> */}
                            <th >Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody className='table-list-one'>
                          
                          <tr>
                            <td >1</td>
                            <td ><p>Top Statistics for players in Major European Leagues</p></td>
                            {/* <td >Top Statistics for players in Major European Leagues</td> */}
                            <td >2-4-2022</td>
                            <td >
                            <div className='add-button-fis'>
                                <ul className='but-delet'>
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
</div>
  )
}
