import axios from "axios";
import Menubar from "../dashboard/Menubar";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, ADD_LEAGUES, BASE_URL } from "../helper/APIInfo";
import MediaModal from "./MediaModal";
export default function Addleagues() {
  const [successMessage, setSuccessMessage] = useState(''); // State to hold success message
  const [errorMessage, setErrorMessage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [mediaModalShow, setMediaModalShow] = useState(false);


  const [image,setImage]=useState(null)
  
  const [formData, setFormData] = useState({
    leaguename: "",
    description: "",
    meta_Tag_Title: "",
    meta_Tag_Description: "",
    meta_Tag_Keywords: "",
    sort_Order: "",
    status: "active",
  });

  const [arFormData, setArFormData] = useState({
    leaguename: "",
    description: "",
    meta_Tag_Title: "",
    meta_Tag_Description: "",
    meta_Tag_Keywords: "",
    sort_Order: "",
    status: "active",
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleChangeArabic = (field, value) => {
    setArFormData({
      ...arFormData,
      [field]: value,
    });
  };
  const handleImageChange = (e) => {
    e.preventDefault();
    setMediaModalShow(true);
    // Check if the selected file is an image
   
  };

  // const handleImageChange = (e) => {
  //   setMediaModalShow(true);
  //   const imageFile = e.target.files[0];
  //   setFormData({
  //     ...formData,
  //     image: imageFile,
  //   });
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setImagePreview(reader.result);
  //   };
  //   reader.readAsDataURL(imageFile);
  
  // };

  console.log(mediaModalShow);
  const clearMessages = () => {
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 3000);
  };

  const handleSave = async () => {
    const obj ={
      "image":image,
      en:formData,
      ar: arFormData,

    }
    if( !formData.leaguename || !arFormData.leaguename ||  !formData.meta_Tag_Title ||  !arFormData.meta_Tag_Title ){
      {
        setErrorMessage('All fields are required.');
        clearMessages();
        return;
      }
    }
    try {
      const response = await apiCall(ADD_LEAGUES.league, REQUEST_TYPE.POST, obj);
      // const data1 =response.response.data
      console.log(obj);
      if(response.status === 200){
        console.log("yes----------------");
       setSuccessMessage(response.response.data?.message);
        clearMessages(); 
      }else{
        setErrorMessage('Error occurred. Please try again.');
      clearMessages(); 

      }
      // console.log(response);
      // console.log(response.response.data.success);
    } catch (error) {
      console.error(error);
    }
  };



  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const modules = {
    toolbar: [
      [
        { header: "1" },
        { header: "2" },
        { header: "3" },
        { header: "4" },
        { header: "5" },
        { header: "6" },
      ],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["bold", "italic", "underline", "strike", "blockquote"],
      ["link", "image", "video"],
    ],
  };
  const handleMediaUpload = (selectedFile) => {

    console.log("Media uploaded:", selectedFile);
    
    setImage(selectedFile)
    setMediaModalShow(false); // Close the modal after media upload

  };
  const folderName = localStorage.getItem("foldername")
console.log(folderName);
  return (
    <div>
      <Menubar />
      <div className="right-side-contant py-3">
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
                      <button onClick={handleSave}>
                        <Link to="">
                          <i className="ri-save-3-line"></i>
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
        
        <section className="Add-Season-open">
          <Container fluid>
            <Row>
              <div className="main_add_season">
                <div className="main-ad-sea">
                  <p>
                    <i class="ri-pencil-fill"></i> Add League
                  </p>
                </div>
                

                <div className="addsection-open">
                  {/* <div className="add-genral">
                    <h6>General</h6>
                  </div> */}
                 
                  <div className="general-part">
                    <Tabs
                      defaultActiveKey="profile"
                      id="uncontrolled-tab-example"
                      className="mb-3 generalone"
                    >
                      <Tab
                        className="tabevent"
                        eventKey="profile"
                        title={
                          <span>
                            <img src={require("../img/en.png")} alt="General" />{" "}
                            General
                          </span>
                        }
                      >
                        <div className="sanson-title">
                          <Form>
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label column sm="2" className='season-coll'>
                                League Name
                              </Form.Label>
                              <Col>
                              <Form.Control
                                type="text"
                                placeholder="League Name"
                                value={formData.leaguename}
                                onChange={(e) =>
                                  handleChange("leaguename", e.target.value)
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
                                Image
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
                                League Description
                              </Form.Label>
                              <Col sm="10">
                                <ReactQuill
                                  className="edit-text"
                                  value={formData.description}
                                  onChange={(value) =>
                                    handleChange("description", value)
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
                                League Meta Tag Title
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control
                                  type="text"
                                  placeholder="Meta Tag Title"
                                  value={formData.meta_Tag_Title}
                                  onChange={(e) =>
                                    handleChange(
                                      "meta_Tag_Title",
                                      e.target.value
                                    )
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
                                League Meta Tag Description
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  value={formData.meta_Tag_Description}
                                  onChange={(e) =>
                                    handleChange(
                                      "meta_Tag_Description",
                                      e.target.value
                                    )
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
                                League Meta Tag Keywords
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  value={formData.meta_Tag_Keywords}
                                  onChange={(e) =>
                                    handleChange(
                                      "meta_Tag_Keywords",
                                      e.target.value
                                    )
                                  }
                                />
                              </Col>
                            </Form.Group>
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                            </Form.Group>
                          </Form>
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
                              League Name
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control
                                type="text"
                                placeholder="League Namee"
                                required
                                value={arFormData.leaguename}
                                onChange={(e) =>
                                  handleChangeArabic(
                                    "leaguename",
                                    e.target.value
                                  )
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
                              League Description
                            </Form.Label>
                            <Col sm="10">
                              <ReactQuill
                                className="edit-text"
                                value={arFormData.description}
                                onChange={(value) =>
                                  handleChangeArabic("description", value)
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
                              League Meta Tag Title
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control
                                type="text"
                                placeholder="Meta Tag Title"
                                value={arFormData.meta_Tag_Title}
                                onChange={(e) =>
                                  handleChangeArabic(
                                    "meta_Tag_Title",
                                    e.target.value
                                  )
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
                              League Meta Tag Description
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control
                                as="textarea"
                                rows={3}
                                value={arFormData.meta_Tag_Description}
                                onChange={(e) =>
                                  handleChangeArabic(
                                    "meta_Tag_Description",
                                    e.target.value
                                  )
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
                              League Meta Tag Keywords
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control
                                as="textarea"
                                rows={3}
                                value={arFormData.meta_Tag_Keywords}
                                onChange={(e) =>
                                  handleChangeArabic(
                                    "meta_Tag_Keywords",
                                    e.target.value
                                  )
                                }
                              />
                            </Col>
                          </Form.Group>
                          <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="formPlaintextPassword"
                          >
                          </Form.Group>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>

                  <div className="add-genral">
                    <h6>Data</h6>
                  </div>
                  <hr />
                  <div className="date-for-section">
                    <div className="sanson-title">
                      <Form>
                        <Form.Group
                          as={Row}
                          className="mb-3"
                          controlId="formPlaintextPassword"
                        >
                          <Form.Label column sm="2" className='season-coll'>
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

                        <Form.Group
                          as={Row}
                          className="mb-3"
                          controlId="formPlaintextPassword"
                        >
                          <Form.Label column sm="2" className='season-coll'>
                            Sort Order
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control
                              type="number"
                              placeholder="League Namee"
                              value={formData.sort_Order}
                              onChange={(e) =>
                                handleChange("sort_Order", e.target.value)
                              }
                            />
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
  );
}
