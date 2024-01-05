import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Blog from '../components/Blog';
import sdata from '../arpage/Blog_date_ar';
import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from "react";
import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, GET_CAFE} from "../helper/APIInfo";

export default function Cafe() {
  const [blogData, setBlogData] = useState([]);
const [blogDetails,setBlogDetails]=useState([])
	const getCafe =async()=>{
		const lang ='ar'
		const data =[]
		const data1 =[]
		
			const response = await apiCall(GET_CAFE.cafear,REQUEST_TYPE.GET
			);
			//console.log(response.response?.data?.data);
			response.response?.data?.body?.map((item)=>{
				//console.log(item[lang]);
				
				data.push(item[lang])
			})
			
				data.map((items)=>{
					//console.log(items?.cafecontent);
					return items?.cafecontent.map((item)=>{
						console.log(item);
						setBlogData(item)
					})
				});
				//console.log(data1);
				
				setBlogDetails(data)
			// console.log(response)
			//setBlogData(data1)
			
		};
		
		console.log(blogData);

	useEffect(() => {
		getCafe()
	}, []);
	console.log(blogData);

  return (
    <div>
    <section className='ar_hero_about'>
        <Container>
          <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12'>

              </div>
          </div>
        </Container>
      </section>
      <div className=' ar_bread_crumb'>
        <Container>
        <ul className=' ar_creat_nav'>
             <li>
              <Link to="/Cafe">مقهى</Link>
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
          <div className='ar_leagues_cont'>
            <h2>مقهى</h2>
            <div className='en_cafe_contant'>
              <p><strong>انضم الى المناقشة او تابعنا على قنوات السوشال ميديا</strong></p>
              <p>المقهى هو المكان الذي يمكن للمهتمين أن يكون لديهم صفحتهم الخاصة لنشر تعليقاتهم. يمكنك تخصيص صفحتك لدوري معين أو نادي معين أو تغطية أي من البطولات / الأندية. ستساعدك بيانات واتجاهات أداء الدوريات والأندية المتوفرة في الموقع على كتابة مقالات غنية ودقيقة للآخرين لقراءتها والتعليق عليها </p>
            </div>
           
          </div>
        </div>
      </div>
      <div className='en_blog_main ar_blog_main'>
        <div className='row' dir="rtl">
        {blogDetails?.map((data) => {
								console.log(data)
								return (
									<div className="col-lg-6 col-md-6 col-sm-12 w-50 mb-3	 ">
										<Blog  blogDetails={data}  blogData={blogData} />
									</div>
								 );
							})} 
        
          </div>
        
       
      </div>
      <div className='en_pagintion ar_pagintion'>
      <Pagination>
      <Pagination.First />
    <Pagination.Prev />
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Next />
    <Pagination.Last />
  </Pagination>
      </div>
      
    </Container>
   </section>



  </div>
  )
}
