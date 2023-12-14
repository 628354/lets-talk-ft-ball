import { useState } from 'react';
import axios from 'axios';
import Menubar from '../dashboard/Menubar';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { apiCall } from '../helper/RequestHandler';
import { REQUEST_TYPE,ADD_SEASON } from '../helper/APIInfo';
export default function Addseason() {
  const [successMessage, setSuccessMessage] = useState(''); // State to hold success message
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    season_Title: '',
    sort_Order: '',
    status: 'active'
  });
  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };


  const handleSave = async () => {
    if (formData.season_Title.trim() === '' || formData.sort_Order.trim() === '') {
      setErrorMessage('Please fill in all required fields.');
      clearMessages();
    } else {
    try {
      const response= await apiCall(ADD_SEASON.season,REQUEST_TYPE.POST,formData);
     
     // console.log(response.response);
      setSuccessMessage(response.response.data.message);
      clearMessages(); // Clear messages after 3 seconds


    } catch (error) {
      setErrorMessage('Error occurred. Please try again.');
      clearMessages(); // Clear messages after 3 seconds
      console.error(error);
    }
  }
  };
  const clearMessages = () => {
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 3000); // Clear messages after 3 seconds
  };
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
                      <button onClick={handleSave}>
                        <Link to=""><i className="ri-save-3-line"></i></Link>
                      </button>
                    </li>
                    <li className='add-button-cencel'>
                      <Link to="/Season"><i className="ri-reply-fill"></i></Link>
                    </li>
                  </ul>
                  {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
          )}
           {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
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
                  <p><i class="ri-pencil-fill"></i>  Add Season</p>
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
                                <Form.Control type="text" placeholder="Season Title" value={formData.season_Title}
                                  onChange={(e) => handleChange('season_Title', e.target.value)} />
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
                                <Form.Control type="text" placeholder="Season Title" />
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
                              value={formData.status}
                              onChange={(e) => handleChange(e)}
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
                            <Form.Control type="number" placeholder="sort_Order" value={formData.sort_Order}
                              onChange={(e) => handleChange('sort_Order', e.target.value)} />
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
