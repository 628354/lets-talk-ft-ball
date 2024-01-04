import React, { useState, useEffect } from "react";
import axios from "axios";
import Menubar from "../dashboard/Menubar";
import { Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { UPDATE_TEAM, LEAGUES, REQUEST_TYPE, FIND_TEAM_ID } from '../helper/APIInfo';
import { apiCall } from '../helper/RequestHandler';
import ReactQuill from "react-quill";

export default function EditTeams() {
  const { id } = useParams();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [getLeagues, setLeagues] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
const [allData,setAllData]=useState(null)
const [leagueName,setLeagueName]=useState([])
const [leagueNameAr,setLeagueNameAr]=useState([])
  const [formData, setFormData] = useState({
    Team_Name_English: '',
    Team_Name_Short_English: '',
    Description_English: '',
    Team_info: '',
    SEO_URL: '',
    Past_teams_logo_file_names_below: '',
    logo_folder: '',
    Image: '',
    status: 'active',
    league: ''
  });
  const [formDataAr, setFormDataAr] = useState({
    Team_Name_Arabic: '',
    Team_Name_Short_Arabic: '',
    Description_Arabic: '',
    Team_info: '',
    SEO_URL: '',
    Past_teams_logo_file_names_below: '',
    logo_folder: '',
    Image: '',
    status: 'active',
    league: ''


  });
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({
      ...formData,
      image: imageFile,
    });
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(imageFile);
  };



  const handleChange = (field, value) => {
    console.log(`Updating ${field} with value: ${value}`);
    setFormData({
      ...formData,
      [field]: value,
    });
  };


  const handleChangeAr = (field, value) => {
    console.log(`Updating ${field} with value: ${value}`);
    setFormDataAr({
      ...formDataAr,
      [field]: value,
    });
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
const lang ="en"
  const LeagueCall = () => {
    try {
      apiCall(LEAGUES(lang).league, REQUEST_TYPE.GET).then((results) => {
        // console.log(results.response.data.body);
        setLeagues(results.response.data.body);
      });

    } catch (error) {
      console.log("data", error);
    }

  };

  useEffect(() => {
    LeagueCall();
  }, []);

console.log();

  const handleSave = async (e) => {
    e.preventDefault();

   const token =localStorage.getItem("token")
   const baseUrl=UPDATE_TEAM.updateTeam;
   const apiUrl =`${baseUrl}/${id}`
      try {
        let data ={
          leagueid: allData,
          en:formData ,
          ar: formDataAr,
        }
       // console.log(data);
      
      // console.log('Sending data to the server:', { en: formData, ar: formDataAr });

        const response = await apiCall(apiUrl, REQUEST_TYPE.PUT, data,token);
        console.log(response);
        setSuccessMessage(response.response.data.message);
        clearMessages();
      } catch (error) {
        setErrorMessage('Error occurred. Please try again.');
        clearMessages();
      }
    
  };
  
const getLeagueById =async()=>{
  try{
    const baseUrl=FIND_TEAM_ID.teamen;
    const apiUrl =`${baseUrl}/${id}`
    const response=await apiCall(apiUrl,REQUEST_TYPE.GET);
    console.log(response.response?.data?.body?.en)
    const aboutInfo = response.response?.data?.data?.en
    // setImageURL(aboutInfo?.image); // Set the imageURL state with the fetched image URL
    setLeagueName(response.response?.data?.body?.leagueid?.en)
    setFormData(response.response?.data?.body?.en)

  }catch(error){
    console.log("get data ",error)
  }

}
const getLeagueByIdAr =async()=>{
  try{
    const baseUrl=FIND_TEAM_ID.teamar;
    const apiUrl =`${baseUrl}/${id}`
    const response=await apiCall(apiUrl,REQUEST_TYPE.GET);
    console.log(response.response?.data?.body?.ar)
    const aboutInfo =response.response?.data?.body?.ar
    // const aboutInfo = response.response.data.body
    // setImageURL(aboutInfo?.image); // Set the imageURL state with the fetched image URL
    setFormDataAr(aboutInfo);

  }catch(error){
    console.log("get data ",error)
  }

}
useEffect(()=>{
  getLeagueById()
  getLeagueByIdAr()
},[id])
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
        <hr />
        <section className='Add-Teams-open'>
          <Container fluid>
            <Row>
              <div className='main_add_teams'>
                <div className='main-ad-sea'>
                  <p><i className="ri-pencil-fill"></i>  Add Teams</p>
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
                        <div className='sanson-title'></div>
                        <div className='date-for-section'>
                          <div className='sanson-title'>
                          </div>
                          <div className='sanson-title'>
                            <Form>
                              <Form.Group as={Row} className="mb-5" controlId="formPlaintextPassword">
                                <Form.Label column sm="1">
                                  League Name
                                </Form.Label>
                                <Col sm="10">
                                  <Form.Select name="league"
                                    onChange={(e) => handleLeagueChange(e.target.value)} >
                                    <option value={leagueName?.leaguename}>Select League</option>
                                    {getLeagues?.map((row,index) => (
                                      <option key={index} value={row?._id}>
                                        {row?.en?.leaguename}
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
                              <Form.Label column sm="2">
                              Team Name
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Team Name"
                                name="Team_Name_English"
                                value={formData?.Team_Name_English}
                                onChange={(e) =>
                                  handleChange("Team_Name_English", e.target.value)
                                }
                                
                              />
                            </Form.Group>
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label column sm="2">
                              Team Image
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control
                                  type="file"
                                  onChange={handleImageChange}
                                />
                              </Col>
                            </Form.Group>
                            {imagePreview && (
                              <div>
                                <img
                                  src={imagePreview}
                                  style={{ maxWidth: "10%" }}
                                  alt="Selected"
                                />
                              </div>
                            )}
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label column sm="2">
                              Team Description
                              </Form.Label>
                              <Col sm="10">
                                <ReactQuill
                                  className="edit-text"
                                  value={formData?.Description_English}
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
                              <Form.Label column sm="2">
                              Team Name Short English
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control
                                  type="text"
                                  placeholder="Team Name Short English"
                                  value={formData?.Team_Name_Short_English}
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
                                <Form.Label column sm="2">
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
                              <Form.Label column sm="2">
                              Team Name
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Team Name Arabic"
                                value={formDataAr?.Team_Name_Arabic}
                                onChange={(e) =>
                                  handleChangeAr("Team_Name_Arabic", e.target.value)
                                }
                                
                              />
                            </Form.Group>
                            
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label column sm="2">
                              Team Description
                              </Form.Label>
                              <Col sm="10">
                                <ReactQuill
                                  className="edit-text"
                                  value={formDataAr?.Description_Arabic}
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
                              <Form.Label column sm="2">
                              Team Name Short Arabic
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control
                                  type="text"
                                  placeholder="Team Name Short English"
                                  value={formDataAr?.Team_Name_Short_Arabic}
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