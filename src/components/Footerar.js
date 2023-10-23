import React from 'react';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footerar() {
  return (
    <div>
    <section class="en_footer ar_footer">
        <Container>
           <div className='row'  dir="rtl">
           <div className='col-lg-3 col-lg-3 col-md-12 en_line'>
                <div className='en_footercontant ar_footercontant'>
                <ul className='en_footer_menu ar_footer_menu'>
                    <li><Link to="about">معلومات عنا</Link></li>
                    <li><Link to="contact">اتصل بنا</Link></li>
                    <li><Link to="">الاحكام و الخصوصية</Link></li>
                </ul>
                </div>
            </div>
            <div className='col-lg-3 col-lg-3 col-md-12 en_line ar_line'>
                <div className='en_footercontant ar_footercontant'>
                <ul className='en_footer_menu ar_footer_menu'>
                    
                    <li><Link to="cafe">مقهى</Link></li>
                </ul>
                </div>
            </div>
            <div className='col-lg-3 col-lg-3 col-md-12 en_line ar_line'>
                <div className='en_footercontantin ar_footercontantin'>
                    <p>ابقى على تواصل</p>
                    <ul className='en_media ar_media'>
                        <li>البريد الالكتروني: <Link to="mailto:support@letstalkftball.com">support@letstalkftball.com</Link></li>
                    </ul>
                    <ul className='en_media ar_media iconhover'>
                        <ul className='ar_media es_media enfooter'> تابعنا :
                    <li><Link to="https://www.facebook.com/profile.php?id=100065165853408" target='_blank'><i class="ri-facebook-fill"></i></Link></li>
                    <li><Link to="https://twitter.com/LetstalkftballA" target='_blank'><i class="ri-twitter-fill"></i></Link></li>
                    <li><Link to="https://www.instagram.com/letstalkftball_/" target='_blank'><i class="ri-instagram-line"></i></Link></li>

                </ul>
                    </ul>
                </div>
            </div>
            <div className='col-lg-3 col-lg-3 col-md-12 ar_line'>
            <div className='en_footercontantin ar_footercontantin'>
                    <p>الاشتراك في النشرة الأخبارية</p>
                    <ul className='en_media ar_media'>
                        <li>حدد الموضوعات وابقَ على اطلاع بآخر الأخبار والتحديثات</li>
                    </ul>
                    <div>
                   <div className='en_button_search_bar en_button_search_bar'>
                   <input className='search_bar_input' type="text" placeholder="البريد الالكتروني" />
                     <button className='button_search button_search_ar'>إرسال</button>
                   </div>
                    </div>
                </div>
            </div>
           </div>
        </Container>
       

    </section>
    <section className='last_to_footer'>
    <Container  >
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='last_footer' dir="rtl">
                        <p>حقوق النشر © 2020 Let's Talk <em>ft</em> Ball. | كل الحقوق محفوظة. | تصميم <Link to="https://dightinfotech.com/" target="_blank">dightinfotech</Link></p>
                    </div>
                </div>
            </div>
        </Container>

    </section>


    </div>
  )
}
