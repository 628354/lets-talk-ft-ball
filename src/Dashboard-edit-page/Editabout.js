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
import { ABOUT_US, REQUEST_TYPE } from "../helper/APIInfo";

export default function Editabout() {
  const [isEditing, setIsEditing] = useState(false);
  const [aboutData, setAboutData] = useState({
    aboutTitle: "",
    aboutText: "",
    visionTitle: "",
    bannerImage: "",
  });
  const [aboutDataAr, setAboutDataAr] = useState({
    aboutTitle: "",
    aboutText: "",
    visionTitle: "",
    bannerImage: "",
  });
  const [itemId, setItemId] = useState(0);

  const handleTextChange = (field, value) => {
	setAboutDataAr((prevAboutData) => ({
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
  

  const handleFileChange = (field, file) => {
    setAboutData({
      ...aboutData,
      [field]: file,
    });
  };

  const handleFileChangeAr = (field, file) => {
    setAboutDataAr({
      ...aboutDataAr,
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
  };

  const getAboutData = async () => {
    const response = await apiCall(ABOUT_US.finden, REQUEST_TYPE.GET);
    response?.response?.data?.data?.map((item) => {
	
      setAboutData(item?.en);
	
    });
  };

  const getAboutDataAr = async () => {
    const response = await apiCall(ABOUT_US.findar, REQUEST_TYPE.GET);
    response?.response?.data?.data?.map((item) => {
      setAboutDataAr(item?.ar);
	 
    });
  };

  useEffect(() => {
    getAboutData();
    getAboutDataAr();
  }, []);

  const handleUpdateData = () => {
    const formData = new FormData();
    formData.append("aboutTitle", aboutData.aboutTitle);
    formData.append("aboutText", aboutData.aboutText);
    formData.append("visionTitle", aboutData.visionTitle);
    formData.append("bannerImage", aboutData.bannerImage);

    axios
      .post(
        `https://phpstack-1140615-3967632.cloudwaysapps.com/backend/updateAboutus/${itemId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setIsEditing(false);
        // Handle success, e.g., show a success message
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleUpdateDataAr = () => {
    const formData = new FormData();
    formData.append("aboutTitle", aboutDataAr.aboutTitle);
    formData.append("aboutText", aboutDataAr.aboutText);
    formData.append("visionTitle", aboutDataAr.visionTitle);
    formData.append("bannerImage", aboutDataAr.bannerImage);

    axios
      .post(
        `https://phpstack-1140615-3967632.cloudwaysapps.com/backend/updateAboutus/${itemId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setIsEditing(false);
        // Handle success, e.g., show a success message
      })
      .catch((error) => {
        console.error("Error updating Arabic data:", error);
      });
  };

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
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <div className="add-part">
                  <ul className="add-button-min">
                    <li className="add-button-fis">
                      <Link to="">
                        <i className="ri-save-3-line"></i>
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
                                onChange={(e) =>
                                  handleFileChange(
                                    "bannerImage",
                                    e.target.files[0]
                                  )
                                }
                              />
                            </Form.Group>
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
                                value={aboutData.aboutText}
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
                                onChange={(e) =>
                                  handleFileChange(
                                    "aboutSectionImage",
                                    e.target.files[0]
                                  )
                                }
                              />
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>
                                Our Vision section image upload{" "}
                              </Form.Label>
                              <Form.Control
                                type="file"
                                onChange={(e) =>
                                  handleFileChange(
                                    "visionSectionImage",
                                    e.target.files[0]
                                  )
                                }
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Our Vision Title</Form.Label>
                              <ReactQuill
                                className="edit-text"
                                value={aboutData.visionTitle}
                                onChange={(value) =>
                                  handleTextChange("visionTitle", value)
                                }
                              />
                            </Form.Group>
                          </Form>
                          <div className="button-press">
                            {isEditing ? (
                              <Button onClick={handleUpdateData}>Save</Button>
                            ) : (
                              <Button onClick={() => setIsEditing(true)}>
                                Edit
                              </Button>
                            )}
                          </div>
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
                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>banner upload </Form.Label>
                              <Form.Control
                                type="file"
                                onChange={(e) =>
                                  handleFileChangeAr(
                                    "bannerImage",
                                    e.target.files[0]
                                  )
                                }
                              />
                            </Form.Group>
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
                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>
                                About section image upload{" "}
                              </Form.Label>
                              <Form.Control
                                type="file"
                                onChange={(e) =>
                                  handleFileChangeAr(
                                    "aboutSectionImage",
                                    e.target.files[0]
                                  )
                                }
                              />
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>
                                Our Vision section image upload{" "}
                              </Form.Label>
                              <Form.Control
                                type="file"
                                onChange={(e) =>
                                  handleFileChangeAr(
                                    "visionSectionImage",
                                    e.target.files[0]
                                  )
                                }
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Our Vision Title</Form.Label>
                              <ReactQuill
                                className="edit-text"
                                value={aboutDataAr.visionTitle}
                                onChange={(value) =>
                                  handleTextChangeAr("visionTitle", value)
                                }
                              />
                            </Form.Group>
                          </Form>
                          <div className="button-press">
                            <Button onClick={() => setIsEditing(true)}>
                              Edit
                            </Button>
                            <Button onClick={handleUpdateDataAr}>Save</Button>
                          </div>
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
