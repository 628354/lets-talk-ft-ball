import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menubar from '../dashboard/Menubar';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

export default function Season() {
  const [aboutData, setAboutData] = useState([]);
  const [itemId, setItemId] = useState(0); 

  useEffect(() => {
  
     axios.get('https://phpstack-1140615-3967632.cloudwaysapps.com/backend/getyears')
   // axios.get('  http://localhost:5000/getyears')
      .then((response) => {
        const aboutInfo = response.data?.seasonyears
        setAboutData(aboutInfo);
        setItemId(aboutInfo._id); 


      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://phpstack-1140615-3967632.cloudwaysapps.com/backend/removeyear/${id}`)
      .then((response) => {
        setAboutData(aboutData.filter(season => season._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
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
                            <h3>Season</h3>
                          <ul className='season-link'>
                            <li>
                              <Link>Home</Link>
                            </li>
                            <li>
                            <i className="ri-arrow-right-s-line"></i>
                            </li>
                            <li>
                              <Link>Season</Link>
                            </li>
                          </ul>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                        <div className='add-part'>
                          <ul className='add-button-min'>
                            <li className='add-button-fis'>
                              <Link to="/Addseason"><i className="ri-add-line"></i></Link>
                             
                            </li>
                            <li class="add-button-cencel"><a href=""><i className="ri-refresh-line"></i></a></li>
                            {/* <li className='add-button-sec'>
                              <button> <i className="ri-delete-bin-line"></i></button>
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
                        <h6><i class="ri-list-check"></i>Season List</h6>
                      </div>
                      <Table bordered hover className='tablepress'>
                  <thead>
                    <tr>
                      <th><Form.Check aria-label="option 1" /></th>
                      <th>League Name</th>
                      <th>Sort Order</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className='table-list-one'>
                    {aboutData.map((season) => (
                      <tr key={season._id}>
                        <td><Form.Check aria-label="option 1" /></td>
                        <td>{season.season_Title}</td>
                        <td>{season.sort_Order}</td>
                        <td>
                          <div className='add-button-fis'>
                            
                            <ul className="but-delet">
                              <li>
                              <Link to={`/Editseason/${season._id}`}>
                              <i className="ri-pencil-fill"></i>
                            </Link>
                             </li>
                             <li className="add-button-sec">
                             <button onClick={() => handleDelete(season._id)}>
                              <i className="ri-delete-bin-line"></i>
                            </button>
                             </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div className='table-footer-f'>
                  <div className='table-footer-s'>
                    <p>Showing 1 to {aboutData.length} of {aboutData.length} (1 Pages)</p>
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
