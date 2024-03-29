import React from "react";
import "../css/Dashboard.css";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Login from "../page/Login";
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';

///here we get data and store in variable 
//  const chandn = "https://jsonplaceholder.typicode.com/posts";




export default function Menubar() {

  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const handleSubMenuToggle = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };





  
const  navigate =useNavigate();
  // const [post, setPost] = React.useState([]);
  // React.useEffect(() => {
  //   axios.get(chandn).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout =()=>{
    console.log("Logging out...");
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div>
      <section className="navheader">
        <Container fluid>
          <Row>
            <div className="col-lg-6 col-md-6 col-6">
              <div className="header_text_sid">
                <h3>letstalkftball</h3>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-6">
              <div className="profile-drop">
              <div className="profile-dev">
              <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <span className="image-success"><img
								src={require("../img/profile-45x45.png")}
								alt="earth"
								className="logo-profile"
							/></span>nardsub nardsub 
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"> <span className="image-success-user"><img
								src={require("../img/profile-45x45.png")}
								alt="earth"
								className="logo-profile-user"
							/></span>  Your Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Stores</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Lets Talk ft Ball</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>


              <div className="navmenu_login">
                <Link to="/login" onClick={handleLogout}>
                  <i class="ri-login-box-line"></i> Logout
                </Link>
              </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <section className="navslide">
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="left-side-contant px-0 bg-dark">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <ul
                  className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start menuitem_s"
                  id="menu"
                >
                  <li className="nav-item">
                    <Link to="/Dashboard"
                     className="nav-link align-middle px-0">
                      <i class="ri-dashboard-line"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#submenu2"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle "
                      
                    >
                      <i className="fa fa-file" aria-hidden="true"></i>
                      <span className="ms-1 d-none d-sm-inline">Page</span>
                      <i className="ri-arrow-down-s-line"></i>{" "}
                    </Link>
                    <ul
                      className="collapse nav flex-column ms-4"
                      id="submenu2"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <Link to="/Edithome" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Home</span>
                        </Link>
                      </li>
                      <li className="w-100">
                        <Link to="/Editabout" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">About us</span>
                        </Link>
                      </li>
                      {/* <li className="w-100">
                        <Link to="/Leagues" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Leagues</span>
                        </Link>
                      </li> */}
                      {/* <li>
                        <Link to="" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Cafe</span>
                        </Link>
                      </li> */}
                      <li>
                        <Link to="/definitionlist" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">
                            Definition{" "}
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Editcontact" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">
                            Contact Us{" "}
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Editprivacypolicy" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">
                            Terms and Privacy
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      to="#submenu33"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i class="fa fa-life-ring" aria-hidden="true"></i>
                      <span className="ms-1 d-none d-sm-inline"> Cafe</span>{" "}
                      <i className="ri-arrow-down-s-line"></i>{" "}
                    </Link>
                    <ul
                      className="collapse nav flex-column ms-4"
                      id="submenu33"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <Link to="/Addcafe" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Add Cafe</span>
                        </Link>
                      </li>
                      <li className="w-100">
                        <Link to="/Cafeview" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline"> Cafe View</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      to="#bulkimp"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                       <i className="fa fa-star-half-o" aria-hidden="true"></i>
                      <span className="ms-1 d-none d-sm-inline"> Bulk Upload</span>{" "}
                      <i class="ri-arrow-down-s-line"></i>{" "}
                    </Link>
                    <ul
                      className="collapse nav flex-column ms-4"
                      id="bulkimp"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <Link to="/LeaguesBluk" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">League Team Bulk Import</span>
                        </Link>
                      </li>
                      {/* <li className="w-100">
                        <Link to="/Bulk-teams" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Bulk Team</span>
                        </Link>
                      </li> */}
                     

                    </ul>
                  </li>

                  <li>
                    <Link
                      to="#submenu3"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fa fa-area-chart" aria-hidden="true"></i>
                      <span className="ms-1 d-none d-sm-inline"> Catalog</span>{" "}
                      <i class="ri-arrow-down-s-line"></i>{" "}
                    </Link>
                    
                    <ul
                      className="collapse nav flex-column ms-4"
                      id="submenu3"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <Link to="/Season" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Season</span>
                        </Link>
                      </li>
                      
                      <li className="w-100">
                        <Link to="/Leagues" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Leagues</span>
                        </Link>
                      </li>
                      <li className="w-100">
                        <Link to="/Teams" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Teams</span>
                        </Link>
                      </li>
                      <li className="w-100">
                        <Link to="/cat-logs" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Team B-Upload</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/uploadMedia" className="nav-link px-0 align-middle">
                    <i className="fa fa-medium" aria-hidden="true"></i>
                      <span className="ms-1 d-none d-sm-inline">Media</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#submenu23"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <span className="ms-1 d-none d-sm-inline"> User</span>{" "}
                      <i class="ri-arrow-down-s-line"></i>{" "}
                    </Link>
                    
                    <ul
                      className="collapse nav flex-column ms-4"
                      id="submenu23"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <Link to="/User" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">User</span>
                        </Link>
                      </li>
                      
                      <li className="w-100">
                        <Link to="/user-group" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">User Group</span>
                        </Link>
                      </li>
                     
                    </ul>
                  </li>
                  {/* <li>
                    <Link to="/User" className="nav-link px-0 align-middle">
                    <i className="fa fa-user" aria-hidden="true"></i>
                      <span className="ms-1 d-none d-sm-inline">User</span>
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link to="#" className="nav-link px-0 align-middle">
                    <i className="fa fa-users" aria-hidden="true"></i>
                      <span className="ms-1 d-none d-sm-inline">Customers</span>
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      to="#submenu4"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <span className="ms-1 d-none d-sm-inline">Products</span>{" "}
                      <i class="ri-arrow-down-s-line"></i>{" "}
                    </Link>
                    <ul
                      className="collapse nav flex-column ms-5"
                      id="submenu4"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <Link to="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Product 2</span>
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li>
                    <Link
                      to="#teams1"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <span className="ms-1 d-none d-sm-inline"> Teams</span>{" "}
                      <i class="ri-arrow-down-s-line"></i>{" "}
                    </Link>
                    
                    <ul
                      className="collapse nav flex-column ms-5"
                      id="teams1"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <Link to="/Teams" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">TeamList</span>
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  
                   
                </ul>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="row">
     {post.slice(0, 10).map((post, index) => (
      <div className='col-lg-6 col-md-6 col-sm-12' key={post.id}>
      <div className='en_defintion_contant ar_defintion_contant'>
        <h5><span className='en_number_pass'>{index + 1}</span>{post.title}</h5>
        <p>{post.body}</p>
      </div>


</div>
))}
     </div> */}

    </div>
  );
}
