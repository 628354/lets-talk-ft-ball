import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function About() {
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


       <section className='en_abo_section'>
      <Container>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='leagues_cont_ar'>
              <h2>من نحن</h2>
              <div className='leagues_slider'>
                <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 en_right_border'>
                    <div className='ar_about_img'>
                    <img src={require('../img/about-img.jpg')} alt="earth" className="about"/>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12 en_left_border m-auto'>
                    <div className='ar_about_contant ' >
                      <h5 dir="rtl">نحن فريق صغير مغرم بكرة القدم. لقد أجرينا العديد من المناقشات حول أداء فرقنا المفضلة ولكن لم نتمكن من الوصول إلى بيانات أداء قوية وسهلة الاستخدام. لقد قررنا أن نفعل شيئًا حيال ذلك ، وقد أدى ذلك لانشاء موقع Lets Talk ft Ball او يلا نسولف كورة</h5>
                    </div>
                  </div>
                  
                </div>
               

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
        <div className='en_our_contant ar_our_contant px-4' dir="rtl">
          <h4>رؤيتنا</h4>
          <p>رؤيتنا هي أن نكون مزوداً لمعلومات وأدوات تحليل فريدة لكرة القدم</p>
          <div className='en_our_vision'>
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
