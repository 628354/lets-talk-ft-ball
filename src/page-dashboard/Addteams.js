import React, { useState, useEffect } from "react";
import axios from "axios";
import Menubar from "../dashboard/Menubar";
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { BASE_URL, CREATE_TEAM, LEAGUES, REQUEST_TYPE, SESSION } from '../helper/APIInfo';
import { apiCall } from '../helper/RequestHandler';
import ReactQuill from "react-quill";
import MediaModal from "./MediaModal";

export default function Addteams() {

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [getLeagues, setLeagues] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
const [allData,setAllData]=useState(null)

const [mediaModalShow, setMediaModalShow] = useState(false);

const [image,setImage]=useState(null)
  const [formData, setFormData] = useState({
    Team_Name_English: '',
    Team_Name_Short_English: '',
    Description_English: '',
    Team_info: '',
    SEO_URL: '',
    Past_teams_logo_file_names_below: '',
    logo_folder: '',
    status: 'active',
    league: '',

  });
  const [formDataAr, setFormDataAr] = useState({
    Team_Name_Arabic: '',
    Team_Name_Short_Arabic: '',
    Description_Arabic: '',
    Team_info: '',
    SEO_URL: '',
    Past_teams_logo_file_names_below: '',
    logo_folder: '',



  });


  const handleChange = (field, value) => {
   
    setFormData({
      ...formData,
      [field]: value,
    });
  };


  const handleChangeAr = (field, value) => {
 
    setFormDataAr({
      ...formDataAr,
      [field]: value,
    });
  };
  const handleImageChange = (e) => {
    e.preventDefault();
    setMediaModalShow(true);
  };

  const handleLeagueChange = (selectedLeagueId) => {
   console.log(selectedLeagueId);
  //  getLeagues.find((item)=> console.log(item._id ===selectedLeagueId )   )
    // const selectedLeague = getLeagues.find((league) => league.en._id === selectedLeagueId);
   // const selectedLeague = getLeagues.find((league) => league.en._id === selectedLeagueId);
    // console.log(getLeagues.find((league) => league._id === selectedLeagueId));
    // setFormData({
    //   ...formData,
    //   league: selectedLeague,
    // });
    //console.log(selectedLeague);
    setAllData(selectedLeagueId)
  };
const lang ='en'
  const LeagueCall = () => {
    try {
      apiCall(LEAGUES(lang).league, REQUEST_TYPE.GET).then((results) => {
        // console.log(results);
        setLeagues(results?.response?.data?.body);
      });

    } catch (error) {
      console.log("data", error);
    }

  };

  useEffect(() => {
    LeagueCall();
  }, []);



  const handleSave = async (e) => {
    e.preventDefault();
  // console.log(formData?.league);
  // console.log(formData?.Team_Name_English);
  // console.log(allData);
    // Check if required fields are filled
    if (!formData.Team_Name_English) {
      setErrorMessage('Please fill in all required fields.');
      clearMessages();
    } else {
      try {
        console.log(image);
        let data = {
         
          leagueid: allData,
          "Image":image,
          en: formData,
          ar: formDataAr,
        };
        
      
      // console.log('Sending data to the server:', { en: formData, ar: formDataAr });
        const response = await apiCall(CREATE_TEAM.team, REQUEST_TYPE.POST,data);
        // console.log(response);
        setSuccessMessage(response?.response?.data?.message);
        clearMessages();
      } catch (error) {
        setErrorMessage('Error occurred. Please try again.');
        clearMessages();
      }
    }
  };
  
  const handleMediaUpload = (selectedFile) => {

    console.log("Media uploaded:", selectedFile);
    
    setImage(selectedFile)
    setMediaModalShow(false); // Close the modal after media upload

  };


  const clearMessages = () => {
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 3000);
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
                    <h3> Teams</h3>
                    <ul className='season-link'>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <i className="ri-arrow-right-s-line"></i>
                      </li>
                      <li>
                        <Link to="/Teams">Teams</Link>
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
                      <Link to="/Teams"><i className="ri-reply-fill"></i></Link>
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

        <section className='Add-Teams-open Add-Season-open'>
          <Container fluid>
            <Row>
              <div className='main_add_teams'>
                <div className='main-ad-sea'>
                  <p><i className="ri-pencil-fill"></i>  Add Teams</p>
                </div>
                <div className='addsection-open'>
                  <div className='add-genral'>
                    {/* <h6>General</h6> */}
                  </div>
                  
                  <div className='general-part'>
                    <Tabs
                      defaultActiveKey="profile"
                      id="uncontrolled-tab-example"
                      className="mb-3 generalone"
                    >
                      <Tab className='tabevent' eventKey="profile" title={<span><img src={require('../img/en.png')} alt="General" /> General</span>}>
                        
                        <div className='date-for-section'>
                          
                          <div className='sanson-title'>
                            <Form>
                              <Form.Group as={Row} className="mb-5" controlId="formPlaintextPassword">
                                <Form.Label column sm="2" className='season-coll'>
                                  League Name
                                </Form.Label>
                                <Col sm="10">
                                  <Form.Select name="league"
                                    onChange={(e) => handleLeagueChange(e.target.value)} >
                                    <option value={""}>Select League</option>
                                    {getLeagues?.map((row,index) => (
                                      <option key={index} value={row._id}>
                                        {row.en.leaguename}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </Col>
                              </Form.Group>
                            </Form>
                            <Form>
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Col  sm="2" className='season-coll'>
                              <Form.Label>
                              Team Name
                              </Form.Label>
                              </Col>
                              <Col sm="10">
                              <Form.Control
                                type="text"
                                placeholder="Team Name"
                                value={formData.Team_Name_English}
                                onChange={(e) =>
                                  handleChange("Team_Name_English", e.target.value)
                                  
                                }
                                
                              />
                              </Col>
                            </Form.Group>
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label column sm="2" className='season-coll'>
                              Team Image
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control
                                  type="file"
                                  onClick={handleImageChange}
                                />
                              </Col>
                            </Form.Group>
                            {image === null? "" : <img className="logo_im" src={`${BASE_URL}/${image}`}/> }
                            <MediaModal
        show={mediaModalShow}
        onHide={() => setMediaModalShow(false)}
        onUpload={handleMediaUpload}
        />
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label column sm="2" className='season-coll'>
                              Team Description
                              </Form.Label>
                              <Col sm="10">
                                <ReactQuill
                                  className="edit-text"
                                  value={formData.Description_English}
                                  onChange={(value) =>
                                    handleChange("Description_English", value)
                                  }
                                />
                              </Col>
                            </Form.Group>
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label column sm="2" className='season-coll'>
                              Team Name Short English
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control
                                  type="text"
                                  placeholder="Team Name Short English"
                                  value={formData.Team_Name_Short_English}
                                  onChange={(e) =>
                                    handleChange("Team_Name_Short_English", e.target.value)
                                  }
                                />
                              </Col>
                            </Form.Group>
                            {/* <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label column sm="2">
                              Team Meta Tag Description
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  
                                />
                              </Col>
                            </Form.Group>
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label column sm="2">
                              Team Meta Tag Keywords
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  value={formData.meta_Tag_Keywords}
                                 
                                />
                              </Col>
                            </Form.Group> */}
                            {/* <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label column sm="2">
                              Team Blog Category
                              </Form.Label>
                              <Col sm="10">
                                <Form.Select aria-label="Default select example">
                                  <option>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </Form.Select>
                              </Col>
                            </Form.Group> */}
                          </Form>
                          </div>
                        </div>
                        <div className='add-genral'>
                          <h6>Data</h6>
                        </div>
                        <hr />
                        <div className='date-for-section'>
                          <div className='team Name'>
                            <Form>
                              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2" className='season-coll'>
                                  Status
                                </Form.Label>
                                <Col sm="10">
                                  <Form.Select
                                    value={formData.status}
                                    onChange={(e) => handleChange("status", e.target.value)}
                                    name="status"
                                  >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                  </Form.Select>
                                </Col>
                              </Form.Group>

                              {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                  Sort Order
                                </Form.Label>
                                <Col sm="10">
                                  <Form.Control
                                    type="text"
                                    placeholder="short_name"
                                    value={formData.short_name}
                                    onChange={(e) => handleChange('short_name', e.target.value)}
                                  />
                                </Col>
                              </Form.Group> */}
                            </Form>
                          </div>
                        </div>
                      </Tab>
                      <Tab
                        eventKey="profile2"
                        title={
                          <span>
                            <img src={require("../img/ar.png")} alt="General" />{" "}
                            العربية
                          </span>
                        }
                      >
                        <div className="sanson-title">
                        <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label column sm="2" className='season-coll'>
                              Team Name
                              </Form.Label>
                              <Col sm="10">
                              <Form.Control
                                type="text"
                                placeholder="Team Name Arabic"
                                value={formDataAr.Team_Name_Arabic}
                                onChange={(e) =>
                                  handleChangeAr("Team_Name_Arabic", e.target.value)
                                }
                                
                              /></Col>
                            </Form.Group>
                            
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label column sm="2" className='season-coll'>
                              Team Description
                              </Form.Label>
                              <Col sm="10">
                                <ReactQuill
                                  className="edit-text"
                                  value={formDataAr.Description_Arabic}
                                  onChange={(value) =>
                                    handleChangeAr("Description_Arabic", value)
                                  }
                                />
                              </Col>
                            </Form.Group>
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label column sm="2" className='season-coll'>
                              Team Name Short Arabic
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control
                                  type="text"
                                  placeholder="Team Name Short English"
                                  value={formDataAr.Team_Name_Short_Arabic}
                                  onChange={(e) =>
                                    handleChangeAr("Team_Name_Short_Arabic", e.target.value)
                                  }
                                />
                              </Col>
                            </Form.Group>
                          {/* <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="formPlaintextPassword"
                          >
                            <Form.Label column sm="2">
                            Team Blog Category
                            </Form.Label>
                            <Col sm="10">
                              <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Col>
                          </Form.Group> */}
                        </div>
                      </Tab>
                    </Tabs>
                  </div>


                </div>
              </div>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
}