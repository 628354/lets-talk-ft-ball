import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Menubar from '../dashboard/Menubar';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import { apiCall } from '../helper/RequestHandler';
import { REQUEST_TYPE,GET_LEAGUE_BY_ID,UPDATE_LEAGUE, BASE_URL } from '../helper/APIInfo';
import MediaModal from "./MediaModal";
export default function Editleagues() {
  const { id } = useParams();
  const [successMessage, setSuccessMessage] = useState(''); // State to hold success message
  const [errorMessage, setErrorMessage] = useState('');
  const [mediaModalShow, setMediaModalShow] = useState(false);
  const [image,setImage]=useState(null);
  
  const [aboutData, setAboutData] = useState({
    leaguename: '',
    description: '',
    meta_Tag_Title: '' ,
    meta_Tag_Description : '' ,
    meta_Tag_Keywords : '' ,
    blog_Category : '' ,
    sort_Order : '' ,
    status :'active'
  });

  const [aboutDataAr, setAboutDataAr] = useState({
    leaguename: '',
    description: '',
    meta_Tag_Title: '' ,
    meta_Tag_Description : '' ,
    meta_Tag_Keywords : '' ,
    blog_Category : '' ,
    sort_Order : '' ,
    status :'active'
  });

  const [imageURL, setImageURL] = useState('');

  const clearMessages = () => {
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 3000); // Clear messages after 3 seconds
  };

  const handleTextChange = (field, value) => {
    setAboutData((prev)=>({
      ...prev,
      [field]: value,

    }))
    
  };

  const handleTextChangeAr =(field,value)=>{
    setAboutDataAr((prev)=>({
      ...prev,
      [field]: value,

    }))
  }

  const handleImageChange = (e) => {
    e.preventDefault();
    setMediaModalShow(true);
    
  };


const getLeagueById =async()=>{
  try{
    const data ={}
    const baseUrl=GET_LEAGUE_BY_ID.getLeague;
    const apiUrl =`${baseUrl}/${id}`
    const response=await apiCall(apiUrl,REQUEST_TYPE.GET);
    console.log(response.response.data?.body?.en)
    const aboutInfo = response.response?.data?.data?.en
    // setImageURL(aboutInfo?.image); // Set the imageURL state with the fetched image URL
    //  setAboutData(response.response.data?.body?.en);
    setImage(response.response.data?.body?.image)
     Object.assign(data, {
      "leaguename":response.response.data?.body?.en?.leaguename,
      "description":response.response.data?.body?.en?.description,
      'meta_Tag_Title': response.response.data?.body?.en?.meta_Tag_Title ,
      'meta_Tag_Description' : response.response.data?.body?.en?.meta_Tag_Description,
     'meta_Tag_Keywords ':response.response.data?.body?.en?.meta_Tag_Keywords,
     'blog_Category' : response.response.data?.body?.en?.blog_Category ,
     'sort_Order' :response.response.data?.body?.en?.sort_Order,
     'image':response.response.data?.body?.image,


    });
    
console.log(data);
setAboutData(data)
  }catch(error){
    console.log("get data ",error)
  }

}
const getLeagueByIdAr =async()=>{
  try{
    const baseUrl=GET_LEAGUE_BY_ID.getLeaguear;
    const apiUrl =`${baseUrl}/${id}`
    const response=await apiCall(apiUrl,REQUEST_TYPE.GET);
    console.log(response.response?.data?.data?.ar)
    const aboutInfo =response.response.data?.body?.ar
    // const aboutInfo = response.response.data.body
    // setImageURL(aboutInfo?.image); // Set the imageURL state with the fetched image URL
     setAboutDataAr(aboutInfo);

  }catch(error){
    console.log("get data ",error)
  }

}
useEffect(()=>{
  getLeagueById()
  getLeagueByIdAr()
},[])


  const handleUpdateData = async() => {
    const obj ={
      "image":image,
      en:aboutData,
      ar:aboutDataAr,

    }
   
    // const formData = new FormData();
    // formData.append('en[leaguename]', aboutData.leaguename);
    //   formData.append('en[description]', aboutData.description);
    //   formData.append('en[meta_Tag_Title]', aboutData.meta_Tag_Title);
    //   formData.append('en[meta_Tag_Description]', aboutData.meta_Tag_Description);
    //   formData.append('en[meta_Tag_Keywords]', aboutData.meta_Tag_Keywords);
    //   formData.append('en[blog_Category]', aboutData.blog_Category);
    //   formData.append('en[sort_Order]', aboutData.sort_Order);
    //   formData.append('en[status]', aboutData.status);

    //   // Arabic data
    //   formData.append('ar[leaguename]', aboutDataAr.leaguename);
    //   formData.append('ar[description]', aboutDataAr.description);
    //   formData.append('ar[meta_Tag_Title]', aboutDataAr.meta_Tag_Title);
    //   formData.append('ar[meta_Tag_Description]', aboutDataAr.meta_Tag_Description);
    //   formData.append('ar[meta_Tag_Keywords]', aboutDataAr.meta_Tag_Keywords);
    //   formData.append('ar[blog_Category]', aboutDataAr.blog_Category);
    //   formData.append('ar[sort_Order]', aboutDataAr.sort_Order);
    //   formData.append('ar[status]', aboutDataAr.status);
    const formData = {
      en: aboutData,
      ar: aboutDataAr,
    };
    const baseUrl=UPDATE_LEAGUE.upDate;
    const apiUrl =`${baseUrl}/${id}`
    //console.log(id);
     const token = localStorage.getItem("token");
    

   
    const response = await apiCall(apiUrl,REQUEST_TYPE.POST,obj,token);
   console.log(response)
   if(response.status === 200){
    console.log("yes----------------");
   setSuccessMessage(response.response.data?.message);
    clearMessages(); 
  }else{
    setErrorMessage('Error occurred. Please try again.');
  clearMessages(); 

  }
   
    
  };

// console.log(aboutData);
// console.log(aboutDataAr);
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
  const handleMediaUpload = (selectedFile) => {

    console.log("Media uploaded:", selectedFile);
    
    setImage(selectedFile)
    setMediaModalShow(false); // Close the modal after media upload

  };
  // console.log(`${BASE_URL}${aboutData?.image}`);
  return (
    <div>
      <Menubar />
      <div className='right-side-contant py-3'>
      <section className="min-section-one">
          <Container fluid>
            <Row>
              <div className="col-lg-6 col-md-6 col-6">
                <div className="season-us">
                  <div className="season-link-part">
                    <h3> League</h3>
                    <ul className="season-link">
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
                <div className="add-part">
                  <ul className="add-button-min">
                    <li className="add-button-fis">
                      <button >
                        <Link to="">
                          <i className="ri-save-3-line" onClick={handleUpdateData}></i>
                        </Link>
                      </button>
                    </li>
                    <li className="add-button-cencel">
                      <Link to="/Leagues">
                        <i className="ri-reply-fill"></i>
                      </Link>
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
                  <p><i class="ri-pencil-fill"></i> Edit League</p>
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
                        <div className='sanson-title'>
                          <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="2" className="season-coll">
                                League Name
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control type="text" placeholder="League Name" value={aboutData?.leaguename}
                                  onChange={(e) => handleTextChange('leaguename', e.target.value)} />
                              </Col>
                            </Form.Group>
                           
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="2" className="season-coll">
                                Image
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control type="file"  onChange={handleImageChange} />
                              </Col>
                            </Form.Group>
                            {image ? <img className="logo_im" src={`${BASE_URL}${image}`}/> : null }
                            <MediaModal
       show={mediaModalShow}
       onHide={() => setMediaModalShow(false)}
       onUpload={handleMediaUpload}
      />
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="2" className="season-coll">
                                League Description
                              </Form.Label>
                              <Col sm="10">
                                <ReactQuill className='edit-text' value={aboutData?.description}
                                onChange={(value) => handleTextChange('description', value)} />
                              </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="2" className="season-coll">
                                League Meta Tag Title
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control type="text" placeholder="Meta Tag Title" value={aboutData?.meta_Tag_Title}
                                  onChange={(e) => handleTextChange('meta_Tag_Title', e.target.value)}/>
                              </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="2" className="season-coll">
                                League Meta Tag Description
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control as="textarea" rows={3}  value={aboutData?.meta_Tag_Description}
                                  onChange={(e) => handleTextChange('meta_Tag_Description', e.target.value)} />
                              </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="2" className="season-coll">
                                League Meta Tag Keywords
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control as="textarea" rows={3}  value={aboutData?.meta_Tag_Keywords}
                                  onChange={(e) => handleTextChange('meta_Tag_Keywords', e.target.value)}/>
                              </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="2" className="season-coll">
                                League Blog Category
                              </Form.Label>
                              <Col sm="10">
                                <Form.Select aria-label="Default select example">
                                  <option>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </Form.Select>
                              </Col>
                            </Form.Group>
                          </Form>
                        </div>
                      </Tab>
                      <Tab eventKey="profile2" title={<span><img src={require('../img/ar.png')} alt="General" /> العربية</span>}>
                        <div className='sanson-title'>
                          <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="2" className="season-coll">
                                League Name
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control type="text" placeholder="League Namee" value={aboutDataAr?.leaguename}
                                 onChange={(e) => handleTextChangeAr('leaguename', e.target.value)} />
                              </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="2" className="season-coll">
                                League Description       
                              </Form.Label>
                              <Col sm="10">
                                <ReactQuill className='edit-text'  value={aboutDataAr?.description}  onChange={(value) => handleTextChangeAr('description', value)} />
                              </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="2" className="season-coll">
                                League Meta Tag Title
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control type="text" placeholder="Meta Tag Title" onChange={(e) => handleTextChangeAr('meta_Tag_Title', e.target.value)}/>
                              </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="2" className="season-coll">
                                League Meta Tag Description
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control as="textarea" rows={3}  onChange={(e) => handleTextChangeAr('meta_Tag_Keywords', e.target.value)}/>
                              </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="2" className="season-coll">
                                League Meta Tag Keywords
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control as="textarea" rows={3} />
                              </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="2" className="season-coll">
                                League Blog Category
                              </Form.Label>
                              <Col sm="10">
                                <Form.Select aria-label="Default select example">
                                  <option>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </Form.Select>
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
                          <Form.Label column sm="2" className="season-coll">
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
                          <Form.Label column sm="2" className="season-coll">
                            Sort Order
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="number" placeholder="League Namee" value={aboutData?.sort_Order}
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
