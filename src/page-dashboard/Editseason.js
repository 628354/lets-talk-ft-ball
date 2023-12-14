import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Menubar from '../dashboard/Menubar';
import { Container, Row } from 'react-bootstrap';
import { Link, json } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { apiCall } from '../helper/RequestHandler';
import { REQUEST_TYPE,GET_SEASON_BY_ID,UPDATE_SEASON_YEAR } from '../helper/APIInfo';
export default function Editseason() {


  const { id } = useParams();


  const [aboutData, setAboutData] = useState({
    season_Title: '',
    sort_Order: '',
    status: 'active'
  });

  const handleTextChange = (field, value) => {
    setAboutData({
      ...aboutData,
      [field]: value,
    });
  };

  const getSeasonById = async () => {
    try {
      const baseUrl=GET_SEASON_BY_ID.getseasonById;
      const apiUrl =`${baseUrl}/${id}`
      const response = await  apiCall(apiUrl,REQUEST_TYPE.GET);
      const aboutInfo = response.response.data.body;
      console.log(response.response.data.body);
      setAboutData(aboutInfo);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getSeasonById();
  }, [id]);  


  const handleUpdateData = async () => {
    try {
      const updatedData = {
        season_Title: aboutData.season_Title,
        sort_Order: aboutData.sort_Order,
        status: aboutData.status,
      };
      const baseUrl=UPDATE_SEASON_YEAR.updateSeason;
      const apiUrl =`${baseUrl}/${id}`
      const response = await apiCall(apiUrl,REQUEST_TYPE.POST, updatedData);
  
      console.log(response);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  
 // console.log(aboutData)
  
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
                    <h3> Season</h3>
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
                    <li className="add-button-fis">
                      <button onClick={handleUpdateData}>
                        <Link to=""><i className="ri-save-3-line"></i></Link>
                      </button>
                    </li>
                    <li className='add-button-cencel'>
                      <Link to="/Season"><i className="ri-reply-fill"></i></Link>
                    </li>
                  </ul>
                </div>

              </div>
            </Row>
          </Container>
        </section>
        <hr />
        <section className='Add-Season-open'>
          <Container fluid>
            <Row>
              <div className='main_add_season'>
                <div className='main-ad-sea'>
                  <p><i class="ri-pencil-fill"></i> Edit Season</p>
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
                                Season Title
                              </Form.Label>
                              <Col sm="11">
                                <Form.Control type="text" placeholder="Season Title" value={aboutData.season_Title}
                               onChange={(e) => handleTextChange('season_Title', e.target.value)} 
                                />
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
                                Season Title
                              </Form.Label>
                              <Col sm="11">
                                <Form.Control type="text" placeholder="Season Title" value={11} />
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
                    <div className='sanson-title'>
                      <Form>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                          <Form.Label column sm="2">
                            Status
                          </Form.Label>
                          <Col sm="10">
                            <Form.Select
                               value={aboutData?.status}
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
                            Sort Order
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="number" placeholder="sort_Order"value={aboutData?.sort_Order}
                               onChange={(e) => handleTextChange('sort_Order', e.target.value)} />
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
