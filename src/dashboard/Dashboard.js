import React from 'react';
import '../css/Dashboard.css';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


export default function Dashboard() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div>
            <section className='navheader'>
                <Container fluid>
                    <Row>
                        <div className='col-lg-6 col-md-6 col-6'>
                            <div className='header_text_sid'>
                                <h3>letstalkftball</h3>
                            </div>

                            <div className='col-lg-6 col-md-6 col-6'>
                                <div className='navmenu_login'>
                                    <Link to="/adminLogin">Login</Link> {/* Use the Link component to navigate to the login route */}
                                </div>
                            </div>  
                        </div>
                    </Row>
                </Container>
            </section>
            <section className='navslide'>
                <div className="container-fluid">
                    <div className="row flex-nowrap">
                        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start menuitem_s" id="menu">
                                    <li className="nav-item">
                                        <Link to="#" className="nav-link align-middle px-0">
                                            <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                            <i class="ri-article-line"></i>  <span className="ms-1 d-none d-sm-inline">Page</span><i className="ri-arrow-down-s-line"></i> </Link>
                                        <ul className="collapse nav flex-column ms-5" id="submenu2" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <Link to="#" className="nav-link px-0"> <span className="d-none d-sm-inline">About us</span></Link>
                                            </li>
                                            <li className="w-100">
                                            <Link to="/League">League</Link> 

                                            </li>
                                            <li>
                                                <Link to="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Cafe</span></Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Definition </span></Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Contact Us </span></Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                            <span className="ms-1 d-none d-sm-inline">Products</span> <i class="ri-arrow-down-s-line"></i>  </Link>
                                        <ul className="collapse nav flex-column ms-5" id="submenu3" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <Link to="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product 1</span></Link>
                                            </li>

                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#" className="nav-link px-0 align-middle">
                                            <span className="ms-1 d-none d-sm-inline">Customers</span></Link>
                                    </li>
                                    <li>
                                        <Link to="#submenu4" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                            <span className="ms-1 d-none d-sm-inline">Products</span> <i class="ri-arrow-down-s-line"></i>  </Link>
                                        <ul className="collapse nav flex-column ms-5" id="submenu4" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <Link to="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product 2</span></Link>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                                <hr />

                            </div>
                        </div>
                        <div className="col py-3">
                            Content area...
                        </div>
                    </div>
                </div>
            </section>






        </div>
    )
}
