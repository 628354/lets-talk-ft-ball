import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { apiCall } from '../helper/RequestHandler';
import { useLanguage } from '../languages/LanguageContext';
import {ABOUT_US, REQUEST_TYPE} from '../helper/APIInfo';
export default function About() {
  const [about,setAbout]=useState([]);
  //const { language } = useLanguage(); // Assuming useLanguage hook provides the current language
  const lang =  'ar';
  const data =[]
// const lang ="en"
  const getAboutData= async()=>{
    const res = await apiCall(ABOUT_US.findar, REQUEST_TYPE.GET);
    console.log(res.response.data.data);
    res.response.data.data?.map((item)=>{
      data.push(item[lang]);
    })
    console.log(data);
setAbout(data);
  }

useEffect(()=>{
getAboutData()
  },[lang])




  return (
    <div>
      <section className=' ar_hero_about'>
          <Container>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>

                </div>
            </div>
          </Container>
        </section>
       <div className=' ar_bread_crumb'>
      
         <Container>
         <ul className='ar_creat_nav'>
            
            <li>
              <Link to="/About">معلومات عنا</Link>
            </li>
            <li>
            <i className="ri-arrow-left-s-line"></i>
            </li>
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            
          </ul>
         </Container>
       </div>


       <section className='ar_abo_section'>
      <Container>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='ar_leagues_cont'>
              <h2>من نحن</h2>
              <div className='leagues_slider'  dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            
                {about?.map((item, index) => (
                    <div className={`row mb-5 ${index  % 2 === 0 ? 'ar_left_border' : 'ar_right_border'} `} key={index} id={item?._id}>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className={`${index  % 2 === 0 ? 'ar_about_contant' : 'ar_about_contant_right'} `}>
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

     <section className='ar_Our_section'>
     <Container>
     <div className='row'>
      <div className='col-lg-6 col-md-6 col-sm-12'>
        <div className='ar_our_contant px-4' dir="rtl">
          <h4>رؤيتنا</h4>
          <p>رؤيتنا هي أن نكون مزوداً لمعلومات وأدوات تحليل فريدة لكرة القدم</p>
          <div className='ar_our_vision'>
          <h4>مهمتنا</h4>
          <p>مهمتنا هي إنشاء موقع يقدم بيانات أداء وإحصائيات لبطولات كرة القدم بطريقة بسيطة، غنية بالمعلومات وسهلة الوصول إليها. يمكن للزوار استخدام هذه البيانات لفهم أداء الفرق ليس فقط في وقت محدد ولكن أيضًا للحصول على نظرة أعمق حول كيفية تطور اداء الفرق مع مرور الوقت. من خلال حساباتنا على وسائل التواصل الاجتماعي المدمجة في الموقع ومع قسم المقالات في الموقع (نسميه "المقهى")، نوفر منصة لزوارنا للمشاركة والتفاعل.</p>

          </div>
        </div>
        
      </div>
      <div className='col-lg-6 col-md-6 col-sm-12'>

      </div>
      
     </div>
     </Container>

     </section>

    </div>
  )
}
