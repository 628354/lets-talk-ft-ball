import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Iframesecttion from '../Leagues-components/Iframesecttion';


export default function Teamdetailsl() {
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
                <Link to="/PremierLeague">Premier League</Link>
                </li>
                <li>
                <i className="ri-arrow-right-s-line"></i>
                </li>
                <li>
                <Link to="/PremierLeague">LIVERPOOL</Link>
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
                            <h2>Team Details</h2>
                        </div>
                      </div>
                    </div>
                    <div className='en_main_leagues one '>
                        <Row >
                        <div className='col-lg-2 col-md-2 col-sm-12 m-auto imageline'>
                                <div className='en-leagues-img'>
                                 <img src={require('../img/Liverpool.1.png')} alt="earth" className="img-premier-press"/>

                                </div>
                            </div>
                            <div className='col-lg-10 col-md-10 col-sm-12'>
                                <div className='en-leagues-text ar-leagues-text ms-4'>
                                  <h2>Liverpool</h2>
                                    <p>Below is your selected team’s performance trends. Here you can see how a team performance is changing over the season. You can compare any 
                                       two teams, or same team from different seasons, side by side. To do that click the “Compare” button and select the Season, League and Team. 
                                       The graphs are interactive. You can adjust scale and hover-over data points to get specific numbers.
                                       If you need help with terms used, click on “Definitions” in the top menu. Have fun and remember to visit the discussions section below. </p>

                                       <div className='livepool'>
                                       <div class="inside-filter"> <span>Filter By Season </span>
                                          <div class="dropdown_filter">
                                              <button class="dropbtn"> <span>2023-24 </span> <span><i class="ri-arrow-down-s-line"></i></span> </button>
                                              <div class="dropdown-content">
                                              <Link to="">2023-24</Link>
                                              <Link to="">2022-23</Link>
                                              <Link to="">2021-22</Link>
                                              <Link to="">2020-21</Link>
                                              <Link to="">2019-20</Link>
                                              <Link to="">2018-19</Link>
                                              <Link to="">2017-18</Link>
                                              <Link to="">2016-17</Link>
                                              </div>
                                              </div>
                                          </div>
                                          <div className='button_live'>
                                          <div class="team-btn"> <Link to="">Compare Now</Link> </div>
                                          </div>
                                       </div>
                                    
                                </div>
                                
                            </div>
                        </Row>
                    </div>
                </Row>
                
            </Container>
         </section>
         <section className='table-live'>
         <Container>
         <div className='en-table-live ar-table-live'>
        <Table  className='aline_tablel'>
      <thead>
        <tr>
          <th>TEAM</th>
          <th>GAMES</th>
          <th>WIN</th>
          <th>DRAW</th>
          <th>LOSE</th>
          <th>GOALS SCORED</th>
          <th>GOALS CONCEDED</th>
          <th>POINTS</th>
          <th>POINT GAP</th>
          <th>GS-GC</th>
          <th>WIN%</th>
        </tr>
      </thead>
      <tbody className='team_poine'>
        <tr>
          <td className='imagelive_city'><span className='overimage'><img src={require('../img/Liverpool.1.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Tottenham</span></td>
          <td>9</td>
          <td>7</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
          <td>8</td>
          <td>23</td>
          <td>0</td>
          <td>12</td>
          <td>85.19%</td>

        </tr>
        
     
        
       
        
        
        
        
        
       
        
        
        
       
       
      </tbody>
    </Table>

    

        </div>
         </Container>
         </section>

         <Iframesecttion/>

    </div>
  )
}
