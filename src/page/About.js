import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { apiCall } from '../helper/RequestHandler';

import {ABOUT_US, REQUEST_TYPE} from '../helper/APIInfo';
//import { useLanguage } from '../languages/LanguageContext';
export default function About() {

  const [about,setAbout]=useState([]);
  //const { language } = useLanguage(); // Assuming useLanguage hook provides the current language
  const lang ='en';
  const data =[]
// const lang ="en"
  const getAboutData= async()=>{
    try {
      const res = await apiCall(ABOUT_US.finden, REQUEST_TYPE.GET);
      console.log(res);
      res.response.data?.data?.map((item)=>{
        data.push(item[lang]);
      })
     // console.log(data);
  setAbout(data);
    } catch (error) {
      console.log("error",error);
    }
  
  }

useEffect(()=>{
getAboutData()
  },[lang])




  return (

    <div>
      <section className='en_hero_about '>
          <Container>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>

                </div>
            </div>
          </Container>
        </section>
       <div className='en_bread_crumb '>
      
         <Container>
         <ul className='en_creat_nav'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <i className="ri-arrow-right-s-line"></i>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
         </Container>
       </div>


       <section className='en_abo_section'>
      <Container>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='leagues_cont'>
              <h2>About Us</h2>
              <div className='leagues_slider'>
            
                {about?.map((item, index) => (
                    <div className={`row mb-5 ${index  % 2 === 0 ? 'en_left_border' : 'en_right_border'} `} key={index} id={item?._id}>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className={`${index  % 2 === 0 ? 'en_about_contant' : 'en_about_contant_right'} `}>
                          <h5>{item?.aboutText}</h5>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className='en_about_img'>
                          <img src={require('../img/about-img.jpg')} alt="earth" className="about" />
                        </div>
                      </div>
                    </div>
                  ))}

              </div>
            </div>
          </div>
        </div>
      </Container>
     </section>

     {/* <section className='en_Our_section'>
     <Container>
     <div className='row'>
      <div className='col-lg-5 col-md-12 col-sm-12'>

      </div>
      <div className='col-lg-7 col-md-12 col-sm-12'>
        <div className='en_our_contant ar_our_contant'>
           <h4>Our Vision</h4>
           <p>Our Vision is to be football’s social media preferred platform. </p>
          <div className='en_our_vision'>
            <h4>Our Vision</h4>
            <p>Our Mission is to create a website that presents top football leagues high level performance data in simple,
             informative and easy way to access. Visitors can use this data to understand teams performance not just at 
             specific point in time but also to have an insight into how teams are developing overtime using the performance 
             trends. With our social media accounts integrated into the website and with the articles section of the website
             (we call it “Cafe”) we provide a platform for our visitors to engage and share.</p>
             
          </div>
        </div>

      </div>
     </div>
     </Container>

     </section> */}

    </div>

  )
}
