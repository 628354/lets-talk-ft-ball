
import Menubar from '../dashboard/Menubar';
import { Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {FIND_ALL, REQUEST_TYPE,REMOVE_TEAM,LEAGUES} from '../helper/APIInfo';
import { apiCall } from '../helper/RequestHandler';

export default function Dashboard() {
  const [aboutData, setAboutData] = useState([]);
  const [teamsData, setTeamsData] = useState([]);


  const getLeague =async()=>{
    try{
      const response = await apiCall(LEAGUES.league,REQUEST_TYPE.GET)
      console.log(response.response.data.body);
      const aboutInfo = response.response.data.body
      setAboutData(aboutInfo);

    }catch(error){
      console.log("data",error);
    }
  
  }
  useEffect(() => {
    getLeague();
    // axios.get('https://phpstack-1140615-3967632.cloudwaysapps.com/backend/getleagues')
    // // axios.get('http://localhost:5000/getleagues')
    //    .then((response) => {
    //      const aboutInfo = response.data?.leaguedetails
    //      setAboutData(aboutInfo);

       
 
 
    //    })
    //    .catch((error) => {
    //      console.error('Error fetching data:', error);
    //    });
   }, []);
 console.log(aboutData?.length);
 
 const getTeams =async()=>{
  try{
    const response =await apiCall(FIND_ALL.find,REQUEST_TYPE.GET);
    console.log(response);
    const teamsInfo = response.response.data?.data.teamdetails;
      setTeamsData(response.response.data.data);
     // setItemId(teamsInfo._id);

  }catch(error){
    console.error('Error fetching data:', error);
  }
 
}

useEffect(()=>{
  getTeams()

},[])
  return (
    <div>
         <Menubar/>

         <div className='right-side-contant py-3'>
           <section className='min-section-one dashbord-page-out'>
           <Container fluid>
           <div className="col-lg-6 col-md-6 col-6">
                <div className="season-us">
                  <div className="season-link-part">
                    <h3>Dashboard</h3>
                    <ul className="season-link">
                      <li>
                        <Link>Home</Link>
                      </li>
                      <li>
                        <i className="ri-arrow-right-s-line"></i>
                      </li>
                      <li>
                        <Link>Dashboard</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
           </Container>
           </section>
           <hr/>
           <section className='box-section-one'>
            <Container fluid>
              <Row>
                <div className='col-lg-3 col-md-3 col-sm-12'>
                  <div className='bord-main'>
                    <div className='bord-main-box'>
                    <div className='trophy-num'>
                        <p>TOTAL LEAGUES</p>
                      </div>
                      <div className='box-trop'>
                      <span><i className="fa fa-trophy" aria-hidden="true"></i></span>
                      <p>{aboutData?.length}</p>
                      </div>
                      <div className='trophy-num-open'>
                        <Link to='/Leagues'>View more...</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-lg-3 col-md-3 col-sm-12'>
                  <div className='bord-main'>
                    <div className='bord-main-box'>
                    <div className='trophy-num'>
                        <p>TOTAL TEAMS</p>
                      </div>
                      <div className='box-trop'>
                      <span><i className="fa fa-futbol-o" aria-hidden="true"></i></span>
                      <p>{teamsData?.length}</p>
                      </div>
                      <div className='trophy-num-open'>
                        <Link to='/Teams'>View more...</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12'>
                  <div className='bord-main'>
                    <div className='bord-main-box'>
                    <div className='trophy-num'>
                        <p>TOTAL CUSTOMERS</p>
                      </div>
                      <div className='box-trop'>
                      <span><i class="fa fa-user" aria-hidden="true"></i></span>
                      <p>0</p>
                      </div>
                      <div className='trophy-num-open'>
                        <Link to=''>View more...</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12'>
                  <div className='bord-main'>
                    <div className='bord-main-box'>
                    <div className='trophy-num'>
                        <p>PEOPLE ONLINE</p>
                      </div>
                      <div className='box-trop'>
                      <span><i className="fa fa-users" aria-hidden="true"></i></span>
                      <p>11</p>
                      </div>
                      <div className='trophy-num-open'>
                        <Link to=''>View more...</Link>
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