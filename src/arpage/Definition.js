import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { apiCall } from '../helper/RequestHandler';

import {DEFINATION, REQUEST_TYPE} from '../helper/APIInfo';

export default function Definition() {
  const [defination,setDefination]=useState([]);
  const lang="ar"
  const data =[]
    const getDefination= async()=>{
      const res = await apiCall(DEFINATION.findar, REQUEST_TYPE.GET);
      console.log(res.response?.data?.body);
      res.response?.data?.body?.map((item)=>{
        console.log(item[lang]);
        data.push(item[lang])
       // setDefination(item.definition);
      })
    setDefination(data)
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
               <Link to="/DEFINITION">التعريف</Link>
             </li>
             <li>
             <i className="ri-arrow-left-s-line"></i>
             </li>
             
             <li>
               <Link to="/">الرئيسية</Link>
             </li>
           </ul>
         </Container>

         <section className='en_definition_section ar_definition_section' >
         <Container>
         <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='ar_leagues_cont'>
              <h2>التعريف</h2>
            </div>
              <div className={`${lang ==="en"? 'en_defintion_r':'ar_defintion_r'}`}>
                <div className={`${lang ==="en"? 'row':'row ar_section-reverse'}`}>
                 {defination?.map((definition, index) => (
                      <div className='col-lg-6 col-md-6 col-sm-12' key={index}>
                        <div className=' ar_defintion_contant'>
                          <h5 dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                            <span className='ar_number_pass'>{index +1}</span>
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
