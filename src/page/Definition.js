import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { apiCall } from '../helper/RequestHandler';

import {DEFINATION, REQUEST_TYPE} from '../helper/APIInfo';
export default function Definition() {
  
  const [defination,setDefination]=useState([]);

  const getDefination= async()=>{
    const res = await apiCall(DEFINATION.find, REQUEST_TYPE.GET);
    console.log(res.response.data?.body);
    res.response.data?.body.map((item)=>{
      console.log(item.definition);
      setDefination(item.definition);
    })
  
  }

  useEffect(()=>{
    getDefination()
  },[])


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
              {defination.map((definition, index) => (
                    <div className='col-lg-6 col-md-6 col-sm-12' key={index}>
                      <div className='en_defintion_contant ar_defintion_contant'>
                        <h5>
                          <span className='en_number_pass'>{index +1}</span>
                          {definition.type}
                        </h5>
                        <p>{definition.content}</p>
                      </div>
                    </div>
                  ))}
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
