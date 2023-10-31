import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Privacypolicy() {
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
              <Link to="">Privacy & Usage Terms</Link>
            </li>
          </ul>
         </Container>
       </div>

       <section className='en_abo_section'>
      <Container>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='leagues_cont'>
              <h2>Privacy & Usage Terms</h2>
              <div className='privacy-usage'>
                <p>Welcome to letstalkftball.com, which will be referred to as "the site” or “site" in the below terms. </p>
                <p>We ask all site users to observe the following:</p>
                <ul className='letball'>
                    <li>All materials and information displayed or used in the site (for example, but not limited to) such as pictures, data, logos and advertisements are protected by
                         the intellectual property rights of the site or the aforementioned sites and trademark rights.</li>
                         <li>All information and materials displayed and published on the site are for personal, non-commercial use. It is not permissible to copy, publish, re-publish, produce, modify, download, store or distribute
                             these materials and information in any electronic or non-electronic way.</li>
                             <li>Any commercial use, copying, publication, republication, production, modification, download, storage or distribution in any electronic or non-electronic way requires prior permission
                                 from letstalkftball.com by communicating in the methods described in the site.</li>
                                 <li>It is permitted to refer to the site and mention the information in the site in or by commercial or non-commercial entities as long as statement 3 is compiled with.</li>
                                 <li>The use of the site or any of the information or materials in it is the responsibility of the user or users, and any damages resulting from the use of the site of whatever kind or cause are the responsibility of the user of the site.</li>
                                 <li>The site undertakes to protect the information and data of the website users. The site also pledges to protect the privacy of users using available website-development and management technology.</li>
                                 <li>The site discussions/comments sections and Cafes usage policy:</li>
                                 <ul className='infocation-site'>
                                    <li>Usage has to be limited to sports and/or football topics.</li>
                                    <li>The site reserves the right to block and revoke access privileges for anyone who abuse others with hate speech or raciest remarks.</li>
                                    <li>The site reserves the right to block and revoke access privileges for anyone who violates any of the site usage policy.</li>
                                    <li>The views and opinions expressed in the articles presented are those of the authors and do not necessarily reflect the official policy or position of the site. Publishing those articles in the web site does not constitute any form of endorsement.</li>
                                    <li>The views and opinions expressed in the comments by the visitors in the site are those of the authors and do not necessarily reflect the official policy or position of the site nor displaying it in the website constitute any form of endorsement.</li>
                                    <li>The site has the right to remove or republish any article presented in the site Cafes anytime in the futur.</li>
                                 </ul>

                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </Container>
     </section>





    </div>
  )
}
