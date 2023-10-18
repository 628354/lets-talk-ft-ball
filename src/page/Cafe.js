import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Blog from '../components/Blog';
import sdata from './Blog_date';
console.log(sdata);
export default function Cafe() {
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
           <Link to="/Cafe">CAFE</Link>
         </li>
       </ul>
      </Container>
    </div>
    <section className='en_abo_section'>
      <Container>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='leagues_cont'>
              <h2>Cafe</h2>
              <div className='en_cafe_contant'>
                <p><strong>Join the discussion or follow us on our SM accounts</strong></p>
                <p>Lets Talk ft Ball Cafes are the place were interested individuals can have their own page to post their reviews or comments. 
                  You can dedicate your page to a specific league or a specific club or cover any of the leagues/clubs. The leagues and clubs 
                  performance data and trends provided in Lets Talk ft
                   Ball will help you generate very informative reviews and comments for others to read and comment on.</p>
              </div>
             
            </div>
          </div>
        </div>
        <div className='en_blog_main ar_blog_main'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <Blog imgsrc={sdata[0].imgsrc}
                title={sdata[0].title}
                sname={sdata[0].sname}
                sparagraph={sdata[0].sparagraph}
                link={sdata[0].link}/>
                
            </div>
          </div>
        </div>
      </Container>
     </section>


    </div>
  )
}
