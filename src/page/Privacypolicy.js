import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";
import { apiCall } from '../helper/RequestHandler';
import { GET_POLICY, REQUEST_TYPE } from '../helper/APIInfo';


export default function Privacypolicy() {
  const [leagueDecreption, setLeagueDecreption] = useState([]);
	const lang = Cookies.get('language')

  const getLeagueDetails=()=>{
	

		try{
			apiCall(GET_POLICY(lang).find,REQUEST_TYPE.GET).then((response)=>{
				console.log(response.response)
				setLeagueDecreption(response.response?.data?.body?.[lang])
			})

		}catch(error){
			console.log("data not ",error)
		}

	}



	useEffect(()=>{
		
		getLeagueDetails()
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
              
              {
										lang ==="en"? <Link to="/">Home</Link>:<Link to="/">سياسة الخصوصية والاستعمال</Link>
									}
            </li>
            <li>
            <i className="ri-arrow-right-s-line"></i>
            </li>
            <li>
              
              {
										lang ==="en"? <Link to="">Privacy & Usage Terms</Link>:<Link to="/">الرئيسية</Link>
									}
            </li>
          </ul>
         </Container>
       </div>

       <section className='en_abo_section'>
      <Container>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='en_leagues_cont'>
              
              {
                lang==="en"?<h2>Privacy & Usage Terms</h2>:<h2>سياسة الخصوصية والاستعمال</h2>
              }
              
              {
                lang==="en"?
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
              </div>:
              <ul className='letball'>
              <li>١ جميع المواد والمعلومات المعروضة او المستعملة في الموقع (على سبيل المثال لا الحصر) كالصور والبيانات والاعلانات والشعارات، محمية بحقوق الملكية الفكرية للموقع او المواقع الأخرة المذكور وحقوق العلامات التجارية.</li>

                   <li> كل المعلومات والمواد المعروضة والمنشورة في الموقع هي للاستخدام الشخصي غير التجاري ولايجوز نسخ او نشر او إعادة نشر او انتاج او تعديل او تحميل او تخزين او توزيع هذه المواد والمعلومات بأي طريقة الكترونية او غير الكترونية.</li>

                       <li> آي استخدام تجاري او نسخ او نشر او إعادة نشر او انتاج او تعديل او تحميل او تخزين او توزيع بأي طريقة الكترونية او غير الكترونية، يتطلب اذنا مسبقا من الموقع عن طريق التواصل بالطرق الموضحة في الموقع.</li>

                           <li>يسمح بالإشارة الى الموقع وذكر المعلومات الموجودة في الموقع في او بواسطة جهات تجارية او غير تجارية من غير مخالفة الفقرة .</li>
                          
                           <li> إن استخدام الموقع او أيا من المعلومات او المواد الموجودة فيه، هي على مسؤولية المستخدم واي اضرار تنتج عن الاستخدام أيا كان نوعها أو سببها، هي على مسؤولية المستخدم للموقع.</li>
                          
                           <li> يتعهد الموقع بالمحافظة على المعلومات والبيانات الخاصة لمستخدمي الموقع كما يتعهد الموقع بحماية خصوصية المستخدمين بالطرق المتبعة وفق ما تتيحه تقنية تطوير المواقع الالكترونية.</li>
                          
                           <li>سياسة الاستخدام المتعلقة بأقسام التعليق والنقاش والكافيه:</li>
                          
                           <ul className='infocation-site'>
                              <li> يجب أن يقتصر الاستخدام على موضوعات الرياضة و / أو كرة القدم.</li>
                              <li> يحتفظ الموقع بالحق في حظر امتيازات الوصول والاستعمال لأي شخص يسيء معاملة الآخرين بخطاب كراهية أو ملاحظات عنصرية.</li>
                              <li> الآراء او الافكار الواردة في المقالات المعروضة وتعليقات الزوار في الموقع هي آراء وافكار المؤلفين وزوار الموقع وهي ولا تعكس بالضرورة السياسة الرسمية أو موقف الموقع.</li>
                              <li> للموقع الحق في إزالة أو إعادة نشر أي مقال معروض في مقاهي الموقع في أي وقت في المستقبل.</li>
                              <li> لا يتحمل الموقع أية مسؤولية من أي نوع ناتجة عن أو متعلقة بالمقالات المعروضة في مقاهي الموقع.</li>
                           </ul>

          </ul>
              }
              
            </div>
          </div>
        </div>
      </Container>
     </section>





    </div>
  )
}
