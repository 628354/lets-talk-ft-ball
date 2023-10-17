import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';






export default function Header() {
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.topheader');
    const scrollY = window.scrollY;
  
    if (scrollY > 0) {
      header.classList.add('sticky-header');
    } else {
      header.classList.remove('sticky-header');
    }
  });





  return (
    <div>
        <div  >
        <div className='es_topheader topheadero'>
        <Container>
        <div className='row ar_flex'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
                <div className='ar_icon'>
                    <Link to="/"> <img src={require('../img/earth-icon.png')} alt="earth" className="brand-rearth"/> العربية</Link>
                   
                    
                </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6'>
                <div className='artest estest'>
                    <ul className='armedia es_media iconhover'>
                        <li><Link to="https://www.facebook.com/profile.php?id=100065165853408" target='_blank'><i class="ri-facebook-fill"></i></Link></li>
                        <li><Link to="https://twitter.com/LetstalkftballA" target='_blank'><i class="ri-twitter-fill"></i></Link></li>
                        <li><Link to="https://www.instagram.com/letstalkftball_/" target='_blank'><i class="ri-instagram-line"></i></Link></li>

                    </ul>
                </div>
            </div>
            
        </div>
      </Container>
        </div>
        </div>
           <Navbar sticky="top" expand="lg" className="bg-body-tertiary topheader">
      <Container>
        <Navbar.Brand><Link to="/"><img src={require('../img/ft-logo.png')} alt="earth" className="logo-rearth"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto esmenuitem armenuitem">
            <Nav.Link as={Link} to="/About">ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/Leagues">Leagues</Nav.Link>
            
            <Nav.Link as={Link} to="/Cafe">Cafe</Nav.Link>
            <Nav.Link as={Link} to="/Definition">Definition </Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact Us </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  

    </div>
    
  )
}
