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
import { REQUEST_TYPE,UPDATE_SEASON_YEAR,GET_USER_BY_ID,UPDATE_USER } from '../helper/APIInfo';
export default function EditUser() {


  const { id } = useParams();
  console.log(id)
  let local = localStorage.getItem("token");
  const [aboutData, setAboutData] = useState({
    
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        status: "",
        userGroup: "",
        userName: ""
        
  });
  
  const handleTextChange = (field, value) => {
    setAboutData({
      ...aboutData,
      [field]: value,
    });
  };

  const getSeasonById = async () => {
    
 
 
    
    try {
      const baseUrl=GET_USER_BY_ID.user;
      const apiUrl =`${baseUrl}/${id}`
      const response = await  apiCall(apiUrl,REQUEST_TYPE.GET,{},local);
      console.log(response.response.data.body);
      const aboutInfo = response.response.data.body;
     
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
        userName: aboutData.userName,
        userGroup: aboutData.userGroup,
        firstName: aboutData.firstName,
        lastName: aboutData.lastName,
        email: aboutData.email,
        password: aboutData.password,
        status: aboutData.status
      };
      const baseUrl=UPDATE_USER.updateuser;
      const apiUrl =`${baseUrl}/${id}`
      console.log(apiUrl)
      const response = await apiCall(apiUrl,REQUEST_TYPE.PUT, updatedData,local);
  
      console.log(response);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  
 // console.log(aboutData)
  
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
                                    <button onClick={handleUpdateData}>
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
        <section className="">
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
                                                    value={aboutData.userName}
                                                    onChange={(e) =>
                                                        handleTextChange("userName", e.target.value)
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
                                                        handleTextChange("userGroup", e.target.value)
                                                    }
                                                    value={aboutData.userGroup}
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
                                                    value={aboutData.firstName}
                                                    onChange={(e) =>
                                                        handleTextChange("firstName", e.target.value)
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
                                                    value={aboutData.lastName}
                                                    onChange={(e) =>
                                                        handleTextChange("lastName", e.target.value)
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
                                                    value={aboutData.email}
                                                    onChange={(e) =>
                                                        handleTextChange("email", e.target.value)
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
                                                    value={aboutData.password}
                                                    //onChange={handleImageChange}
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
                                                    value={aboutData.status}
                                                    onChange={(e) =>
                                                        handleTextChange("password", e.target.value)
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
                                                        handleTextChange("status", e.target.value)
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
  )
}
