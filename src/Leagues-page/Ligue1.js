import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PremierLeaguetable from '../Leagues-components/PremierLeaguetable';
import Iframesecttion from '../Leagues-components/Iframesecttion';

export default function Ligue1() {
  return (
    <div>
        <section className='en_hero_about en_hero_about'>
          <Container>
            <Row>
                <div className='col-lg-12 col-md-12 col-sm-12'>

                </div>
            </Row>
          </Container>
         </section>
         <div className='en_bread_crumb ar_bread_crumb'>
            <Container>
            <ul className='en_creat_nav ar_creat_nav'>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <i className="ri-arrow-right-s-line"></i>
                </li>
                <li>
                <Link to="/Ligue1">Ligue1</Link>
                </li>
            </ul>
            
            </Container>
         </div>
         <section className='en-premier ar-premier'>
            <Container>
                <Row>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div className='en-premier-contant ar-premier-contant'>
                        <div className='leagues_cont'>
                            <h2>Ligue 1</h2>
                        </div>
                      </div>
                    </div>
                    <div className='en_main_leagues one '>
                        <Row >
                        <div className='col-lg-2 col-md-2 col-sm-12 m-auto'>
                                <div className='en-leagues-img'>
                                 <img src={require('../img/Ligue_1_Uber_Eats.png')} alt="earth" className="img-premier-press"/>

                                </div>
                            </div>
                            <div className='col-lg-10 col-md-10 col-sm-12'>
                                <div className='en-leagues-text ar-leagues-text'>
                                    <p>Below is the league standings table, teams ranking graphs and league overall stats at the bottom
                                         of the table. The overall stats are meant to give you an overview of the league entertainment level
                                          (goals scored per game and % win) and to see how competitive is the league (Points Standard Deviation). 
                                          If you like to see a specific season, use the "season" pull-down menu. Click on any team’s name to go to
                                           the team specific page to see performance trends over the season. You can compare any two teams, or same 
                                           team from different seasons, from any of the leagues or seasons available in the website. Click “Compare”, 
                                           select Season, League and Team. The graphs are interactive. You can adjust scale and hover-over data points
                                            to get specific numbers. If you need help with definition of terms used, click on “Definition” in the top 
                                            menu. Have fun and do not forget to visit our social media accounts (links in the top bar). Note that data
                                             is updated only after games completion and number of games played is not used in table sorting since its 
                                             impact is just temporary. </p>
                                    
                                </div>
                                
                            </div>
                        </Row>
                    </div>
                </Row>
                
            </Container>
         </section>
         <section className='league_table'>
          <Container>
            <Row>
              <div className='en_table_text ar_table_text'>
                <h6>Scroll Down To See Charts</h6>
              </div>
              <div className='en_main_table ar_main_table'>
                <PremierLeaguetable/>
                
              </div>
            </Row>
          </Container>
         </section>
         <Iframesecttion/>
    </div>
  )
}
