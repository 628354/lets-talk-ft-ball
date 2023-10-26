import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  { useState } from 'react';






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

  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };





  return (
    <div>
        <div  >
        <div className='es_topheader topheadero'>
        <Container>
        <div className='row ar_flex'>
            <div className='col-lg-6 col-md-6 col-6'>
                <div className='ar_icon'>
                    <Link to="/"> <img src={require('../img/earth-icon.png')} alt="earth" className="brand-rearth"/> العربية</Link>
                   
                    
                </div>
            </div>
            <div className='col-lg-6 col-md-6 col-6'>
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
            <Nav.Link className='me-3 ms-3' as={Link} to="/About">ABOUT US</Nav.Link>
            <Nav.Link className='en_leagues_nav me-3 ms-3'
          >
            Leagues
              <div className="en_dropdown-content">
                <div className='en_h_drop'>
                <ul className='en_drop_item'>
                  <li><Link to="PremierLeague"><span><img src={require('../img/premier-league-logo-vector.png')} alt="earth" className="logo-navd"/></span>PREMIER LEAGUE</Link></li>
                  <li><Link to="SerieA"><span><img src={require('../img/Serie_A_logo.jpg')} alt="earth" className="logo-navd"/></span>SERIE A</Link></li>
                  <li><Link to="Ligue1"><span><img src={require('../img/Ligue_1_Uber_Eats.png')} alt="earth" className="logo-navd"/></span>LIGUE 1</Link></li>
                  <li><Link to="LigaPortugal"><span><img src={require('../img/Liga Port.png')} alt="earth" className="logo-navd"/></span>LIGA PORTUGAL</Link></li>
                  <li><Link to="EgyptPL"><span><img src={require('../img/Egypet League cafe logo.jpg')} alt="earth" className="logo-navd"/></span>EGYPT PL</Link></li>
                  <li><Link to="BrazilSerieA"><span><img src={require('../img/Bra Serie_A.png')} alt="earth" className="logo-navd"/></span>BRAZIL SERIE A</Link></li>



                </ul>
                <ul className='en_drop_item'>
                <li><Link to="Laliga"><span><img src={require('../img/laliga-logo-plain.png')} alt="earth" className="logo-navd"/></span>LALIGA</Link></li>
                <li><Link to="Bundesliga"><span><img src={require('../img/Bundesliga-primary.gif')} alt="earth" className="logo-navd"/></span>BUNDESLIGA</Link></li>
                <li><Link to="NetherlandEredivisie"><span><img src={require('../img/Eredivisie.png')} alt="earth" className="logo-navd"/></span>EREDIVISIE</Link></li>
                <li><Link to="SaudiPro"><span><img src={require('../img/Roshn_Saud.png')} alt="earth" className="logo-navd"/></span>SAUDI PRO</Link></li>
                <li><Link to="BotolaPro"><span><img src={require('../img/BOTOLAinwi-134x136.png')} alt="earth" className="logo-navd"/></span>BOTOLA PRO</Link></li>


                </ul>
                </div>
              </div>
          </Nav.Link>


            <Nav.Link  className='me-3 ms-3' as={Link} to="/Cafe">Cafe</Nav.Link>
            <Nav.Link  className='me-3 ms-3' as={Link} to="/Definition">Definition </Nav.Link>
            <Nav.Link  className=' ms-3' as={Link} to="/Contact">Contact Us </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  

    </div>
    
  )
}
