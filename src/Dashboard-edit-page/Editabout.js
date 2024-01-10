/** @format */

import React, { useEffect, useState } from "react";
import Menubar from "../dashboard/Menubar";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { apiCall } from "../helper/RequestHandler";
import { ABOUT_US_BOTH, REQUEST_TYPE,UPDATE_ABOUT } from "../helper/APIInfo";

export default function Editabout() {
  const [imagePreview, setImagePreview] = useState(null);
  const [imagePreview2, setImagePreview2] = useState(null);
  const [imagePreview3, setImagePreview3] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId,setSelectedId]=useState(null)
  const [successMessage, setSuccessMessage] = useState(''); // State to hold success message
  const [errorMessage, setErrorMessage] = useState('');
  
  const [aboutData, setAboutData] = useState({
  
    aboutTitle:"",
      aboutText: "",
      visionTitle: "",
      visionText: "",
      missionTitle:"",
      missionText:""
  });
  const [aboutDataAr, setAboutDataAr] = useState({
    aboutTitle:"",
      aboutText: "",
      visionTitle: "",
      visionText: "",
      missionTitle:"",
      missionText:""
  });
  const [itemId, setItemId] = useState(0);

  const handleTextChange = (field, value) => {
	setAboutData((prevAboutData) => ({
	  ...prevAboutData,
	  [field]: value,
	}));
  };
  

  const handleTextChangeAr = (field, value) => {
	setAboutDataAr((prevAboutDataAr) => ({
	  ...prevAboutDataAr,
	  [field]: value,
	}));
  };
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setAboutData((prev)=>({
      ...prev,
      image: imageFile,
    }))
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(imageFile);
  };
  const handleImageChange2 = (e) => {
    const imageFile = e.target.files[0];
    setAboutData((prev)=>({
      ...prev,
      image: imageFile,
    }))
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview2(reader.result);
    };
    reader.readAsDataURL(imageFile);
  };
  const handleImageChange3 = (e) => {
    const imageFile = e.target.files[0];
    setAboutData((prev)=>({
      ...prev,
      image: imageFile,
    }))
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview3(reader.result);
    };
    reader.readAsDataURL(imageFile);
  };
  
  

  const handleFileChange = (field, file) => {
    setAboutData({
      ...aboutData,
      [field]: file,
    });
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
    clipboard: {
      matchVisual: false,
    },
    // Add the following line if you want to remove the default <p> tags
    // when the editor is empty
    placeholder: '',
  };

  const getAboutData = async () => {
    const response = await apiCall(ABOUT_US_BOTH.find, REQUEST_TYPE.GET);
    console.log(response.response?.data?.body?.[0]);
    const data = response.response?.data?.body?.[0]
    setAboutData(data?.en)
    setAboutDataAr(data?.ar);
    setSelectedId(data?._id)
  
  
	// console.log(response.response);
  //     setAboutData(item?.en);
	
  //   });
  };

  



  const handleUpdateData = async() => {
    const token = localStorage.getItem("token");
    const data = {
      en: aboutData,
      ar: aboutDataAr,
    }
    const baseUrl=`${UPDATE_ABOUT.update}/${selectedId}`
    const response =await apiCall(baseUrl,REQUEST_TYPE.POST,data,token)
    console.log(response.response); 
    if(response.status === 200){
      console.log("yes----------------");
     setSuccessMessage(response.response.data?.message);
      clearMessages(); 
    }else{
      setErrorMessage('Error occurred. Please try again.');
    clearMessages(); 
  
    }
   
  };
  const clearMessages = () => {
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 3000); // Clear messages after 3 seconds
  };

  const removePTags = (html) => {
    // Remove <p> tags from the HTML string
    return html?.replace(/<\/?p>/g, "");
  };
  useEffect(() => {
    getAboutData();
    // getAboutDataAr();
  },[]);
// console.log(aboutDataAr);
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
                    <h3>Edit About</h3>
                    <ul className="season-link">
                      <li>
                        <Link>Home</Link>
                      </li>
                      <li>
                        <i className="ri-arrow-right-s-line"></i>
                      </li>
                      <li>
                        <Link>Edit Home</Link>
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
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <div className="add-part">
                  <ul className="add-button-min">
                    <li className="add-button-fis">
                      <Link to="">
                        <i className="ri-save-3-line" onClick={handleUpdateData}></i>
                      </Link>
                    </li>
                    <li className="add-button-cencel">
                      <Link to="/Leagues">
                        <i className="ri-reply-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <section className="tab-section">
          <Container>
            <Row>
              <div className="general-part-home">
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
                      <div className="edithome">
                        <div className="bannerimage">
                          <Form>
                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>banner upload </Form.Label>
                              <Form.Control
                                type="file"
                                onChange={handleImageChange}
                                
                                
                              />
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
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>About Title</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="About Title"
                                value={aboutData?.aboutTitle}
                                onChange={(e) =>
                                  handleTextChange(
                                    "aboutTitle",
                                    e.target.value
                                  )
                                }
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>About text Area</Form.Label>
                              <ReactQuill
                                className="edit-text"
                                value={aboutData?.aboutText}
                                onChange={(value) =>
                                  handleTextChange("aboutText", value)
                                }
                              />
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>
                                About section image upload{" "}
                              </Form.Label>
                              <Form.Control
                                type="file"
                                onChange={handleImageChange2}
                              />
                            </Form.Group>
                            {imagePreview2 && (
                              <div>
                                <img
                                  src={imagePreview2}
                                  style={{ maxWidth: "10%" }}
                                  alt="Selected"
                                />
                              </div>
                            )}
                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>
                                Our Vision section image upload{" "}
                              </Form.Label>
                              <Form.Control
                                type="file"
                                onChange={handleImageChange3}
                              />
                            </Form.Group>
                            {imagePreview3 && (
                              <div>
                                <img
                                  src={imagePreview3}
                                  style={{ maxWidth: "10%" }}
                                  alt="Selected"
                                />
                              </div>
                            )}
                             <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Vision Title</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Vision Title"
                                value={removePTags(aboutData?.visionTitle)}
                                onChange={(e) =>
                                  handleTextChange(
                                    "visionTitle",
                                    e.target.value
                                  )
                                }
                              
                              />
                            </Form.Group>
                            
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Our Vision text Area</Form.Label>
                              <ReactQuill
                                className="edit-text"
                                value={aboutData?.visionText}
                                onChange={(value) =>
                                  handleTextChange("visionText", value)
                                }
                              
                                
                              />
                              
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Vision Title</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Mision Title"
                                value={removePTags(aboutData?.missionTitle)}
                                onChange={(e) =>
                                  handleTextChange(
                                    "missionTitle",
                                    e.target.value
                                  )
                                }
                              
                              />
                            </Form.Group>
                            
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Our Mision text Area</Form.Label>
                              <ReactQuill
                                className="edit-text"
                                value={aboutData?.missionText}
                                onChange={(value) =>
                                  handleTextChange("missionText", value)
                                }
                              
                                
                              />
                              
                            </Form.Group>
                            
                          </Form>
                         
                        </div>
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
                      <div className="edithome">
                        <div className="bannerimage">
                          <Form>
                          
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>About Title</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="About Title"
                                value={aboutDataAr?.aboutTitle}
                                onChange={(e) =>
                                  handleTextChangeAr(
                                    "aboutTitle",
                                    e.target.value
                                  )
                                }
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>About text Area</Form.Label>
                              <ReactQuill
                                className="edit-text"
                                value={aboutDataAr?.aboutText }
                                onChange={(value) =>
                                  handleTextChangeAr("aboutText", value)
                                }
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Vision Title</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Vision Title"
                                value={removePTags(aboutDataAr?.visionTitle)}
                                onChange={(e) =>
                                  handleTextChangeAr(
                                    "visionTitle",
                                    e.target.value
                                  )
                                }
                              
                              />
                            </Form.Group>
                            
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Our Vision text Area</Form.Label>
                              <ReactQuill
                                className="edit-text"
                                value={aboutDataAr?.visionText}
                                onChange={(value) =>
                                  handleTextChangeAr("visionText", value)
                                }
                              
                                
                              />
                              
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Vision Title</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Mision Title"
                                value={removePTags(aboutDataAr?.missionTitle)}
                                onChange={(e) =>
                                  handleTextChangeAr(
                                    "missionTitle",
                                    e.target.value
                                  )
                                }
                              
                              />
                            </Form.Group>
                            
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Our Mision text Area</Form.Label>
                              <ReactQuill
                                className="edit-text"
                                value={aboutDataAr?.missionText}
                                onChange={(value) =>
                                  handleTextChangeAr("missionText", value)
                                }
                              
                                
                              />
                              
                            </Form.Group>
                          </Form>
                          
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
}
