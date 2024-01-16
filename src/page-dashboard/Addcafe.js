import React from "react";
import Menubar from "../dashboard/Menubar";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { apiCall } from "../helper/RequestHandler";
import { ADD_CAFE, REQUEST_TYPE } from "../helper/APIInfo";

export default function Addcafe() {

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    content: "",
  });

  const [arFormData, setArFormData] = useState({
    title: "",
    date: "",
    content: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleChangeAr = (field, value) => {
    setArFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  const [text, setText] = useState("");

  const handleTextChange = (value) => {
    setText(value);
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
  const removePTags = (html) => {
    // Remove <p> tags from the HTML string
    return html?.replace(/<\/?p>/g, "");
  };


  const addCafe = async()=>{
  console.log({
    en:formData,
    ar:arFormData
  });
      const response =await apiCall(ADD_CAFE.cafe,REQUEST_TYPE.POST,{
        en:formData,
        ar:arFormData
      })
      console.log(response);
  
    
  }
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
                    <h3>Add New</h3>
                    <ul className="season-link">
                      <li>
                        <Link>Home</Link>
                      </li>
                      <li>
                        <i className="ri-arrow-right-s-line"></i>
                      </li>
                      <li>
                        <Link>Add New</Link>
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
                        <i className="ri-save-3-line" onClick={addCafe}></i>
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
        <hr/>
        <section className="tab-section">
          <Container fluid>
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
                              <Form.Control type="file" />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Cafe Title</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="About Title"
                                value={formData?.title}
                                onChange={(e) =>
                                  handleChange("title", e.target.value)
                                }
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Cafe textarea</Form.Label>
                              <ReactQuill
                                className="edit-text"
                                value={formData?.content}
                                onChange={(value) =>
                                  handleChange("content", value)
                                }
                              />
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Cafe image upload </Form.Label>
                              <Form.Control type="file" />
                            </Form.Group>
                          </Form>
                          {/* <div className="button-press">
                            <Button>Edit</Button>
                            <Button>seve</Button>
                          </div> */}
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
                            {/* <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>banner upload </Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group> */}
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Cafe Title</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="About Title"
                                value={arFormData?.title}
                                onChange={(e) =>
                                  handleChangeAr("title", e.target.value)
                                }
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Cafe textarea</Form.Label>
                              <ReactQuill
                                className="edit-text"
                                value={arFormData?.content}
                                onChange={(value) =>
                                  handleChangeAr("content", value)
                                }
                              />
                            </Form.Group>
                            {/* <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Cafe image upload </Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group> */}
                          </Form>
                          {/* <div className="button-press">
                            <Button>Edit</Button>
                            <Button>seve</Button>
                          </div> */}
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
