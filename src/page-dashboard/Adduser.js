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

export default function Adduser() {
    const [imagePreview, setImagePreview] = useState(null);


    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        status: "",
        userGroup: "",
        userName: ""
        });
    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

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

    
    const handleSave = async () => {
        
        try {
            console.log("Sending request with formData:", formData);
            const response = await axios.post("http://localhost:5000/AddUser", formData);
            console.log("Response from server:", response);
            
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
                                        <h3> User</h3>
                                        <ul className="season-link">
                                            <li>
                                                <Link>Home</Link>
                                            </li>
                                            <li>
                                                <i className="ri-arrow-right-s-line"></i>
                                            </li>
                                            <li>
                                                <Link>User</Link>
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
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
                <hr />
                <section className="Add-Season-open">
                    <Container fluid>
                        <Row>
                            <div className="main_add_season">
                                <div className="container-fluid">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h3 class="panel-title">
                                                <i class="fa fa-pencil"></i> Add User
                                            </h3>
                                        </div>
                                        <div class="panel-body">
                                            <form id="form-user" class="form-horizontal">
                                                <div class="form-group required">
                                                    <label
                                                        class="col-sm-2 control-label"
                                                        for="input-username"
                                                    >
                                                        Username
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <input
                                                            type="text"
                                                            name="userName"
                                                            placeholder="Username"
                                                            id="input-username"
                                                            class="form-control"
                                                            onChange={(e) =>
                                                                handleChange("userName", e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group ">
                                                    <label
                                                        class="col-sm-2 control-label "
                                                        for="input-user-group"
                                                    >
                                                        User Group
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <select
                                                            name="userGroup"
                                                            id="input-user-group"
                                                            class="form-control"
                                                            onChange={(e) =>
                                                                handleChange("userGroup", e.target.value)
                                                            }
                                                        >
                                                            <option value="administrator">
                                                                Administrator
                                                            </option>
                                                            <option value="Banner">Banners</option>
                                                            <option value="Cafe">Cafe</option>
                                                            <option value="DataEntry">Data Entry</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group required">
                                                    <label
                                                        class="col-sm-2 control-label"
                                                        for="input-firstname"
                                                    >
                                                        First Name
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <input
                                                            type="text"
                                                            name="firstName"
                                                            placeholder="First Name"
                                                            id="input-firstname"
                                                            class="form-control"
                                                            onChange={(e) =>
                                                                handleChange("firstName", e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group required">
                                                    <label
                                                        class="col-sm-2 control-label"
                                                        for="input-lastname"
                                                    >
                                                        Last Name
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <input
                                                            type="text"
                                                            name="lastName"
                                                            placeholder="Last Name"
                                                            id="input-lastname"
                                                            class="form-control"
                                                            onChange={(e) =>
                                                                handleChange("lastName", e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group required">
                                                    <label
                                                        class="col-sm-2 control-label"
                                                        for="input-email"
                                                    >
                                                        E-Mail
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <input
                                                            type="text"
                                                            name="email"
                                                            placeholder="E-Mail"
                                                            id="input-email"
                                                            class="form-control"
                                                            onChange={(e) =>
                                                                handleChange("email", e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group img-g">
                                                    <label
                                                        class="col-sm-2 control-label"
                                                        for="input-image"
                                                    >
                                                        Image
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <a
                                                            href=""
                                                            id="thumb-image"
                                                            data-toggle="image"
                                                            class="img-thumbnail     "
                                                        >
                                                            <img src="" alt="" title="" />
                                                        </a>
                                                        <input
                                                            type="hidden"
                                                            name="image"
                                                            id="input-image"
                                                            onChange={handleImageChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group required">
                                                    <label
                                                        class="col-sm-2 control-label"
                                                        for="input-password"
                                                    >
                                                        Password
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            placeholder="Password"
                                                            id="input-password"
                                                            class="form-control"
                                                            autocomplete="off"
                                                            onChange={(e) =>
                                                                handleChange("password", e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                {/* <div class="form-group required">
                                                    <label
                                                        class="col-sm-2 control-label"
                                                        for="input-confirm"
                                                    >
                                                        Confirm
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <input
                                                            type="password"
                                                            name="confirm"
                                                            placeholder="Confirm"
                                                            id="input-confirm"
                                                            class="form-control"
                                                            onChange={(e) =>
                                                                handleChange("confirm", e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                </div> */}
                                                <div class="form-group">
                                                    <label
                                                        class="col-sm-2 control-label"
                                                        for="input-status"
                                                    >
                                                        Status
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <select
                                                            name="status"
                                                            id="input-status"
                                                            class="form-control"
                                                            onChange={(e) =>
                                                                handleChange("status", e.target.value)
                                                            }
                                                        >
                                                            <option value="0" selected="selected">
                                                                Disabled
                                                            </option>
                                                            <option value="1">Enabled</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
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
