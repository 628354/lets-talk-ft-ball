import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Definition() {
  return (
    <div>
      <section className='en_hero_about en_hero_about'>
          <Container>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>

                </div>
            </div>
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
               <Link to="/DEFINITION">DEFINITION</Link>
             </li>
           </ul>
         </Container>

         <section className='en_definition_section ar_definition_section'>
         <Container>
         <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='leagues_cont'>
              <h2>Definition</h2>
            </div>
            <div className='en_defintion_r ar_defintion_r'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='en_defintion_contant ar_defintion_contant'>
                    <h5><span className='en_number_pass'>1</span>Points Gaining Rate</h5>
                    <p>How many points out of the max 3 points the team is able to gain over the season per game played. The goal is to have a ratio 
                      as close to 3 as possible throughout the season.</p>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='en_defintion_contant ar_defintion_contant'>
                    <h5><span className='en_number_pass'>2</span>Goals Conceded (GC)</h5>
                    <p>How many goals the team is conceding throughout the season</p>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='en_defintion_contant ar_defintion_contant'>
                    <h5><span className='en_number_pass'>3</span>Goals Conceding Rate (GC/G) (GC)</h5>
                    <p>How many goals the team is conceding throughout the season per game</p>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='en_defintion_contant ar_defintion_contant'>
                    <h5><span className='en_number_pass'>4</span>Goals Scored (GS)</h5>
                    <p>How many goals the team has scored throughout the season.</p>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='en_defintion_contant ar_defintion_contant'>
                    <h5><span className='en_number_pass'>5</span>Goals Scoring Rate (GS/G)</h5>
                    <p>How many goals the team is scoring throughout the season per game</p>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='en_defintion_contant ar_defintion_contant'>
                    <h5><span className='en_number_pass'>6</span>Points Standard Deviation (Stdev)</h5>
                    <p>Statistical indicator of the points spread relative to the average. The smaller the number the more competitive the league is.</p>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='en_defintion_contant ar_defintion_contant'>
                    <h5><span className='en_number_pass'>7</span>Goals Scored to Goals Conceded ratio (GS/GC)</h5>
                    <p>This ratio is meant to show how balanced is the team in terms of its offensive power vs its defensive strength. ‬See FPL definition‪ below‬.</p>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='en_defintion_contant ar_defintion_contant'>
                    <h5><span className='en_number_pass'>8</span>Points Gap (Pgap)</h5>
                    <p> This is the gape between any team and the top team in the league table. The idea behind it is to see the spread of performance across the league teams.</p>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='en_defintion_contant ar_defintion_contant'>
                    <h5><span className='en_number_pass'>10</span>Football Poverty Line (FPL)</h5>
                    <p>FPL is based on the ratio of GS to GC. Top teams will score more than they concede and will have a ratio higher than one. Mediocre teams will concede close to what they score, and their ratio will be around one. Low performing teams will concede more than they score and their ratio will be below one. Based on that, FPL is defined as the ratio of GS to GC and it is equal to one.‬</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
         </Container>
         </section>
   </div>
    </div>
  )
}
