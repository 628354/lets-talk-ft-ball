import React, {useEffect, useState} from "react";
import axios from "axios";
import Menubar from '../dashboard/Menubar';
import { Container, Row } from 'react-bootstrap';
import { Link, json } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';

export default function EditTeams() {
    const {id} = useParams();

    const [setTeams, setTeamsData] = useState({
        teamName:'',
        short_name:'',
        status:'active'
    })
    const handleTextChange = (filed, value) => {
        setTeamsData({
            ...setTeams,
            [filed]:value
        })
    }
   const handleUpdateData = () => {
    const updatedData  = {
        teamName:setTeams.teamName,
        short_name:setTeams.short_name,
        status:setTeams.status
    }
   
    axios.post(`https://phpstack-1140615-3967632.cloudwaysapps.com/backend/updateteams/${id}`, updatedData, {
      //axios.post(` http://localhost:5000/updateteams/${id}`, updatedData, {
        // headers:{
        //     'Content-Type':'application/json'
        // }
    })
    
    .then((response) => {

    }).catch((error) => {
        console.log(`Error updating data`, error)
    })
   }
   return (
    <div>
      <Menubar />
      <div className='right-side-contant py-3'>
        <section className='min-section-one'>
          <Container fluid>
            <Row>
              <div className="col-lg-6 col-md-6 col-6">
                <div className='teams-us'>

                  <div className='teams-link-part'>
                    <h3> Teams</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <div className='add-part'>
                  <ul className='add-button-min'>
                    <li className="add-button-fis">
                      <button onClick={handleUpdateData}>
                        <Link to=""><i className="ri-save-3-line"></i></Link>
                      </button>
                    </li>
                    <li className='add-button-cencel'>
                      <Link to="/Teams"><i className="ri-reply-fill"></i></Link>
                    </li>
                  </ul>
                </div>

              </div>
            </Row>
          </Container>
        </section>
        <hr />
        <section className='teams-open'>
          <Container fluid>
            <Row>
              <div className='main_teams'>
                <div className='main-ad-sea'>
                  <p><i class="ri-pencil-fill"></i> Edit Teams</p>
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
                        <div className='teamName'>
                          <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="1">
                              Team Name
                              </Form.Label>
                              <Col sm="11">
                                <Form.Control type="text" placeholder="Team Name"value={setTeams.teamName}
                               onChange={(e) => handleTextChange('teamName', e.target.value)}  />
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
                                <Form.Control type="text" placeholder=" Team Name" value={11} />
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
                    <div className=' Team Name'>
                      <Form>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                          <Form.Label column sm="2">
                            Status
                          </Form.Label>
                          <Col sm="10">
                            <Form.Select
                               value={setTeams.status}
                               onChange={(e) => handleTextChange('status', e.target.value)}
                              name="status"
                            >
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                            </Form.Select>
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                          <Form.Label column sm="2">
                          Short_Name
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="text" placeholder="short_name"value={setTeams.short_name}
                               onChange={(e) => handleTextChange('short_name', e.target.value)} />
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