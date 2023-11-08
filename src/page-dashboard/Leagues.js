import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menubar from '../dashboard/Menubar';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

export default function Leagues() {
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
                            <h3>League</h3>
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
                              <Link to="/Addleagues"><i className="ri-add-line"></i></Link>
                              </li>
                                <li class="add-button-cencel"><a href=""><i className="ri-refresh-line"></i></a></li>
                                {/* <li className='add-button-sec'>
                                <button><i className="ri-delete-bin-line"></i></button>
                                </li> */}
                          </ul>
                        </div>
                      
                    </div>
                    </Row>
                </Container>
               </section>
               <hr/>
               <section className='Season-List'>
                <Container fluid>
                  <Row>
                    <div className='season_list_table'>
                      <div className='season-table-list'>
                        <h6><i class="ri-list-check"></i> League List</h6>
                      </div>
                      <Table  bordered hover className='tablepress'>
                        <thead>
                          <tr>
                            {/* <th><Form.Check aria-label="option 1" /></th> */}
                            <th colspan="2">League Name</th>
                            <th colspan="2">Sort Order</th>
                            <th colspan="2">Action</th>
                          </tr>
                        </thead>
                        <tbody className='table-list-one'>
                          <tr>
                            {/* <td><Form.Check aria-label="option 1" /></td> */}
                            <td colspan="2">Botola Pro</td>
                            <td colspan="2">10</td>
                            <td colspan="2">
                            
                            <div className='add-button-fis'>
                            <ul className='but-delet'>
                              <li><Link to="/Editleagues"><i className="ri-pencil-fill"></i></Link></li>
                              <li className='add-button-sec'>
                                <button><i className="ri-delete-bin-line"></i></button>
                                </li>
                            </ul>
                            </div>
                            </td>
                          </tr>
                          <tr>
                            {/* <td><Form.Check aria-label="option 1" /></td> */}
                            <td colspan="2">Brazil Serie A</td>
                            <td colspan="2">1</td>
                            <td colspan="2">
                            
                            <div className='add-button-fis'>
                            <ul className='but-delet'>
                              <li><Link to="/Editleagues"><i className="ri-pencil-fill"></i></Link></li>
                              <li className='add-button-sec'>
                                <button><i className="ri-delete-bin-line"></i></button>
                                </li>
                            </ul>
                            </div>
                            </td>
                          </tr>
                          <tr>
                            {/* <td><Form.Check aria-label="option 1" /></td> */}
                            <td colspan="2">Bundesliga</td>
                            <td colspan="2">1</td>
                            <td colspan="2">
                            
                            <div className='add-button-fis'>
                            <ul className='but-delet'>
                              <li><Link to="/Editleagues"><i className="ri-pencil-fill"></i></Link></li>
                              <li className='add-button-sec'>
                                <button><i className="ri-delete-bin-line"></i></button>
                                </li>
                            </ul>
                            </div>
                            </td>
                          </tr>
                          <tr>
                            {/* <td><Form.Check aria-label="option 1" /></td> */}
                            <td colspan="2">Egypt PL</td>
                            <td colspan="2">1</td>
                            <td colspan="2">
                            
                            <div className='add-button-fis'>
                            <ul className='but-delet'>
                              <li><Link to="/Editleagues"><i className="ri-pencil-fill"></i></Link></li>
                              <li className='add-button-sec'>
                                <button><i className="ri-delete-bin-line"></i></button>
                                </li>
                            </ul>
                            </div>
                            </td>
                          </tr>
                          <tr>
                            {/* <td><Form.Check aria-label="option 1" /></td> */}
                            <td colspan="2">Eredivisie</td>
                            <td colspan="2">1</td>
                            <td colspan="2">
                            
                            <div className='add-button-fis'>
                            <ul className='but-delet'>
                              <li><Link to="/Editleagues"><i className="ri-pencil-fill"></i></Link></li>
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
